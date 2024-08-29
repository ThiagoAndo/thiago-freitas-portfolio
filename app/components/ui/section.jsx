import { forwardRef } from "react";

const PageSection = forwardRef(function PageSection(
  { children, id, tailwind, stl },
  ref
) {
  let thisStyle;
  if (tailwind) {
    thisStyle = tailwind;
  } else {
    thisStyle = "relative z-50 md:border-t md:border-[#25213b] my-12 lg:my-24";
  }
  return (
    <section style={stl} ref={ref} className={thisStyle} id={id}>
      {children}
    </section>
  );
});
export default PageSection;
