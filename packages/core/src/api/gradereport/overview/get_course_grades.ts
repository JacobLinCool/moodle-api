export interface Params {
	/** Get grades for this user (optional, default current) */
	userid?: number | null;
}

export interface ReturnsGradesItem {
	/** Course id */
	courseid: number | null;
	/** Grade formatted */
	grade: string | null;
	/** Raw grade, not formatted */
	rawgrade: string | null;
	/** Your rank in the course */
	rank: number | null;
}

export type ReturnsGrades = ReturnsGradesItem[];

/**
 * warning
 */
export interface ReturnsWarningsItem {
	/** item */
	item: string | null;
	/** item id */
	itemid: number | null;
	/** the warning code can be used by the client app to implement specific behaviour */
	warningcode: string | null;
	/** untranslated english message to explain the warning */
	message: string | null;
}

/**
 * list of warnings
 */
export type ReturnsWarnings = ReturnsWarningsItem[];

export interface Returns {
	grades: ReturnsGrades;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
