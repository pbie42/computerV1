function isNum(str) {
	return /^\d+$/.test(str);
}

function isAlpha(str) {
	return /^[a-zA-Z]+$/.test(str);
}

module.exports = {
	isAlpha,
	isNum
};
