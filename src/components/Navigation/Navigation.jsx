import { useAuth } from 'hooks/useAuth';
import { StyledNavLink } from './Navigation.styled';
import { FiHome } from 'react-icons/fi';
import { RiContactsLine } from 'react-icons/ri';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {!isLoggedIn && (
        <StyledNavLink to="/">
          <FiHome />
          Home
        </StyledNavLink>
      )}
      {isLoggedIn && (
        <StyledNavLink to="/contacts">
          <RiContactsLine />
          Contacts
        </StyledNavLink>
      )}
    </nav>
  );
};
