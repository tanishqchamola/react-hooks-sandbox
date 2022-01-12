import { useState } from "react/cjs/react.development";
import useLocalStorage from "../hooks/useLocalStorage";

const CustomHookExample2 = () => {
	const [task, setTask] = useLocalStorage("task", "");
	const [completed, setCompleted] = useState(false);
	const [tasks, setTasks] = useLocalStorage("tasks", []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const taskObj = {
			id: Math.floor(Math.random() * 100000),
			title: task,
			completed,
			date: new Date().toLocaleDateString(),
		};

		setTasks([...tasks, taskObj]);
	};

	return (
		<>
			<form className="w-50" onSubmit={handleSubmit}>
				<div className="mb-3 form-group">
					<label htmlFor="task" className="form-label">
						Task
					</label>
					<input type="text" name="task" id="task" className="form-control" value={task} onChange={(e) => setTask(e.target.value)} />
				</div>
				<div className="form-check mb-1">
					<input className="form-check-input" type="radio" name="completed" onChange={() => setCompleted(true)} checked={completed} />
					<label htmlFor="completed">Completed</label>
				</div>
				<div className="form-check mb-3">
					<input className="form-check-input" type="radio" name="completed" onChange={() => setCompleted(false)} checked={!completed} />
					<label htmlFor="completed">Not Completed</label>
				</div>
				<button type="submit" className="btn btn-success">
					Submit
				</button>
			</form>
			<hr />
			{tasks.map((task) => (
				<h3 key={task.id}>{task.title}</h3>
			))}
		</>
	);
};

export default CustomHookExample2;
