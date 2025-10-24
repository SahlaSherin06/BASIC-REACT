import { useState, useEffect } from "react";

function productList() {
	const [state, setState] = useState([]);

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((response) => response.json())
			.then((data) => {
        console.log(data)
				setState(data.products.slice(3, 9));
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<h2>Product List</h2>
			<ul>
				{state.map((n) => (
					<li keys={n.id}>
						{n.title}====={n.price}
					</li>
				))}
			</ul>
		</>
	);
}
export default productList;
