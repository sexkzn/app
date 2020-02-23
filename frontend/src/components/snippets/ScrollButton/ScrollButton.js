import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { useWindowScroll } from 'react-use';
import cn from 'classnames';

import Button from '../Button';

function ScrollButton() {
  const { y } = useWindowScroll();
  const isButtonVisible = y > 400;
  const scrollTop = () => scroll.scrollToTop();

  return (
    <Button
      className={cn('scroll-button', {
        'scroll-button--hide': !isButtonVisible,
      })}
      color="link"
      onClick={scrollTop}
    >
      Наверх
    </Button>
  );
}

export default ScrollButton;
