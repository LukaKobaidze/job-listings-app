import { useSearchParams } from 'react-router-dom';
import imageBgDesktop from '../../assets/images/bg-header-desktop.svg';
import imageBgMobile from '../../assets/images/bg-header-mobile.svg';
import Picture from '../UI/Picture';
import Filter from './Filter';
import '../../styles/Header/Header.scss';

type Props = {
  className?: string;
};

const Header = ({ className }: Props) => {
  const [searchParams] = useSearchParams();
  const currentFilters = (Object.fromEntries(searchParams).filter || '').split(
    ' '
  );
  return (
    <header className={`header ${className}`}>
      <Picture
        className="header__image"
        desktop={imageBgDesktop}
        mobile={imageBgMobile}
        alt=""
      />
      <Filter filters={currentFilters} />
    </header>
  );
};

export default Header;
