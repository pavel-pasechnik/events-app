import { useEffect } from 'react';
import { fetchEventById } from '../services/eventsApi';
import { useParams } from 'react-router-dom';

const useFetchEvent = () => {
  const [event, setEvent] = useState('');

  const { id } = useParams();

  useEffect(() => {
    fetchEventById(id).then(setEvent);
  }, [id]);

  return event;
};

export default useFetchEvent;
