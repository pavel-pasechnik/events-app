import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../pages/Home/Home';
import Events from '../pages/Events/Events';
import Search from '../pages/Search/Search';
import Details from '../pages/Details/Details';
import EventSubPage from '../components/EventSubPage/EventSubPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='events' element={<Events />}>
          <Route path=':id' element={<EventSubPage />} />
        </Route>
        <Route path='search' element={<Search />}>
          <Route path=':id' element={<EventSubPage />} />
        </Route>
        <Route path='events/:id/details' element={<Details />} />
        <Route path='search/:id/details' element={<Details />} />
      </Route>
    </Routes>
  );
}
