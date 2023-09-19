export interface Params {
	/** Context ID */
	contextid: number | null;
}

export interface ReturnsItemVariables {
	/** HTML content of the Notification */
	message: string | null;
	/** Extra classes to provide to the tmeplate */
	extraclasses: string | null;
	/** Whether to announce */
	announce: string | null;
	/** Whether to close */
	closebutton: string | null;
}

export interface ReturnsItem {
	/** Name of the template */
	template: string | null;
	variables: ReturnsItemVariables;
}

export type Returns = ReturnsItem[];
