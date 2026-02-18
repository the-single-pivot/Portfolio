import type { SVGProps } from "react";

const KotlinLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="kotlin-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7F52FF" />
        <stop offset="50%" stopColor="#C811E2" />
        <stop offset="100%" stopColor="#E44857" />
      </linearGradient>
    </defs>
    <polygon fill="url(#kotlin-gradient)" points="0,256 128,128 0,0" />
    <polygon fill="url(#kotlin-gradient)" points="128,128 256,0 256,256" />
  </svg>
);

export { KotlinLight };
