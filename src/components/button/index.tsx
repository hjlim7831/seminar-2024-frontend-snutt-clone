import type { ButtonHTMLAttributes } from 'react';

type Variant = 'contained' | 'text';
type Color = 'mint' | 'orange' | 'white';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  color?: Color;
};

export const Button = ({
  color = 'orange',
  variant = 'contained',
  children,
  ...props
}: Props) => {
  const baseClassName =
    variant === 'contained'
      ? `w-[311px] h-[41px] p-3 rounded-[6px] gap-1 flex items-center justify-center bg-${colorMap[color].bg}`
      : '';

  const textClassName = `font-pretendard text-[14px] font-bold text-${colorMap[color].text} leading-[16.71px] text-left`;

  return (
    <button className={`${baseClassName} ${textClassName}`} {...props}>
      {children}
    </button>
  );
};

const colorMap = {
  mint: {
    bg: 'mint',
    text: 'white',
  },
  orange: { bg: 'snutt-orange', text: 'white' },
  white: { bg: 'white', text: 'black' },
};
