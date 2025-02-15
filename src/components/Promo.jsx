import React from 'react'
import { catagory } from '../constants'
import './Styles/Promo.css'
function Promo() {

    return (
        <section className='promo'>
            <div className="promo-container">
                <h1 className='promo_heading'>We have</h1>
                <ul className="list">
                    {catagory.map((promo,index)=>(
                        <li key={promo.id} className='item'>
                            <div className="promo-card">
                                <img className="promo-icon" src={promo.icon}/>
                                <div className="promo-title">{promo.title}</div>
                                <div className="promo-text">{promo.description}</div>
                                <img src={promo.img} className='cover-image' />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Promo