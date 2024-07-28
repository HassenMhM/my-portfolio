/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import *as style from './MyProjects.css'
import {Project} from './Project'
import {data} from './data'
export function MyProjects(){
    return(<>
    <div className="myprojects-container" id='projects'>
        <h1 className="section-title"> <span>|</span>My Projects <span>|</span> </h1>
        <div className="boxes">
            <Project data={data.weather} id='1'/>
            <Project data={data.dental} id='2'/>
            <Project data={data.quiz} id='3'/>
            <Project data={data.kasper} id='4'/>
        </div>
    </div>
    </>)
}