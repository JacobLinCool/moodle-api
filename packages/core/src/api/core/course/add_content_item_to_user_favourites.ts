export interface Params {
	/** frankenstyle name of the component to which the content item belongs */
	componentname: string | null;
	/** id of the content item */
	contentitemid: number;
}

export interface Returns {
	/** The id of the content item */
	id: number;
	/** Name of the content item */
	name: string;
	/** The string title of the content item, human readable */
	title: string;
	/** The link to the content item creation page */
	link: string;
	/** Html containing the icon for the content item */
	icon: string;
	/** Html description / help for the content item */
	help: string;
	/** The archetype of the module exposing the content item */
	archetype: string;
	/** The name of the component exposing the content item */
	componentname: string;
	/** The purpose of the component exposing the content item */
	purpose: string;
	/** Has the user favourited the content item */
	favourite: boolean;
	/** If this item was pulled from the old callback and has no item id. */
	legacyitem: boolean;
	/** Has this item been recommended */
	recommended: boolean;
}
