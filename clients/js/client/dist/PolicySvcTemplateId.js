'use strict';

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
const PolicySvcTemplateId = {
    TemplateIdRateLimit: 'rate-limit',
    TemplateIdBlocklist: 'blocklist'
};
function instanceOfPolicySvcTemplateId(value) {
    for (const key in PolicySvcTemplateId) {
        if (Object.prototype.hasOwnProperty.call(PolicySvcTemplateId, key)) {
            if (PolicySvcTemplateId[key] === value) {
                return true;
            }
        }
    }
    return false;
}
function PolicySvcTemplateIdFromJSON(json) {
    return PolicySvcTemplateIdFromJSONTyped(json);
}
function PolicySvcTemplateIdFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function PolicySvcTemplateIdToJSON(value) {
    return value;
}
function PolicySvcTemplateIdToJSONTyped(value, ignoreDiscriminator) {
    return value;
}

exports.PolicySvcTemplateId = PolicySvcTemplateId;
exports.PolicySvcTemplateIdFromJSON = PolicySvcTemplateIdFromJSON;
exports.PolicySvcTemplateIdFromJSONTyped = PolicySvcTemplateIdFromJSONTyped;
exports.PolicySvcTemplateIdToJSON = PolicySvcTemplateIdToJSON;
exports.PolicySvcTemplateIdToJSONTyped = PolicySvcTemplateIdToJSONTyped;
exports.instanceOfPolicySvcTemplateId = instanceOfPolicySvcTemplateId;
