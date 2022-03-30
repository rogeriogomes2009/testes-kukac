import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Palindromo from '../components/Palindromo';
import Purchase from '../components/Purchase';
import Vehicles from '../components/Vehicles';
import Ceps from '../components/Ceps';
import Navbar from "../components/Navbar";
import ScrollButton from '../components/ScrollButton';

const RouteList = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Palindromo />} />
        <Route path='/purchase' element={<Purchase />} />
        <Route path='/vehicles' element={<Vehicles />} />
        <Route path='/ceps' element={<Ceps />} />
      </Routes>
      <ScrollButton />
    </BrowserRouter>
  );
};

export default RouteList;
