/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import *as style from './Footer.css'
import fb from '../../assets/icons-facebook.png'
import ins from '../../assets/icons-instagram.png'
import gml from '../../assets/icon-gmail.png'
import wts from '../../assets/icon-whatsapp.png'
export function Footer(){
    return(
        <>
        <div className="footer-container">
            <div className="about-me">
                <h2><span>Mr.</span> Hassen Mahi</h2>
                <p>I'm happy to start working with you, if ou need me please contact me in my email</p>
            </div>
            <div className="nav-bar">
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">My Skills</a></li>
                    <li><a href="">My Projects</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>
            <div className="social-media">
                <ul>
                    <li><img src={fb} /><a href="">Hassen Mahi</a></li>
                    <li><img src={ins} /><a href="">hassen_.mh</a></li>
                    <li><img src={wts} className='big' /><a href="">+213 0775 28 27 85</a></li>
                    <li><img src={gml} className='big'/><a href="">hassen.mahi009@gmail.com</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}