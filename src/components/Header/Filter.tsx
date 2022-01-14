import Element from '../UI/Element';
import FilterClear from './FilterClear';
import FilterButton from './FilterButton';
import '../../styles/Header/Filter.scss';
import { useEffect, useState } from 'react';

type Props = {
  filters: string[];
};

const Filter = ({ filters }: Props) => {
  const [isFilter, setIsFilter] = useState(!!filters[0]);

  useEffect(() => {
    if (filters[0]) {
      setIsFilter(!!filters[0]);
      return;
    }
    const timeout = setTimeout(() => {
      setIsFilter(!!filters[0]);
    }, 250);

    return () => clearTimeout(timeout);
  }, [filters]);

  const renderFilterButtons = () => {
    if (!filters[0]) return;
    return filters.map(filter => <FilterButton key={filter} filter={filter} />);
  };

  return (
    <>
      {isFilter && (
        <div className={`filter--wrapper ${!filters[0] && 'filter--hidden'}`}>
          <Element className="filter">
            <div className="filter-buttons-div">{renderFilterButtons()}</div>
            <div>{filters[0] && <FilterClear />}</div>
          </Element>
        </div>
      )}
    </>
  );
};

export default Filter;
