/* eslint-disable no-unused-vars */
import *as style from './Header.css'
export function Header(){
    return(
    <>
    <div className="header">
        <p className="title">MH<span>||</span>Dev</p>
        <div className="buttons">
            <button>About Me</button>
            <a href="#skills">My Skills</a>
            <a href="#projects">My Projects</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact us</a>
        </div>
    </div>
    </>)
}