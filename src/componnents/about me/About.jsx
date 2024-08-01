/* eslint-disable no-unused-vars */
import *as style from './About.css'
import photo from '../../assets/myphoto.jpeg'
export function About(){
    return(<>
    <div className="about-container">
        <div className="left-side">
            <div className="me">Hello I am</div>
            <p className="name">Mr. Mahi Hassen</p>
            <p className='spec'>A React JS Front-end Web Developer.</p>
            <div className="buttons">
                <a href="#contact">Contact Me</a>
                <a href="#projects">My Work</a>
            </div>
        </div>
        <div className="right-side">
            <img src={photo} alt="" />
        </div>
    </div>
    </>)
}