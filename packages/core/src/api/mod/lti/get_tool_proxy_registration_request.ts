export interface Params {
	/** Tool proxy id */
	id: number | null;
}

export interface Returns {
	/** LTI message type */
	lti_message_type: string | null;
	/** LTI version */
	lti_version: string | null;
	/** Tool proxy registration key */
	reg_key: string | null;
	/** Tool proxy registration password */
	reg_password: string | null;
	/** Tool proxy registration url */
	reg_url: string | null;
	/** Tool consumers profile URL */
	tc_profile_url: string | null;
	/** URL to redirect on registration completion */
	launch_presentation_return_url: string | null;
}
