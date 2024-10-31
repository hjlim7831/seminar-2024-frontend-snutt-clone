import type { SVGProps } from 'react';

export const IcUserFilled = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={props.className}
      width="20"
      height="20"
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>user-filled</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="icon"
          fill="currentColor"
          transform="translate(85.333333, 42.666667)"
        >
          <path
            d="M170.666667,170.666667 C217.794965,170.666667 256,132.461632 256,85.3333333 C256,38.2050347 217.794965,7.10542736e-15 170.666667,7.10542736e-15 C123.538368,7.10542736e-15 85.3333333,38.2050347 85.3333333,85.3333333 C85.3333333,132.461632 123.538368,170.666667 170.666667,170.666667 Z M213.333333,213.333333 L128,213.333333 C57.307552,213.333333 1.42108547e-14,270.640885 1.42108547e-14,341.333333 L1.42108547e-14,426.666667 L341.333333,426.666667 L341.333333,341.333333 C341.333333,270.640885 284.025781,213.333333 213.333333,213.333333 Z"
            id="user"
            // fill="currentColor"
          ></path>
        </g>
      </g>
    </svg>
  );
};
