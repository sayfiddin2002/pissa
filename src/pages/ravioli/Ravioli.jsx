import React from 'react'
import { NavLink } from 'react-router-dom'
import { ravioli } from '../../data'

function Ravioli(props) {
  return (
    <div className='pas-foot'>
      <h1>Равиоли</h1>
      <div className="container">
        {ravioli.map(ravi => {
          return (
            <div data-aos="fade-up" className="card" key={ravi.id}>
              <NavLink to={`/ravioli/${ravi.id}`}>
                <div onClick={()=> props.setRavi(ravi)} className="image">
                  <img src={ravi.img} alt="ravioli img" />
                </div>
              </NavLink>
              <div className="card-foter">
                <h2>{ravi.name.slice(0, 20)}...</h2>
                <p>{ravi.description.slice(0, 60)}...</p>
                <div className="pas-footer">
                  <p>{ravi.price} ₽</p>
                  <button onClick={() => props.addToCart(ravi)}>Купить</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Ravioli