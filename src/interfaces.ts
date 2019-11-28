export interface ICommons {
	degree0: string[];
	degree1: string[];
	degree2: string[];
}

export interface IExpressions {
	left: ICommons;
	right: ICommons;
	[key: string]: ICommons;
}
