export interface ICreateBoardData {
	title: string;
}

export interface IEditBoardData {
	id: string;
	title: string;
}

export interface IDeleteBoardData {
	id: string;
}

export interface IReorderBoardData {
	startIndex: number;
	endIndex: number;
}
