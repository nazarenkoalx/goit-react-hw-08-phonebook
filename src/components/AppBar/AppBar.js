import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { NavWrapper, StyledNavLink, AuthWrapper } from './AppBar.styled';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/authSlice/selectors';
import { logOut } from 'redux/authSlice/operations';
import ContactsIcon from '@mui/icons-material/Contacts';
import { useNavigate } from 'react-router-dom';
import { Filter } from 'components/Filter/Filter';

export default function NavAppBar() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  const auth = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const userName = user.name;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const contactsRedirect = () => {
    let path = `/contacts`;
    navigate(path);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <NavWrapper>
          <StyledNavLink to="/">
            <HomeIcon sx={{ mr: 0.5 }} /> home
          </StyledNavLink>
          {!auth && (
            <AuthWrapper>
              <StyledNavLink to="register">
                <AssignmentIcon sx={{ mr: 0.5 }} />
                register
              </StyledNavLink>

              <StyledNavLink to="login">
                <LoginIcon sx={{ mr: 0.5 }} />
                login
              </StyledNavLink>
            </AuthWrapper>
          )}
        </NavWrapper>
        {auth && (
          <>
            <StyledNavLink to="contacts">
              <ContactsIcon sx={{ mr: 0.5 }} />
              contacts
            </StyledNavLink>
            <Filter />
            <div>
              <p> Hello, {userName}! </p>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={contactsRedirect}>Contacts</MenuItem>
                <MenuItem onClick={handleLogOut}>Log out</MenuItem>
              </Menu>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
