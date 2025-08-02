export interface Params {
	/** The name of the plugin and the action to change state for */
	plugin: string | null;
	/** The target state */
	state: number | null;
	/** The provider id */
	providerid?: number | null;
}

export interface Returns {}
