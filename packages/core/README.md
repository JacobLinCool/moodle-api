# Moodle API

The easiest way to use the Moodle API with fully typed parameters and responses.

## Example

![Auto Completion](https://raw.githubusercontent.com/JacobLinCool/moodle-api/main/images/auto-completion.gif)

```ts
import { MoodleClient, login } from "moodle-api";

const token = await login(
    process.env.MOODLE_URL,
    process.env.MOODLE_USERNAME,
    process.env.MOODLE_PASSWORD,
);

const client = new MoodleClient(process.env.MOODLE_URL, token);
const info = await client.call("core_webservice_get_site_info");
console.log("Supported Functions:", info.functions.map(f => f.name));
```
