import { IExpressions } from './interfaces';

function printDegree(num: number, degree: number, variable: string): string {
	if (num === 0) return '';
	if (degree === 0) {
		return `${num} * ${variable}^0`;
	} else if (degree === 1) {
		if (num < 0) return `- ${num * -1} * ${variable}^1`;
		return `+ ${num} * ${variable}^1`;
	} else {
		if (num < 0) return `- ${num * -1} * ${variable}^2`;
		return `+ ${num} * ${variable}^2`;
	}
}

export function reduceEquation(expressions: IExpressions) {
	let degree0Left = 0;
	let degree1Left = 0;
	let degree2Left = 0;
	let degree0Right = 0;
	let degree1Right = 0;
	let degree2Right = 0;
	expressions.left.degree0.forEach(d => (degree0Left += Number(d)));
	expressions.left.degree1.forEach(d => (degree1Left += Number(d)));
	expressions.left.degree2.forEach(d => (degree2Left += Number(d)));
	expressions.right.degree0.forEach(d => (degree0Right += Number(d)));
	expressions.right.degree1.forEach(d => (degree1Right += Number(d)));
	expressions.right.degree2.forEach(d => (degree2Right += Number(d)));
	if (degree0Right >= 0) degree0Left = degree0Left - degree0Right;
	else degree0Left = degree0Left = degree0Left + degree0Right * -1;
	if (degree1Right >= 0) degree1Left = degree1Left - degree1Right;
	else degree1Left = degree1Left = degree1Left + degree1Right * -1;
	if (degree2Right >= 0) degree2Left = degree2Left - degree2Right;
	else degree2Left = degree2Left = degree2Left + degree2Right * -1;
	console.log(
		'Reduced Form:',
		`${printDegree(degree0Left, 0, 'X')} ${printDegree(
			degree1Left,
			1,
			'X'
		)} ${printDegree(degree2Left, 2, 'X')} = 0`
	);
}
