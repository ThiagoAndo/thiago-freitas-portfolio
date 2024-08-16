import "./styles.css";
import styled from "styled-components/macro";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Item = styled(motion.div)`
  height: 100px;
  width: 100px;
  background: ${(props) => props.background};
  border-radius: 20px;
  margin: 1rem 0;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 20%);
`;

const data = [
  {
    id: 1,
    background: `cadetblue`,
  },
  {
    id: 2,
    background: `rebeccapurple`,
  },
  {
    id: 3,
    background: `pink`,
  },
];

const frameVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 2,
      staggerChildren: 0.5,
      ease: [0.02, 0.6, -0.01, 0.91],
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      ease: [0.02, 0.6, -0.01, 0.91],
    },
  },
};

export default function App() {
  return (
    <Wrapper variants={frameVariants} initial="hidden" animate="visible">
      {data.map((item) => (
        <Item
          variants={itemVariants}
          key={`item-${item.id}`}
          background={item.background}
        />
      ))}
    </Wrapper>
  );
}
