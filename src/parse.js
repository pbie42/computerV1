function isNum(str) {
	return /^\d+$/.test(str);
}

function isAlpha(str) {
	return /^[a-zA-Z]+$/.test(str);
}

function handlePower(powerPiece) {
	const [letter, power] = powerPiece.split('^');
	if (!power) {
		if (powerPiece.length === 1 && isAlpha(powerPiece)) return true;
		console.log('Invalid Structure');
		return false;
	}
	if (!isAlpha(letter) || letter.length > 1) {
		console.log('Invalid Variable');
		return false;
	}
	if (!isNum(power)) {
		console.log('Invalid Power');
		return false;
	}
	if (power > 2) {
		console.log('Degree greater than 2');
		return false;
	}
	return true;
}

function parse(equation) {
	let variable = null;
	let equals = 0;
	let x = -1;
	while (++x < equation.length) {
		if (x % 2 === 0) {
			if (isNaN(equation[x])) {
				if (!handlePower(equation[x])) return false;
				else {
					const newVar = equation[x][0];
					if (!variable) variable = newVar;
					else if (newVar !== variable) {
						console.log('Only one variable allowed');
						return false;
					}
				}
			}
		} else {
			if (
				equation[x] != '*' &&
				equation[x] != '+' &&
				equation[x] != '-' &&
				equation[x] != '/' &&
				equation[x] != '='
			) {
				console.log('invalid operator', equation[x]);
				return false;
			}
			if (equation[x] === '=') equals++;
			if (equals > 1) return false;
		}
	}
	return true;
}

module.exports = {
	parse
};
