'use strict';

/**
 * hook config
 * https://thinkjs.org/doc/middleware.html#toc-df6
 */
export default {
    request_begin: [],
    payload_parse: ["parse_form_payload", "parse_single_file_payload", "parse_json_payload", "parse_querystring_payload"],
    payload_validate: ["validate_payload"],
    resource: ["check_resource", "output_resource"],
    // route_parse: ["rewrite_pathname", "parse_route"],
    route_parse: ["prepend", "subdomain"],
    // logic_before: ["prepend", "csrf"],
    logic_after: [],
    controller_before: [],
    controller_after: [],
    view_before: [],
    view_template: ["locate_template"],
    view_parse: ["parse_template"],
    view_filter: [],
    view_after: [],
    response_end: []
};