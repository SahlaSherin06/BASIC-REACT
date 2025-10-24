
import {useState} from "react"


function Counter(){
	const[count,setCount]=useState()

	const increase=()=>{setCount(count+1)}
	const decrease=()=>{setCount(count-1)}
	const reset=()=>{setCount(0)}


	return(
		<div>
			<h3>Count:{count}</h3>
			<button onClick={increase}>Increase</button>
			<button onClick={decrease}>Decrease</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
}
export default Counter















