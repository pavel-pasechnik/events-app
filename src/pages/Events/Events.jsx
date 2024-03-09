import { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { fetchEvents } from '../../services/eventsApi.js';

export default function Events() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchEvents().then(setData);
  }, []);

  return (
    <>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <Link to={item.id} state={{ from: location }}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
