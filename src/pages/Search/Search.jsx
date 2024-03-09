import { useState, useEffect } from 'react';
import { fetchEventsByName } from '../../services/eventsApi';
import { useSearchParams } from 'react-router-dom';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [events, setEvents] = useState([]);
  const query = searchParams.get('query');
  const location = useLocation();

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.query.value });
    e.target.reset();
  };

  useEffect(() => {
    if (!query) {
      return;
    } else {
      fetchEventsByName(query).then(setEvents);
    }
  }, [query]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type='text' name='query' />
        <button>Search</button>
      </form>
      {events.length !== 0 && (
        <ul>
          {events.map(item => {
            return (
              <li key={item.id}>
                <Link to={item.id} state={{ from: location }}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      <Outlet />
    </>
  );
}
