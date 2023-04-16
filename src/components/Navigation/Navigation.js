import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { AuthWrapper, StyledNavLink } from 'components/AppBar/AppBar.styled';

export function LoginNavigation() {
  return (
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
  );
}
