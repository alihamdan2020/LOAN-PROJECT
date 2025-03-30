export default function MyComponent({label,state,setState}){
    return(
        <div className='group-controls'>
        <label>{label}</label>
        <input value={state} onChange={(e)=>setState(e.target.value)}>
        </input>
        </div>
    )
}