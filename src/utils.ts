function isNum(str: string): boolean {
	return /^\d+$/.test(str);
}

function isAlpha(str: string): boolean {
	return /^[a-zA-Z]+$/.test(str);
}

function isValidOperator(op: string): boolean {
	if (op === '+' || op === '-') return true;
	return false;
}

function isNotOperator(str: string): boolean {
	if (str != '*' && str != '+' && str != '-' && str != '=') return true;
	return false;
}

function isOperator(str: string): boolean {
	if (str === '*' || str === '+' || str === '-' || str === '=') return true;
	return false;
}

export { isAlpha, isOperator, isNotOperator, isNum, isValidOperator };
