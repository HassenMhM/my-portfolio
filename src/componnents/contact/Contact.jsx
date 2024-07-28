/* eslint-disable no-unused-vars */
import *as style from './Contact.css'
import img from '../../assets/contact.jpg'
import fb from '../../assets/icons-facebook.png'
import ins from '../../assets/icons-instagram.png'
import gml from '../../assets/icon-gmail.png'
import wts from '../../assets/icon-whatsapp.png'
export function Contact(){
    return(
        <>
        <div className="contact-container" id='contact'>
            <div className="right">
                <h1 className="title">Contact me</h1>
                <p>If you need me in business please contact me with gmail.<br />Follow us in social media !</p>
                <div className="contact-menu">
                    <a href=""><img src={fb} alt="" />facebook</a>
                    <a href=""><img src={ins} alt="" />instagram</a>
                    <a href=""><img src={gml} alt="" />Gmail</a>
                    <a href=""><img src={wts} alt="" />Whatsapp</a>
                </div>
            </div>
            <div className="left">
                <img src={img} alt="" />
            </div>
        </div>
        </>
    )
}