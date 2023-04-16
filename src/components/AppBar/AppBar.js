import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { NavWrapper, StyledNavLink, AuthWrapper } from './AppBar.styled';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/authSlice/selectors';
import { logOut } from 'redux/authSlice/operations';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

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

  return (
    <AppBar position="static">
      <Toolbar>
        <NavWrapper>
          <StyledNavLink to="/">
            <HomeIcon sx={{ mr: 0.5 }} /> home
          </StyledNavLink>
          {!auth ? (
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
          ) : null}
        </NavWrapper>
        {auth && (
          <>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search contacts"
                inputProps={{ 'aria-label': 'search contacts' }}
              />
            </Search>
            <div>
              <p> hello pidor {userName} </p>
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
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogOut}>Log out</MenuItem>
              </Menu>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
