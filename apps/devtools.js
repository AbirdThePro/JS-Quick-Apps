export const start = () => {
	let script = document.createElement("script");
	script.id = "devtools";
	console.log(script.id)
	script.src = "https://cdn.jsdelivr.net/npm/eruda";
	document.body.appendChild(script);
	script.onload = () => eruda.init();
};

export const stop = () => {
	document.querySelector("#devtools").remove();
};
