import type { SVGProps } from 'react';

export const IcTimeTable = (props: SVGProps<SVGSVGElement>) => {
  const fill = props.fill !== undefined ? props.fill : 'currentColor';

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0H0V12H9V0ZM20 8H11V20H20V8ZM11 0H20V6H11V0ZM9 14H0V20H9V14Z"
        fill={fill}
      />
    </svg>
  );
};
