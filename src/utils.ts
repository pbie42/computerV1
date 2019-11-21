function isNum(str: string): boolean {
	return /^\d+$/.test(str);
}

function isAlpha(str: string): boolean {
	return /^[a-zA-Z]+$/.test(str);
}

export { isAlpha, isNum };
