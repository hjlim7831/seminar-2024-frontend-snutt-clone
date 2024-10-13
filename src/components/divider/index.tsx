type Props = {
  className?: string;
};

export const Divider = ({ className }: Props) => {
  const finalClassName = className !== undefined ? className : '';

  return <div className={`bg-grey-assistive h-[0.75px] ${finalClassName}`} />;
};
