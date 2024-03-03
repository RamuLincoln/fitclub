import React from 'react';
import './Hero.css';
import Header from '../header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import {motion} from 'framer-motion';


const Hero = () => {

    const transition = {type: 'string', duration: 3};
  
    const mobile = window.innerWidth<=768 ? true : false;
    return (
    <div className='hero'>

        <div className="blur hero-blur"></div>
        <div className='left-h'>
            <Header />
            {/*The best ad*/}
            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile ? "178px" : '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}
                ></motion.div>
                <span>The best fitness club in the town</span>
            </div>
            {/* Hero heading */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape</span>
                    <span> Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>In here we will help you to shape and build your ideal body and live up your life to fullest 
                    </span>
                </div>
            </div>
            {/* Figures */}
            <div className="figures">
                <div>
                    <span>+150</span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>+987</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+40</span>
                    <span>fitness programs</span>
                </div>
            </div>
            {/* Hero button  */}
            <div className="hero-button">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>
        </div>


        {/* Right Side  */}
        <div className='right-h'>
            <button className="btn">Join now</button>

            <motion.div
                initial={{right: mobile ? "-1rem" : '-1rem '}}
                whileInView={{right: '1rem'}}
                transition={transition} className="heart-rate">
                <img src={heart} alt='heart_rate' />
                <span>Heart rate</span><span>116 Bpm</span>
            </motion.div>
            {/* Hero images */}
            <img src={hero_image} alt='' className='hero-image' />
            <motion.img 
            
            initial={{right: mobile ? "10rem" : '11rem'}}
            whileInView={{right: '20rem'}}
            transition={transition}src={hero_image_back} alt='' className='hero-image_back' />
            {/* Calories  */}
            <motion.div 
                initial={{right: mobile ? "1rem" : '37rem'}}
                whileInView={{right: '28rem'}}
                transition={transition} className="calories">
                <img src={calories} alt='calories' />
                <div>
                <span>Calories burned</span>
                <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero