import { describe, expect, it } from "vitest";
import { flatten } from "../src";

describe("flatten", () => {
	// Flattening an object with only primitive values
	it("should flatten an object with only primitive values", () => {
		const obj = {
			a: 1,
			b: "hello",
			c: true,
		};

		const result = flatten(obj);

		expect(result).toEqual({
			a: "1",
			b: "hello",
			c: "true",
		});
	});

	// Flattening an object with nested objects and arrays
	it("should flatten an object with nested objects and arrays", () => {
		const obj = {
			a: 1,
			b: {
				c: 2,
				d: [3, 4],
			},
		};

		const result = flatten(obj);

		expect(result).toEqual({
			a: "1",
			"b[c]": "2",
			"b[d][0]": "3",
			"b[d][1]": "4",
		});
	});

	// Flattening an empty object
	it("should flatten an empty object", () => {
		const obj = {};

		const result = flatten(obj);

		expect(result).toEqual({});
	});

	// Flattening an object with circular references
	it("should throw when flatten an object with circular references", () => {
		const obj: any = {
			a: 1,
			b: {
				c: 2,
			},
		};

		obj.b.d = obj;

		expect(() => flatten(obj)).toThrow();
	});
});
