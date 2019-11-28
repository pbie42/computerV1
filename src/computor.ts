import { handleError } from './error';
import { IExpressions } from './interfaces';
import { parse } from './parse';
import { reduceEquation } from './reduce';
import { sortEquation } from './sort';
function main() {
	let expressions: IExpressions = {
		left: {
			degree0: [],
			degree1: [],
			degree2: []
		},
		right: {
			degree0: [],
			degree1: [],
			degree2: []
		}
	};
	if (process.argv.length <= 2) return handleError('Too few arguments');
	if (process.argv.length >= 4) return handleError('Too many arguments');
	for (let j = 0; j < process.argv.length; j++)
		console.log(j + ' -> ' + process.argv[j]);

	const equation: string[] = process.argv[2].split(' ').filter(eq => eq);
	console.log('equation', equation);
	if (!parse(equation)) handleError('Invalid Equation');
	sortEquation(equation, expressions);
	console.log('expressions', expressions);
	reduceEquation(expressions);
}

main();
