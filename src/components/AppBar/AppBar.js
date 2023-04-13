import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <>
        <NavLink to="register">register</NavLink>
        <NavLink to="login">login</NavLink>
      </>
    </header>
  );
};
