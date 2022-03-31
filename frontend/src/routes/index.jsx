import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Palind from '../components/Palind'
import Purchase from '../components/Purch'
import Vehicles from '../components/Vehicles'
import Ceps from '../components/Ceps'
import Barnav from "../components/Barnav"
import ScrollButton from '../components/ScButton'

const RoutesList = () => {
  return (
    <BrowserRouter>
      <Barnav />
      <Routes>
        <Route path='/' element={<Palind />} />
        <Route path='/purchase' element={<Purchase />} />
        <Route path='/vehicles' element={<Vehicles />} />
        <Route path='/ceps' element={<Ceps />} />
      </Routes>
      <ScrollButton />
    </BrowserRouter>
  )
}

export default RoutesList
