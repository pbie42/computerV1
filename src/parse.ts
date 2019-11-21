import { isAlpha, isNotOperator, isNum, isOperator } from './utils';

function verifyPower(powerPiece: string): boolean {
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
	if (Number(power) > 2) {
		console.log('Degree greater than 2');
		return false;
	}
	if (Number(power) < 0) {
		console.log('Negative degrees not allowed');
		return false;
	}
	return true;
}

function parse(equation: string[]): boolean {
	let variable: string = '';
	let equals: number = 0;
	let x: number = -1;
	while (++x < equation.length) {
		if (x % 2 === 0) {
			if (isNaN(Number(equation[x]))) {
				if (!verifyPower(equation[x])) return false;
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
			if (isNotOperator(equation[x])) {
				console.log('invalid operator', equation[x]);
				return false;
			}
			if (isOperator(equation[x]) && !equation[x + 1]) {
				console.log('invalid structure ending', equation[x]);
				return false;
			}
			if (equation[x] === '=') equals++;
			if (equals > 1) {
				console.log('Too many equals signs');
				return false;
			}
		}
	}
	return true;
}

export { parse };
