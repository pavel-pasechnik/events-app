import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { fetchEvents } from '../../services/eventsApi.js';

export default function Events() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchEvents().then(setData);
  }, []);

  console.log(data);

  return (
    <>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <Link to={item.id}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
