import { Outlet } from 'react-router-dom';

import { Navigation } from '../components/navigation';

export const AuthenticatedPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <Outlet />
      <Navigation />
    </div>
  );
};
