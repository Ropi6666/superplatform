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
 * Check if a given object implements the PromptSvcAddPromptRequest interface.
 */
function instanceOfPromptSvcAddPromptRequest(value) {
    if (!('prompt' in value) || value['prompt'] === undefined)
        return false;
    return true;
}
function PromptSvcAddPromptRequestFromJSON(json) {
    return PromptSvcAddPromptRequestFromJSONTyped(json);
}
function PromptSvcAddPromptRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'maxRetries': json['maxRetries'] == null ? undefined : json['maxRetries'],
        'modelId': json['modelId'] == null ? undefined : json['modelId'],
        'prompt': json['prompt'],
        'sync': json['sync'] == null ? undefined : json['sync'],
        'template': json['template'] == null ? undefined : json['template'],
        'threadId': json['threadId'] == null ? undefined : json['threadId'],
    };
}
function PromptSvcAddPromptRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'maxRetries': value['maxRetries'],
        'modelId': value['modelId'],
        'prompt': value['prompt'],
        'sync': value['sync'],
        'template': value['template'],
        'threadId': value['threadId'],
    };
}

exports.PromptSvcAddPromptRequestFromJSON = PromptSvcAddPromptRequestFromJSON;
exports.PromptSvcAddPromptRequestFromJSONTyped = PromptSvcAddPromptRequestFromJSONTyped;
exports.PromptSvcAddPromptRequestToJSON = PromptSvcAddPromptRequestToJSON;
exports.instanceOfPromptSvcAddPromptRequest = instanceOfPromptSvcAddPromptRequest;