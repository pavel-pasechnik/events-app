import Navigation from '../Navigation/Navigation';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  return (
    <>
      <header>{!location.pathname.includes('details') && <Navigation />}</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
