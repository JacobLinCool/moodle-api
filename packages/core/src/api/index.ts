import * as auth from "./auth";
import * as block from "./block";
import * as core from "./core";
import * as enrol from "./enrol";
import * as gradereport from "./gradereport";
import * as gradingform from "./gradingform";
import * as message from "./message";
import * as mod from "./mod";
import * as paygw from "./paygw";
import * as qbank from "./qbank";
import * as quizaccess from "./quizaccess";
import * as report from "./report";
import * as tiny from "./tiny";
import * as tool from "./tool";
export * as auth from "./auth";
export * as block from "./block";
export * as core from "./core";
export * as enrol from "./enrol";
export * as gradereport from "./gradereport";
export * as gradingform from "./gradingform";
export * as media from "./media";
export * as message from "./message";
export * as mod from "./mod";
export * as paygw from "./paygw";
export * as qbank from "./qbank";
export * as quizaccess from "./quizaccess";
export * as report from "./report";
export * as tiny from "./tiny";
export * as tool from "./tool";

export type FunctionDefinition = {
	auth_email_get_signup_settings: [
		auth.email.get_signup_settings.Params,
		auth.email.get_signup_settings.Returns,
	];
	auth_email_signup_user: [auth.email.signup_user.Params, auth.email.signup_user.Returns];
	block_accessreview_get_module_data: [
		block.accessreview.get_module_data.Params,
		block.accessreview.get_module_data.Returns,
	];
	block_accessreview_get_section_data: [
		block.accessreview.get_section_data.Params,
		block.accessreview.get_section_data.Returns,
	];
	block_recentlyaccesseditems_get_recent_items: [
		block.recentlyaccesseditems.get_recent_items.Params,
		block.recentlyaccesseditems.get_recent_items.Returns,
	];
	block_starredcourses_get_starred_courses: [
		block.starredcourses.get_starred_courses.Params,
		block.starredcourses.get_starred_courses.Returns,
	];
	core_admin_set_block_protection: [
		core.admin.set_block_protection.Params,
		core.admin.set_block_protection.Returns,
	];
	core_admin_set_plugin_order: [
		core.admin.set_plugin_order.Params,
		core.admin.set_plugin_order.Returns,
	];
	core_admin_set_plugin_state: [
		core.admin.set_plugin_state.Params,
		core.admin.set_plugin_state.Returns,
	];
	core_auth_confirm_user: [core.auth.confirm_user.Params, core.auth.confirm_user.Returns];
	core_auth_is_age_digital_consent_verification_enabled: [
		core.auth.is_age_digital_consent_verification_enabled.Params,
		core.auth.is_age_digital_consent_verification_enabled.Returns,
	];
	core_auth_is_minor: [core.auth.is_minor.Params, core.auth.is_minor.Returns];
	core_auth_request_password_reset: [
		core.auth.request_password_reset.Params,
		core.auth.request_password_reset.Returns,
	];
	core_auth_resend_confirmation_email: [
		core.auth.resend_confirmation_email.Params,
		core.auth.resend_confirmation_email.Returns,
	];
	core_backup_get_async_backup_links_backup: [
		core.backup.get_async_backup_links_backup.Params,
		core.backup.get_async_backup_links_backup.Returns,
	];
	core_backup_get_async_backup_links_restore: [
		core.backup.get_async_backup_links_restore.Params,
		core.backup.get_async_backup_links_restore.Returns,
	];
	core_backup_get_async_backup_progress: [
		core.backup.get_async_backup_progress.Params,
		core.backup.get_async_backup_progress.Returns,
	];
	core_backup_get_copy_progress: [
		core.backup.get_copy_progress.Params,
		core.backup.get_copy_progress.Returns,
	];
	core_badges_get_user_badges: [
		core.badges.get_user_badges.Params,
		core.badges.get_user_badges.Returns,
	];
	core_block_fetch_addable_blocks: [
		core.block.fetch_addable_blocks.Params,
		core.block.fetch_addable_blocks.Returns,
	];
	core_block_get_course_blocks: [
		core.block.get_course_blocks.Params,
		core.block.get_course_blocks.Returns,
	];
	core_block_get_dashboard_blocks: [
		core.block.get_dashboard_blocks.Params,
		core.block.get_dashboard_blocks.Returns,
	];
	core_blog_get_entries: [core.blog.get_entries.Params, core.blog.get_entries.Returns];
	core_blog_view_entries: [core.blog.view_entries.Params, core.blog.view_entries.Returns];
	core_calendar_create_calendar_events: [
		core.calendar.create_calendar_events.Params,
		core.calendar.create_calendar_events.Returns,
	];
	core_calendar_delete_subscription: [
		core.calendar.delete_subscription.Params,
		core.calendar.delete_subscription.Returns,
	];
	core_calendar_get_action_events_by_course: [
		core.calendar.get_action_events_by_course.Params,
		core.calendar.get_action_events_by_course.Returns,
	];
	core_calendar_get_action_events_by_courses: [
		core.calendar.get_action_events_by_courses.Params,
		core.calendar.get_action_events_by_courses.Returns,
	];
	core_calendar_get_action_events_by_timesort: [
		core.calendar.get_action_events_by_timesort.Params,
		core.calendar.get_action_events_by_timesort.Returns,
	];
	core_calendar_get_allowed_event_types: [
		core.calendar.get_allowed_event_types.Params,
		core.calendar.get_allowed_event_types.Returns,
	];
	core_calendar_get_calendar_access_information: [
		core.calendar.get_calendar_access_information.Params,
		core.calendar.get_calendar_access_information.Returns,
	];
	core_calendar_get_calendar_day_view: [
		core.calendar.get_calendar_day_view.Params,
		core.calendar.get_calendar_day_view.Returns,
	];
	core_calendar_get_calendar_event_by_id: [
		core.calendar.get_calendar_event_by_id.Params,
		core.calendar.get_calendar_event_by_id.Returns,
	];
	core_calendar_get_calendar_events: [
		core.calendar.get_calendar_events.Params,
		core.calendar.get_calendar_events.Returns,
	];
	core_calendar_get_calendar_export_token: [
		core.calendar.get_calendar_export_token.Params,
		core.calendar.get_calendar_export_token.Returns,
	];
	core_calendar_get_calendar_monthly_view: [
		core.calendar.get_calendar_monthly_view.Params,
		core.calendar.get_calendar_monthly_view.Returns,
	];
	core_calendar_get_calendar_upcoming_view: [
		core.calendar.get_calendar_upcoming_view.Params,
		core.calendar.get_calendar_upcoming_view.Returns,
	];
	core_calendar_get_timestamps: [
		core.calendar.get_timestamps.Params,
		core.calendar.get_timestamps.Returns,
	];
	core_calendar_submit_create_update_form: [
		core.calendar.submit_create_update_form.Params,
		core.calendar.submit_create_update_form.Returns,
	];
	core_calendar_update_event_start_day: [
		core.calendar.update_event_start_day.Params,
		core.calendar.update_event_start_day.Returns,
	];
	core_change_editmode: [core.change.editmode.Params, core.change.editmode.Returns];
	core_cohort_add_cohort_members: [
		core.cohort.add_cohort_members.Params,
		core.cohort.add_cohort_members.Returns,
	];
	core_cohort_create_cohorts: [
		core.cohort.create_cohorts.Params,
		core.cohort.create_cohorts.Returns,
	];
	core_cohort_get_cohort_members: [
		core.cohort.get_cohort_members.Params,
		core.cohort.get_cohort_members.Returns,
	];
	core_cohort_get_cohorts: [core.cohort.get_cohorts.Params, core.cohort.get_cohorts.Returns];
	core_cohort_search_cohorts: [
		core.cohort.search_cohorts.Params,
		core.cohort.search_cohorts.Returns,
	];
	core_comment_add_comments: [
		core.comment.add_comments.Params,
		core.comment.add_comments.Returns,
	];
	core_comment_delete_comments: [
		core.comment.delete_comments.Params,
		core.comment.delete_comments.Returns,
	];
	core_comment_get_comments: [
		core.comment.get_comments.Params,
		core.comment.get_comments.Returns,
	];
	core_competency_create_competency: [
		core.competency.create_competency.Params,
		core.competency.create_competency.Returns,
	];
	core_competency_create_competency_framework: [
		core.competency.create_competency_framework.Params,
		core.competency.create_competency_framework.Returns,
	];
	core_competency_create_plan: [
		core.competency.create_plan.Params,
		core.competency.create_plan.Returns,
	];
	core_competency_create_template: [
		core.competency.create_template.Params,
		core.competency.create_template.Returns,
	];
	core_competency_create_user_evidence_competency: [
		core.competency.create_user_evidence_competency.Params,
		core.competency.create_user_evidence_competency.Returns,
	];
	core_competency_duplicate_competency_framework: [
		core.competency.duplicate_competency_framework.Params,
		core.competency.duplicate_competency_framework.Returns,
	];
	core_competency_duplicate_template: [
		core.competency.duplicate_template.Params,
		core.competency.duplicate_template.Returns,
	];
	core_competency_get_scale_values: [
		core.competency.get_scale_values.Params,
		core.competency.get_scale_values.Returns,
	];
	core_competency_grade_competency: [
		core.competency.grade_competency.Params,
		core.competency.grade_competency.Returns,
	];
	core_competency_grade_competency_in_course: [
		core.competency.grade_competency_in_course.Params,
		core.competency.grade_competency_in_course.Returns,
	];
	core_competency_grade_competency_in_plan: [
		core.competency.grade_competency_in_plan.Params,
		core.competency.grade_competency_in_plan.Returns,
	];
	core_competency_list_competencies: [
		core.competency.list_competencies.Params,
		core.competency.list_competencies.Returns,
	];
	core_competency_list_competencies_in_template: [
		core.competency.list_competencies_in_template.Params,
		core.competency.list_competencies_in_template.Returns,
	];
	core_competency_list_competency_frameworks: [
		core.competency.list_competency_frameworks.Params,
		core.competency.list_competency_frameworks.Returns,
	];
	core_competency_list_course_competencies: [
		core.competency.list_course_competencies.Params,
		core.competency.list_course_competencies.Returns,
	];
	core_competency_list_course_module_competencies: [
		core.competency.list_course_module_competencies.Params,
		core.competency.list_course_module_competencies.Returns,
	];
	core_competency_list_plan_competencies: [
		core.competency.list_plan_competencies.Params,
		core.competency.list_plan_competencies.Returns,
	];
	core_competency_list_templates: [
		core.competency.list_templates.Params,
		core.competency.list_templates.Returns,
	];
	core_competency_list_templates_using_competency: [
		core.competency.list_templates_using_competency.Params,
		core.competency.list_templates_using_competency.Returns,
	];
	core_competency_list_user_plans: [
		core.competency.list_user_plans.Params,
		core.competency.list_user_plans.Returns,
	];
	core_competency_read_competency: [
		core.competency.read_competency.Params,
		core.competency.read_competency.Returns,
	];
	core_competency_read_competency_framework: [
		core.competency.read_competency_framework.Params,
		core.competency.read_competency_framework.Returns,
	];
	core_competency_read_plan: [
		core.competency.read_plan.Params,
		core.competency.read_plan.Returns,
	];
	core_competency_read_template: [
		core.competency.read_template.Params,
		core.competency.read_template.Returns,
	];
	core_competency_read_user_evidence: [
		core.competency.read_user_evidence.Params,
		core.competency.read_user_evidence.Returns,
	];
	core_competency_search_competencies: [
		core.competency.search_competencies.Params,
		core.competency.search_competencies.Returns,
	];
	core_competency_update_plan: [
		core.competency.update_plan.Params,
		core.competency.update_plan.Returns,
	];
	core_completion_get_activities_completion_status: [
		core.completion.get_activities_completion_status.Params,
		core.completion.get_activities_completion_status.Returns,
	];
	core_completion_get_course_completion_status: [
		core.completion.get_course_completion_status.Params,
		core.completion.get_course_completion_status.Returns,
	];
	core_completion_mark_course_self_completed: [
		core.completion.mark_course_self_completed.Params,
		core.completion.mark_course_self_completed.Returns,
	];
	core_completion_override_activity_completion_status: [
		core.completion.override_activity_completion_status.Params,
		core.completion.override_activity_completion_status.Returns,
	];
	core_completion_update_activity_completion_status_manually: [
		core.completion.update_activity_completion_status_manually.Params,
		core.completion.update_activity_completion_status_manually.Returns,
	];
	core_contentbank_delete_content: [
		core.contentbank.delete_content.Params,
		core.contentbank.delete_content.Returns,
	];
	core_contentbank_rename_content: [
		core.contentbank.rename_content.Params,
		core.contentbank.rename_content.Returns,
	];
	core_contentbank_set_content_visibility: [
		core.contentbank.set_content_visibility.Params,
		core.contentbank.set_content_visibility.Returns,
	];
	core_course_add_content_item_to_user_favourites: [
		core.course.add_content_item_to_user_favourites.Params,
		core.course.add_content_item_to_user_favourites.Returns,
	];
	core_course_check_updates: [
		core.course.check_updates.Params,
		core.course.check_updates.Returns,
	];
	core_course_create_categories: [
		core.course.create_categories.Params,
		core.course.create_categories.Returns,
	];
	core_course_create_courses: [
		core.course.create_courses.Params,
		core.course.create_courses.Returns,
	];
	core_course_delete_courses: [
		core.course.delete_courses.Params,
		core.course.delete_courses.Returns,
	];
	core_course_duplicate_course: [
		core.course.duplicate_course.Params,
		core.course.duplicate_course.Returns,
	];
	core_course_get_activity_chooser_footer: [
		core.course.get_activity_chooser_footer.Params,
		core.course.get_activity_chooser_footer.Returns,
	];
	core_course_get_categories: [
		core.course.get_categories.Params,
		core.course.get_categories.Returns,
	];
	core_course_get_contents: [core.course.get_contents.Params, core.course.get_contents.Returns];
	core_course_get_course_content_items: [
		core.course.get_course_content_items.Params,
		core.course.get_course_content_items.Returns,
	];
	core_course_get_course_module: [
		core.course.get_course_module.Params,
		core.course.get_course_module.Returns,
	];
	core_course_get_course_module_by_instance: [
		core.course.get_course_module_by_instance.Params,
		core.course.get_course_module_by_instance.Returns,
	];
	core_course_get_courses: [core.course.get_courses.Params, core.course.get_courses.Returns];
	core_course_get_courses_by_field: [
		core.course.get_courses_by_field.Params,
		core.course.get_courses_by_field.Returns,
	];
	core_course_get_enrolled_courses_by_timeline_classification: [
		core.course.get_enrolled_courses_by_timeline_classification.Params,
		core.course.get_enrolled_courses_by_timeline_classification.Returns,
	];
	core_course_get_enrolled_courses_with_action_events_by_timeline_classification: [
		core.course.get_enrolled_courses_with_action_events_by_timeline_classification.Params,
		core.course.get_enrolled_courses_with_action_events_by_timeline_classification.Returns,
	];
	core_course_get_enrolled_users_by_cmid: [
		core.course.get_enrolled_users_by_cmid.Params,
		core.course.get_enrolled_users_by_cmid.Returns,
	];
	core_course_get_recent_courses: [
		core.course.get_recent_courses.Params,
		core.course.get_recent_courses.Returns,
	];
	core_course_get_updates_since: [
		core.course.get_updates_since.Params,
		core.course.get_updates_since.Returns,
	];
	core_course_get_user_administration_options: [
		core.course.get_user_administration_options.Params,
		core.course.get_user_administration_options.Returns,
	];
	core_course_get_user_navigation_options: [
		core.course.get_user_navigation_options.Params,
		core.course.get_user_navigation_options.Returns,
	];
	core_course_remove_content_item_from_user_favourites: [
		core.course.remove_content_item_from_user_favourites.Params,
		core.course.remove_content_item_from_user_favourites.Returns,
	];
	core_course_search_courses: [
		core.course.search_courses.Params,
		core.course.search_courses.Returns,
	];
	core_course_set_favourite_courses: [
		core.course.set_favourite_courses.Params,
		core.course.set_favourite_courses.Returns,
	];
	core_course_toggle_activity_recommendation: [
		core.course.toggle_activity_recommendation.Params,
		core.course.toggle_activity_recommendation.Returns,
	];
	core_course_update_courses: [
		core.course.update_courses.Params,
		core.course.update_courses.Returns,
	];
	core_course_view_course: [core.course.view_course.Params, core.course.view_course.Returns];
	core_courseformat_file_handlers: [
		core.courseformat.file_handlers.Params,
		core.courseformat.file_handlers.Returns,
	];
	core_customfield_reload_template: [
		core.customfield.reload_template.Params,
		core.customfield.reload_template.Returns,
	];
	core_dynamic_tabs_get_content: [
		core.dynamic.tabs_get_content.Params,
		core.dynamic.tabs_get_content.Returns,
	];
	core_enrol_get_course_enrolment_methods: [
		core.enrol.get_course_enrolment_methods.Params,
		core.enrol.get_course_enrolment_methods.Returns,
	];
	core_enrol_get_enrolled_users: [
		core.enrol.get_enrolled_users.Params,
		core.enrol.get_enrolled_users.Returns,
	];
	core_enrol_get_enrolled_users_with_capability: [
		core.enrol.get_enrolled_users_with_capability.Params,
		core.enrol.get_enrolled_users_with_capability.Returns,
	];
	core_enrol_get_potential_users: [
		core.enrol.get_potential_users.Params,
		core.enrol.get_potential_users.Returns,
	];
	core_enrol_get_users_courses: [
		core.enrol.get_users_courses.Params,
		core.enrol.get_users_courses.Returns,
	];
	core_enrol_search_users: [core.enrol.search_users.Params, core.enrol.search_users.Returns];
	core_enrol_submit_user_enrolment_form: [
		core.enrol.submit_user_enrolment_form.Params,
		core.enrol.submit_user_enrolment_form.Returns,
	];
	core_enrol_unenrol_user_enrolment: [
		core.enrol.unenrol_user_enrolment.Params,
		core.enrol.unenrol_user_enrolment.Returns,
	];
	core_fetch_notifications: [core.fetch.notifications.Params, core.fetch.notifications.Returns];
	core_files_delete_draft_files: [
		core.files.delete_draft_files.Params,
		core.files.delete_draft_files.Returns,
	];
	core_files_get_files: [core.files.get_files.Params, core.files.get_files.Returns];
	core_files_get_unused_draft_itemid: [
		core.files.get_unused_draft_itemid.Params,
		core.files.get_unused_draft_itemid.Returns,
	];
	core_files_upload: [core.files.upload.Params, core.files.upload.Returns];
	core_filters_get_available_in_context: [
		core.filters.get_available_in_context.Params,
		core.filters.get_available_in_context.Returns,
	];
	core_form_dynamic_form: [core.form.dynamic_form.Params, core.form.dynamic_form.Returns];
	core_form_get_filetypes_browser_data: [
		core.form.get_filetypes_browser_data.Params,
		core.form.get_filetypes_browser_data.Returns,
	];
	core_get_component_strings: [
		core.get.component_strings.Params,
		core.get.component_strings.Returns,
	];
	core_get_fragment: [core.get.fragment.Params, core.get.fragment.Returns];
	core_get_strings: [core.get.strings.Params, core.get.strings.Returns];
	core_get_user_dates: [core.get.user_dates.Params, core.get.user_dates.Returns];
	core_grades_create_gradecategories: [
		core.grades.create_gradecategories.Params,
		core.grades.create_gradecategories.Returns,
	];
	core_grades_create_gradecategory: [
		core.grades.create_gradecategory.Params,
		core.grades.create_gradecategory.Returns,
	];
	core_grades_get_enrolled_users_for_search_widget: [
		core.grades.get_enrolled_users_for_search_widget.Params,
		core.grades.get_enrolled_users_for_search_widget.Returns,
	];
	core_grades_get_enrolled_users_for_selector: [
		core.grades.get_enrolled_users_for_selector.Params,
		core.grades.get_enrolled_users_for_selector.Returns,
	];
	core_grades_get_feedback: [core.grades.get_feedback.Params, core.grades.get_feedback.Returns];
	core_grades_get_gradeitems: [
		core.grades.get_gradeitems.Params,
		core.grades.get_gradeitems.Returns,
	];
	core_grades_get_groups_for_search_widget: [
		core.grades.get_groups_for_search_widget.Params,
		core.grades.get_groups_for_search_widget.Returns,
	];
	core_grades_get_groups_for_selector: [
		core.grades.get_groups_for_selector.Params,
		core.grades.get_groups_for_selector.Returns,
	];
	core_grades_grader_gradingpanel_point_fetch: [
		core.grades.grader_gradingpanel_point_fetch.Params,
		core.grades.grader_gradingpanel_point_fetch.Returns,
	];
	core_grades_grader_gradingpanel_point_store: [
		core.grades.grader_gradingpanel_point_store.Params,
		core.grades.grader_gradingpanel_point_store.Returns,
	];
	core_grades_grader_gradingpanel_scale_fetch: [
		core.grades.grader_gradingpanel_scale_fetch.Params,
		core.grades.grader_gradingpanel_scale_fetch.Returns,
	];
	core_grades_grader_gradingpanel_scale_store: [
		core.grades.grader_gradingpanel_scale_store.Params,
		core.grades.grader_gradingpanel_scale_store.Returns,
	];
	core_grading_get_definitions: [
		core.grading.get_definitions.Params,
		core.grading.get_definitions.Returns,
	];
	core_grading_get_gradingform_instances: [
		core.grading.get_gradingform_instances.Params,
		core.grading.get_gradingform_instances.Returns,
	];
	core_group_create_groupings: [
		core.group.create_groupings.Params,
		core.group.create_groupings.Returns,
	];
	core_group_create_groups: [core.group.create_groups.Params, core.group.create_groups.Returns];
	core_group_get_activity_allowed_groups: [
		core.group.get_activity_allowed_groups.Params,
		core.group.get_activity_allowed_groups.Returns,
	];
	core_group_get_activity_groupmode: [
		core.group.get_activity_groupmode.Params,
		core.group.get_activity_groupmode.Returns,
	];
	core_group_get_course_groupings: [
		core.group.get_course_groupings.Params,
		core.group.get_course_groupings.Returns,
	];
	core_group_get_course_groups: [
		core.group.get_course_groups.Params,
		core.group.get_course_groups.Returns,
	];
	core_group_get_course_user_groups: [
		core.group.get_course_user_groups.Params,
		core.group.get_course_user_groups.Returns,
	];
	core_group_get_group_members: [
		core.group.get_group_members.Params,
		core.group.get_group_members.Returns,
	];
	core_group_get_groupings: [core.group.get_groupings.Params, core.group.get_groupings.Returns];
	core_group_get_groups: [core.group.get_groups.Params, core.group.get_groups.Returns];
	core_h5p_get_trusted_h5p_file: [
		core.h5p.get_trusted_h5p_file.Params,
		core.h5p.get_trusted_h5p_file.Returns,
	];
	core_message_block_user: [core.message.block_user.Params, core.message.block_user.Returns];
	core_message_confirm_contact_request: [
		core.message.confirm_contact_request.Params,
		core.message.confirm_contact_request.Returns,
	];
	core_message_create_contact_request: [
		core.message.create_contact_request.Params,
		core.message.create_contact_request.Returns,
	];
	core_message_data_for_messagearea_search_messages: [
		core.message.data_for_messagearea_search_messages.Params,
		core.message.data_for_messagearea_search_messages.Returns,
	];
	core_message_decline_contact_request: [
		core.message.decline_contact_request.Params,
		core.message.decline_contact_request.Returns,
	];
	core_message_delete_conversations_by_id: [
		core.message.delete_conversations_by_id.Params,
		core.message.delete_conversations_by_id.Returns,
	];
	core_message_delete_message: [
		core.message.delete_message.Params,
		core.message.delete_message.Returns,
	];
	core_message_delete_message_for_all_users: [
		core.message.delete_message_for_all_users.Params,
		core.message.delete_message_for_all_users.Returns,
	];
	core_message_get_blocked_users: [
		core.message.get_blocked_users.Params,
		core.message.get_blocked_users.Returns,
	];
	core_message_get_contact_requests: [
		core.message.get_contact_requests.Params,
		core.message.get_contact_requests.Returns,
	];
	core_message_get_conversation: [
		core.message.get_conversation.Params,
		core.message.get_conversation.Returns,
	];
	core_message_get_conversation_between_users: [
		core.message.get_conversation_between_users.Params,
		core.message.get_conversation_between_users.Returns,
	];
	core_message_get_conversation_counts: [
		core.message.get_conversation_counts.Params,
		core.message.get_conversation_counts.Returns,
	];
	core_message_get_conversation_members: [
		core.message.get_conversation_members.Params,
		core.message.get_conversation_members.Returns,
	];
	core_message_get_conversation_messages: [
		core.message.get_conversation_messages.Params,
		core.message.get_conversation_messages.Returns,
	];
	core_message_get_conversations: [
		core.message.get_conversations.Params,
		core.message.get_conversations.Returns,
	];
	core_message_get_member_info: [
		core.message.get_member_info.Params,
		core.message.get_member_info.Returns,
	];
	core_message_get_message_processor: [
		core.message.get_message_processor.Params,
		core.message.get_message_processor.Returns,
	];
	core_message_get_messages: [
		core.message.get_messages.Params,
		core.message.get_messages.Returns,
	];
	core_message_get_self_conversation: [
		core.message.get_self_conversation.Params,
		core.message.get_self_conversation.Returns,
	];
	core_message_get_unread_conversation_counts: [
		core.message.get_unread_conversation_counts.Params,
		core.message.get_unread_conversation_counts.Returns,
	];
	core_message_get_user_contacts: [
		core.message.get_user_contacts.Params,
		core.message.get_user_contacts.Returns,
	];
	core_message_get_user_message_preferences: [
		core.message.get_user_message_preferences.Params,
		core.message.get_user_message_preferences.Returns,
	];
	core_message_get_user_notification_preferences: [
		core.message.get_user_notification_preferences.Params,
		core.message.get_user_notification_preferences.Returns,
	];
	core_message_mark_message_read: [
		core.message.mark_message_read.Params,
		core.message.mark_message_read.Returns,
	];
	core_message_mark_notification_read: [
		core.message.mark_notification_read.Params,
		core.message.mark_notification_read.Returns,
	];
	core_message_message_search_users: [
		core.message.message_search_users.Params,
		core.message.message_search_users.Returns,
	];
	core_message_mute_conversations: [
		core.message.mute_conversations.Params,
		core.message.mute_conversations.Returns,
	];
	core_message_search_contacts: [
		core.message.search_contacts.Params,
		core.message.search_contacts.Returns,
	];
	core_message_send_instant_messages: [
		core.message.send_instant_messages.Params,
		core.message.send_instant_messages.Returns,
	];
	core_message_send_messages_to_conversation: [
		core.message.send_messages_to_conversation.Params,
		core.message.send_messages_to_conversation.Returns,
	];
	core_message_set_favourite_conversations: [
		core.message.set_favourite_conversations.Params,
		core.message.set_favourite_conversations.Returns,
	];
	core_message_unblock_user: [
		core.message.unblock_user.Params,
		core.message.unblock_user.Returns,
	];
	core_message_unmute_conversations: [
		core.message.unmute_conversations.Params,
		core.message.unmute_conversations.Returns,
	];
	core_message_unset_favourite_conversations: [
		core.message.unset_favourite_conversations.Params,
		core.message.unset_favourite_conversations.Returns,
	];
	core_moodlenet_auth_check: [
		core.moodlenet.auth_check.Params,
		core.moodlenet.auth_check.Returns,
	];
	core_moodlenet_get_share_info_activity: [
		core.moodlenet.get_share_info_activity.Params,
		core.moodlenet.get_share_info_activity.Returns,
	];
	core_moodlenet_send_activity: [
		core.moodlenet.send_activity.Params,
		core.moodlenet.send_activity.Returns,
	];
	core_notes_create_notes: [core.notes.create_notes.Params, core.notes.create_notes.Returns];
	core_notes_delete_notes: [core.notes.delete_notes.Params, core.notes.delete_notes.Returns];
	core_notes_get_course_notes: [
		core.notes.get_course_notes.Params,
		core.notes.get_course_notes.Returns,
	];
	core_notes_get_notes: [core.notes.get_notes.Params, core.notes.get_notes.Returns];
	core_notes_update_notes: [core.notes.update_notes.Params, core.notes.update_notes.Returns];
	core_notes_view_notes: [core.notes.view_notes.Params, core.notes.view_notes.Returns];
	core_output_load_fontawesome_icon_map: [
		core.output.load_fontawesome_icon_map.Params,
		core.output.load_fontawesome_icon_map.Returns,
	];
	core_output_load_fontawesome_icon_system_map: [
		core.output.load_fontawesome_icon_system_map.Params,
		core.output.load_fontawesome_icon_system_map.Returns,
	];
	core_output_load_template_with_dependencies: [
		core.output.load_template_with_dependencies.Params,
		core.output.load_template_with_dependencies.Returns,
	];
	core_payment_get_available_gateways: [
		core.payment.get_available_gateways.Params,
		core.payment.get_available_gateways.Returns,
	];
	core_question_get_random_question_summaries: [
		core.question.get_random_question_summaries.Params,
		core.question.get_random_question_summaries.Returns,
	];
	core_question_submit_tags_form: [
		core.question.submit_tags_form.Params,
		core.question.submit_tags_form.Returns,
	];
	core_question_update_flag: [
		core.question.update_flag.Params,
		core.question.update_flag.Returns,
	];
	core_rating_add_rating: [core.rating.add_rating.Params, core.rating.add_rating.Returns];
	core_rating_get_item_ratings: [
		core.rating.get_item_ratings.Params,
		core.rating.get_item_ratings.Returns,
	];
	core_reportbuilder_columns_add: [
		core.reportbuilder.columns_add.Params,
		core.reportbuilder.columns_add.Returns,
	];
	core_reportbuilder_columns_delete: [
		core.reportbuilder.columns_delete.Params,
		core.reportbuilder.columns_delete.Returns,
	];
	core_reportbuilder_columns_sort_get: [
		core.reportbuilder.columns_sort_get.Params,
		core.reportbuilder.columns_sort_get.Returns,
	];
	core_reportbuilder_columns_sort_reorder: [
		core.reportbuilder.columns_sort_reorder.Params,
		core.reportbuilder.columns_sort_reorder.Returns,
	];
	core_reportbuilder_columns_sort_toggle: [
		core.reportbuilder.columns_sort_toggle.Params,
		core.reportbuilder.columns_sort_toggle.Returns,
	];
	core_reportbuilder_conditions_add: [
		core.reportbuilder.conditions_add.Params,
		core.reportbuilder.conditions_add.Returns,
	];
	core_reportbuilder_conditions_delete: [
		core.reportbuilder.conditions_delete.Params,
		core.reportbuilder.conditions_delete.Returns,
	];
	core_reportbuilder_conditions_reorder: [
		core.reportbuilder.conditions_reorder.Params,
		core.reportbuilder.conditions_reorder.Returns,
	];
	core_reportbuilder_conditions_reset: [
		core.reportbuilder.conditions_reset.Params,
		core.reportbuilder.conditions_reset.Returns,
	];
	core_reportbuilder_filters_add: [
		core.reportbuilder.filters_add.Params,
		core.reportbuilder.filters_add.Returns,
	];
	core_reportbuilder_filters_delete: [
		core.reportbuilder.filters_delete.Params,
		core.reportbuilder.filters_delete.Returns,
	];
	core_reportbuilder_filters_reorder: [
		core.reportbuilder.filters_reorder.Params,
		core.reportbuilder.filters_reorder.Returns,
	];
	core_reportbuilder_list_reports: [
		core.reportbuilder.list_reports.Params,
		core.reportbuilder.list_reports.Returns,
	];
	core_reportbuilder_reports_get: [
		core.reportbuilder.reports_get.Params,
		core.reportbuilder.reports_get.Returns,
	];
	core_reportbuilder_retrieve_report: [
		core.reportbuilder.retrieve_report.Params,
		core.reportbuilder.retrieve_report.Returns,
	];
	core_reportbuilder_view_report: [
		core.reportbuilder.view_report.Params,
		core.reportbuilder.view_report.Returns,
	];
	core_search_get_relevant_users: [
		core.search.get_relevant_users.Params,
		core.search.get_relevant_users.Returns,
	];
	core_session_time_remaining: [
		core.session.time_remaining.Params,
		core.session.time_remaining.Returns,
	];
	core_table_get_dynamic_table_content: [
		core.table.get_dynamic_table_content.Params,
		core.table.get_dynamic_table_content.Returns,
	];
	core_tag_get_tag_areas: [core.tag.get_tag_areas.Params, core.tag.get_tag_areas.Returns];
	core_tag_get_tag_cloud: [core.tag.get_tag_cloud.Params, core.tag.get_tag_cloud.Returns];
	core_tag_get_tag_collections: [
		core.tag.get_tag_collections.Params,
		core.tag.get_tag_collections.Returns,
	];
	core_tag_get_tagindex: [core.tag.get_tagindex.Params, core.tag.get_tagindex.Returns];
	core_tag_get_tagindex_per_area: [
		core.tag.get_tagindex_per_area.Params,
		core.tag.get_tagindex_per_area.Returns,
	];
	core_tag_get_tags: [core.tag.get_tags.Params, core.tag.get_tags.Returns];
	core_tag_update_tags: [core.tag.update_tags.Params, core.tag.update_tags.Returns];
	core_update_inplace_editable: [
		core.update.inplace_editable.Params,
		core.update.inplace_editable.Returns,
	];
	core_user_add_user_device: [
		core.user.add_user_device.Params,
		core.user.add_user_device.Returns,
	];
	core_user_agree_site_policy: [
		core.user.agree_site_policy.Params,
		core.user.agree_site_policy.Returns,
	];
	core_user_create_users: [core.user.create_users.Params, core.user.create_users.Returns];
	core_user_get_course_user_profiles: [
		core.user.get_course_user_profiles.Params,
		core.user.get_course_user_profiles.Returns,
	];
	core_user_get_private_files_info: [
		core.user.get_private_files_info.Params,
		core.user.get_private_files_info.Returns,
	];
	core_user_get_user_preferences: [
		core.user.get_user_preferences.Params,
		core.user.get_user_preferences.Returns,
	];
	core_user_get_users: [core.user.get_users.Params, core.user.get_users.Returns];
	core_user_get_users_by_field: [
		core.user.get_users_by_field.Params,
		core.user.get_users_by_field.Returns,
	];
	core_user_remove_user_device: [
		core.user.remove_user_device.Params,
		core.user.remove_user_device.Returns,
	];
	core_user_search_identity: [
		core.user.search_identity.Params,
		core.user.search_identity.Returns,
	];
	core_user_set_user_preferences: [
		core.user.set_user_preferences.Params,
		core.user.set_user_preferences.Returns,
	];
	core_user_update_picture: [core.user.update_picture.Params, core.user.update_picture.Returns];
	core_user_update_user_device_public_key: [
		core.user.update_user_device_public_key.Params,
		core.user.update_user_device_public_key.Returns,
	];
	core_user_update_users: [core.user.update_users.Params, core.user.update_users.Returns];
	core_user_view_user_list: [core.user.view_user_list.Params, core.user.view_user_list.Returns];
	core_user_view_user_profile: [
		core.user.view_user_profile.Params,
		core.user.view_user_profile.Returns,
	];
	core_webservice_get_site_info: [
		core.webservice.get_site_info.Params,
		core.webservice.get_site_info.Returns,
	];
	core_xapi_get_states: [core.xapi.get_states.Params, core.xapi.get_states.Returns];
	core_xapi_statement_post: [core.xapi.statement_post.Params, core.xapi.statement_post.Returns];
	enrol_guest_get_instance_info: [
		enrol.guest.get_instance_info.Params,
		enrol.guest.get_instance_info.Returns,
	];
	enrol_meta_add_instances: [enrol.meta.add_instances.Params, enrol.meta.add_instances.Returns];
	enrol_meta_delete_instances: [
		enrol.meta.delete_instances.Params,
		enrol.meta.delete_instances.Returns,
	];
	enrol_self_enrol_user: [enrol.self.enrol_user.Params, enrol.self.enrol_user.Returns];
	enrol_self_get_instance_info: [
		enrol.self.get_instance_info.Params,
		enrol.self.get_instance_info.Returns,
	];
	gradereport_grader_get_users_in_report: [
		gradereport.grader.get_users_in_report.Params,
		gradereport.grader.get_users_in_report.Returns,
	];
	gradereport_overview_get_course_grades: [
		gradereport.overview.get_course_grades.Params,
		gradereport.overview.get_course_grades.Returns,
	];
	gradereport_overview_view_grade_report: [
		gradereport.overview.view_grade_report.Params,
		gradereport.overview.view_grade_report.Returns,
	];
	gradereport_singleview_get_grade_items_for_search_widget: [
		gradereport.singleview.get_grade_items_for_search_widget.Params,
		gradereport.singleview.get_grade_items_for_search_widget.Returns,
	];
	gradereport_user_get_access_information: [
		gradereport.user.get_access_information.Params,
		gradereport.user.get_access_information.Returns,
	];
	gradereport_user_get_grade_items: [
		gradereport.user.get_grade_items.Params,
		gradereport.user.get_grade_items.Returns,
	];
	gradereport_user_get_grades_table: [
		gradereport.user.get_grades_table.Params,
		gradereport.user.get_grades_table.Returns,
	];
	gradereport_user_view_grade_report: [
		gradereport.user.view_grade_report.Params,
		gradereport.user.view_grade_report.Returns,
	];
	gradingform_guide_grader_gradingpanel_fetch: [
		gradingform.guide.grader_gradingpanel_fetch.Params,
		gradingform.guide.grader_gradingpanel_fetch.Returns,
	];
	gradingform_guide_grader_gradingpanel_store: [
		gradingform.guide.grader_gradingpanel_store.Params,
		gradingform.guide.grader_gradingpanel_store.Returns,
	];
	gradingform_rubric_grader_gradingpanel_fetch: [
		gradingform.rubric.grader_gradingpanel_fetch.Params,
		gradingform.rubric.grader_gradingpanel_fetch.Returns,
	];
	gradingform_rubric_grader_gradingpanel_store: [
		gradingform.rubric.grader_gradingpanel_store.Params,
		gradingform.rubric.grader_gradingpanel_store.Returns,
	];
	message_airnotifier_are_notification_preferences_configured: [
		message.airnotifier.are_notification_preferences_configured.Params,
		message.airnotifier.are_notification_preferences_configured.Returns,
	];
	message_airnotifier_enable_device: [
		message.airnotifier.enable_device.Params,
		message.airnotifier.enable_device.Returns,
	];
	message_airnotifier_get_user_devices: [
		message.airnotifier.get_user_devices.Params,
		message.airnotifier.get_user_devices.Returns,
	];
	message_popup_get_popup_notifications: [
		message.popup.get_popup_notifications.Params,
		message.popup.get_popup_notifications.Returns,
	];
	mod_assign_copy_previous_attempt: [
		mod.assign.copy_previous_attempt.Params,
		mod.assign.copy_previous_attempt.Returns,
	];
	mod_assign_get_assignments: [
		mod.assign.get_assignments.Params,
		mod.assign.get_assignments.Returns,
	];
	mod_assign_get_grades: [mod.assign.get_grades.Params, mod.assign.get_grades.Returns];
	mod_assign_get_participant: [
		mod.assign.get_participant.Params,
		mod.assign.get_participant.Returns,
	];
	mod_assign_get_submission_status: [
		mod.assign.get_submission_status.Params,
		mod.assign.get_submission_status.Returns,
	];
	mod_assign_get_submissions: [
		mod.assign.get_submissions.Params,
		mod.assign.get_submissions.Returns,
	];
	mod_assign_get_user_flags: [
		mod.assign.get_user_flags.Params,
		mod.assign.get_user_flags.Returns,
	];
	mod_assign_get_user_mappings: [
		mod.assign.get_user_mappings.Params,
		mod.assign.get_user_mappings.Returns,
	];
	mod_assign_list_participants: [
		mod.assign.list_participants.Params,
		mod.assign.list_participants.Returns,
	];
	mod_assign_lock_submissions: [
		mod.assign.lock_submissions.Params,
		mod.assign.lock_submissions.Returns,
	];
	mod_assign_reveal_identities: [
		mod.assign.reveal_identities.Params,
		mod.assign.reveal_identities.Returns,
	];
	mod_assign_revert_submissions_to_draft: [
		mod.assign.revert_submissions_to_draft.Params,
		mod.assign.revert_submissions_to_draft.Returns,
	];
	mod_assign_save_submission: [
		mod.assign.save_submission.Params,
		mod.assign.save_submission.Returns,
	];
	mod_assign_save_user_extensions: [
		mod.assign.save_user_extensions.Params,
		mod.assign.save_user_extensions.Returns,
	];
	mod_assign_set_user_flags: [
		mod.assign.set_user_flags.Params,
		mod.assign.set_user_flags.Returns,
	];
	mod_assign_start_submission: [
		mod.assign.start_submission.Params,
		mod.assign.start_submission.Returns,
	];
	mod_assign_submit_for_grading: [
		mod.assign.submit_for_grading.Params,
		mod.assign.submit_for_grading.Returns,
	];
	mod_assign_submit_grading_form: [
		mod.assign.submit_grading_form.Params,
		mod.assign.submit_grading_form.Returns,
	];
	mod_assign_unlock_submissions: [
		mod.assign.unlock_submissions.Params,
		mod.assign.unlock_submissions.Returns,
	];
	mod_assign_view_assign: [mod.assign.view_assign.Params, mod.assign.view_assign.Returns];
	mod_assign_view_grading_table: [
		mod.assign.view_grading_table.Params,
		mod.assign.view_grading_table.Returns,
	];
	mod_assign_view_submission_status: [
		mod.assign.view_submission_status.Params,
		mod.assign.view_submission_status.Returns,
	];
	mod_bigbluebuttonbn_can_join: [
		mod.bigbluebuttonbn.can_join.Params,
		mod.bigbluebuttonbn.can_join.Returns,
	];
	mod_bigbluebuttonbn_completion_validate: [
		mod.bigbluebuttonbn.completion_validate.Params,
		mod.bigbluebuttonbn.completion_validate.Returns,
	];
	mod_bigbluebuttonbn_end_meeting: [
		mod.bigbluebuttonbn.end_meeting.Params,
		mod.bigbluebuttonbn.end_meeting.Returns,
	];
	mod_bigbluebuttonbn_get_bigbluebuttonbns_by_courses: [
		mod.bigbluebuttonbn.get_bigbluebuttonbns_by_courses.Params,
		mod.bigbluebuttonbn.get_bigbluebuttonbns_by_courses.Returns,
	];
	mod_bigbluebuttonbn_get_join_url: [
		mod.bigbluebuttonbn.get_join_url.Params,
		mod.bigbluebuttonbn.get_join_url.Returns,
	];
	mod_bigbluebuttonbn_get_recordings: [
		mod.bigbluebuttonbn.get_recordings.Params,
		mod.bigbluebuttonbn.get_recordings.Returns,
	];
	mod_bigbluebuttonbn_get_recordings_to_import: [
		mod.bigbluebuttonbn.get_recordings_to_import.Params,
		mod.bigbluebuttonbn.get_recordings_to_import.Returns,
	];
	mod_bigbluebuttonbn_meeting_info: [
		mod.bigbluebuttonbn.meeting_info.Params,
		mod.bigbluebuttonbn.meeting_info.Returns,
	];
	mod_bigbluebuttonbn_update_recording: [
		mod.bigbluebuttonbn.update_recording.Params,
		mod.bigbluebuttonbn.update_recording.Returns,
	];
	mod_bigbluebuttonbn_view_bigbluebuttonbn: [
		mod.bigbluebuttonbn.view_bigbluebuttonbn.Params,
		mod.bigbluebuttonbn.view_bigbluebuttonbn.Returns,
	];
	mod_book_get_books_by_courses: [
		mod.book.get_books_by_courses.Params,
		mod.book.get_books_by_courses.Returns,
	];
	mod_book_view_book: [mod.book.view_book.Params, mod.book.view_book.Returns];
	mod_chat_get_chat_latest_messages: [
		mod.chat.get_chat_latest_messages.Params,
		mod.chat.get_chat_latest_messages.Returns,
	];
	mod_chat_get_chat_users: [mod.chat.get_chat_users.Params, mod.chat.get_chat_users.Returns];
	mod_chat_get_chats_by_courses: [
		mod.chat.get_chats_by_courses.Params,
		mod.chat.get_chats_by_courses.Returns,
	];
	mod_chat_get_session_messages: [
		mod.chat.get_session_messages.Params,
		mod.chat.get_session_messages.Returns,
	];
	mod_chat_get_sessions: [mod.chat.get_sessions.Params, mod.chat.get_sessions.Returns];
	mod_chat_login_user: [mod.chat.login_user.Params, mod.chat.login_user.Returns];
	mod_chat_send_chat_message: [
		mod.chat.send_chat_message.Params,
		mod.chat.send_chat_message.Returns,
	];
	mod_chat_view_chat: [mod.chat.view_chat.Params, mod.chat.view_chat.Returns];
	mod_choice_delete_choice_responses: [
		mod.choice.delete_choice_responses.Params,
		mod.choice.delete_choice_responses.Returns,
	];
	mod_choice_get_choice_options: [
		mod.choice.get_choice_options.Params,
		mod.choice.get_choice_options.Returns,
	];
	mod_choice_get_choice_results: [
		mod.choice.get_choice_results.Params,
		mod.choice.get_choice_results.Returns,
	];
	mod_choice_get_choices_by_courses: [
		mod.choice.get_choices_by_courses.Params,
		mod.choice.get_choices_by_courses.Returns,
	];
	mod_choice_submit_choice_response: [
		mod.choice.submit_choice_response.Params,
		mod.choice.submit_choice_response.Returns,
	];
	mod_choice_view_choice: [mod.choice.view_choice.Params, mod.choice.view_choice.Returns];
	mod_data_add_entry: [mod.data.add_entry.Params, mod.data.add_entry.Returns];
	mod_data_approve_entry: [mod.data.approve_entry.Params, mod.data.approve_entry.Returns];
	mod_data_delete_entry: [mod.data.delete_entry.Params, mod.data.delete_entry.Returns];
	mod_data_delete_saved_preset: [
		mod.data.delete_saved_preset.Params,
		mod.data.delete_saved_preset.Returns,
	];
	mod_data_get_data_access_information: [
		mod.data.get_data_access_information.Params,
		mod.data.get_data_access_information.Returns,
	];
	mod_data_get_databases_by_courses: [
		mod.data.get_databases_by_courses.Params,
		mod.data.get_databases_by_courses.Returns,
	];
	mod_data_get_entries: [mod.data.get_entries.Params, mod.data.get_entries.Returns];
	mod_data_get_entry: [mod.data.get_entry.Params, mod.data.get_entry.Returns];
	mod_data_get_fields: [mod.data.get_fields.Params, mod.data.get_fields.Returns];
	mod_data_get_mapping_information: [
		mod.data.get_mapping_information.Params,
		mod.data.get_mapping_information.Returns,
	];
	mod_data_search_entries: [mod.data.search_entries.Params, mod.data.search_entries.Returns];
	mod_data_update_entry: [mod.data.update_entry.Params, mod.data.update_entry.Returns];
	mod_data_view_database: [mod.data.view_database.Params, mod.data.view_database.Returns];
	mod_feedback_get_analysis: [
		mod.feedback.get_analysis.Params,
		mod.feedback.get_analysis.Returns,
	];
	mod_feedback_get_current_completed_tmp: [
		mod.feedback.get_current_completed_tmp.Params,
		mod.feedback.get_current_completed_tmp.Returns,
	];
	mod_feedback_get_feedback_access_information: [
		mod.feedback.get_feedback_access_information.Params,
		mod.feedback.get_feedback_access_information.Returns,
	];
	mod_feedback_get_feedbacks_by_courses: [
		mod.feedback.get_feedbacks_by_courses.Params,
		mod.feedback.get_feedbacks_by_courses.Returns,
	];
	mod_feedback_get_finished_responses: [
		mod.feedback.get_finished_responses.Params,
		mod.feedback.get_finished_responses.Returns,
	];
	mod_feedback_get_items: [mod.feedback.get_items.Params, mod.feedback.get_items.Returns];
	mod_feedback_get_last_completed: [
		mod.feedback.get_last_completed.Params,
		mod.feedback.get_last_completed.Returns,
	];
	mod_feedback_get_non_respondents: [
		mod.feedback.get_non_respondents.Params,
		mod.feedback.get_non_respondents.Returns,
	];
	mod_feedback_get_page_items: [
		mod.feedback.get_page_items.Params,
		mod.feedback.get_page_items.Returns,
	];
	mod_feedback_get_responses_analysis: [
		mod.feedback.get_responses_analysis.Params,
		mod.feedback.get_responses_analysis.Returns,
	];
	mod_feedback_get_unfinished_responses: [
		mod.feedback.get_unfinished_responses.Params,
		mod.feedback.get_unfinished_responses.Returns,
	];
	mod_feedback_launch_feedback: [
		mod.feedback.launch_feedback.Params,
		mod.feedback.launch_feedback.Returns,
	];
	mod_feedback_process_page: [
		mod.feedback.process_page.Params,
		mod.feedback.process_page.Returns,
	];
	mod_feedback_view_feedback: [
		mod.feedback.view_feedback.Params,
		mod.feedback.view_feedback.Returns,
	];
	mod_folder_get_folders_by_courses: [
		mod.folder.get_folders_by_courses.Params,
		mod.folder.get_folders_by_courses.Returns,
	];
	mod_folder_view_folder: [mod.folder.view_folder.Params, mod.folder.view_folder.Returns];
	mod_forum_add_discussion: [mod.forum.add_discussion.Params, mod.forum.add_discussion.Returns];
	mod_forum_add_discussion_post: [
		mod.forum.add_discussion_post.Params,
		mod.forum.add_discussion_post.Returns,
	];
	mod_forum_can_add_discussion: [
		mod.forum.can_add_discussion.Params,
		mod.forum.can_add_discussion.Returns,
	];
	mod_forum_delete_post: [mod.forum.delete_post.Params, mod.forum.delete_post.Returns];
	mod_forum_get_discussion_post: [
		mod.forum.get_discussion_post.Params,
		mod.forum.get_discussion_post.Returns,
	];
	mod_forum_get_discussion_posts: [
		mod.forum.get_discussion_posts.Params,
		mod.forum.get_discussion_posts.Returns,
	];
	mod_forum_get_discussion_posts_by_userid: [
		mod.forum.get_discussion_posts_by_userid.Params,
		mod.forum.get_discussion_posts_by_userid.Returns,
	];
	mod_forum_get_forum_access_information: [
		mod.forum.get_forum_access_information.Params,
		mod.forum.get_forum_access_information.Returns,
	];
	mod_forum_get_forum_discussions: [
		mod.forum.get_forum_discussions.Params,
		mod.forum.get_forum_discussions.Returns,
	];
	mod_forum_get_forum_discussions_paginated: [
		mod.forum.get_forum_discussions_paginated.Params,
		mod.forum.get_forum_discussions_paginated.Returns,
	];
	mod_forum_get_forums_by_courses: [
		mod.forum.get_forums_by_courses.Params,
		mod.forum.get_forums_by_courses.Returns,
	];
	mod_forum_prepare_draft_area_for_post: [
		mod.forum.prepare_draft_area_for_post.Params,
		mod.forum.prepare_draft_area_for_post.Returns,
	];
	mod_forum_set_lock_state: [mod.forum.set_lock_state.Params, mod.forum.set_lock_state.Returns];
	mod_forum_set_pin_state: [mod.forum.set_pin_state.Params, mod.forum.set_pin_state.Returns];
	mod_forum_set_subscription_state: [
		mod.forum.set_subscription_state.Params,
		mod.forum.set_subscription_state.Returns,
	];
	mod_forum_toggle_favourite_state: [
		mod.forum.toggle_favourite_state.Params,
		mod.forum.toggle_favourite_state.Returns,
	];
	mod_forum_update_discussion_post: [
		mod.forum.update_discussion_post.Params,
		mod.forum.update_discussion_post.Returns,
	];
	mod_forum_view_forum: [mod.forum.view_forum.Params, mod.forum.view_forum.Returns];
	mod_forum_view_forum_discussion: [
		mod.forum.view_forum_discussion.Params,
		mod.forum.view_forum_discussion.Returns,
	];
	mod_glossary_add_entry: [mod.glossary.add_entry.Params, mod.glossary.add_entry.Returns];
	mod_glossary_delete_entry: [
		mod.glossary.delete_entry.Params,
		mod.glossary.delete_entry.Returns,
	];
	mod_glossary_get_authors: [mod.glossary.get_authors.Params, mod.glossary.get_authors.Returns];
	mod_glossary_get_categories: [
		mod.glossary.get_categories.Params,
		mod.glossary.get_categories.Returns,
	];
	mod_glossary_get_entries_by_author: [
		mod.glossary.get_entries_by_author.Params,
		mod.glossary.get_entries_by_author.Returns,
	];
	mod_glossary_get_entries_by_author_id: [
		mod.glossary.get_entries_by_author_id.Params,
		mod.glossary.get_entries_by_author_id.Returns,
	];
	mod_glossary_get_entries_by_category: [
		mod.glossary.get_entries_by_category.Params,
		mod.glossary.get_entries_by_category.Returns,
	];
	mod_glossary_get_entries_by_date: [
		mod.glossary.get_entries_by_date.Params,
		mod.glossary.get_entries_by_date.Returns,
	];
	mod_glossary_get_entries_by_letter: [
		mod.glossary.get_entries_by_letter.Params,
		mod.glossary.get_entries_by_letter.Returns,
	];
	mod_glossary_get_entries_by_search: [
		mod.glossary.get_entries_by_search.Params,
		mod.glossary.get_entries_by_search.Returns,
	];
	mod_glossary_get_entries_by_term: [
		mod.glossary.get_entries_by_term.Params,
		mod.glossary.get_entries_by_term.Returns,
	];
	mod_glossary_get_entries_to_approve: [
		mod.glossary.get_entries_to_approve.Params,
		mod.glossary.get_entries_to_approve.Returns,
	];
	mod_glossary_get_entry_by_id: [
		mod.glossary.get_entry_by_id.Params,
		mod.glossary.get_entry_by_id.Returns,
	];
	mod_glossary_get_glossaries_by_courses: [
		mod.glossary.get_glossaries_by_courses.Params,
		mod.glossary.get_glossaries_by_courses.Returns,
	];
	mod_glossary_prepare_entry_for_edition: [
		mod.glossary.prepare_entry_for_edition.Params,
		mod.glossary.prepare_entry_for_edition.Returns,
	];
	mod_glossary_update_entry: [
		mod.glossary.update_entry.Params,
		mod.glossary.update_entry.Returns,
	];
	mod_glossary_view_entry: [mod.glossary.view_entry.Params, mod.glossary.view_entry.Returns];
	mod_glossary_view_glossary: [
		mod.glossary.view_glossary.Params,
		mod.glossary.view_glossary.Returns,
	];
	mod_h5pactivity_get_attempts: [
		mod.h5pactivity.get_attempts.Params,
		mod.h5pactivity.get_attempts.Returns,
	];
	mod_h5pactivity_get_h5pactivities_by_courses: [
		mod.h5pactivity.get_h5pactivities_by_courses.Params,
		mod.h5pactivity.get_h5pactivities_by_courses.Returns,
	];
	mod_h5pactivity_get_h5pactivity_access_information: [
		mod.h5pactivity.get_h5pactivity_access_information.Params,
		mod.h5pactivity.get_h5pactivity_access_information.Returns,
	];
	mod_h5pactivity_get_results: [
		mod.h5pactivity.get_results.Params,
		mod.h5pactivity.get_results.Returns,
	];
	mod_h5pactivity_get_user_attempts: [
		mod.h5pactivity.get_user_attempts.Params,
		mod.h5pactivity.get_user_attempts.Returns,
	];
	mod_h5pactivity_log_report_viewed: [
		mod.h5pactivity.log_report_viewed.Params,
		mod.h5pactivity.log_report_viewed.Returns,
	];
	mod_h5pactivity_view_h5pactivity: [
		mod.h5pactivity.view_h5pactivity.Params,
		mod.h5pactivity.view_h5pactivity.Returns,
	];
	mod_imscp_get_imscps_by_courses: [
		mod.imscp.get_imscps_by_courses.Params,
		mod.imscp.get_imscps_by_courses.Returns,
	];
	mod_imscp_view_imscp: [mod.imscp.view_imscp.Params, mod.imscp.view_imscp.Returns];
	mod_label_get_labels_by_courses: [
		mod.label.get_labels_by_courses.Params,
		mod.label.get_labels_by_courses.Returns,
	];
	mod_lesson_finish_attempt: [
		mod.lesson.finish_attempt.Params,
		mod.lesson.finish_attempt.Returns,
	];
	mod_lesson_get_attempts_overview: [
		mod.lesson.get_attempts_overview.Params,
		mod.lesson.get_attempts_overview.Returns,
	];
	mod_lesson_get_content_pages_viewed: [
		mod.lesson.get_content_pages_viewed.Params,
		mod.lesson.get_content_pages_viewed.Returns,
	];
	mod_lesson_get_lesson: [mod.lesson.get_lesson.Params, mod.lesson.get_lesson.Returns];
	mod_lesson_get_lesson_access_information: [
		mod.lesson.get_lesson_access_information.Params,
		mod.lesson.get_lesson_access_information.Returns,
	];
	mod_lesson_get_lessons_by_courses: [
		mod.lesson.get_lessons_by_courses.Params,
		mod.lesson.get_lessons_by_courses.Returns,
	];
	mod_lesson_get_page_data: [mod.lesson.get_page_data.Params, mod.lesson.get_page_data.Returns];
	mod_lesson_get_pages: [mod.lesson.get_pages.Params, mod.lesson.get_pages.Returns];
	mod_lesson_get_pages_possible_jumps: [
		mod.lesson.get_pages_possible_jumps.Params,
		mod.lesson.get_pages_possible_jumps.Returns,
	];
	mod_lesson_get_questions_attempts: [
		mod.lesson.get_questions_attempts.Params,
		mod.lesson.get_questions_attempts.Returns,
	];
	mod_lesson_get_user_attempt: [
		mod.lesson.get_user_attempt.Params,
		mod.lesson.get_user_attempt.Returns,
	];
	mod_lesson_get_user_attempt_grade: [
		mod.lesson.get_user_attempt_grade.Params,
		mod.lesson.get_user_attempt_grade.Returns,
	];
	mod_lesson_get_user_grade: [
		mod.lesson.get_user_grade.Params,
		mod.lesson.get_user_grade.Returns,
	];
	mod_lesson_get_user_timers: [
		mod.lesson.get_user_timers.Params,
		mod.lesson.get_user_timers.Returns,
	];
	mod_lesson_launch_attempt: [
		mod.lesson.launch_attempt.Params,
		mod.lesson.launch_attempt.Returns,
	];
	mod_lesson_process_page: [mod.lesson.process_page.Params, mod.lesson.process_page.Returns];
	mod_lesson_view_lesson: [mod.lesson.view_lesson.Params, mod.lesson.view_lesson.Returns];
	mod_lti_create_tool_proxy: [
		mod.lti.create_tool_proxy.Params,
		mod.lti.create_tool_proxy.Returns,
	];
	mod_lti_create_tool_type: [mod.lti.create_tool_type.Params, mod.lti.create_tool_type.Returns];
	mod_lti_delete_tool_proxy: [
		mod.lti.delete_tool_proxy.Params,
		mod.lti.delete_tool_proxy.Returns,
	];
	mod_lti_delete_tool_type: [mod.lti.delete_tool_type.Params, mod.lti.delete_tool_type.Returns];
	mod_lti_get_ltis_by_courses: [
		mod.lti.get_ltis_by_courses.Params,
		mod.lti.get_ltis_by_courses.Returns,
	];
	mod_lti_get_tool_launch_data: [
		mod.lti.get_tool_launch_data.Params,
		mod.lti.get_tool_launch_data.Returns,
	];
	mod_lti_get_tool_proxies: [mod.lti.get_tool_proxies.Params, mod.lti.get_tool_proxies.Returns];
	mod_lti_get_tool_proxy_registration_request: [
		mod.lti.get_tool_proxy_registration_request.Params,
		mod.lti.get_tool_proxy_registration_request.Returns,
	];
	mod_lti_get_tool_types: [mod.lti.get_tool_types.Params, mod.lti.get_tool_types.Returns];
	mod_lti_get_tool_types_and_proxies: [
		mod.lti.get_tool_types_and_proxies.Params,
		mod.lti.get_tool_types_and_proxies.Returns,
	];
	mod_lti_get_tool_types_and_proxies_count: [
		mod.lti.get_tool_types_and_proxies_count.Params,
		mod.lti.get_tool_types_and_proxies_count.Returns,
	];
	mod_lti_is_cartridge: [mod.lti.is_cartridge.Params, mod.lti.is_cartridge.Returns];
	mod_lti_update_tool_type: [mod.lti.update_tool_type.Params, mod.lti.update_tool_type.Returns];
	mod_lti_view_lti: [mod.lti.view_lti.Params, mod.lti.view_lti.Returns];
	mod_page_get_pages_by_courses: [
		mod.page.get_pages_by_courses.Params,
		mod.page.get_pages_by_courses.Returns,
	];
	mod_page_view_page: [mod.page.view_page.Params, mod.page.view_page.Returns];
	mod_quiz_get_attempt_access_information: [
		mod.quiz.get_attempt_access_information.Params,
		mod.quiz.get_attempt_access_information.Returns,
	];
	mod_quiz_get_attempt_data: [
		mod.quiz.get_attempt_data.Params,
		mod.quiz.get_attempt_data.Returns,
	];
	mod_quiz_get_attempt_review: [
		mod.quiz.get_attempt_review.Params,
		mod.quiz.get_attempt_review.Returns,
	];
	mod_quiz_get_attempt_summary: [
		mod.quiz.get_attempt_summary.Params,
		mod.quiz.get_attempt_summary.Returns,
	];
	mod_quiz_get_combined_review_options: [
		mod.quiz.get_combined_review_options.Params,
		mod.quiz.get_combined_review_options.Returns,
	];
	mod_quiz_get_quiz_access_information: [
		mod.quiz.get_quiz_access_information.Params,
		mod.quiz.get_quiz_access_information.Returns,
	];
	mod_quiz_get_quiz_feedback_for_grade: [
		mod.quiz.get_quiz_feedback_for_grade.Params,
		mod.quiz.get_quiz_feedback_for_grade.Returns,
	];
	mod_quiz_get_quiz_required_qtypes: [
		mod.quiz.get_quiz_required_qtypes.Params,
		mod.quiz.get_quiz_required_qtypes.Returns,
	];
	mod_quiz_get_quizzes_by_courses: [
		mod.quiz.get_quizzes_by_courses.Params,
		mod.quiz.get_quizzes_by_courses.Returns,
	];
	mod_quiz_get_user_attempts: [
		mod.quiz.get_user_attempts.Params,
		mod.quiz.get_user_attempts.Returns,
	];
	mod_quiz_get_user_best_grade: [
		mod.quiz.get_user_best_grade.Params,
		mod.quiz.get_user_best_grade.Returns,
	];
	mod_quiz_process_attempt: [mod.quiz.process_attempt.Params, mod.quiz.process_attempt.Returns];
	mod_quiz_save_attempt: [mod.quiz.save_attempt.Params, mod.quiz.save_attempt.Returns];
	mod_quiz_set_question_version: [
		mod.quiz.set_question_version.Params,
		mod.quiz.set_question_version.Returns,
	];
	mod_quiz_start_attempt: [mod.quiz.start_attempt.Params, mod.quiz.start_attempt.Returns];
	mod_quiz_view_attempt: [mod.quiz.view_attempt.Params, mod.quiz.view_attempt.Returns];
	mod_quiz_view_attempt_review: [
		mod.quiz.view_attempt_review.Params,
		mod.quiz.view_attempt_review.Returns,
	];
	mod_quiz_view_attempt_summary: [
		mod.quiz.view_attempt_summary.Params,
		mod.quiz.view_attempt_summary.Returns,
	];
	mod_quiz_view_quiz: [mod.quiz.view_quiz.Params, mod.quiz.view_quiz.Returns];
	mod_resource_get_resources_by_courses: [
		mod.resource.get_resources_by_courses.Params,
		mod.resource.get_resources_by_courses.Returns,
	];
	mod_resource_view_resource: [
		mod.resource.view_resource.Params,
		mod.resource.view_resource.Returns,
	];
	mod_scorm_get_scorm_access_information: [
		mod.scorm.get_scorm_access_information.Params,
		mod.scorm.get_scorm_access_information.Returns,
	];
	mod_scorm_get_scorm_attempt_count: [
		mod.scorm.get_scorm_attempt_count.Params,
		mod.scorm.get_scorm_attempt_count.Returns,
	];
	mod_scorm_get_scorm_sco_tracks: [
		mod.scorm.get_scorm_sco_tracks.Params,
		mod.scorm.get_scorm_sco_tracks.Returns,
	];
	mod_scorm_get_scorm_scoes: [
		mod.scorm.get_scorm_scoes.Params,
		mod.scorm.get_scorm_scoes.Returns,
	];
	mod_scorm_get_scorm_user_data: [
		mod.scorm.get_scorm_user_data.Params,
		mod.scorm.get_scorm_user_data.Returns,
	];
	mod_scorm_get_scorms_by_courses: [
		mod.scorm.get_scorms_by_courses.Params,
		mod.scorm.get_scorms_by_courses.Returns,
	];
	mod_scorm_insert_scorm_tracks: [
		mod.scorm.insert_scorm_tracks.Params,
		mod.scorm.insert_scorm_tracks.Returns,
	];
	mod_scorm_launch_sco: [mod.scorm.launch_sco.Params, mod.scorm.launch_sco.Returns];
	mod_scorm_view_scorm: [mod.scorm.view_scorm.Params, mod.scorm.view_scorm.Returns];
	mod_survey_get_questions: [mod.survey.get_questions.Params, mod.survey.get_questions.Returns];
	mod_survey_get_surveys_by_courses: [
		mod.survey.get_surveys_by_courses.Params,
		mod.survey.get_surveys_by_courses.Returns,
	];
	mod_survey_submit_answers: [
		mod.survey.submit_answers.Params,
		mod.survey.submit_answers.Returns,
	];
	mod_survey_view_survey: [mod.survey.view_survey.Params, mod.survey.view_survey.Returns];
	mod_url_get_urls_by_courses: [
		mod.url.get_urls_by_courses.Params,
		mod.url.get_urls_by_courses.Returns,
	];
	mod_url_view_url: [mod.url.view_url.Params, mod.url.view_url.Returns];
	mod_wiki_edit_page: [mod.wiki.edit_page.Params, mod.wiki.edit_page.Returns];
	mod_wiki_get_page_contents: [
		mod.wiki.get_page_contents.Params,
		mod.wiki.get_page_contents.Returns,
	];
	mod_wiki_get_page_for_editing: [
		mod.wiki.get_page_for_editing.Params,
		mod.wiki.get_page_for_editing.Returns,
	];
	mod_wiki_get_subwiki_files: [
		mod.wiki.get_subwiki_files.Params,
		mod.wiki.get_subwiki_files.Returns,
	];
	mod_wiki_get_subwiki_pages: [
		mod.wiki.get_subwiki_pages.Params,
		mod.wiki.get_subwiki_pages.Returns,
	];
	mod_wiki_get_subwikis: [mod.wiki.get_subwikis.Params, mod.wiki.get_subwikis.Returns];
	mod_wiki_get_wikis_by_courses: [
		mod.wiki.get_wikis_by_courses.Params,
		mod.wiki.get_wikis_by_courses.Returns,
	];
	mod_wiki_new_page: [mod.wiki.new_page.Params, mod.wiki.new_page.Returns];
	mod_wiki_view_page: [mod.wiki.view_page.Params, mod.wiki.view_page.Returns];
	mod_wiki_view_wiki: [mod.wiki.view_wiki.Params, mod.wiki.view_wiki.Returns];
	mod_workshop_add_submission: [
		mod.workshop.add_submission.Params,
		mod.workshop.add_submission.Returns,
	];
	mod_workshop_delete_submission: [
		mod.workshop.delete_submission.Params,
		mod.workshop.delete_submission.Returns,
	];
	mod_workshop_evaluate_assessment: [
		mod.workshop.evaluate_assessment.Params,
		mod.workshop.evaluate_assessment.Returns,
	];
	mod_workshop_evaluate_submission: [
		mod.workshop.evaluate_submission.Params,
		mod.workshop.evaluate_submission.Returns,
	];
	mod_workshop_get_assessment: [
		mod.workshop.get_assessment.Params,
		mod.workshop.get_assessment.Returns,
	];
	mod_workshop_get_assessment_form_definition: [
		mod.workshop.get_assessment_form_definition.Params,
		mod.workshop.get_assessment_form_definition.Returns,
	];
	mod_workshop_get_grades: [mod.workshop.get_grades.Params, mod.workshop.get_grades.Returns];
	mod_workshop_get_grades_report: [
		mod.workshop.get_grades_report.Params,
		mod.workshop.get_grades_report.Returns,
	];
	mod_workshop_get_reviewer_assessments: [
		mod.workshop.get_reviewer_assessments.Params,
		mod.workshop.get_reviewer_assessments.Returns,
	];
	mod_workshop_get_submission: [
		mod.workshop.get_submission.Params,
		mod.workshop.get_submission.Returns,
	];
	mod_workshop_get_submission_assessments: [
		mod.workshop.get_submission_assessments.Params,
		mod.workshop.get_submission_assessments.Returns,
	];
	mod_workshop_get_submissions: [
		mod.workshop.get_submissions.Params,
		mod.workshop.get_submissions.Returns,
	];
	mod_workshop_get_user_plan: [
		mod.workshop.get_user_plan.Params,
		mod.workshop.get_user_plan.Returns,
	];
	mod_workshop_get_workshop_access_information: [
		mod.workshop.get_workshop_access_information.Params,
		mod.workshop.get_workshop_access_information.Returns,
	];
	mod_workshop_get_workshops_by_courses: [
		mod.workshop.get_workshops_by_courses.Params,
		mod.workshop.get_workshops_by_courses.Returns,
	];
	mod_workshop_update_assessment: [
		mod.workshop.update_assessment.Params,
		mod.workshop.update_assessment.Returns,
	];
	mod_workshop_update_submission: [
		mod.workshop.update_submission.Params,
		mod.workshop.update_submission.Returns,
	];
	mod_workshop_view_submission: [
		mod.workshop.view_submission.Params,
		mod.workshop.view_submission.Returns,
	];
	mod_workshop_view_workshop: [
		mod.workshop.view_workshop.Params,
		mod.workshop.view_workshop.Returns,
	];
	paygw_paypal_create_transaction_complete: [
		paygw.paypal.create_transaction_complete.Params,
		paygw.paypal.create_transaction_complete.Returns,
	];
	paygw_paypal_get_config_for_js: [
		paygw.paypal.get_config_for_js.Params,
		paygw.paypal.get_config_for_js.Returns,
	];
	qbank_editquestion_set_status: [
		qbank.editquestion.set_status.Params,
		qbank.editquestion.set_status.Returns,
	];
	qbank_tagquestion_submit_tags_form: [
		qbank.tagquestion.submit_tags_form.Params,
		qbank.tagquestion.submit_tags_form.Returns,
	];
	quizaccess_seb_validate_quiz_keys: [
		quizaccess.seb.validate_quiz_keys.Params,
		quizaccess.seb.validate_quiz_keys.Returns,
	];
	report_competency_data_for_report: [
		report.competency.data_for_report.Params,
		report.competency.data_for_report.Returns,
	];
	report_insights_action_executed: [
		report.insights.action_executed.Params,
		report.insights.action_executed.Returns,
	];
	report_insights_set_fixed_prediction: [
		report.insights.set_fixed_prediction.Params,
		report.insights.set_fixed_prediction.Returns,
	];
	report_insights_set_notuseful_prediction: [
		report.insights.set_notuseful_prediction.Params,
		report.insights.set_notuseful_prediction.Returns,
	];
	tiny_autosave_reset_session: [
		tiny.autosave.reset_session.Params,
		tiny.autosave.reset_session.Returns,
	];
	tiny_autosave_resume_session: [
		tiny.autosave.resume_session.Params,
		tiny.autosave.resume_session.Returns,
	];
	tiny_autosave_update_session: [
		tiny.autosave.update_session.Params,
		tiny.autosave.update_session.Returns,
	];
	tiny_equation_filter: [tiny.equation.filter.Params, tiny.equation.filter.Returns];
	tool_analytics_potential_contexts: [
		tool.analytics.potential_contexts.Params,
		tool.analytics.potential_contexts.Returns,
	];
	tool_behat_get_entity_generator: [
		tool.behat.get_entity_generator.Params,
		tool.behat.get_entity_generator.Returns,
	];
	tool_dataprivacy_approve_data_request: [
		tool.dataprivacy.approve_data_request.Params,
		tool.dataprivacy.approve_data_request.Returns,
	];
	tool_dataprivacy_bulk_approve_data_requests: [
		tool.dataprivacy.bulk_approve_data_requests.Params,
		tool.dataprivacy.bulk_approve_data_requests.Returns,
	];
	tool_dataprivacy_bulk_deny_data_requests: [
		tool.dataprivacy.bulk_deny_data_requests.Params,
		tool.dataprivacy.bulk_deny_data_requests.Returns,
	];
	tool_dataprivacy_cancel_data_request: [
		tool.dataprivacy.cancel_data_request.Params,
		tool.dataprivacy.cancel_data_request.Returns,
	];
	tool_dataprivacy_confirm_contexts_for_deletion: [
		tool.dataprivacy.confirm_contexts_for_deletion.Params,
		tool.dataprivacy.confirm_contexts_for_deletion.Returns,
	];
	tool_dataprivacy_contact_dpo: [
		tool.dataprivacy.contact_dpo.Params,
		tool.dataprivacy.contact_dpo.Returns,
	];
	tool_dataprivacy_create_category_form: [
		tool.dataprivacy.create_category_form.Params,
		tool.dataprivacy.create_category_form.Returns,
	];
	tool_dataprivacy_create_purpose_form: [
		tool.dataprivacy.create_purpose_form.Params,
		tool.dataprivacy.create_purpose_form.Returns,
	];
	tool_dataprivacy_delete_category: [
		tool.dataprivacy.delete_category.Params,
		tool.dataprivacy.delete_category.Returns,
	];
	tool_dataprivacy_delete_purpose: [
		tool.dataprivacy.delete_purpose.Params,
		tool.dataprivacy.delete_purpose.Returns,
	];
	tool_dataprivacy_deny_data_request: [
		tool.dataprivacy.deny_data_request.Params,
		tool.dataprivacy.deny_data_request.Returns,
	];
	tool_dataprivacy_get_activity_options: [
		tool.dataprivacy.get_activity_options.Params,
		tool.dataprivacy.get_activity_options.Returns,
	];
	tool_dataprivacy_get_category_options: [
		tool.dataprivacy.get_category_options.Params,
		tool.dataprivacy.get_category_options.Returns,
	];
	tool_dataprivacy_get_data_request: [
		tool.dataprivacy.get_data_request.Params,
		tool.dataprivacy.get_data_request.Returns,
	];
	tool_dataprivacy_get_purpose_options: [
		tool.dataprivacy.get_purpose_options.Params,
		tool.dataprivacy.get_purpose_options.Returns,
	];
	tool_dataprivacy_get_users: [
		tool.dataprivacy.get_users.Params,
		tool.dataprivacy.get_users.Returns,
	];
	tool_dataprivacy_mark_complete: [
		tool.dataprivacy.mark_complete.Params,
		tool.dataprivacy.mark_complete.Returns,
	];
	tool_dataprivacy_set_context_defaults: [
		tool.dataprivacy.set_context_defaults.Params,
		tool.dataprivacy.set_context_defaults.Returns,
	];
	tool_dataprivacy_set_context_form: [
		tool.dataprivacy.set_context_form.Params,
		tool.dataprivacy.set_context_form.Returns,
	];
	tool_dataprivacy_set_contextlevel_form: [
		tool.dataprivacy.set_contextlevel_form.Params,
		tool.dataprivacy.set_contextlevel_form.Returns,
	];
	tool_dataprivacy_tree_extra_branches: [
		tool.dataprivacy.tree_extra_branches.Params,
		tool.dataprivacy.tree_extra_branches.Returns,
	];
	tool_lp_data_for_competencies_manage_page: [
		tool.lp.data_for_competencies_manage_page.Params,
		tool.lp.data_for_competencies_manage_page.Returns,
	];
	tool_lp_data_for_competency_frameworks_manage_page: [
		tool.lp.data_for_competency_frameworks_manage_page.Params,
		tool.lp.data_for_competency_frameworks_manage_page.Returns,
	];
	tool_lp_data_for_competency_summary: [
		tool.lp.data_for_competency_summary.Params,
		tool.lp.data_for_competency_summary.Returns,
	];
	tool_lp_data_for_course_competencies_page: [
		tool.lp.data_for_course_competencies_page.Params,
		tool.lp.data_for_course_competencies_page.Returns,
	];
	tool_lp_data_for_plan_page: [
		tool.lp.data_for_plan_page.Params,
		tool.lp.data_for_plan_page.Returns,
	];
	tool_lp_data_for_plans_page: [
		tool.lp.data_for_plans_page.Params,
		tool.lp.data_for_plans_page.Returns,
	];
	tool_lp_data_for_related_competencies_section: [
		tool.lp.data_for_related_competencies_section.Params,
		tool.lp.data_for_related_competencies_section.Returns,
	];
	tool_lp_data_for_template_competencies_page: [
		tool.lp.data_for_template_competencies_page.Params,
		tool.lp.data_for_template_competencies_page.Returns,
	];
	tool_lp_data_for_templates_manage_page: [
		tool.lp.data_for_templates_manage_page.Params,
		tool.lp.data_for_templates_manage_page.Returns,
	];
	tool_lp_data_for_user_competency_summary: [
		tool.lp.data_for_user_competency_summary.Params,
		tool.lp.data_for_user_competency_summary.Returns,
	];
	tool_lp_data_for_user_competency_summary_in_course: [
		tool.lp.data_for_user_competency_summary_in_course.Params,
		tool.lp.data_for_user_competency_summary_in_course.Returns,
	];
	tool_lp_data_for_user_competency_summary_in_plan: [
		tool.lp.data_for_user_competency_summary_in_plan.Params,
		tool.lp.data_for_user_competency_summary_in_plan.Returns,
	];
	tool_lp_data_for_user_evidence_list_page: [
		tool.lp.data_for_user_evidence_list_page.Params,
		tool.lp.data_for_user_evidence_list_page.Returns,
	];
	tool_lp_data_for_user_evidence_page: [
		tool.lp.data_for_user_evidence_page.Params,
		tool.lp.data_for_user_evidence_page.Returns,
	];
	tool_lp_list_courses_using_competency: [
		tool.lp.list_courses_using_competency.Params,
		tool.lp.list_courses_using_competency.Returns,
	];
	tool_lp_search_cohorts: [tool.lp.search_cohorts.Params, tool.lp.search_cohorts.Returns];
	tool_lp_search_users: [tool.lp.search_users.Params, tool.lp.search_users.Returns];
	tool_mobile_call_external_functions: [
		tool.mobile.call_external_functions.Params,
		tool.mobile.call_external_functions.Returns,
	];
	tool_mobile_get_autologin_key: [
		tool.mobile.get_autologin_key.Params,
		tool.mobile.get_autologin_key.Returns,
	];
	tool_mobile_get_config: [tool.mobile.get_config.Params, tool.mobile.get_config.Returns];
	tool_mobile_get_content: [tool.mobile.get_content.Params, tool.mobile.get_content.Returns];
	tool_mobile_get_plugins_supporting_mobile: [
		tool.mobile.get_plugins_supporting_mobile.Params,
		tool.mobile.get_plugins_supporting_mobile.Returns,
	];
	tool_mobile_get_public_config: [
		tool.mobile.get_public_config.Params,
		tool.mobile.get_public_config.Returns,
	];
	tool_mobile_get_tokens_for_qr_login: [
		tool.mobile.get_tokens_for_qr_login.Params,
		tool.mobile.get_tokens_for_qr_login.Returns,
	];
	tool_mobile_validate_subscription_key: [
		tool.mobile.validate_subscription_key.Params,
		tool.mobile.validate_subscription_key.Returns,
	];
	tool_moodlenet_search_courses: [
		tool.moodlenet.search_courses.Params,
		tool.moodlenet.search_courses.Returns,
	];
	tool_moodlenet_verify_webfinger: [
		tool.moodlenet.verify_webfinger.Params,
		tool.moodlenet.verify_webfinger.Returns,
	];
	tool_policy_get_policy_version: [
		tool.policy.get_policy_version.Params,
		tool.policy.get_policy_version.Returns,
	];
	tool_templatelibrary_list_templates: [
		tool.templatelibrary.list_templates.Params,
		tool.templatelibrary.list_templates.Returns,
	];
	tool_usertours_complete_tour: [
		tool.usertours.complete_tour.Params,
		tool.usertours.complete_tour.Returns,
	];
	tool_usertours_fetch_and_start_tour: [
		tool.usertours.fetch_and_start_tour.Params,
		tool.usertours.fetch_and_start_tour.Returns,
	];
	tool_usertours_reset_tour: [
		tool.usertours.reset_tour.Params,
		tool.usertours.reset_tour.Returns,
	];
	tool_usertours_step_shown: [
		tool.usertours.step_shown.Params,
		tool.usertours.step_shown.Returns,
	];
};
