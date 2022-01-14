import '../../styles/UI/Picture.scss';

type Props = {
  desktop: string;
  mobile: string;
  alt?: string;
  className?: string;
};

const Picture = ({ desktop, mobile, alt, className }: Props) => {
  return (
    <picture>
      <source srcSet={mobile} media="(max-width: 375px)" />
      <img className={`picture ${className}`} src={desktop} alt={alt || ''} />
    </picture>
  );
};

export default Picture;
