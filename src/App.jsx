import { useState } from 'react'
import Form from "./Form"
import Header from './Header/Header'



export default function App() {
  return (
    <div>
      <Header/>
      <main>
        
        <Form/>
        <div>
          <h3>THIS DIV whoo display info when you click test button EXIST IN APP.JSX WHILE THE FUNCTION EXIST INSIDE FORM.JSX</h3>
        <div id="result"></div>
        </div>
      </main>
    </div>
  )
}


