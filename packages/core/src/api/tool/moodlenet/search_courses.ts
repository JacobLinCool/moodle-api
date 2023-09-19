export interface Params {
	/** search value */
	searchvalue: string | null;
}

export interface ReturnsCoursesItem {
	/** course id */
	id: number | null;
	/** course full name */
	fullname: string | null;
	/** is the course visible */
	hidden: number | null;
	/** Next step of import */
	viewurl: string | null;
	/** Category name */
	coursecategory: string | null;
	/** course image */
	courseimage: string | null;
}

export type ReturnsCourses = ReturnsCoursesItem[];

export interface Returns {
	courses: ReturnsCourses;
}
