import useFetch from "../hooks/useFetch";

const CustomHookExample1 = () => {
	const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts", {});

	if (loading) {
		return <h3>Loading Data...</h3>;
	}

	return (
		<div>
			{data.map((post) => (
				<h5 key={post.id}>
					{post.id}&ensp;{post.title}
				</h5>
			))}
		</div>
	);
};

export default CustomHookExample1;
