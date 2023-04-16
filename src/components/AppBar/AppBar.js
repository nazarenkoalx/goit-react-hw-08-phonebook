import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { NavWrapper, StyledNavLink } from './AppBar.styled';
import HomeIcon from '@mui/icons-material/Home';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authSlice/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { LoginNavigation } from 'components/Navigation/Navigation';

export default function NavAppBar() {
  const auth = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="static">
      <Toolbar>
        <NavWrapper>
          <StyledNavLink to="/">
            <HomeIcon sx={{ mr: 0.5 }} /> home
          </StyledNavLink>
          {!auth && <LoginNavigation />}
        </NavWrapper>
        {auth && <UserMenu />}
      </Toolbar>
    </AppBar>
  );
}
