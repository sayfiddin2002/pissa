import React from 'react'
import { NavLink } from 'react-router-dom'
import { zakus } from '../../data'

function Zakiska(props) {
    return (
        <div className='pas-foot'>
            <h1>Горячие закуски</h1>
            <div className="container">
                {zakus.map(zak => {
                    return (
                        <div data-aos="fade-up" className="card" key={zak.id}>
                            <NavLink to={`/zakiska/${zak.id}`}>
                                <div onClick={()=> props.setZaks(zak)} className="image">
                                    <img src={zak.img} alt="Error" />
                                </div>
                            </NavLink>
                            <div className='card-foter'>
                                <h2>{zak.name.slice(0, 20)}..</h2>
                                <p>{zak.description.slice(0, 60)}...</p>
                                <div className="pas-footer">
                                    <p>{zak.price} ₽</p>
                                    <button onClick={() => props.addToCart(zak)}>Купить</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Zakiska