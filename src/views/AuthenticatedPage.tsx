import { Outlet } from 'react-router-dom';

import { Navigation } from '../components/navigation';

export const AuthenticatedPage = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <Outlet />
      <Navigation />
    </div>
  );
};
