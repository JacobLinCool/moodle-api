/**
 * Flatten the parameters object into a single level object that can be used as query parameters.
 *
 * For example, the following object:
 * ```json
 * {
 *    "a": 1,
 *    "b": {
 *       "c": 2,
 *      "d": [3, 4]
 *   }
 * }
 * ```
 *
 * Will be flattened into:
 * ```json
 * {
 *   "a": "1",
 *   "b[c]": "2",
 *   "b[d][0]": "3",
 *   "b[d][1]": "4"
 * }
 * ```
 */
export function flatten(
	obj: unknown,
	prefix: string = "",
	result: Record<string, string> = {},
	visited = new Set<unknown>(),
): Record<string, string> {
	if (obj === null || obj === undefined) {
		return result;
	}

	if (typeof obj === "object" && !Array.isArray(obj)) {
		if (visited.has(obj)) {
			throw new Error(`Circular reference detected at ${prefix}`);
		}
		visited.add(obj);

		for (const [current, value] of Object.entries(obj as Record<string, unknown>)) {
			const key = prefix ? `${prefix}[${current}]` : current;
			flatten(value, key, result, visited);
		}
	} else if (Array.isArray(obj)) {
		if (visited.has(obj)) {
			throw new Error(`Circular reference detected at ${prefix}`);
		}
		visited.add(obj);

		for (let i = 0; i < obj.length; i++) {
			const key = `${prefix}[${i}]`;
			flatten(obj[i], key, result, visited);
		}
	} else {
		result[prefix] = obj.toString();
	}

	return result;
}
