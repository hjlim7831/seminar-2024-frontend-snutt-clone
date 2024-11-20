import type { ButtonHTMLAttributes } from 'react';

type Variant = 'contained' | 'text';
type Color = 'mint' | 'orange' | 'white';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  color?: Color;
  className?: string;
};

export const Button = ({
  color = 'orange',
  variant = 'contained',
  className = '',
  children,
  disabled,
  ...props
}: Props) => {
  const backgroundClassName =
    variant === 'contained'
      ? `h-[41px] p-3 rounded-[6px] gap-1 flex items-center justify-center disabled:bg-grey-disabled ${colorMap[color].bg}`
      : '';

  const textClassName = `font-pretendard text-[14px] font-bold ${colorMap[color].text} leading-[16.71px] text-left`;

  const finalClassName = `${backgroundClassName} ${textClassName} ${className}`;

  return (
    <button className={finalClassName} {...props} disabled={disabled}>
      {children}
    </button>
  );
};

const colorMap = {
  mint: {
    bg: 'bg-mint',
    text: 'text-white',
  },
  orange: { bg: 'bg-snutt-orange', text: 'text-white' },
  white: { bg: 'bg-white', text: 'text-black' },
};
