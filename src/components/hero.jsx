import React from 'react'
import { herobg,herobannerbg, burger6, waspbg,logo2} from '../assets'

import './Styles/Hero.css'
function Hero() {

const containerStyle = {
    backgroundImage: `url(${waspbg})`,
    backgroundSize: 'contain', // This will make sure the whole image is visible
    backgroundRepeat: 'no-repeat', // Prevents repeating the image
    backgroundPosition: 'center',
    height: '60vh',
};

    const burgerstyle = {
        backgroundImage: `url(${herobannerbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    return (
        <div className='hero-container' style={containerStyle}>
            <div className='hero-info'>
                {/*<h6>青蜂</h6>*/}
                {/*<h1 className='hero-heading'>让生活充满仪式感!</h1>*/}
                {/*<p className='hero-discription'>Food is any substance consumed to provide nutritional support for an organism.</p>*/}
                <button className='button'>现在下单</button>
            </div>
            {/*<div  className='burger' style={burgerstyle}>*/}
            {/*    <img  src={logo2} width={500} />*/}
            {/*</div>*/}
        </div>
    )
}

export default Hero