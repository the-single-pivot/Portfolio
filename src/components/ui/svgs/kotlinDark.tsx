import type { SVGProps } from "react";

const KotlinDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#7F52FF">
      <polygon points="0,256 128,128 0,0" />
      <polygon points="128,128 256,0 256,256" />
    </g>
  </svg>
);

export { KotlinDark };
