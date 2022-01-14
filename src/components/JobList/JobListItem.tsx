import Element from '../UI/Element';
import ItemAbout from './ItemAbout';
import ItemLabels from './ItemLabels';
import ItemLogo from './ItemLogo';
import ItemSkills from './ItemSkills';
import ItemTitle from './ItemTitle';
import '../../styles/JobList/JobListItem.scss';

type Props = {
  company: string;
  logo: string;
  isNew: boolean;
  isFeatured: boolean;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  skills: string[];
};

const JobListItem = (props: Props) => {
  return (
    <li className="job-list-item">
      <Element
        className={`job-list-item__content ${
          props.isFeatured && 'job-list-item__content--featured'
        }`}
      >
        <ItemLogo src={props.logo} alt={props.company} />
        <div>
          <div className="job-list-item__content__label">
            <p className="job-list-item__content__label--company">
              {props.company}
            </p>
            {(props.isNew || props.isFeatured) && (
              <ItemLabels isNew={props.isNew} isFeatured={props.isFeatured} />
            )}
          </div>
          <ItemTitle title={props.position} />
          <ItemAbout
            postedAt={props.postedAt}
            contract={props.contract}
            location={props.location}
          />
        </div>
        <ItemSkills skills={props.skills} />
      </Element>
    </li>
  );
};

export default JobListItem;
