import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const body = document.querySelector('#root');
    body.scrollIntoView({
        behavior: 'smooth'
    }, 500)
  }, [pathname]);

  return;
};

export default ScrollToTopOnRouteChange;
