import { config } from "dotenv";
import { MoodleClient, login } from "./packages/core/src";

config();

main();

async function main() {
	const token = await login(
		process.env.MOODLE_URL || "",
		process.env.MOODLE_USERNAME || "",
		process.env.MOODLE_PASSWORD || "",
	);
	console.log(token);

	const client = new MoodleClient(process.env.MOODLE_URL || "", token);
	console.log(client);

	const info = await client.call("core_webservice_get_site_info");
	console.log(info.functions.map((f) => `${f.name}: ${f.version}`).join("\n"));
}
