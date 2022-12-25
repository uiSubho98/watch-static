import React from 'react';
import './Banner.css'
import homeBanner from "../../assets/banner2.png"

const Banner = () => {
    return (
        <div className='top-banner'>
        <div className="banner-text">
            <h2>Supporting your journey <br></br> towards mental <span className='highlight'>wellbeing</span></h2>
            </div>   
            <div className="banner-image">
                <img src={homeBanner} alt="banner_img" />
                </div>     
      </div>
    );
};

export default Banner;