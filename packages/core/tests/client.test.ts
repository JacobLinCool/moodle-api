import { expect, it } from "vitest";
import { MoodleClient, login } from "../src";

it("login and get site info", async (ctx) => {
	if (!process.env.MOODLE_URL || !process.env.MOODLE_USERNAME || !process.env.MOODLE_PASSWORD) {
		ctx.skip();
		return;
	}

	const token = await login(
		process.env.MOODLE_URL,
		process.env.MOODLE_USERNAME,
		process.env.MOODLE_PASSWORD,
	);
	expect(token).toBeTypeOf("string");

	const client = new MoodleClient(process.env.MOODLE_URL, token);
	const info = await client.call("core_webservice_get_site_info");
	expect(info).toBeTypeOf("object");
	expect(info.functions.map((f) => f.name)).toMatchSnapshot();
});

it("login and get courses with params", async (ctx) => {
	if (!process.env.MOODLE_URL || !process.env.MOODLE_USERNAME || !process.env.MOODLE_PASSWORD) {
		ctx.skip();
		return;
	}

	const token = await login(
		process.env.MOODLE_URL,
		process.env.MOODLE_USERNAME,
		process.env.MOODLE_PASSWORD,
	);
	expect(token).toBeTypeOf("string");

	const client = new MoodleClient(process.env.MOODLE_URL, token);
	const { courses } = await client.call(
		"core_course_get_enrolled_courses_by_timeline_classification",
		{
			classification: "all",
		},
	);
	expect(Array.isArray(courses)).toBe(true);
});
