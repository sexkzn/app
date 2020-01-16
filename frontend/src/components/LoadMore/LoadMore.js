import React, { useState, useEffect, useRef } from 'react';
import { useWindowScroll, useScroll } from 'react-use';
import Button from '../Button';
import Loader from '../Loader';

function LoadMore({ loading, onLoad, visible }) {
  const ref = useRef(null);
  const [needToFetch, setNeedToFetch] = useState(false);
  const buttonPosition = useScroll(ref);
  const { y } = useWindowScroll();

  useEffect(() => {
    if (needToFetch && !loading && y >= buttonPosition.y) {
      onLoad();
    }
  }, [y, buttonPosition]);

  const handleClick = () => {
    if (!needToFetch) setNeedToFetch(true);
    onLoad();
  };

  return visible ? (
    <div ref={ref} className="load-more">
      {loading ? (
        <Loader />
      ) : (
        <Button onClick={handleClick}>Загрузить еще</Button>
      )}
    </div>
  ) : null;
}

export default LoadMore;
