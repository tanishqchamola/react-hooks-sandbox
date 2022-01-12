import { useState, useEffect, useRef, useMemo } from "react";

const UseMemoExample = () => {
	const [number, setNumber] = useState(1);
	const [increment, setIncrement] = useState(0);

	const renders = useRef(1);

	useEffect(() => {
		renders.current = renders.current + 1;
	});

	const handleClick = () => {
		setIncrement((prevState) => {
			console.log(prevState + 1);
			return prevState + 1;
		});
	};

	// on click of Re-render button getfactorials runs again
	// const factorial = getFactorial(number);

	// on click of Re-render button getfactorials doesn't run again and instead use memoised value
	const factorial = useMemo(() => getFactorial(number), [number]);

	return (
		<div>
			<input type="number" value={number} onChange={(e) => setNumber(e.target.value)} className="form-control w-25" />
			<h2 className="my-3">
				The factorial of {number} is : {factorial}
			</h2>
			<button onClick={handleClick} className="btn btn-info">
				Re-render
			</button>
			<h3>Renders: {renders.current}</h3>
		</div>
	);
};

function getFactorial(n) {
	console.log("n:", n); //expensive operation (i.e. time consuming)
	return n <= 0 ? 1 : n * getFactorial(n - 1);
}

export default UseMemoExample;
