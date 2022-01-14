import { useSearchParams } from 'react-router-dom';
import data from '../../data/data.json';
import JobListItem from './JobListItem';

const getSkills = (item: any) => {
  return [item.role, item.level, ...item.languages, ...item.tools];
};

const JobList = () => {
  const [searchParams] = useSearchParams();
  const filterParams = (Object.fromEntries(searchParams).filter || '').split(
    ' '
  );
  const renderJobListItems = () => {
    const filteredData = filterParams[0]
      ? data.filter(item =>
          filterParams.every(filter => getSkills(item).includes(filter))
        )
      : data;

    return filteredData.map(item => (
      <JobListItem
        key={item.id}
        company={item.company}
        logo={require(`../../assets${item.logo.slice(1)}`)}
        isNew={item.new}
        isFeatured={item.featured}
        position={item.position}
        postedAt={item.postedAt}
        contract={item.contract}
        location={item.location}
        skills={getSkills(item)}
      />
    ));
  };

  return <ul className="job-list">{renderJobListItems()}</ul>;
};

export default JobList;
