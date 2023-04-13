import NavAppBar from 'components/AppBar/AppBar';
import { Container } from 'components/Container/Container.styled';
import { Footer } from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SharedLayout = () => {
  return (
    <Container>
      <NavAppBar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </Container>
  );
};

export default SharedLayout;
