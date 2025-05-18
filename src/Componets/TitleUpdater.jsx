import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    let title = 'GadgetHaven';
    if (path === '/' || path === '/home') {
      title = 'Home | GadgetHaven';
    } else if (path === '/dashbord') {
      title = 'Dashboard | GadgetHaven';
    } else if (path === '/statistic') {
      title = 'Statistic | GadgetHaven';
    } else {
      const routeName = path.replace('/', '').charAt(0).toUpperCase() + path.slice(2);
      title = `${routeName} | GadgetHaven`;
    }

    document.title = title;
  }, [location]);

  return null;
};

export default TitleUpdater;
