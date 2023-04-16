import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  :hover {
    border: 1px solid #fff;
    border-radius: 4px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AuthWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: center;
`;
