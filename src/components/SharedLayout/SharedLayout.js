import { Container } from 'components/Container/Container.styled';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </Container>
  );
};

export default SharedLayout;
