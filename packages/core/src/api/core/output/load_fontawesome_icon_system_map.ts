export interface Params {
	/** The theme to fetch the map for */
	themename: string | null;
}

export interface ReturnsItem {
	/** The component for the icon. */
	component: string | null;
	/** Value to map the icon from. */
	pix: string | null;
	/** Value to map the icon to. */
	to: string | null;
}

export type Returns = ReturnsItem[];
