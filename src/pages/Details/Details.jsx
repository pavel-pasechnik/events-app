import useFetchEvent from '../../hooks/useFetchEvent';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Details() {
  const event = useFetchEvent();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {event && (
        <>
          <button onClick={() => navigate(location.state?.from ?? '/')}>Go back</button>
          <h1>{event.name}</h1>
          <img src={event.images[0].url} alt={event.name} width='640' />
          <p>Genre: {event.classifications[0].genre.name}</p>
          <p>Sub Genre: {event.classifications[0].subGenre.name}</p>
        </>
      )}
    </>
  );
}
