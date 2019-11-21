import { ICommons } from './interfaces';

function isValidOperator(op: string): boolean {
	if (op === '+' || op === '-') return true;
	return false;
}

function reduceEquation(eq: string[], commons: ICommons) {
	let x = 0;
	while (x < eq.length) {
		if (x % 2 === 0) {
			if (!isNaN(Number(eq[x]))) {
				if (eq[x + 1] && isValidOperator(eq[x + 1])) {
					if (eq[x - 1] && eq[x - 1] === '-') {
					}
				}
			}
		}
		x++;
	}
}

export { reduceEquation };
