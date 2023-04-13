import { Container } from 'components/Container/Container.styled';
import { Footer } from 'components/Footer/Footer';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MenuAppBar from 'components/AppBar/Appbar2';

const SharedLayout = () => {
  return (
    <Container>
      <MenuAppBar />
      <AppBar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </Container>
  );
};

export default SharedLayout;
