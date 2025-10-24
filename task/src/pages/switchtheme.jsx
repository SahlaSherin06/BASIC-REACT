import { useState } from "react";
import "./switchtheme.css"



function SwitchTheme(){
	const[darkMode,setColor]=useState(false)

	function Change(){
		setColor(!darkMode);
	}

	return(
		<div className={darkMode? "dark align-to-centre" : "light align-to-centre"}>
			<button onClick={Change}>Switch Theme</button>
		</div>
	)
}
export default SwitchTheme 










