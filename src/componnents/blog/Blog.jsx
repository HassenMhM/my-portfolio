/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import *as style from './Blog.css'
import {data} from './data.js'
import img_1 from '../../assets/blog-photo-1.jpg'
import img_2 from '../../assets/blog-photo-2.jpg'
export function Blog(){
    return(<>
    <div className="blog-container" id='blog'>
        <h1 className="section-title"><span>|</span> Who i'm ? <span>|</span></h1>
        <div className="blog">
            <h2 className="title">{data.title}</h2>
            <p>{data.first_p}</p>
            <div><img src={img_1} alt="" className="blog-photo" /></div>
            <h3>{data.small_title_1}</h3>
            <p>{data.second_p}</p>
            <div><img src={img_2} alt="" className="blog-photo" /></div>
            <h3>{data.small_title_2}</h3>
            <p>{data.third_p}</p>
        </div>
    </div>
    </>)
}