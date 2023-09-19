export interface Params {
	/** Component name */
	component: string | null;
	/** xAPI activity ID IRI */
	activityId: string | null;
	/** The xAPI agent json */
	agent: string | null;
	/** The xAPI state ID */
	stateId: string | null;
	/** The xAPI registration UUID */
	registration?: string | null;
}
