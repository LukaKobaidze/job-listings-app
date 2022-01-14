import '../../styles/UI/Element.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Element = ({ children, className }: Props) => {
  return <div className={`element ${className}`}>{children}</div>;
};

export default Element;
