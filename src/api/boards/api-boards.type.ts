export interface ICreateBoardData {
	title: string;
}

export interface IDeleteBoardData {
	id: string;
}

export interface IUpdateBoardData {
	id: string;
	title: string;
}

export interface ICreateCardData {
	boardId: string;
	title: string;
	content: string;
}

export interface IDeleteCardData {
	boardId: string;
	cardId: string;
}

export interface IMoveCardData {
	sourceBoardId: string;
	destinationBoardId: string;
	startIndex: number;
	endIndex: number;
}

export interface IReorderCardData {
	boardId: string;
	startIndex: number;
	endIndex: number;
}
