import { useState } from 'react'
import Form from "./Form"
import Calculator from "./Calculator/Calculator"
import Gallery from './Gallery/Gallery'
import Header from './Header/Header'
import Main from './ToDo/main'
import { Route, Routes} from 'react-router-dom'


import { useContext } from 'react'
import { userContext } from './contexts/GlobalContext'


export default function App() {
  return (
    <div>
      <Header/>
      <main>
          <userContext.Provider
            value={{
              name:"ali",
              family:"hamdan"
            }}>
        <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/todo" element={<Main/>}/>
        </Routes>
        </userContext.Provider>
       
      </main>
    </div>
  )
}


