'use strict';

var FirehoseSvcEvent = require('./FirehoseSvcEvent.js');

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
 * Check if a given object implements the FirehoseSvcEventPublishRequest interface.
 */
function instanceOfFirehoseSvcEventPublishRequest(value) {
    return true;
}
function FirehoseSvcEventPublishRequestFromJSON(json) {
    return FirehoseSvcEventPublishRequestFromJSONTyped(json);
}
function FirehoseSvcEventPublishRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'event': json['event'] == null ? undefined : FirehoseSvcEvent.FirehoseSvcEventFromJSON(json['event']),
    };
}
function FirehoseSvcEventPublishRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'event': FirehoseSvcEvent.FirehoseSvcEventToJSON(value['event']),
    };
}

exports.FirehoseSvcEventPublishRequestFromJSON = FirehoseSvcEventPublishRequestFromJSON;
exports.FirehoseSvcEventPublishRequestFromJSONTyped = FirehoseSvcEventPublishRequestFromJSONTyped;
exports.FirehoseSvcEventPublishRequestToJSON = FirehoseSvcEventPublishRequestToJSON;
exports.instanceOfFirehoseSvcEventPublishRequest = instanceOfFirehoseSvcEventPublishRequest;