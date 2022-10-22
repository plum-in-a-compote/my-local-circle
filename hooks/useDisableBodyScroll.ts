import { useEffect } from 'react';

export const useDisableBodyScroll = () => {
  useEffect(() => {
    document.body.style.height = '100%';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.height = 'auto';
      document.body.style.width = 'auto';
      document.body.style.overflow = 'auto';
    };
  }, []);
};
