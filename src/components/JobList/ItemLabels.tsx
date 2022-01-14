import '../../styles/JobList/ItemLabels.scss';

type Props = {
  isNew: boolean;
  isFeatured: boolean;
};

const ItemLabels = ({ isNew, isFeatured }: Props) => {
  return (
    <div className="item-labels">
      {isNew && (
        <div className="item-labels__div item-labels__div--new">NEW!</div>
      )}
      {isFeatured && (
        <div className="item-labels__div item-labels__div--featured">
          FEATURED
        </div>
      )}
    </div>
  );
};

export default ItemLabels;
