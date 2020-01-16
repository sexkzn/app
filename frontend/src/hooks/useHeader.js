import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';

import { userNameSelector } from '../selectors/user';

const MAX_HEADER_HEIGHT = 80;

const useHeader = () => {
  const username = useSelector(userNameSelector());
  const [fixHeader, setFixHeader] = useState(false);
  const { y } = useWindowScroll();

  useEffect(() => {
    if (y > MAX_HEADER_HEIGHT && !fixHeader) {
      setFixHeader(true);
    } else if (y < MAX_HEADER_HEIGHT && fixHeader) {
      setFixHeader(false);
    }
  }, [y]);

  return {
    fixHeader,
    username,
  };
};

export default useHeader;
