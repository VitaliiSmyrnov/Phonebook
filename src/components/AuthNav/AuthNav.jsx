import { StyledNavLink } from './AuthNav.styled';
import { FiLogIn } from 'react-icons/fi';
import { BsPersonCheckFill } from 'react-icons/bs';

export const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/register">
        <BsPersonCheckFill />
        Register
      </StyledNavLink>
      <StyledNavLink to="/login">
        <FiLogIn />
        Log In
      </StyledNavLink>
    </div>
  );
};
