import React from 'react'
import { Link } from 'react-router-dom'

function PastaDetailed(props) {
  return (
    <div className="detailed">
      <div className="detail">
        <div className="container">
          <div className="card">
            <img src={props.past?.img} alt="" />
            <div className='zabt'>
              <div className='wrapper'>
                <div className='item'>
                  <p>{props.past?.name}</p>
                  <p>{props.past?.description}</p>
                </div>
                <div className='time'>
                  <Link to='/pasta' className='close_pitsadetail'>
                    <span className='times'>&times;</span>
                  </Link>
                </div>
              </div>
              <Link to='/pasta'>
                <button className='clic' onClick={() => props.addToCart(props.past)}>Добавить в корзину {props.past?.price} ₽</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PastaDetailed
