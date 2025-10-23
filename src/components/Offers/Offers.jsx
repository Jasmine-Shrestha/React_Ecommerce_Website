import React from 'react'
import './Offers.css'
import dhakasaree from '../Assets/dresses/dhakasaree.jpg'
import pasnidress from '../Assets/dresses/pasnidress girl.jpg'
import coat3 from '../Assets/dresses/coat3.jpg'
import raiattire from '../Assets/dresses/raiattire.jpg'
import tamagdress from '../Assets/dresses/tamagdress.jpg'

const Offers = () => {
  return (
    <div className='offers'>
<div className="offers-left">
<h1>Exclusive</h1>
<h1>Offers for you</h1>
<p>Don't miss out on the full outfit deal.</p>
<button>Check Now</button>
</div>
<div className="offers-right">
<img src={dhakasaree} alt=""/>
<img src={pasnidress} alt=""/>
<img src={coat3} alt=""/>
<img src={raiattire} alt=""/>
<img src={tamagdress} alt=""/>

</div>
    </div>
  )
}

export default Offers