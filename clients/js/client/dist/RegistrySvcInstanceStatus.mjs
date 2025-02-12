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
 *
 * @export
 */
const RegistrySvcInstanceStatus = {
    InstanceStatusUnknown: 'Unknown',
    InstanceStatusHealthy: 'Healthy',
    InstanceStatusDegraded: 'Degraded',
    InstanceStatusUnreachable: 'Unreachable',
    InstanceStatusError: 'Error'
};
function instanceOfRegistrySvcInstanceStatus(value) {
    for (const key in RegistrySvcInstanceStatus) {
        if (Object.prototype.hasOwnProperty.call(RegistrySvcInstanceStatus, key)) {
            if (RegistrySvcInstanceStatus[key] === value) {
                return true;
            }
        }
    }
    return false;
}
function RegistrySvcInstanceStatusFromJSON(json) {
    return RegistrySvcInstanceStatusFromJSONTyped(json);
}
function RegistrySvcInstanceStatusFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function RegistrySvcInstanceStatusToJSON(value) {
    return value;
}
function RegistrySvcInstanceStatusToJSONTyped(value, ignoreDiscriminator) {
    return value;
}

export { RegistrySvcInstanceStatus, RegistrySvcInstanceStatusFromJSON, RegistrySvcInstanceStatusFromJSONTyped, RegistrySvcInstanceStatusToJSON, RegistrySvcInstanceStatusToJSONTyped, instanceOfRegistrySvcInstanceStatus };
