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

function reduceEquation(eq: string[], expressions: IExpressions): boolean {
	let x: number = 0;
	let equalsFound: boolean = false;
	while (x < eq.length) {
		if (x % 2 === 0) {
			if (!isNaN(Number(eq[x]))) {
				if (eq[x + 1] && isValidOperator(eq[x + 1]))
					handleOperator(eq, x, equalsFound, expressions);
				else if (eq[x + 1] && eq[x + 1] === '*') {
				}
			}
		}
		x++;
	}
	return true;
}

export { reduceEquation };
