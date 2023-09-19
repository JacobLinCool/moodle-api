export interface Params {
	/** Course module ID */
	cmid: number;
	/** Page URL to check */
	url: string;
	/** SEB config key */
	configkey?: string | null;
	/** SEB browser exam key */
	browserexamkey?: string | null;
}

export interface Returns {
	/** Is a provided config key valid? */
	configkey: boolean;
	/** Is a provided browser exam key valid? */
	browserexamkey: boolean;
}
