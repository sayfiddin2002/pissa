
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


// import Zavtrk from './pages/zavtrk/Zavtrk';


// import ZavrtrkDetail from './pages/zavtrk/ZavrtrkDetail';
// import Footer from './pages/Footer';
import Novinki from './Components/Novinki';
import Footer from './pages/Footer';
// import OpenNovinki from './Components/OpenNovinki';



// import Pitsa from './pages/pitsa/Pitsa';


// import Pasta from './pages/pasta/Pasta';

// import Ravioli from './pages/ravioli/Ravioli';


// import Supi from './pages/supi/Supi';


// import Zakiska from './pages/Горячие закуски/Zakiska';


// import Salat from './pages/salat/Salat';





function App() {

  
  const [detail, setDetail] = useState(null);


  
  // const [detailed, setDetailed] = useState(null);

 

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
            <Route path='/' element={<Novinki  addToCart={addToCart} setDetail={setDetail}  setPissa={setPissa} />} />
            {/* <Route path='/novinki/:id' element={<OpenNovinki novinki={novinki} addToCart={addToCart} detail={detail} />} /> */}
            {/* <Route path='/pitsa/:id' element={<OpenPitsa addToCart={addToCart} pissa={pissa} pitsa={pitsa} />} /> */}


            {/* <Route path='/zavtrks' element={<Zavtrk addToCart={addToCart} zavtrks={zavtrks} setDetailed={setDetailed} />} /> */}
            {/* <Route path='/zavtrks/:id' element={<ZavrtrkDetail addToCart={addToCart} zavtrks={zavtrks} detailed={detailed} />} /> */}

            {/* <Route path='/pitsa' element={<Pitsa addToCart={addToCart} pitsa={pitsa} setPissa={setPissa} />} /> */}

            {/* <Route path='/pitsa/:id' element={<PitsaDetail addToCart={addToCart} pissa={pissa} pitsa={pitsa} />} /> */}

            {/* <Route path='/pasta' element={<Pasta addToCart={addToCart} pasta={pasta} setPast={setPast} />} /> */}
            {/* <Route path='/pasta/:id' element={<PastaDetailed addToCart={addToCart} pasta={pasta} past={past} />} /> */}

            {/* <Route path='/ravioli' element={<Ravioli addToCart={addToCart} setRavi={setRavi} ravioli={ravioli} />} /> */}
            {/* <Route path='/ravioli/:id' element={<Raviolidetail addToCart={addToCart} ravi={ravi} ravioli={ravioli} />} /> */}

            {/* <Route path='/supi' element={<Supi addToCart={addToCart} setSup={setSup} supi={supi} />} /> */}
            {/* <Route path='/supi/:id' element={<SupiDetail addToCart={addToCart} supi={supi} sup={sup} />} /> */}

            {/* <Route path='/zakiska' element={<Zakiska addToCart={addToCart} setZaks={setZaks} zakus={zakus} />} /> */}
            {/* <Route path='/zakiska/:id' element={<ZakiskaDetail addToCart={addToCart} zaks={zaks} zakus={zakus} />} /> */}

            {/* <Route path='/salat' element={<Salat addToCart={addToCart} setAlivya={setAlivya} salat={salat} />} /> */}
            {/* <Route path='/salat/:id' element={<SalatDetail alivya={alivya} addToCart={addToCart} salat={salat} />} /> */}

            {/* <Route path='/suv' element={<Napitki addToCart={addToCart} suv={suv} setNapitki={setNapitki} />} /> */}
            {/* <Route path='/suv/:id' element={<NapitkiDetail addToCart={addToCart} suv={suv} napitki={napitki} />} /> */}

            {/* <Route path='/kontact' element={<Kontact />} /> */}
            {/* <Route path='/card' element={<Card orders={orders} deleteOrderItem={deleteOrderItem} count={count} />} /> */}
            {/* <Route path='/dastavka' element={<Daastavka />} /> */}
            {/* <Route path='/po_card' element={<Po_card orders={orders} />} /> */}

          </Routes>

        <Footer />

    </BrowserRouter >

  )
}

export default App
