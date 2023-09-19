export interface Params {
	/** Limit the browser to the given groups and extensions */
	onlytypes?: string | null;
	/** Allows to select All file types, does not apply with onlytypes are set. */
	allowall?: boolean | null;
	/** Current types that should be selected. */
	current?: string | null;
}

export interface ReturnsGroupsItemTypesItem {
	/** The file type identifier */
	key: string | null;
	/** The file type name */
	name: string | null;
	/** Should it be marked as selected */
	selected: boolean | null;
	/** The file extension associated with the file type */
	ext: string | null;
}

/**
 * List of file types in the group
 */
export type ReturnsGroupsItemTypes = ReturnsGroupsItemTypesItem[];

export interface ReturnsGroupsItem {
	/** The file type group identifier */
	key: string | null;
	/** The file type group name */
	name: string | null;
	/** Can it be marked as selected */
	selectable: boolean | null;
	/** Should it be marked as selected */
	selected: boolean | null;
	/** The list of file extensions associated with the group */
	ext: string | null;
	/** Should the group start as expanded or collapsed */
	expanded: boolean | null;
	/** List of file types in the group */
	types: ReturnsGroupsItemTypes;
}

/**
 * List of file type groups
 */
export type ReturnsGroups = ReturnsGroupsItem[];

export interface Returns {
	/** List of file type groups */
	groups: ReturnsGroups;
}
