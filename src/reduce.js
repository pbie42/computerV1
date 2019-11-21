function isOperator(op) {
	if (op === '+' || op === '-' || op === '*') return true;
	return false;
}

function reduceEquation(equation) {
	let x = 0;
	while (x < equation.length) {
		if (x % 2 === 0) {
			if (!isNaN(equation[x])) {
			}
		}
		x++;
	}
}

module.exports = {
	reduce
};
