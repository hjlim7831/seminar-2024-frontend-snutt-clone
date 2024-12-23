import type { SVGProps } from 'react';

export const IcListView = (props: SVGProps<SVGSVGElement>) => {
  const fill = props.fill !== undefined ? props.fill : 'currentColor';

  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.772949 0.727051H19.8396V1.59372H0.772949V0.727051ZM0.772964 7.8179H16.373V8.68457H0.772964V7.8179ZM19.8396 14.9088H0.772964V15.7755H19.8396V14.9088Z"
        fill={fill}
      />
    </svg>
  );
};
