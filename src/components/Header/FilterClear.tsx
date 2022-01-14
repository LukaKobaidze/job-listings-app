import useUpdateSearchParams from '../../hooks/useUpdateSearchParams';
import '../../styles/Header/FilterClear.scss';

const FilterClear = () => {
  const updateSearchParams = useUpdateSearchParams('filter');

  const buttonClickHandler = () => {
    updateSearchParams.clear();
  };

  return (
    <button className="filter-clear" onClick={buttonClickHandler}>
      Clear
    </button>
  );
};

export default FilterClear;
