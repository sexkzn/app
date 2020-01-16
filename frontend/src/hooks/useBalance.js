import { useSelector } from 'react-redux';

import { userBalanceSelector } from '../selectors/user';

const useBalance = () => {
  const balance = useSelector(userBalanceSelector());

  return {
    balance,
  };
};

export default useBalance;
