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
 * Check if a given object implements the DockerSvcRunContainerOptions interface.
 */
export function instanceOfDockerSvcRunContainerOptions(value) {
    return true;
}
export function DockerSvcRunContainerOptionsFromJSON(json) {
    return DockerSvcRunContainerOptionsFromJSONTyped(json, false);
}
export function DockerSvcRunContainerOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'assets': json['assets'] == null ? undefined : json['assets'],
        'envs': json['envs'] == null ? undefined : json['envs'],
        'gpuEnabled': json['gpuEnabled'] == null ? undefined : json['gpuEnabled'],
        'hash': json['hash'] == null ? undefined : json['hash'],
        'keeps': json['keeps'] == null ? undefined : json['keeps'],
        'labels': json['labels'] == null ? undefined : json['labels'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}
export function DockerSvcRunContainerOptionsToJSON(json) {
    return DockerSvcRunContainerOptionsToJSONTyped(json, false);
}
export function DockerSvcRunContainerOptionsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'assets': value['assets'],
        'envs': value['envs'],
        'gpuEnabled': value['gpuEnabled'],
        'hash': value['hash'],
        'keeps': value['keeps'],
        'labels': value['labels'],
        'name': value['name'],
    };
}
