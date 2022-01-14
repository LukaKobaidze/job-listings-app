import useUpdateSearchParams from '../../hooks/useUpdateSearchParams';
import IconRemove from '../UI/Icons/IconRemove';
import '../../styles/Header/FilterButton.scss';

type Props = {
  filter: string;
};

const FilterButton = ({ filter }: Props) => {
  const updateSearchParams = useUpdateSearchParams('filter');

  const buttonClickHandler = () => {
    updateSearchParams.remove(filter);
  };

  return (
    <div className="filter-button--wrapper">
      <button className="filter-button" onClick={buttonClickHandler}>
        {filter}
      </button>
      <div className="filter-button__icon">
        <IconRemove />
      </div>
    </div>
  );
};

export default FilterButton;
