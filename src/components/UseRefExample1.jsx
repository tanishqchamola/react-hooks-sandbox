import { useRef } from "react";

const UseRefExample1 = () => {
	const inputRef = useRef();
	const paraRef = useRef();
	const maleRadio = useRef();
	const femaleRadio = useRef();

	function handleSubmit(e) {
		e.preventDefault();
		console.log(inputRef.current.value);

		if (inputRef.current.value.trim()) {
			if (maleRadio.current.checked) {
				paraRef.current.value = `Hello Mr. ${inputRef.current.value}`;
			} else if (femaleRadio.current.checked) {
				paraRef.current.value = `Hello Ms. ${inputRef.current.value}`;
			} else {
				paraRef.current.value = "Gender not selected";
			}
		} else {
			paraRef.current.value = "Please enter a name";
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input type="text" id="name" className="form-control mb-2 w-50 " ref={inputRef} />
				</div>
				<div className="form-check">
					<input type="radio" ref={maleRadio} name="gender" id="male" className="form-check-input" />
					Male
				</div>
				<div className="form-check">
					<input type="radio" ref={femaleRadio} name="gender" id="female" className="form-check-input" />
					Female
				</div>
				<button type="submit" className="btn btn-primary btn-block">
					Submit
				</button>
			</form>
			<p ref={paraRef}></p>
		</div>
	);
};

export default UseRefExample1;
