import { IExpressions } from './interfaces';
import { isValidOperator } from './utils';

function handleOperator(
	eq: string[],
	x: number,
	equalsFound: boolean,
	expressions: IExpressions
) {
	if (eq[x - 1] && eq[x - 1] === '-') {
		let num: number = Number(eq[x]) * -1;
		if (!equalsFound) expressions.left.degree1.push(`${num}`);
		else expressions.right.degree1.push(`${num}`);
	} else if (eq[x - 1] && eq[x - 1] === '+') {
		if (!equalsFound) expressions.left.degree1.push(eq[x]);
		else expressions.right.degree1.push(eq[x]);
	} else if (!eq[x - 1]) {
		if (!equalsFound) expressions.left.degree1.push(eq[x]);
		else expressions.right.degree1.push(eq[x]);
	} else console.log('Problem with ', eq[x]);
}

function sortDegrees(
	power: string,
	expPiece: string,
	expressions: IExpressions,
	side: string
) {
	if (power && Number(power) === 0) expressions[side].degree0.push(expPiece);
	else if (Number(power) === 1 || power === undefined)
		expressions[side].degree1.push(expPiece);
	else if (Number(power) === 2) expressions[side].degree2.push(expPiece);
}

function sortEquation(eq: string[], expressions: IExpressions): boolean {
	let x: number = -1;
	let equalsFound: boolean = false;
	while (++x < eq.length) {
		if (x % 2 === 0) {
			let num = Number(eq[x]);
			if (!isNaN(num)) {
				if (eq[x + 1] && isValidOperator(eq[x + 1]))
					handleOperator(eq, x, equalsFound, expressions);
				else if (eq[x + 1] && eq[x + 1] === '*' && eq[x + 2]) {
					const [letter, power] = eq[x + 2].split('^');
					if (eq[x - 1] && eq[x - 1] === '-') num = num * -1;
					if (equalsFound) {
						sortDegrees(power, `${num}`, expressions, 'right');
					} else {
						sortDegrees(power, `${num}`, expressions, 'left');
					}
					if (eq[x + 3] && eq[x + 3] === '=') equalsFound = true;
				} else if (eq[x + 1] && eq[x + 1] === '=') {
					if (eq[x - 1] && eq[x - 1] === '-') num = num * -1;
					expressions.left.degree0.push(`${num}`);
					equalsFound = true;
				}
			}
		}
	}
	return true;
}

export { sortEquation };
