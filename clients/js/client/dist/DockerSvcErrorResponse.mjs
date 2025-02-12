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
 * Check if a given object implements the DockerSvcErrorResponse interface.
 */
function instanceOfDockerSvcErrorResponse(value) {
    return true;
}
function DockerSvcErrorResponseFromJSON(json) {
    return DockerSvcErrorResponseFromJSONTyped(json);
}
function DockerSvcErrorResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'error': json['error'] == null ? undefined : json['error'],
    };
}
function DockerSvcErrorResponseToJSON(json) {
    return DockerSvcErrorResponseToJSONTyped(json, false);
}
function DockerSvcErrorResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'error': value['error'],
    };
}

export { DockerSvcErrorResponseFromJSON, DockerSvcErrorResponseFromJSONTyped, DockerSvcErrorResponseToJSON, DockerSvcErrorResponseToJSONTyped, instanceOfDockerSvcErrorResponse };
