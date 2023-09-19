import fetch from "cross-fetch";
import { FunctionDefinition } from "./api";

/**
 * Represents a client for making requests to the Moodle API.
 */
export class MoodleClient {
	protected base: URL;
	protected token: string;

	/**
	 * Creates a new instance of the Client class.
	 * @param {string | URL} base_url - The base URL for the Moodle API.
	 * @param {string} token - The token to use for authentication.
	 */
	constructor(base_url: string | URL, token: string) {
		this.base = new URL(base_url);
		this.token = token;
	}

	/**
	 * Calls a Moodle web service function with the given parameters.
	 * @param func The name of the Moodle web service function to call.
	 * @param params The parameters to pass to the Moodle web service function. (if any)
	 * @returns A Promise that resolves to the result of the Moodle web service function call.
	 * @throws An error if the HTTP response status is not ok or if the Moodle web service function call returns an exception.
	 */
	public async call<F extends keyof FunctionDefinition | (string & {})>(
		func: F,
		...params: F extends keyof FunctionDefinition
			? Record<never, never> extends FunctionDefinition[F][0]
				? []
				: [FunctionDefinition[F][0]]
			: [Record<string, unknown>]
	): Promise<F extends keyof FunctionDefinition ? FunctionDefinition[F][1] : unknown> {
		const url = new URL("/webservice/rest/server.php", this.base);
		url.searchParams.append("wsfunction", func);
		url.searchParams.append("wstoken", this.token);
		url.searchParams.append("moodlewsrestformat", "json");

		const body = new URLSearchParams();
		if (params[0]) {
			for (const [key, value] of Object.entries(params[0])) {
				body.append(key, value);
			}
		}

		const response = await fetch(url.toString(), {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: body.toString(),
		});
		if (!response.ok) {
			throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
		}

		const json = await response.json();
		if (json.exception) {
			throw new Error(json.message);
		}
		return json;
	}
}
