import { Outlet } from 'react-router-dom';

import { Navigation } from '../components/navigation';

export const AuthenticatedPage = () => {
  return (
    <div className="overflow-auto flex flex-col justify-center h-dvh">
      <Outlet />
      <div className="flex-1"></div>
      <Navigation />
    </div>
  );
};
