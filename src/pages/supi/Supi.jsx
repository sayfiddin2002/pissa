import React from 'react'
import { NavLink } from 'react-router-dom'
import { supi } from '../../data'

function Supi(props) {
    return (
        <div className='pas-foot'>
            <h1>Супы</h1>
            <div className="container">
                {supi.map(s => {
                    return (
                        <div data-aos="fade-up" className="card" key={s.id}>
                            <NavLink to={`/supi/${s.id}`}>
                                <div onClick={()=> props.setSup(s)} className="image">
                                    <img src={s.img} alt="Error" />
                                </div>
                            </NavLink>
                            <div className="card-foter">
                                <h2>{s.name.slice(0, 20)}...</h2>
                                <p>{s.description.slice(0, 60)}...</p>
                                <div className="pas-footer">
                                    <p>{s.price} ₽</p>
                                    <button onClick={() => props.addToCart(s)}>Купить</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Supi