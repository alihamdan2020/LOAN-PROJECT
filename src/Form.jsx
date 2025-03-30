import { useState } from 'react'
import Modal from './Modal'
import './form.css'
import MyComponent from './MyComponent';
import { useContext } from 'react';
import { userContext } from './contexts/GlobalContext';

let msg="";

export default function Form() {
 let userInfo=useContext(userContext)     
        const [errorMessage,setErrorMessage]=useState(null);
        const [loanInfo, setLoanInfo] = useState({
                name: "",
                family:"",
                phone: "",
                age: "",
                isEmployee: true,
                salary: "2"
        })
        const styleBtn= loanInfo.name  ===      ""  || 
                        loanInfo.phone ===      ""  ||
                        loanInfo.age   ===      ""  ||
                        loanInfo.family===      ""

       
        const [showOrNot, setShowOrNot] = useState(false)

        function handleSubmitClick(e) {
                e.preventDefault();
                if(isNaN(loanInfo.phone) || (loanInfo.phone.length<7 || loanInfo.phone.length>12))
                {
                        setErrorMessage("phone number must be between 8 and 12 digits")    
                }      
                else
                        setErrorMessage(null)    
                        setShowOrNot(true)
        }
     
        function handleSetLoanInfoFamily (value){
                setLoanInfo({...loanInfo,family:value})
        }
        function handleSetLoanInfoPhone (value){
                setLoanInfo({...loanInfo,phone:value})
        }

        return (
                <div className='formHolder'>
                        {/* in order to use setLoanInfo in my Modal, i pass it as a props, in another way setStatus works as setLoanInfo, but it is not recommended the best so;ution is on claculator.jsx with dialog.jsx */}
                        <Modal status={showOrNot} setStatus={setShowOrNot} msg={errorMessage}/>
                        <form>
                                <h3>welcome Mr {userInfo.name} - {userInfo.family} </h3>
                                <div className='group-controls'>
                                        <label>name</label>
                                        <input type="text"
                                                value={loanInfo.name}
                                                onChange={(e) => setLoanInfo({ ...loanInfo, name: e.target.value })}>
                                        </input>
                                </div>
                                {/* just to learn, we can make all the form in same componet and we can set each div (group-controles) as a seperate component an we past the loanState.family as a props to the component and the function 'handleSetLoanInfoFamily' that takes value from component and update family in the state, if we use this we need to create a function for each MyComponent, suppose i want use this method for phone number so i need handleSetLoanInfoPhone */}
                                
                                <MyComponent label="family" state={loanInfo.family} setState={handleSetLoanInfoFamily} />

                                <MyComponent label="phone number" state={loanInfo.phone} setState={handleSetLoanInfoPhone} />
                             
                                <div className='group-controls'>
                                        <label>age</label>
                                        <input type="text"
                                                value={loanInfo.age}
                                                onChange={(e) => setLoanInfo({ ...loanInfo, age: e.target.value })} />
                                </div>
                                <div className='group-controls'>
                                        <label>are you an employee</label>
                                        <input type="checkbox"
                                                checked={loanInfo.isEmployee}
                                                onChange={(e) => setLoanInfo({ ...loanInfo, isEmployee: e.target.checked })}></input>
                                </div>
                                <div className='group-controls'>
                                        <label>salary</label>
                                        <select value={loanInfo.salary}
                                                onChange={(e) => setLoanInfo({ ...loanInfo, salary: e.target.value })}>
                                                <option >salaray less than 500</option>
                                                <option >salaray between 500 and 1000</option>
                                                <option >salaray greather than 1000</option>
                                        </select>
                                </div>
                                <div className='group-controls'>
                                        <button 
                                        onClick={handleSubmitClick}
                                        disabled={styleBtn}
                                        //this is another way how to call a className based of styleBtn,by default class disabled is an empty string, if one of the fileds is empty then class disabled equat to class disabled in css file (form.css)
                                        className={styleBtn ? 'disabled' : ''}>submit</button>
                                </div>
                                <div className='group-controls'>
                                        {/* since in jsx we can not say disable="false" we use state to change from false to true*/}
                                        <button disabled={styleBtn}
                                        onClick={handleTestClick}
                                        style={{
                                        backgroundColor:styleBtn? 'black' : 'blue',
                                        cursor:styleBtn? 'none' : 'pointer',
                                        }}
                                        >test</button>
                                        {/* explanation: no need to create state for button to toggle between true and false or vice versa, because since are all fields are empty or loanInfo.name=="" true || loanInfo.age=="" true || loanInfor.phone=="" one of them is true then result is true dthen disabled={true} to change to false must all of fileds are not empty*/}
                                </div>
                        </form>
                        <div id="result"></div>                       
                </div>
        )
        function handleTestClick(e) {
                e.preventDefault()
                let a = document.getElementById("result");
                let salaryId = loanInfo.salary;
                let salaryDesc = salaryId === "1" ? "less than 500" : salaryId === "2" ? "between 500 and 1000" : " greater than 1000"
                a.innerHTML = `name = ${loanInfo.name}
                                family =${loanInfo.family}
                             phone= ${loanInfo.phone}
                             age=   ${loanInfo.age}  
                             status = ${loanInfo.isEmployee == true ? 'employee' : 'not employee'}
                             salary = ${salaryDesc}`;
                console.log(loanInfo)
        }
}