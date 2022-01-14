import '../../styles/JobList/ItemLogo.scss';

type Props = {
  src: string;
  alt: string;
};

const ItemLogo = ({ src, alt }: Props) => {
  return (
    <div className="item-logo">
      <a href="#">
        <img src={src} alt={alt} />
      </a>
    </div>
  );
};

export default ItemLogo;
