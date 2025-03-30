import React from 'react'
import Card from './Card'
import { places } from '../data'
import { Cards } from '../contexts/imageSize'

function List() {
  
  return (
    <div>
        {places.map((country)=>{
        return(   
        <Cards.Provider value={{countryName:country}}>
        <Card />
        </Cards.Provider> 
        )
        })}
        
    </div>
  )
}

export default List