import '../../styles/JobList/ItemLogo.scss';

type Props = {
  src: string;
  alt: string;
};

const ItemLogo = ({ src, alt }: Props) => {
  return (
    <div className="item-logo">
      <img src={src} alt={alt} />
    </div>
  );
};

export default ItemLogo;
