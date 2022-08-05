import React from "react";
function list() {
	let arr = [
		{
			name: "john",
			age: 22,
			country: "london"

		},
		{
			name: "jerry",
			age: 55,
			country: "France"
		}
	]
	let newArr = arr.map(items => <p>My name is {items.name}, i am {items.age} years old. i live in {items.country}..</p>)
	return (
		<div> {newArr}</div>
	)

}

export default list