import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/authSlice/operations';
import { selectUser } from 'redux/authSlice/selectors';
import { Filter } from 'components/Filter/Filter';
import { StyledNavLink } from 'components/AppBar/AppBar.styled';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ContactsIcon from '@mui/icons-material/Contacts';

export function UserMenu() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const userName = user.name;

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const contactsRedirect = () => {
    let path = `/contacts`;
    navigate(path);
  };

  return (
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
  );
}
