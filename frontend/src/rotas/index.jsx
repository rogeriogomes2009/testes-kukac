import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Palind from '../componentes/Palind'
import Compra from '../componentes/Purch'
import Veiculos from '../componentes/Veiculos'
import Ceps from '../componentes/Ceps'
import Barnav from "../componentes/Barnav"
import ScrollButton from '../componentes/ScButton'

const ListaRotas = () => {
  return (
    <BrowserRouter>
      <Barnav />
      <Routes>
        <Route path='/' element={<Palind />} />
        <Route path='/compras' element={<Compra />} />
        <Route path='/veiculos' element={<Veiculos />} />
        <Route path='/ceps' element={<Ceps />} />
      </Routes>
      <ScrollButton />
    </BrowserRouter>
  )
}

export default ListaRotas
