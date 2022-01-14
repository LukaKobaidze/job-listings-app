import '../../styles/JobList/ItemAbout.scss';

type Props = {
  postedAt: string;
  contract: string;
  location: string;
};

const ItemAbout = ({ postedAt, contract, location }: Props) => {
  return (
    <ul className="item-about">
      <li className="item-about__li">{postedAt}</li>
      <li className="item-about__li">{contract}</li>
      <li className="item-about__li">{location}</li>
    </ul>
  );
};

export default ItemAbout;
