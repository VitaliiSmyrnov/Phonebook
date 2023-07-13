import { useDispatch } from 'react-redux';
import { FiLogOut } from 'react-icons/fi';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        <FiLogOut />
        Logout
      </button>
    </Wrapper>
  );
};
