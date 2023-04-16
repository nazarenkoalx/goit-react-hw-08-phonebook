import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { NavWrapper, StyledNavLink } from './AppBar.styled';
import HomeIcon from '@mui/icons-material/Home';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authSlice/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { LoginNavigation } from 'components/Navigation/Navigation';
import ContactsIcon from '@mui/icons-material/Contacts';

export default function NavAppBar() {
  const auth = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          backgroundColor: 'success.main',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NavWrapper>
          <StyledNavLink to="/">
            <HomeIcon sx={{ mr: 0.5 }} /> home
          </StyledNavLink>
          {auth && (
            <StyledNavLink to="contacts">
              <ContactsIcon sx={{ mr: 0.5 }} />
              contacts
            </StyledNavLink>
          )}
        </NavWrapper>

        {!auth && <LoginNavigation />}
        {auth && <UserMenu />}
      </Toolbar>
    </AppBar>
  );
}
