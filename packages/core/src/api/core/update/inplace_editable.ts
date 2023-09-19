export interface Params {
	/** component responsible for the update */
	component: string | null;
	/** type of the updated item inside the component */
	itemtype: string | null;
	/** identifier of the updated item */
	itemid: string | null;
	/** new value */
	value: string | null;
}

export interface ReturnsEditicon {
	/** Edit icon key */
	key: string | null;
	/** Edit icon component */
	component: string | null;
	/** Edit icon title */
	title: string | null;
}

export interface Returns {
	/** display value (may contain link or other html tags) */
	displayvalue: string | null;
	/** component responsible for the update */
	component: string | null;
	/** itemtype */
	itemtype: string | null;
	/** value of the item as it is stored */
	value: string | null;
	/** identifier of the updated item */
	itemid: string | null;
	/** hint for editing element */
	edithint: string | null;
	/** label for editing element */
	editlabel: string | null;
	editicon: ReturnsEditicon;
	/** type of the element (text, toggle, select) */
	type: string | null;
	/** options of the element, format depends on type */
	options: string | null;
	/** Should everything be wrapped in the edit link or link displayed separately */
	linkeverything: number | null;
}
