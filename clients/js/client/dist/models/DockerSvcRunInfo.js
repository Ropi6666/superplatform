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
 * Check if a given object implements the DockerSvcRunInfo interface.
 */
export function instanceOfDockerSvcRunInfo(value) {
    return true;
}
export function DockerSvcRunInfoFromJSON(json) {
    return DockerSvcRunInfoFromJSONTyped(json, false);
}
export function DockerSvcRunInfoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'newContainerStarted': json['newContainerStarted'] == null ? undefined : json['newContainerStarted'],
        'portNumber': json['portNumber'] == null ? undefined : json['portNumber'],
    };
}
export function DockerSvcRunInfoToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'newContainerStarted': value['newContainerStarted'],
        'portNumber': value['portNumber'],
    };
}