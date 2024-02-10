import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import Lobby from './pages/Lobby';
import Register from './pages/Register';
import Login from './pages/Login';
import MainPage from './pages/MainPage/MainPage';

const App = () => (
  <Routes>
    <Route path='/' element={<MainPage />} />
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />
    <Route path='/lobby' element={<Lobby />} />
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
);
export default App;
