'use strict';

/* tslint:disable */
/* eslint-disable */
/**
 * Superplatform
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
 * Check if a given object implements the ChatSvcEventThreadUpdate interface.
 */
function instanceOfChatSvcEventThreadUpdate(value) {
    return true;
}
function ChatSvcEventThreadUpdateFromJSON(json) {
    return ChatSvcEventThreadUpdateFromJSONTyped(json);
}
function ChatSvcEventThreadUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'threadId': json['threadId'] == null ? undefined : json['threadId'],
    };
}
function ChatSvcEventThreadUpdateToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'threadId': value['threadId'],
    };
}

exports.ChatSvcEventThreadUpdateFromJSON = ChatSvcEventThreadUpdateFromJSON;
exports.ChatSvcEventThreadUpdateFromJSONTyped = ChatSvcEventThreadUpdateFromJSONTyped;
exports.ChatSvcEventThreadUpdateToJSON = ChatSvcEventThreadUpdateToJSON;
exports.instanceOfChatSvcEventThreadUpdate = instanceOfChatSvcEventThreadUpdate;