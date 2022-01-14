import '../../styles/JobList/ItemTitle.scss';

type Props = {
  title: string;
};

const ItemTitle = ({ title }: Props) => {
  return <h2 className="item-title item-title--link">{title}</h2>;
};

export default ItemTitle;
