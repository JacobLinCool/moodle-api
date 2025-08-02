export type ParamsDataIds = (number | null)[];

export interface ParamsData {
	/** ID of quiz to delete overrides in */
	quizid: number | null;
	ids: ParamsDataIds;
}

export interface Params {
	data: ParamsData;
}

export type ReturnsIds = (number | null)[];

export interface Returns {
	ids: ReturnsIds;
}
