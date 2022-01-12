import React, { useState, useCallback } from "react";

const UseCallbackExample = () => {
	const [tasks, setTasks] = useState([]);

	const addTask = useCallback(() => {
		setTasks((prevState) => [...prevState, "some task"]);
	}, [setTasks]);

	return (
		<>
			<Button addTask={addTask} />
			{tasks.map((task, index) => (
				<p key={index}>{task}</p>
			))}
		</>
	);
};

const Button = React.memo(({ addTask }) => {
	console.log("button rendered");

	return (
		<div>
			<button onClick={addTask} className="btn btn-primary">
				btn
			</button>
		</div>
	);
});

export default UseCallbackExample;
