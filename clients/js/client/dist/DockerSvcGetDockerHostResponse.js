'use strict';

/* tslint:disable */
/* eslint-disable */
/**
 * Singulatron
 * AI management and development platform.
 *
 * The version of the OpenAPI document: 0.2
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Check if a given object implements the DockerSvcGetDockerHostResponse interface.
 */
function instanceOfDockerSvcGetDockerHostResponse(value) {
    return true;
}
function DockerSvcGetDockerHostResponseFromJSON(json) {
    return DockerSvcGetDockerHostResponseFromJSONTyped(json);
}
function DockerSvcGetDockerHostResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'host': json['host'] == null ? undefined : json['host'],
    };
}
function DockerSvcGetDockerHostResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'host': value['host'],
    };
}

exports.DockerSvcGetDockerHostResponseFromJSON = DockerSvcGetDockerHostResponseFromJSON;
exports.DockerSvcGetDockerHostResponseFromJSONTyped = DockerSvcGetDockerHostResponseFromJSONTyped;
exports.DockerSvcGetDockerHostResponseToJSON = DockerSvcGetDockerHostResponseToJSON;
exports.instanceOfDockerSvcGetDockerHostResponse = instanceOfDockerSvcGetDockerHostResponse;