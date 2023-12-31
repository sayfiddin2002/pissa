import React from 'react'
import { Link } from 'react-router-dom'

function PitsaDetail(props) {
  return (
    <div className="detailed">
      <div className="detail">
        <div className="container">
          <div className="card">
            <img src={props.pissa?.img} alt="pissa img" />
            <div className='zabt'>
              <div className='wrapper'>
                <div className='item'>
                  <p>{props.pissa?.name}</p>
                  <p>{props.pissa?.description}</p>
                </div>
                <div className='time'>
                  <Link to='/pitsa' className='close_pitsadetail'>
                    <span className='times'>&times;</span>
                  </Link>
                </div>
              </div>
              <Link to='/pitsa'>
                <button className='clic' onClick={() => props.addToCart(props.pissa)}>Добавить в корзину {props.pissa?.price} ₽</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PitsaDetail