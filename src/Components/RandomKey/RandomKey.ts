const RandomKey = () => {
	return (
		Math.floor(Math.random() * 256) * Math.floor(Math.random() * 1000) +
		Math.random() * Math.round(Math.random() * 23457542)
	);
};

export default RandomKey;
