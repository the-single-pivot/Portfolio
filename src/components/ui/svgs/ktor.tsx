import type { SVGProps } from "react";

const Ktor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#F6821F"
      d="M128 44L52 76v104l76 32 76-32V76L128 44zm0 20l56 24v88l-56 24-56-24V88l56-24z"
    />
    <path
      fill="#F6821F"
      d="M108 100h12v56h-12zm28 0l24 28-24 28h-12l24-28-24-28h12z"
    />
  </svg>
);

export { Ktor };
