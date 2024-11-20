import { Outlet } from 'react-router-dom';

import { Navigation } from '../components/navigation';

export const AuthenticatedPage = () => {
  return (
    <div className="flex h-dvh flex-col">
      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>
      <Navigation />
    </div>
  );
};
