'use strict';

var UserSvcRole = require('./UserSvcRole.js');

/* tslint:disable */
/* eslint-disable */
/**
 * OpenOrch
 * On-premise AI platform and microservices ecosystem.
 *
 * The version of the OpenAPI document: 0.3.0-rc.8
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Check if a given object implements the UserSvcGetRolesResponse interface.
 */
function instanceOfUserSvcGetRolesResponse(value) {
    return true;
}
function UserSvcGetRolesResponseFromJSON(json) {
    return UserSvcGetRolesResponseFromJSONTyped(json);
}
function UserSvcGetRolesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'roles': json['roles'] == null ? undefined : (json['roles'].map(UserSvcRole.UserSvcRoleFromJSON)),
    };
}
function UserSvcGetRolesResponseToJSON(json) {
    return UserSvcGetRolesResponseToJSONTyped(json, false);
}
function UserSvcGetRolesResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'roles': value['roles'] == null ? undefined : (value['roles'].map(UserSvcRole.UserSvcRoleToJSON)),
    };
}

exports.UserSvcGetRolesResponseFromJSON = UserSvcGetRolesResponseFromJSON;
exports.UserSvcGetRolesResponseFromJSONTyped = UserSvcGetRolesResponseFromJSONTyped;
exports.UserSvcGetRolesResponseToJSON = UserSvcGetRolesResponseToJSON;
exports.UserSvcGetRolesResponseToJSONTyped = UserSvcGetRolesResponseToJSONTyped;
exports.instanceOfUserSvcGetRolesResponse = instanceOfUserSvcGetRolesResponse;
