
import React from 'react';
import Navbar from './Components/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style/style.css'
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import ZavtrkDetail from './pages/zavtrk/ZavtrkDetail';
import Novinki from './Components/Novinki';
import Footer from './Components/Footer';
import Zavtrk from './pages/zavtrk/Zavtrk';
import OpenNovinki from './Components/OpenNovinki';
import Pitsa from './pages/pitsa/Pitsa';
import PitsaDetail from './pages/pitsa/PitsaDetail';
import Pasta from './pages/pasta/Pasta';
import PastaDetailed from './pages/pasta/PastaDetail';
import Ravioli from './pages/ravioli/Ravioli';
import Raviolidetail from './pages/ravioli/RavioliDetail';
import Supi from './pages/supi/Supi.jsx';
import SupiDetail from './pages/supi/SupiDetail';
import Zakiska from './pages/zakuski/Zakuski';
import ZakiskaDetail from './pages/zakuski/ZakuskiDetail';
import Salat from './pages/salat/Salat';
import SalatDetail from './pages/salat/SalatDetail';
import Suv from './pages/suv/Suv';
import SuvDetail from './pages/suv/SuvDetail';
import Kontact from './pages/kontact/Kontact';
import Card from './Components/Card';
import Daastavka from './pages/dastavka/Dastafka';
import Po_card from './pages/payment/Payment';

function App() {
  const [detail, setDetail] = useState(null);
  const [detailed, setDetailed] = useState(null);
  const [pissa, setPissa] = useState(null);
  const [past, setPast] = useState(null);
  const [ravi, setRavi] = useState(null);
  const [sup, setSup] = useState(null);
  const [zaks, setZaks] = useState(null);
  const [alivya, setAlivya] = useState(null);
  const [napitki, setNapitki] = useState(null);
  const [orders, setOrders] = useState([])
  const [count, setCount] = useState(0)

  const addToCart = (obj) => {
    let isDefined = false;
    for (let o of orders) {
      if (o.id === obj.id) {
        isDefined = true;
        toast.error('🦄 Wow so easy!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
    if (!isDefined) {
      setCount(count + obj.price)
      setOrders([...orders, obj])
    }
  }

  const deleteOrderItem = (order) => {
    setOrders(orders.filter(o => o.id !== order.id));
    setCount(count - order.price)
  }


  return (

    <BrowserRouter>

      <div className='stikky'>
        <Navbar orders={orders} setCount={setCount} count={count} deleteOrderItem={deleteOrderItem} />
      </div>

      <Routes>
        <Route path='/' element={<Novinki addToCart={addToCart} setDetail={setDetail} setPissa={setPissa} />} />
        <Route path='/novinki/:id' element={<OpenNovinki addToCart={addToCart} detail={detail} />} />
        {/* <Route path='/pitsa/:id' element={<OpenPitsa addToCart={addToCart} pissa={pissa} pitsa={pitsa} />} /> */}


        <Route path='/zavtrks' element={<Zavtrk addToCart={addToCart} setDetailed={setDetailed} />} />
        <Route path='/zavtrks/:id' element={<ZavtrkDetail addToCart={addToCart} detailed={detailed} />} />

        <Route path='/pitsa' element={<Pitsa addToCart={addToCart} setPissa={setPissa} />} />

        <Route path='/pitsa/:id' element={<PitsaDetail addToCart={addToCart} pissa={pissa} />} />

        <Route path='/pasta' element={<Pasta addToCart={addToCart} setPast={setPast} />} />
        <Route path='/pasta/:id' element={<PastaDetailed addToCart={addToCart} past={past} />} />

        <Route path='/ravioli' element={<Ravioli addToCart={addToCart} setRavi={setRavi} />} />
        <Route path='/ravioli/:id' element={<Raviolidetail addToCart={addToCart} ravi={ravi} />} />

        <Route path='/supi' element={<Supi addToCart={addToCart} setSup={setSup} />} />
        <Route path='/supi/:id' element={<SupiDetail addToCart={addToCart} sup={sup} />} />

        <Route path='/zakiska' element={<Zakiska addToCart={addToCart} setZaks={setZaks} />} />
        <Route path='/zakiska/:id' element={<ZakiskaDetail addToCart={addToCart} zaks={zaks} />} />

        <Route path='/salat' element={<Salat addToCart={addToCart} setAlivya={setAlivya} />} />
        <Route path='/salat/:id' element={<SalatDetail alivya={alivya} addToCart={addToCart} />} />

        <Route path='/suv' element={<Suv addToCart={addToCart} setNapitki={setNapitki} />} />
        <Route path='/suv/:id' element={<SuvDetail addToCart={addToCart} napitki={napitki} />} />

        <Route path='/kontact' element={<Kontact />} />
        <Route path='/card' element={<Card orders={orders} deleteOrderItem={deleteOrderItem} count={count} />} />
        <Route path='/dastavka' element={<Daastavka />} />
        <Route path='/po_card' element={<Po_card orders={orders} />} />

      </Routes>

      <Footer />

      <ToastContainer />

    </BrowserRouter >

  )
}

export default App
