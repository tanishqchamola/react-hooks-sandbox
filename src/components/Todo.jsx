import { useState, useEffect, useRef } from "react";

const Todo = () => {
	const [loading, setLoading] = useState(true);
	const [todo, setTodo] = useState({});

	const isMounted = useRef(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setTimeout(() => {
					if (isMounted.current) {
						console.log(isMounted);
						setTodo(data);
						setLoading(false);
					} else {
						console.log("Component unmounted");
					}
				}, 3000);
			});

		// runs when component in unmounted
		return () => {
			isMounted.current = false;
		};
	}, [isMounted]);

	return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>;
};

export default Todo;
