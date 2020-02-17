import { useSelector } from 'react-redux';

import { userSelector } from '../../../selectors/user';

function useGettingProfileInfo() {
  const user = useSelector(userSelector);
  const title = `Личный кабинет, ${user.username}`;

  return { title };
}

export default useGettingProfileInfo;
