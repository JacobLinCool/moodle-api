export interface Params {
	/** Query string */
	query: string | null;
	/** Required capability */
	capability: string | null;
	/** Number of records to skip */
	limitfrom?: number | null;
	/** Number of records to fetch */
	limitnum?: string | null;
}

export interface ReturnsUsersItem {
	/** id */
	id: number;
	/** email */
	email: string;
	/** idnumber */
	idnumber: string;
	/** phone1 */
	phone1: string;
	/** phone2 */
	phone2: string;
	/** department */
	department: string;
	/** institution */
	institution: string;
	/** fullname */
	fullname: string;
	/** identity */
	identity: string;
	/** profileurl */
	profileurl: string;
	/** profileimageurl */
	profileimageurl: string;
	/** profileimageurlsmall */
	profileimageurlsmall: string;
}

export type ReturnsUsers = ReturnsUsersItem[];

export interface Returns {
	users: ReturnsUsers;
	/** Total number of results. */
	count: number | null;
}
