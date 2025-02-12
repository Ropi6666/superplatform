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
import { UserSvcPermissionFromJSON, UserSvcPermissionToJSON, } from './UserSvcPermission';
/**
 * Check if a given object implements the UserSvcUpserPermissionRequest interface.
 */
export function instanceOfUserSvcUpserPermissionRequest(value) {
    return true;
}
export function UserSvcUpserPermissionRequestFromJSON(json) {
    return UserSvcUpserPermissionRequestFromJSONTyped(json, false);
}
export function UserSvcUpserPermissionRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'permission': json['permission'] == null ? undefined : UserSvcPermissionFromJSON(json['permission']),
    };
}
export function UserSvcUpserPermissionRequestToJSON(json) {
    return UserSvcUpserPermissionRequestToJSONTyped(json, false);
}
export function UserSvcUpserPermissionRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'permission': UserSvcPermissionToJSON(value['permission']),
    };
}
