function parse(equation) {
	let x = -1;
	let valid = true;
	while (++x <= equation.length) {
		if (x === 0) {
			if (equation[x].match(/[a-z]/i)) {
				valid === false;
				break;
			}
		}
	}
	return valid;
}

module.exports = {
	parse
};
