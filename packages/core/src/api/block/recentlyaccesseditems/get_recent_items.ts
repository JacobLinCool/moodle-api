export interface Params {
	/** result set limit */
	limit?: number | null;
}

export interface ReturnsItem {
	/** id */
	id: number;
	/** courseid */
	courseid: number;
	/** cmid */
	cmid: number;
	/** userid */
	userid: number;
	/** modname */
	modname: string;
	/** name */
	name: string;
	/** coursename */
	coursename: string;
	/** timeaccess */
	timeaccess: number;
	/** viewurl */
	viewurl: string;
	/** courseviewurl */
	courseviewurl: string;
	/** icon */
	icon: string;
	/** purpose */
	purpose: string;
}

/**
 * The most recently accessed activities/resources by the logged user
 */
export type Returns = ReturnsItem[];
