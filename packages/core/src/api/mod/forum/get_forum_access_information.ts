export interface Params {
	/** Forum instance id. */
	forumid: number | null;
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
	/** list of warnings */
	warnings: ReturnsWarnings;
	/** Whether the user has the capability mod/forum:addinstance allowed. */
	canaddinstance: boolean | null;
	/** Whether the user has the capability mod/forum:viewdiscussion allowed. */
	canviewdiscussion: boolean | null;
	/** Whether the user has the capability mod/forum:viewhiddentimedposts allowed. */
	canviewhiddentimedposts: boolean | null;
	/** Whether the user has the capability mod/forum:startdiscussion allowed. */
	canstartdiscussion: boolean | null;
	/** Whether the user has the capability mod/forum:replypost allowed. */
	canreplypost: boolean | null;
	/** Whether the user has the capability mod/forum:addnews allowed. */
	canaddnews: boolean | null;
	/** Whether the user has the capability mod/forum:replynews allowed. */
	canreplynews: boolean | null;
	/** Whether the user has the capability mod/forum:viewrating allowed. */
	canviewrating: boolean | null;
	/** Whether the user has the capability mod/forum:viewanyrating allowed. */
	canviewanyrating: boolean | null;
	/** Whether the user has the capability mod/forum:viewallratings allowed. */
	canviewallratings: boolean | null;
	/** Whether the user has the capability mod/forum:rate allowed. */
	canrate: boolean | null;
	/** Whether the user has the capability mod/forum:postprivatereply allowed. */
	canpostprivatereply: boolean | null;
	/** Whether the user has the capability mod/forum:readprivatereplies allowed. */
	canreadprivatereplies: boolean | null;
	/** Whether the user has the capability mod/forum:createattachment allowed. */
	cancreateattachment: boolean | null;
	/** Whether the user has the capability mod/forum:deleteownpost allowed. */
	candeleteownpost: boolean | null;
	/** Whether the user has the capability mod/forum:deleteanypost allowed. */
	candeleteanypost: boolean | null;
	/** Whether the user has the capability mod/forum:splitdiscussions allowed. */
	cansplitdiscussions: boolean | null;
	/** Whether the user has the capability mod/forum:movediscussions allowed. */
	canmovediscussions: boolean | null;
	/** Whether the user has the capability mod/forum:pindiscussions allowed. */
	canpindiscussions: boolean | null;
	/** Whether the user has the capability mod/forum:editanypost allowed. */
	caneditanypost: boolean | null;
	/** Whether the user has the capability mod/forum:viewqandawithoutposting allowed. */
	canviewqandawithoutposting: boolean | null;
	/** Whether the user has the capability mod/forum:viewsubscribers allowed. */
	canviewsubscribers: boolean | null;
	/** Whether the user has the capability mod/forum:managesubscriptions allowed. */
	canmanagesubscriptions: boolean | null;
	/** Whether the user has the capability mod/forum:postwithoutthrottling allowed. */
	canpostwithoutthrottling: boolean | null;
	/** Whether the user has the capability mod/forum:exportdiscussion allowed. */
	canexportdiscussion: boolean | null;
	/** Whether the user has the capability mod/forum:exportforum allowed. */
	canexportforum: boolean | null;
	/** Whether the user has the capability mod/forum:exportpost allowed. */
	canexportpost: boolean | null;
	/** Whether the user has the capability mod/forum:exportownpost allowed. */
	canexportownpost: boolean | null;
	/** Whether the user has the capability mod/forum:addquestion allowed. */
	canaddquestion: boolean | null;
	/** Whether the user has the capability mod/forum:allowforcesubscribe allowed. */
	canallowforcesubscribe: boolean | null;
	/** Whether the user has the capability mod/forum:canposttomygroups allowed. */
	cancanposttomygroups: boolean | null;
	/** Whether the user has the capability mod/forum:canoverridediscussionlock allowed. */
	cancanoverridediscussionlock: boolean | null;
	/** Whether the user has the capability mod/forum:canoverridecutoff allowed. */
	cancanoverridecutoff: boolean | null;
	/** Whether the user has the capability mod/forum:cantogglefavourite allowed. */
	cancantogglefavourite: boolean | null;
	/** Whether the user has the capability mod/forum:grade allowed. */
	cangrade: boolean | null;
}
