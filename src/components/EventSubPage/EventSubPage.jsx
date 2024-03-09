import useFetchEvent from '../../hooks/useFetchEvent.js';
import { Link, useLocation } from 'react-router-dom';

export default function EventSubPage() {
  const event = useFetchEvent();
  const location = useLocation();
  return (
    <>
      {event && (
        <>
          <h1>{event.name}</h1>
          <img src={event.images[0].url} alt={event.name} width='640' />
          <Link to='details' state={location.state}>
            More info
          </Link>
        </>
      )}
    </>
  );
}
