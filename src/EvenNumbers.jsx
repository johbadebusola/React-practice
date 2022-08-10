import React from "react";
function Even() {
	let even = 0
	let num = [21, 23, 6, 7, 9, 54, 12, 6, 4, 8, 34,]
	let nums = num.map(number => {if (number % 2 >= 1) {
		even++
	} })
return (
	<div>
		{even}
	</div>

)
}

export default Even