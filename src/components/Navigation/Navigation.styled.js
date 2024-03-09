import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyleNavLink = styled(NavLink)`
  color: #242424;
  text-decoration: none;
  &.active {
    color: red;
  }
`;
