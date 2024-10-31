import type { SVGProps } from 'react';

export const IcChevronRight = (props: SVGProps<SVGSVGElement>) => {
  const stroke = props.stroke !== undefined ? props.stroke : 'currentColor';

  return (
    <svg
      className={props.className}
      width="16"
      height="16"
      viewBox="-0.5 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.6728 22L16.1434 13.0294C16.4081 12.75 16.4081 12.3088 16.1434 12.0147L7.65808 3"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
