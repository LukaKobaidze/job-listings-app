import useUpdateSearchParams from '../../hooks/useUpdateSearchParams';
import '../../styles/JobList/ItemSkills.scss';

type Props = {
  skills: string[];
};

const ItemSkills = ({ skills }: Props) => {
  const updateSearchParams = useUpdateSearchParams('filter');

  const buttonClickHandler = (skill: string) => {
    updateSearchParams.add(skill);
  };

  return (
    <ul className="item-skills">
      {skills.map(skill => (
        <li className="item-skills__li" key={skill}>
          <button
            className="item-skills__button"
            onClick={buttonClickHandler.bind(null, skill)}
          >
            {skill}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ItemSkills;
