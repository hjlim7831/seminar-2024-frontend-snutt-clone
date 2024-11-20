import type { SVGProps } from 'react';

export const IcList = (props: SVGProps<SVGSVGElement>) => {
  const stroke = props.stroke !== undefined ? props.stroke : 'currentColor';
  const fill = props.fill !== undefined ? props.fill : 'currentColor';
  return (
    <svg
      width="25"
      height="25"
      viewBox="-0.5 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.54504 12.5H21.705"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.54504 6.5H21.705"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.54504 18.5H21.705"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.29504 7.5C3.84733 7.5 4.29504 7.05228 4.29504 6.5C4.29504 5.94772 3.84733 5.5 3.29504 5.5C2.74276 5.5 2.29504 5.94772 2.29504 6.5C2.29504 7.05228 2.74276 7.5 3.29504 7.5Z"
        fill={fill}
      />
      <path
        d="M3.29504 13.5C3.84733 13.5 4.29504 13.0523 4.29504 12.5C4.29504 11.9477 3.84733 11.5 3.29504 11.5C2.74276 11.5 2.29504 11.9477 2.29504 12.5C2.29504 13.0523 2.74276 13.5 3.29504 13.5Z"
        fill={fill}
      />
      <path
        d="M3.29504 19.5C3.84733 19.5 4.29504 19.0523 4.29504 18.5C4.29504 17.9477 3.84733 17.5 3.29504 17.5C2.74276 17.5 2.29504 17.9477 2.29504 18.5C2.29504 19.0523 2.74276 19.5 3.29504 19.5Z"
        fill={fill}
      />
    </svg>
  );
};
