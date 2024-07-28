/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import *as style from './MyProjects.css'
export function Project(props){
    const {title,text,img}=props.data 
    const handleClick=()=>{
        console.log(title)
        const gallery=document.createElement("div")
        const img_box_1=document.createElement("div")
        const img_box_2=document.createElement("div")
        gallery.classList.add('gallery')
        gallery.setAttribute('id','gallery')
        document.getElementById('box').appendChild(gallery)
        makeButton()
        gallery.appendChild(img_box_1)
        gallery.appendChild(img_box_2)
        if(title=='Weather Application'){
            const img_1=document.createElement('img')
            img_1.src=img[0]
            const img_2=document.createElement('img')
            img_2.src=img[1]
            const p1=document.createElement('p')
            const p2=document.createElement('p')
            p1.innerHTML='Laptop Screen'
            p2.innerText='Mobile Screen'
            img_box_1.appendChild(img_1)
            img_box_1.appendChild(p1)
            img_box_2.appendChild(img_2)
            img_box_2.appendChild(p2)   
        }else{
            for(let i=0;i<=Math.floor(img.length/2);i++){
                const photo=document.createElement('img')
                photo.src=img[i]
                photo.setAttribute('id','photos')
                img_box_1.appendChild(photo)
            }
            for(let i=Math.floor(img.length/2)+1;i<=img.length-1;i++){
                const photo=document.createElement('img')
                photo.src=img[i]
                photo.setAttribute('id','photos')
                img_box_2.appendChild(photo)
            }
            makeArrowButton()
        }
    }
    function makeButton(){
        const button=document.createElement('button')
        button.innerHTML='X'
        button.classList.add('remove-gallery')
        document.getElementById('gallery').appendChild(button)
        button.onclick=()=>{
            document.getElementById('gallery').remove()
        }
    }
    function makeArrowButton(){
        const button=document.createElement('button')
        button.innerHTML='>'
        button.classList.add('next-photos')
        document.getElementById("gallery").appendChild(button)
        button.onclick=()=>{
            document.getElementById('photos').remove()
            if(document.getElementById('photos')==null){
                document.getElementById('gallery').remove()
            }
        }
    }
    return(<>
    <div className="box" id='box'>
        <h2 className="title">{title}</h2>
        <p>{text}</p>
        <div className="images">
            <img src={img[0]} alt="" />
            <button className="see-more" onClick={handleClick} >
                See Photos
            </button>
        </div>
    </div>
    </>)
}