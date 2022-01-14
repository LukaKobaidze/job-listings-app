import '../../styles/JobList/ItemTitle.scss';

type Props = {
  title: string;
};

const ItemTitle = ({ title }: Props) => {
  return (
    <a className="item-title--link" href="#">
      <h2 className="item-title">{title}</h2>
    </a>
  );
};

export default ItemTitle;
