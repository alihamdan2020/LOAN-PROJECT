import { useState } from "react"
import myStyle from "./Calculator.module.css"
import GroupControls from "../GroupControls/GroupControls";
import Dialog from "../Dialog";

import { dialogContext } from "../contexts/DialogContext";
//why between {} because dialogContext is not default and we can not set it default

import { userContext } from "../contexts/GlobalContext";
import { useContext } from "react";

let answer=0;
export default function Calculator() {
    const [showDialog,setShowDialog]=useState(false)
    const [formInfo,setFormInfo]=useState({
        number1:0,
        number2:0
    });

    function handleDisplayDialog(){
        setShowDialog(false)
    }

    function handleCalculateClick(){
        answer=parseInt(formInfo.number1) + parseInt(formInfo.number2)
        setFormInfo({...formInfo,number1:0,number2:0})
        setShowDialog(true)
    }
    
    function handleClearClick(){
        // we can not call setFormIfo twice to reset number 1 and number 2,because if we have 2 setFormInfo the second one overrid the first one, so the number 1 remian as it was and number 2 change to 0,so we call it just once and we rest the 2 fields
        setFormInfo({...formInfo,number1:0,number2:0})      
    }
    function changeNumberOne(x){
        setFormInfo({...formInfo,number1:x})
    }

    function changeNumberTwo(x){
        setFormInfo({...formInfo,number2:x})
    }

    let userInfor=useContext(userContext)
    return (
        <div className={myStyle.formHolder}>
            {/* handleDisplayDialog passed to dialog, then dialog passed to CloseButton, then grandChild will execute the handleDisplayDialog, it is complicated, so we need a global declaration pass over all components, we use (useContext), so useContext is  global declaration that can showen in all child of  paraent, heare the Calculator.jsx is a parent, any useContext used in Form.jsx can be showen in all its sibling, if you return to App.jsx we decalre a global cintext in orde to use it in all components, since App.jsx is the first parent */}
            
            {/* <Dialog response={answer} visibility={showDialog} parentFunction={handleDisplayDialog}/> we use Dialog below without any props or parameter*/}
            <dialogContext.Provider value={{visibility:showDialog,response:answer,action:handleDisplayDialog}}>
                <Dialog/>
            </dialogContext.Provider>
            <h1>Hello Mr {userInfor.name} {userInfor.family}</h1>
            <form action="">
                <fieldset>
                    <legend>calculator</legend>
             <GroupControls style={myStyle.group_controls} value={formInfo.number1}
             fnChange={changeNumberOne} />

             <GroupControls style={myStyle.group_controls} value={formInfo.number2}
             fnChange={changeNumberTwo} />

             

                <div className={`${myStyle.group_controls} ${myStyle.buttons}`}>
                <button type="button" onClick={handleCalculateClick}>+</button> <button onClick={handleClearClick} type="button">clear</button>
                </div>
                </fieldset>
            </form>
        </div>
    )
}