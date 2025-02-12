'use strict';

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
 * Check if a given object implements the UserSvcOrganization interface.
 */
function instanceOfUserSvcOrganization(value) {
    return true;
}
function UserSvcOrganizationFromJSON(json) {
    return UserSvcOrganizationFromJSONTyped(json);
}
function UserSvcOrganizationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'deletedAt': json['deletedAt'] == null ? undefined : json['deletedAt'],
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
    };
}
function UserSvcOrganizationToJSON(json) {
    return UserSvcOrganizationToJSONTyped(json, false);
}
function UserSvcOrganizationToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'createdAt': value['createdAt'],
        'deletedAt': value['deletedAt'],
        'id': value['id'],
        'name': value['name'],
        'slug': value['slug'],
        'updatedAt': value['updatedAt'],
    };
}

exports.UserSvcOrganizationFromJSON = UserSvcOrganizationFromJSON;
exports.UserSvcOrganizationFromJSONTyped = UserSvcOrganizationFromJSONTyped;
exports.UserSvcOrganizationToJSON = UserSvcOrganizationToJSON;
exports.UserSvcOrganizationToJSONTyped = UserSvcOrganizationToJSONTyped;
exports.instanceOfUserSvcOrganization = instanceOfUserSvcOrganization;
