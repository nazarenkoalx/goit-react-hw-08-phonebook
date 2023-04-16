import { Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...routeProps }) => {
  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;
