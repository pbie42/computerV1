import { handleError } from './error';
import { ICommons } from './interfaces';
import { parse } from './parse';
function main() {
	let commons: ICommons = {
		degree0: [],
		degree1: [],
		degree2: []
	};
	if (process.argv.length <= 2) return handleError('Too few arguments');
	if (process.argv.length >= 4) return handleError('Too many arguments');
	for (let j = 0; j < process.argv.length; j++)
		console.log(j + ' -> ' + process.argv[j]);

	const equation: string[] = process.argv[2].split(' ').filter(eq => eq);
	console.log('equation', equation);
	if (!parse(equation)) handleError('Invalid Equation');
	console.log('commons', commons);
	// reduceEquation(equation);
}

main();
