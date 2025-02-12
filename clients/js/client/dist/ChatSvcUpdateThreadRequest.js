'use strict';

var ChatSvcThread = require('./ChatSvcThread.js');

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
 * Check if a given object implements the ChatSvcUpdateThreadRequest interface.
 */
function instanceOfChatSvcUpdateThreadRequest(value) {
    return true;
}
function ChatSvcUpdateThreadRequestFromJSON(json) {
    return ChatSvcUpdateThreadRequestFromJSONTyped(json);
}
function ChatSvcUpdateThreadRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'thread': json['thread'] == null ? undefined : ChatSvcThread.ChatSvcThreadFromJSON(json['thread']),
    };
}
function ChatSvcUpdateThreadRequestToJSON(json) {
    return ChatSvcUpdateThreadRequestToJSONTyped(json, false);
}
function ChatSvcUpdateThreadRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'thread': ChatSvcThread.ChatSvcThreadToJSON(value['thread']),
    };
}

exports.ChatSvcUpdateThreadRequestFromJSON = ChatSvcUpdateThreadRequestFromJSON;
exports.ChatSvcUpdateThreadRequestFromJSONTyped = ChatSvcUpdateThreadRequestFromJSONTyped;
exports.ChatSvcUpdateThreadRequestToJSON = ChatSvcUpdateThreadRequestToJSON;
exports.ChatSvcUpdateThreadRequestToJSONTyped = ChatSvcUpdateThreadRequestToJSONTyped;
exports.instanceOfChatSvcUpdateThreadRequest = instanceOfChatSvcUpdateThreadRequest;
