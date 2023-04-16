import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsFetchingCurrentUser } from 'redux/authSlice/selectors';
import { selectIsLoggedIn } from 'redux/authSlice/selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggegIn = useSelector(selectIsLoggedIn);
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  const shouldRedirect = !isLoggegIn && !isFetchingCurrentUser;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
