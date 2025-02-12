import { PromptSvcPromptFromJSON, PromptSvcPromptToJSON } from './PromptSvcPrompt.mjs';
import './PromptSvcPromptStatus.mjs';

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
 * Check if a given object implements the PromptSvcAddPromptResponse interface.
 */
function instanceOfPromptSvcAddPromptResponse(value) {
    return true;
}
function PromptSvcAddPromptResponseFromJSON(json) {
    return PromptSvcAddPromptResponseFromJSONTyped(json);
}
function PromptSvcAddPromptResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'answer': json['answer'] == null ? undefined : json['answer'],
        'prompt': json['prompt'] == null ? undefined : PromptSvcPromptFromJSON(json['prompt']),
    };
}
function PromptSvcAddPromptResponseToJSON(json) {
    return PromptSvcAddPromptResponseToJSONTyped(json, false);
}
function PromptSvcAddPromptResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'answer': value['answer'],
        'prompt': PromptSvcPromptToJSON(value['prompt']),
    };
}

export { PromptSvcAddPromptResponseFromJSON, PromptSvcAddPromptResponseFromJSONTyped, PromptSvcAddPromptResponseToJSON, PromptSvcAddPromptResponseToJSONTyped, instanceOfPromptSvcAddPromptResponse };
