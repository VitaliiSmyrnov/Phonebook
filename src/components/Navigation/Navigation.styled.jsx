import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  gap: 4px;
  margin-bottom: 1px;

  font-weight: 700;
  color: #2a363b;
  border: 1px solid #2a363b;
  border-radius: 10px;

  &.active {
    color: #43d7ff;
    background-color: #37393c;
    border-radius: 10px;

    box-shadow: ${p => p.theme.shadows.normal};
  }
`;
