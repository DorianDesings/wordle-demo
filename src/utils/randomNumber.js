export const randomNumber = (min, max) => {
	const random = Math.floor(Math.random() * (max - min + 1) + min);
	return random;
};

const randomColor = () => Math.floor(Math.random() * 255);

const setBackgroundColor = () => {
	return (document.body.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
};

console.log(setBackgroundColor());
