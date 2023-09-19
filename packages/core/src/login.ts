import fetch from "cross-fetch";

/**
 * Logs in to Moodle using the provided credentials and returns a token.
 * @param base_url - The base URL of the Moodle site.
 * @param username - The username of the user.
 * @param password - The password of the user.
 * @returns A Promise that resolves to a token string.
 * @throws An error if the HTTP response is not ok or if the JSON response contains an error message.
 */
export async function login(
	base_url: string | URL,
	username: string,
	password: string,
): Promise<string> {
	const url = new URL("/login/token.php", base_url);
	url.searchParams.append("username", username);
	url.searchParams.append("password", password);
	url.searchParams.append("service", "moodle_mobile_app");

	const response = await fetch(url.toString());
	if (!response.ok) {
		throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
	}

	const json = await response.json();
	if (json.error) {
		throw new Error(json.error);
	}
	return json.token;
}
