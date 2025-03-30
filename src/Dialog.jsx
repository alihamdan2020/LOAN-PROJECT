import myStyle from "./Calculator/calculator.module.css"
import CloseButton from "./CloseButton"
import { useContext } from "react"
import { dialogContext } from "./contexts/DialogContext"

export default function Dialog(){
    const a= useContext(dialogContext)
    if(a.visibility===true)
    return (
        <div className={myStyle.dialog} style={{display:a.visibility}}>
            Answer is {a.response} 
            <CloseButton /> 
            {/* as we can see Componet Button dors not takes any props or parameter */}
        </div>
    )
}
