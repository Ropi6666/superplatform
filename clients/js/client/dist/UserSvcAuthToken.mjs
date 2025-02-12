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
 * Check if a given object implements the UserSvcAuthToken interface.
 */
function instanceOfUserSvcAuthToken(value) {
    return true;
}
function UserSvcAuthTokenFromJSON(json) {
    return UserSvcAuthTokenFromJSONTyped(json);
}
function UserSvcAuthTokenFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'deletedAt': json['deletedAt'] == null ? undefined : json['deletedAt'],
        'id': json['id'] == null ? undefined : json['id'],
        'token': json['token'] == null ? undefined : json['token'],
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
        'userId': json['userId'] == null ? undefined : json['userId'],
    };
}
function UserSvcAuthTokenToJSON(json) {
    return UserSvcAuthTokenToJSONTyped(json, false);
}
function UserSvcAuthTokenToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'createdAt': value['createdAt'],
        'deletedAt': value['deletedAt'],
        'id': value['id'],
        'token': value['token'],
        'updatedAt': value['updatedAt'],
        'userId': value['userId'],
    };
}

export { UserSvcAuthTokenFromJSON, UserSvcAuthTokenFromJSONTyped, UserSvcAuthTokenToJSON, UserSvcAuthTokenToJSONTyped, instanceOfUserSvcAuthToken };
