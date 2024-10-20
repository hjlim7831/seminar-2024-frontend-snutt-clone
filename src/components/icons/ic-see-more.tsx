import type { SVGProps } from 'react';

export const IcSeeMore = (props: SVGProps<SVGSVGElement>) => {
  const stroke = props.stroke !== undefined ? props.stroke : 'black';

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="5.47225" cy="14.9722" r="2.97224" stroke={stroke} />
      <circle cx="14.9166" cy="14.9722" r="2.97224" stroke={stroke} />
      <circle cx="24.3614" cy="14.9722" r="2.97224" stroke={stroke} />
    </svg>
  );
};
