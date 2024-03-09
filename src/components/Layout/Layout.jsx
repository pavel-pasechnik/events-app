import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
