function isValidOperator(op) {
	if (op === '+' || op === '-') return true;
	return false;
}

function reduceEquation(eq, commons) {
	let x = 0;
	while (x < eq.length) {
		if (x % 2 === 0) {
			if (!isNaN(eq[x])) {
				if (eq[x + 1] && isValidOperator(eq[x + 1])) {
					if (eq[x - 1] && eq[x - 1] === '-') {
					}
				}
			}
		}
		x++;
	}
}

module.exports = {
	reduce
};
