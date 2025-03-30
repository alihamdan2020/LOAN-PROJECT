import myStyle from './gallery.module.css'
import Card from './Card'
import React from 'react'
import List from './LIst'

import { useState } from 'react'

import { useContext } from 'react'
import {imageSizeContext} from './../contexts/imageSize'
import { userContext } from '../contexts/GlobalContext'

function Gallery() {
  const [imageSize,setImageSize]=useState(true)
  
let a =useContext(userContext)
let imageSizeValue = imageSize ? "50px" : "20px"

  return (
   <div>
    <h1>Welcome Mr {a.name} {a.family}</h1>
    <input type='checkBox' checked={imageSize} onChange={(e)=>setImageSize(e.target.checked)}></input> image size if checked then 50px if not then 120px
    {/* here the purpose of using useContext is the imageSizeValue will be passed to the List component then from List component o CArd componet, for that reason we create useContext in the parrent which is the Gallery */}
    <imageSizeContext.Provider value={{imgSize:imageSizeValue}}>
    <List/>
    </imageSizeContext.Provider>

   </div>
  )
}

export default Gallery