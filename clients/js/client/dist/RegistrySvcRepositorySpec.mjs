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
 * Check if a given object implements the RegistrySvcRepositorySpec interface.
 */
function instanceOfRegistrySvcRepositorySpec(value) {
    if (!('url' in value) || value['url'] === undefined)
        return false;
    return true;
}
function RegistrySvcRepositorySpecFromJSON(json) {
    return RegistrySvcRepositorySpecFromJSONTyped(json);
}
function RegistrySvcRepositorySpecFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'subfolder': json['subfolder'] == null ? undefined : json['subfolder'],
        'url': json['url'],
    };
}
function RegistrySvcRepositorySpecToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'subfolder': value['subfolder'],
        'url': value['url'],
    };
}

export { RegistrySvcRepositorySpecFromJSON, RegistrySvcRepositorySpecFromJSONTyped, RegistrySvcRepositorySpecToJSON, instanceOfRegistrySvcRepositorySpec };