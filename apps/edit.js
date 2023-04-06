export const start = () => {
	document.body.contentEditable = 'true';
	document.designMode='on';
};

export const stop = () => {
	document.body.contentEditable = 'false';
	document.designMode='off';
};
