
// import { useState } from "react";

import { useState } from "react";

// function ColorChanger(){
// 	const[color,setColor]=useState("")

// 	return(
// 		<div>
// 			<input type="text" placeholder="Enter Color" onChange={(e)=>setColor(e.target.value)}/>
// 			<div
// 			style={{
// 				backgroundColor:color || "white",
// 				width:"150px",
// 				height:"150px"
// 			}}	
// 			></div>
// 		</div>
// 	)
// }
// export default ColorChanger
























function ColorChanger(){
	const[color,setColor]=useState("")

	return(
		<div>
			<input type="text"  placeholder="Enter a Color" onChange={(e)=>setColor(e.target.value)} />
			<div style={{
				backgroundColor:color || "white",
				height:"300px",
				weight:"300px"
			}}></div>
		</div>
	)
}
export default ColorChanger