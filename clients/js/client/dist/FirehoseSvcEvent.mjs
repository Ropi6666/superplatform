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
 * Check if a given object implements the FirehoseSvcEvent interface.
 */
function instanceOfFirehoseSvcEvent(value) {
    return true;
}
function FirehoseSvcEventFromJSON(json) {
    return FirehoseSvcEventFromJSONTyped(json);
}
function FirehoseSvcEventFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': json['data'] == null ? undefined : json['data'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}
function FirehoseSvcEventToJSON(json) {
    return FirehoseSvcEventToJSONTyped(json, false);
}
function FirehoseSvcEventToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data': value['data'],
        'name': value['name'],
    };
}

export { FirehoseSvcEventFromJSON, FirehoseSvcEventFromJSONTyped, FirehoseSvcEventToJSON, FirehoseSvcEventToJSONTyped, instanceOfFirehoseSvcEvent };
