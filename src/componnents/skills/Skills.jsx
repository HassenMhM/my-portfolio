/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import *as style from './Skills.css'
import {Skill} from './Skill'
import {data} from './data'
export function Skills(){
    return(<>
    <div className="skills-container" id='skills'>
        <h1 className='section-title' ><span>|</span> My Skills <span>|</span></h1>
        <div className="boxes">
            <Skill data={data.html} id='1'/>
            <Skill data={data.css} id='2'/>
            <Skill data={data.js} id='3'/>
            <Skill data={data.es6} id='4'/>
            <Skill data={data.bootstrap} id='5'/>
            <Skill data={data.git} id='6'/>
            <Skill data={data.react} id='7'/>
            <Skill data={data.oop} id='8'/>
            <Skill data={data.frontend} id='9'/>
        </div>
    </div>
    </>)
}