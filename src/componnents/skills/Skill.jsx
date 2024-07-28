/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import *as style from './Skills.css'
export function Skill(props){
    const {img,title,text}=props.data
    return(<>
    <div className="box">
        <img src={img} alt="" />
        <h2 className="title">{title}</h2>
        <p>{text}</p>
    </div>
    </>)
}