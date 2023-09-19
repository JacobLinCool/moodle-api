export interface Params {
	/** bigbluebuttonbn instance id, this might be a different one from the one set in recordingid in case of importing */
	bigbluebuttonbnid: number | null;
	/** The moodle internal recording ID */
	recordingid: number | null;
	/** The action to perform */
	action: string | null;
	/** Additional options */
	additionaloptions: string | null;
}

export interface Returns {}
