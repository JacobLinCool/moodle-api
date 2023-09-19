export interface Params {
	/** The discussion to pin or unpin */
	discussionid: number;
	/** The target state */
	targetstate: number;
}

export interface ReturnsGroupUrls {
	/** picture */
	picture: string;
	/** userlist */
	userlist: string;
}

export interface ReturnsGroup {
	/** name */
	name: string;
	urls: ReturnsGroupUrls;
}

export interface ReturnsTimes {
	/** modified */
	modified: number;
	/** start */
	start: number;
	/** end */
	end: number;
	/** locked */
	locked: number;
}

export interface ReturnsUserstate {
	/** subscribed */
	subscribed: boolean;
	/** favourited */
	favourited: boolean;
}

export interface ReturnsCapabilities {
	/** subscribe */
	subscribe: boolean;
	/** move */
	move: boolean;
	/** pin */
	pin: boolean;
	/** post */
	post: boolean;
	/** manage */
	manage: boolean;
	/** favourite */
	favourite: boolean;
}

export interface ReturnsUrls {
	/** view */
	view: string;
	/** viewlatest */
	viewlatest: string;
	/** viewfirstunread */
	viewfirstunread: string;
	/** markasread */
	markasread: string;
	/** subscribe */
	subscribe: string;
	/** pin */
	pin: string;
}

export interface ReturnsTimed {
	/** istimed */
	istimed: boolean | null;
	/** visible */
	visible: boolean | null;
}

export interface Returns {
	/** id */
	id: number;
	/** forumid */
	forumid: number;
	/** pinned */
	pinned: boolean;
	/** locked */
	locked: boolean;
	/** istimelocked */
	istimelocked: boolean;
	/** name */
	name: string;
	/** firstpostid */
	firstpostid: number;
	group: ReturnsGroup;
	times: ReturnsTimes;
	userstate: ReturnsUserstate;
	capabilities: ReturnsCapabilities;
	urls: ReturnsUrls;
	timed: ReturnsTimed;
}
