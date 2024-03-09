import { StyleNavLink } from './Navigation.styled.js';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <StyleNavLink to='/'>Home</StyleNavLink>
        </li>
        <li>
          <StyleNavLink to='/events'>Events</StyleNavLink>
        </li>
        <li>
          <StyleNavLink to='/search'>Search</StyleNavLink>
        </li>
      </ul>
    </nav>
  );
}
