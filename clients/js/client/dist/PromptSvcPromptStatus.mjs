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
 *
 * @export
 */
const PromptSvcPromptStatus = {
    PromptStatusScheduled: 'scheduled',
    PromptStatusRunning: 'running',
    PromptStatusCompleted: 'completed',
    PromptStatusErrored: 'errored',
    PromptStatusAbandoned: 'abandoned',
    PromptStatusCanceled: 'canceled'
};
function instanceOfPromptSvcPromptStatus(value) {
    for (const key in PromptSvcPromptStatus) {
        if (Object.prototype.hasOwnProperty.call(PromptSvcPromptStatus, key)) {
            if (PromptSvcPromptStatus[key] === value) {
                return true;
            }
        }
    }
    return false;
}
function PromptSvcPromptStatusFromJSON(json) {
    return PromptSvcPromptStatusFromJSONTyped(json);
}
function PromptSvcPromptStatusFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function PromptSvcPromptStatusToJSON(value) {
    return value;
}

export { PromptSvcPromptStatus, PromptSvcPromptStatusFromJSON, PromptSvcPromptStatusFromJSONTyped, PromptSvcPromptStatusToJSON, instanceOfPromptSvcPromptStatus };