export interface Params {
	/** The request ID */
	requestid: number | null;
}

export interface ReturnsResultForuser {
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

export interface ReturnsResultRequestedbyuser {
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

export interface ReturnsResultDpouser {
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

export interface ReturnsResult {
	/** type */
	type: number;
	/** comments */
	comments: string;
	/** commentsformat */
	commentsformat: number;
	/** userid */
	userid: number;
	/** requestedby */
	requestedby: number;
	/** status */
	status: number;
	/** dpo */
	dpo: number | null;
	/** dpocomment */
	dpocomment: string | null;
	/** dpocommentformat */
	dpocommentformat: number;
	/** systemapproved */
	systemapproved: boolean;
	/** creationmethod */
	creationmethod: number;
	/** id */
	id: number;
	/** timecreated */
	timecreated: number;
	/** timemodified */
	timemodified: number;
	/** usermodified */
	usermodified: number;
	foruser: ReturnsResultForuser;
	requestedbyuser: ReturnsResultRequestedbyuser;
	dpouser: ReturnsResultDpouser;
	/** messagehtml */
	messagehtml: string;
	/** typename */
	typename: string;
	/** typenameshort */
	typenameshort: string;
	/** statuslabel */
	statuslabel: string;
	/** statuslabelclass */
	statuslabelclass: string;
	/** canreview */
	canreview: boolean;
	/** approvedeny */
	approvedeny: boolean;
	/** canmarkcomplete */
	canmarkcomplete: boolean;
}

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
	result: ReturnsResult;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
