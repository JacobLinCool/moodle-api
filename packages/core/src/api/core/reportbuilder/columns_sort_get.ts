export interface Params {
	/** Report ID */
	reportid: number | null;
}

export interface ReturnsSortablecolumnsItemSorticon {
	/** key */
	key: string;
	/** component */
	component: string;
	/** title */
	title: string;
}

export interface ReturnsSortablecolumnsItem {
	/** id */
	id: number;
	/** title */
	title: string;
	/** heading */
	heading: string;
	/** sortdirection */
	sortdirection: number;
	/** sortenabled */
	sortenabled: boolean;
	/** sortorder */
	sortorder: number;
	sorticon: ReturnsSortablecolumnsItemSorticon;
	/** movetitle */
	movetitle: string;
	/** sortenabledtitle */
	sortenabledtitle: string;
}

/**
 * sortablecolumns
 */
export type ReturnsSortablecolumns = ReturnsSortablecolumnsItem[];

export interface Returns {
	/** hassortablecolumns */
	hassortablecolumns: boolean;
	/** sortablecolumns */
	sortablecolumns: ReturnsSortablecolumns;
	/** helpicon */
	helpicon: string;
}
