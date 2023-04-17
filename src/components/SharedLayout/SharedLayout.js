import NavAppBar from 'components/AppBar/AppBar';
import {
  AppWrapper,
  Container,
  MainWrapper,
} from 'components/Container/Container.styled';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SharedLayout = () => {
  return (
    <AppWrapper>
      <NavAppBar />
      <MainWrapper>
        <Container>
          <Outlet />
          <ToastContainer />
        </Container>
      </MainWrapper>
    </AppWrapper>
  );
};

export default SharedLayout;
