import myStyle from './Gallery.module.css'
import React from 'react'
import { useContext } from 'react'
import {imageSizeContext,Cards} from './../contexts/imageSize'


function Card() {
        const b=useContext(Cards)
        const a= useContext(imageSizeContext)
        
  return (
    <div className={myStyle.card}> 
    <p>{b.countryName.name}</p>
    <img style={{width:a.imgSize}} src={`https://i.imgur.com/${b.countryName.imageId}l.jpg`}></img>     
    <p>{b.descreption}</p>
    </div>
  )
}

export default Card
