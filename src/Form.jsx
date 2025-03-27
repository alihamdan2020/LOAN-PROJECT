import { useState } from 'react'
import Modal from './Modal'
import './form.css'


let msg="";

export default function Form() {
      
        const [errorMessage,setErrorMessage]=useState(null);
        const [loanInfo, setLoanInfo] = useState({
                name: "",
                phone: "",
                age: "",
                isEmployee: true,
                salary: "2"
        })
        const styleBtn=loanInfo.name=="" || loanInfo.phone==""||loanInfo.age==""

       
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
        return (
                <div className='formHolder'>
                        <Modal status={showOrNot} setStatus={setShowOrNot} msg={errorMessage}/>
                        <form>
                                <div className='group-controls'>
                                        <label>name</label>
                                        <input type="text"
                                                value={loanInfo.name}
                                                onChange={(e) => setLoanInfo({ ...loanInfo, name: e.target.value })}>
                                        </input>
                                </div>
                                <div className='group-controls'>
                                        <label>phone</label>
                                        <input type="text"
                                                value={loanInfo.phone}
                                                onChange={(e) => setLoanInfo({ ...loanInfo, phone: e.target.value })}>
                                        </input>
                                </div>
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
                                        //this is another way how to call a className baed of styleBtn,by default class disabled is an empty string, if one of the fileds is empty then class disabled equat to class disabled in css file (form.css)
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

                </div>
        )
        function handleTestClick(e) {
                e.preventDefault()
                let a = document.getElementById("result");
                let salaryId = loanInfo.salary;
                let salaryDesc = salaryId === "1" ? "less than 500" : salaryId === "2" ? "between 500 and 1000" : " greater than 1000"
                a.innerHTML = `name = ${loanInfo.name}
                             phone= ${loanInfo.phone}
                             age=   ${loanInfo.age}  
                             status = ${loanInfo.isEmployee == true ? 'employee' : 'not employee'}
                             salary = ${salaryDesc}`;
                console.log(loanInfo)
        }
}