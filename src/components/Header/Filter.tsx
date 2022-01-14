import Element from '../UI/Element';
import FilterClear from './FilterClear';
import FilterButton from './FilterButton';
import '../../styles/Header/Filter.scss';

type Props = {
  filters: string[];
};

const Filter = ({ filters }: Props) => {
  const renderFilterButtons = () => {
    if (!filters[0]) return;
    return filters.map(filter => <FilterButton key={filter} filter={filter} />);
  };

  return (
    <div className={`filter--wrapper ${!filters[0] && 'filter--hidden'}`}>
      <Element className="filter">
        <div className="filter-buttons-div">{renderFilterButtons()}</div>
        <div>{filters[0] && <FilterClear />}</div>
      </Element>
    </div>
  );
};

export default Filter;
