import { RegistrySvcGPUFromJSON, RegistrySvcGPUToJSON } from './RegistrySvcGPU.mjs';
import { RegistrySvcResourceUsageFromJSON, RegistrySvcResourceUsageToJSON } from './RegistrySvcResourceUsage.mjs';
import './RegistrySvcProcess.mjs';
import './RegistrySvcUsage.mjs';

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
 * Check if a given object implements the RegistrySvcNode interface.
 */
function instanceOfRegistrySvcNode(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('url' in value) || value['url'] === undefined)
        return false;
    return true;
}
function RegistrySvcNodeFromJSON(json) {
    return RegistrySvcNodeFromJSONTyped(json);
}
function RegistrySvcNodeFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'availabilityZone': json['availabilityZone'] == null ? undefined : json['availabilityZone'],
        'gpus': json['gpus'] == null ? undefined : (json['gpus'].map(RegistrySvcGPUFromJSON)),
        'id': json['id'],
        'lastHeartbeat': json['lastHeartbeat'] == null ? undefined : json['lastHeartbeat'],
        'region': json['region'] == null ? undefined : json['region'],
        'url': json['url'],
        'usage': json['usage'] == null ? undefined : RegistrySvcResourceUsageFromJSON(json['usage']),
    };
}
function RegistrySvcNodeToJSON(json) {
    return RegistrySvcNodeToJSONTyped(json, false);
}
function RegistrySvcNodeToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'availabilityZone': value['availabilityZone'],
        'gpus': value['gpus'] == null ? undefined : (value['gpus'].map(RegistrySvcGPUToJSON)),
        'id': value['id'],
        'lastHeartbeat': value['lastHeartbeat'],
        'region': value['region'],
        'url': value['url'],
        'usage': RegistrySvcResourceUsageToJSON(value['usage']),
    };
}

export { RegistrySvcNodeFromJSON, RegistrySvcNodeFromJSONTyped, RegistrySvcNodeToJSON, RegistrySvcNodeToJSONTyped, instanceOfRegistrySvcNode };
