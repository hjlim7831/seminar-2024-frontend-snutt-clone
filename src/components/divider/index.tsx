type Props = {
  className?: string;
};

export const Divider = ({ className = '' }: Props) => {
  return <div className={`bg-grey-assistive h-[0.75px] ${className}`} />;
};
