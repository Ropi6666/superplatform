'use strict';

var RegistrySvcInstance = require('./RegistrySvcInstance.js');

/* tslint:disable */
/* eslint-disable */
/**
 * Superplatform
 * On-premise AI platform and microservices ecosystem.
 *
 * The version of the OpenAPI document: 0.2
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Check if a given object implements the RegistrySvcListInstancesResponse interface.
 */
function instanceOfRegistrySvcListInstancesResponse(value) {
    return true;
}
function RegistrySvcListInstancesResponseFromJSON(json) {
    return RegistrySvcListInstancesResponseFromJSONTyped(json);
}
function RegistrySvcListInstancesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'instances': json['instances'] == null ? undefined : (json['instances'].map(RegistrySvcInstance.RegistrySvcInstanceFromJSON)),
    };
}
function RegistrySvcListInstancesResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'instances': value['instances'] == null ? undefined : (value['instances'].map(RegistrySvcInstance.RegistrySvcInstanceToJSON)),
    };
}

exports.RegistrySvcListInstancesResponseFromJSON = RegistrySvcListInstancesResponseFromJSON;
exports.RegistrySvcListInstancesResponseFromJSONTyped = RegistrySvcListInstancesResponseFromJSONTyped;
exports.RegistrySvcListInstancesResponseToJSON = RegistrySvcListInstancesResponseToJSON;
exports.instanceOfRegistrySvcListInstancesResponse = instanceOfRegistrySvcListInstancesResponse;