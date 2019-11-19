const { parse } = require('./src/parse');
const { handleError } = require('./src/error');

function main() {
	if (process.argv.length <= 2) return handleError('Too few arguments');
	if (process.argv.length >= 4) return handleError('Too many arguments');
	for (let j = 0; j < process.argv.length; j++)
		console.log(j + ' -> ' + process.argv[j]);

	const equation = process.argv[2].split(' ');
	console.log('equation', equation);
	if (!parse(equation)) handleError('Invalid Equation');
}

main();
