import Header from '../Header/Header';
import '../../styles/UI/Layout.scss';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header className="layout--header" />
      <main className="layout--main">{children}</main>
    </>
  );
};

export default Layout;
