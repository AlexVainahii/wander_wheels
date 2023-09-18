import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Cars from '../pages/Cars';
import FavoriteCars from '../pages/FavoriteCars';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/cars" element={<Cars />}></Route>
        <Route path="/favoriteCars" element={<FavoriteCars />}></Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
