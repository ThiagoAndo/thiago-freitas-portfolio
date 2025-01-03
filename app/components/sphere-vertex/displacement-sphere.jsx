"use client";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Transition } from "../transition";
import { useReducedMotion, useSpring } from "framer-motion";
import { useInViewport } from "@/app/hooks/useInViewport";
import { useWindowSize } from "@/app/hooks/useWindowSize";
import { startTransition, useEffect, useRef, useState } from "react";
import {
  AmbientLight,
  DirectionalLight,
  LinearSRGBColorSpace,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  UniformsUtils,
  Vector2,
  WebGLRenderer,
} from "three";
import {
  cleanRenderer,
  cleanScene,
  throttle,
  media,
  removeLights,
} from "@/app/utils/three";
import fragmentShader from "raw-loader!glslify-loader!./displacement-sphere-fragment.glsl";
import vertexShader from "raw-loader!glslify-loader!./displacement-sphere-vertex.glsl?raw";
import styles from "./displacement-sphere.module.css";

const springConfig = {
  stiffness: 30,
  damping: 20,
  mass: 2,
};

export const DisplacementSphere = (props) => {
  const [isVis, setIsVis] = useState(false);
  const { scrollY } = useScroll();
  const navOpc = useTransform(
    scrollY,
    [0, 1000, 1600,2300],

    ["1", "0","0","1"]
  );

  const lights = useRef();
  const start = useRef(Date.now());
  const canvasRef = useRef();
  const mouse = useRef();
  const renderer = useRef();
  const camera = useRef();
  const scene = useRef();
  const uniforms = useRef();
  const material = useRef();
  const geometry = useRef();
  const sphere = useRef();
  const reduceMotion = useReducedMotion();
  const isInViewport = useInViewport(canvasRef);
  const windowSize = useWindowSize();
  const rotationX = useSpring(0, springConfig);
  const rotationY = useSpring(0, springConfig);
  useEffect(() => {
    const time = setTimeout(() => {
      setIsVis(true);
    }, 3000);

    return () => clearTimeout(time);
  }, []);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    mouse.current = new Vector2(0.8, 0.5);
    renderer.current = new WebGLRenderer({
      canvas: canvasRef.current,
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
      failIfMajorPerformanceCaveat: true,
    });
    renderer.current.setSize(innerWidth, innerHeight);
    renderer.current.setPixelRatio(1);
    renderer.current.outputColorSpace = LinearSRGBColorSpace;

    camera.current = new PerspectiveCamera(
      54,
      innerWidth / innerHeight,
      0.1,
      100
    );
    camera.current.position.z = 52;

    scene.current = new Scene();

    material.current = new MeshPhongMaterial();
    material.current.onBeforeCompile = (shader) => {
      uniforms.current = UniformsUtils.merge([
        shader.uniforms,
        { time: { type: "f", value: 0 } },
      ]);

      shader.uniforms = uniforms.current;
      shader.vertexShader = vertexShader;
      shader.fragmentShader = fragmentShader;
    };

    startTransition(() => {
      geometry.current = new SphereGeometry(32, 128, 128);
      sphere.current = new Mesh(geometry.current, material.current);
      sphere.current.position.z = 0;
      sphere.current.modifier = Math.random();
      scene.current.add(sphere.current);
    });

    return () => {
      cleanScene(scene.current);
      cleanRenderer(renderer.current);
    };
  }, [isVis]);

  useEffect(() => {
    const { width, height } = windowSize;

    const adjustedHeight = height + height * 0.3;
    renderer.current.setSize(width, adjustedHeight);
    camera.current.aspect = width / adjustedHeight;
    camera.current.updateProjectionMatrix();

    // Render a single frame on resize when not animating
    if (reduceMotion) {
      renderer.current.render(scene.current, camera.current);
    }

    if (width <= media.mobile) {
      sphere.current.position.x = 14;
      sphere.current.position.y = 10;
    } else if (width <= media.tablet) {
      sphere.current.position.x = 18;
      sphere.current.position.y = 14;
    } else {
      sphere.current.position.x = 22;
      sphere.current.position.y = 16;
    }
  }, [reduceMotion, windowSize, isVis]);

  useEffect(() => {
    const dirLight = new DirectionalLight(0xffffff, 2.0);
    const ambientLight = new AmbientLight(0xffffff, 0.4);

    dirLight.position.z = 200;
    dirLight.position.x = 100;
    dirLight.position.y = 100;

    lights.current = [dirLight, ambientLight];
    lights.current.forEach((light) => scene.current.add(light));

    return () => {
      removeLights(lights.current);
    };
  }, [isVis]);

  useEffect(() => {
    const onMouseMove = throttle((event) => {
      const position = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      };

      rotationX.set(position.y / 2);
      rotationY.set(position.x / 2);
    }, 100);

    if (!reduceMotion && isInViewport) {
      window.addEventListener("mousemove", onMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY, isVis]);

  useEffect(() => {
    let animation;

    const animate = () => {
      animation = requestAnimationFrame(animate);

      if (uniforms.current !== undefined) {
        uniforms.current.time.value = 0.00005 * (Date.now() - start.current);
      }

      sphere.current.rotation.z += 0.001;
      sphere.current.rotation.x = rotationX.get();
      sphere.current.rotation.y = rotationY.get();

      renderer.current.render(scene.current, camera.current);
    };

    if (!reduceMotion && isInViewport) {
      animate();
    } else {
      renderer.current.render(scene.current, camera.current);
    }

    return () => {
      cancelAnimationFrame(animation);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY, isVis]);

  return (
    <AnimatePresence>
      {isVis && (
        <Transition in timeout={3000} nodeRef={canvasRef}>
          {({ visible, nodeRef }) => (
            <motion.canvas
              style={{
                opacity: navOpc,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              aria-hidden
              className={styles.canvas}
              data-visible={visible}
              ref={nodeRef}
              {...props}
            />
          )}
        </Transition>
      )}
    </AnimatePresence>
  );
};
