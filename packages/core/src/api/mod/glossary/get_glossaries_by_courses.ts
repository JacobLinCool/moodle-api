/**
 * Array of course IDs
 */
export type ParamsCourseids = (number | null)[];

export interface Params {
	/** Array of course IDs */
	courseids?: ParamsCourseids;
}

/**
 * File.
 */
export interface ReturnsGlossariesItemIntrofilesItem {
	/** File name. */
	filename: string | null;
	/** File path. */
	filepath: string | null;
	/** File size. */
	filesize: number | null;
	/** Downloadable file url. */
	fileurl: string | null;
	/** Time modified. */
	timemodified: number | null;
	/** File mime type. */
	mimetype: string | null;
	/** Whether is an external file. */
	isexternalfile: boolean | null;
	/** The repository type for external files. */
	repositorytype: string | null;
}

/**
 * Files in the introduction
 */
export type ReturnsGlossariesItemIntrofiles = ReturnsGlossariesItemIntrofilesItem[];

export type ReturnsGlossariesItemBrowsemodes = (string | null)[];

/**
 * Glossaries
 */
export interface ReturnsGlossariesItem {
	/** Activity instance id */
	id: number | null;
	/** Course module id */
	coursemodule: number | null;
	/** Course id */
	course: number | null;
	/** Activity name */
	name: string | null;
	/** Activity introduction */
	intro: string | null;
	/** intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	introformat: number | null;
	/** Files in the introduction */
	introfiles: ReturnsGlossariesItemIntrofiles;
	/** Course section id */
	section: number | null;
	/** Visible */
	visible: boolean | null;
	/** Group mode */
	groupmode: number | null;
	/** Group id */
	groupingid: number | null;
	/** Forced activity language */
	lang: string | null;
	/** If enabled, multiple entries can have the same concept name */
	allowduplicatedentries: number | null;
	/** Display format type */
	displayformat: string | null;
	/** If enabled this glossary is a main glossary. */
	mainglossary: number | null;
	/** If enabled, participants can browse the glossary by special characters, such as @ and # */
	showspecial: number | null;
	/** If enabled, participants can browse the glossary by letters of the alphabet */
	showalphabet: number | null;
	/** If enabled, participants can browse all entries at once */
	showall: number | null;
	/** If enabled, all participants with permission to create comments will be able to add comments to glossary entries */
	allowcomments: number | null;
	/** If enabled, students are provided with a link to a printer-friendly version of the glossary. The link is always available to teachers */
	allowprintview: number | null;
	/** If site-wide glossary auto-linking has been enabled by an administrator and this checkbox is ticked, the entry will be automatically linked wherever the concept words and phrases appear throughout the rest of the course. */
	usedynalink: number | null;
	/** If set to no, entries require approving by a teacher before they are viewable by everyone. */
	defaultapproval: number | null;
	/** When approving glossary items you may wish to use a different display format */
	approvaldisplayformat: string | null;
	globalglossary: number | null;
	/** Entries shown per page */
	entbypage: number | null;
	/** Always allow editing */
	editalways: number | null;
	/** To enable the RSS feed for this activity, select either concepts with author or concepts without author to be included in the feed */
	rsstype: number | null;
	/** This setting specifies the number of glossary entry concepts to include in the RSS feed. Between 5 and 20 generally acceptable */
	rssarticles: number | null;
	/** Aggregate type */
	assessed: number | null;
	/** Restrict rating to items created after this */
	assesstimestart: number | null;
	/** Restrict rating to items created before this */
	assesstimefinish: number | null;
	/** Scale ID */
	scale: number | null;
	/** Time created */
	timecreated: number | null;
	/** Time modified */
	timemodified: number | null;
	/** Number of entries to complete */
	completionentries: number | null;
	browsemodes: ReturnsGlossariesItemBrowsemodes;
	/** Whether the user can add a new entry */
	canaddentry: number | null;
}

export type ReturnsGlossaries = ReturnsGlossariesItem[];

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
	glossaries: ReturnsGlossaries;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
