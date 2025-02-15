import './header.css';
import Lottie from 'lottie-react';
import rocket from '../../rocket.json'
import gg from '../../assets/ggt.svg'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
          <h1 className='gradient__text'>Gary Gold Trading</h1>
          <p>Unlock the power of gold trading with real-time insights and expert guidance. Invest, trade, and grow your wealth with confidence!</p>

          <a href="https://t.me/Gary_TheTrader" rel="noopener noreferrer" target="_blank" ><div className='hero-btn'>Let's Trade <Lottie className="siren " loop={true} animationData={rocket}></Lottie></div></a>
          

           {/* <div className='gpt3__header-content__input'>
            <input type="email" placeholder='Your Email Address' />
            <button type='button'>Get Started</button>
           </div> */}
          
          </div>
          <div className='gpt3__header-image'>
            <img src= {gg} alt="hero logo" />
          </div>
    </div>
  )
}

export default Header