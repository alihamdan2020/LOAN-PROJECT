import { useContext } from "react"
import { dialogContext } from "./contexts/DialogContext"



export default function CloseButton() {
const a=useContext(dialogContext)    


    return (
        <button
        onClick={a.action}
            style=
            {
                {
                    backgroundColor: "orange",
                    color: "white",
                    borderRadius:"5px",
                    border:"none",
                    outline:"0",
                    marginInline:"20px",
                    fontSize:"50px",
                    cursor:"pointer",
                    paddingInline:"10px"

                }
            }>close 
             </button>
    )
}