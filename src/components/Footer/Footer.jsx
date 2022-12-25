import React from 'react';
import './Footer.css'
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import fbColor from '../../assets/fb color.png'
import instaColor from '../../assets/insta color.png'
import linkColor from '../../assets/linked in color.png'
import tweetColor from '../../assets/twiter colo.png'
import utubeColor from '../../assets/youtube color.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="text-center m-auto footer-content">
                <a href='https://www.facebook.com/watchyourthoughts21-110368098175219/' target="_blank" className="col Flogo">
                    <img src={fbColor} alt="fb_img"></img>
                </a>
                <a href='https://www.linkedin.com/company/watch-your-thoughts/about/?viewAsMember=true' target="_blank" className="col Flogo">
                    <img src={linkColor} alt="fb_img" className='link'></img>
                </a>
                <a href='https://instagram.com/watchyourthoughts21?igshid=YmMyMTA2M2Y=' target="_blank" className="col Flogo">
                    <img src={instaColor} alt="fb_img" className='insta'></img>
                </a>
                <a href='https://twitter.com/WYT_22' target="_blank" className="col Flogo">
                    <img src={tweetColor} alt="fb_img"></img>
                </a>
                <a href='https://www.youtube.com/channel/UCbjOps6gY09r-Kbohhc6QpA/videos' target="_blank" className="col Flogo">
                    <img src={utubeColor} alt="fb_img"></img>
                </a>
            </div>
            <p className='text-center mt-3 company-name'>COPYRIGHT 2022 WATCH YOUR THOUGHTS ALL RIGHT RESERVED.</p>
        </div>
    );
};

export default Footer;