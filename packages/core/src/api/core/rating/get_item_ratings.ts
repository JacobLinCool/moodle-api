export interface Params {
	/** context level: course, module, user, etc... */
	contextlevel: string | null;
	/** the instance id of item associated with the context level */
	instanceid: number | null;
	/** component */
	component: string | null;
	/** rating area */
	ratingarea: string | null;
	/** associated id */
	itemid: number | null;
	/** scale id */
	scaleid: number | null;
	/** sort order (firstname, rating or timemodified) */
	sort: string | null;
}

/**
 * Rating
 */
export interface ReturnsRatingsItem {
	/** rating id */
	id: number | null;
	/** user id */
	userid: number | null;
	/** URL user picture */
	userpictureurl: string | null;
	/** user fullname */
	userfullname: string | null;
	/** rating on scale */
	rating: string | null;
	/** time modified (timestamp) */
	timemodified: number | null;
}

/**
 * list of ratings
 */
export type ReturnsRatings = ReturnsRatingsItem[];

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
	/** list of ratings */
	ratings: ReturnsRatings;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
