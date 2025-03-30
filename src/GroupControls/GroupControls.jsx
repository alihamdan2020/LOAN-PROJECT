export default function GroupControls({style,value,fnChange}) {
    return (
        <div className={style}>
            <label htmlFor="num1">number 1</label>
            <input value={value} onChange={(e)=>fnChange(e.target.value)}></input>
        </div>
    )
}