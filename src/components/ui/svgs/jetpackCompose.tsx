import type { SVGProps } from "react";

const JetpackCompose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#4285F4"
      d="M128 40c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 160c-39.7 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72-32.3 72-72 72z"
    />
    <path
      fill="#4285F4"
      d="M168 128H88c-4.4 0-8 3.6-8 8s3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-40 40c-4.4 0-8-3.6-8-8V88c0-4.4 3.6-8 8-8s8 3.6 8 8v72c0 4.4-3.6 8-8 8z"
    />
  </svg>
);

export { JetpackCompose };
