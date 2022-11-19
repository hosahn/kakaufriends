import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { getUserSelector, userState } from '../atoms';

const useCheckUser = () => {
  const navigate = useNavigate();
  const userLoadable = useRecoilValueLoadable(getUserSelector);
  const setUserState = useSetRecoilState(userState);

  let user = ' ';
  switch (userLoadable.state) {
    case 'hasValue':
      user = userLoadable.contents;
      setUserState(user);
      break;
    case 'hasError':
      if (window.confirm('로그인 먼저해주세요..!')) {
        navigate('/login');
      } else {
        navigate('/');
      }
      break;
    case 'loading':
      <h1>loading</h1>;
      break;
    default:
      user = 'Loading...';
  }

  return user;
};

export default useCheckUser;
