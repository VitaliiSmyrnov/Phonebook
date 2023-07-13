import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  text-decoration: none;
  align-items: center;

  gap: 5px;
  padding: 10px;
  margin-left: 5px;
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
