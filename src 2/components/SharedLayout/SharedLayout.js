import { Container } from 'components/Container/Container';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        {/* <Link to="/">Home</Link>
        <Link to="/movies"> Movies</Link> */}
      </Header>
      <Outlet />
      <Footer />
      <ToastContainer />
    </Container>
  );
};

export default SharedLayout;
