'use strict';

var DeploySvcStrategyType = require('./DeploySvcStrategyType.js');

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
 * Check if a given object implements the DeploySvcDeploymentStrategy interface.
 */
function instanceOfDeploySvcDeploymentStrategy(value) {
    return true;
}
function DeploySvcDeploymentStrategyFromJSON(json) {
    return DeploySvcDeploymentStrategyFromJSONTyped(json);
}
function DeploySvcDeploymentStrategyFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'maxSurge': json['maxSurge'] == null ? undefined : json['maxSurge'],
        'maxUnavailable': json['maxUnavailable'] == null ? undefined : json['maxUnavailable'],
        'type': json['type'] == null ? undefined : DeploySvcStrategyType.DeploySvcStrategyTypeFromJSON(json['type']),
    };
}
function DeploySvcDeploymentStrategyToJSON(json) {
    return DeploySvcDeploymentStrategyToJSONTyped(json, false);
}
function DeploySvcDeploymentStrategyToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'maxSurge': value['maxSurge'],
        'maxUnavailable': value['maxUnavailable'],
        'type': DeploySvcStrategyType.DeploySvcStrategyTypeToJSON(value['type']),
    };
}

exports.DeploySvcDeploymentStrategyFromJSON = DeploySvcDeploymentStrategyFromJSON;
exports.DeploySvcDeploymentStrategyFromJSONTyped = DeploySvcDeploymentStrategyFromJSONTyped;
exports.DeploySvcDeploymentStrategyToJSON = DeploySvcDeploymentStrategyToJSON;
exports.DeploySvcDeploymentStrategyToJSONTyped = DeploySvcDeploymentStrategyToJSONTyped;
exports.instanceOfDeploySvcDeploymentStrategy = instanceOfDeploySvcDeploymentStrategy;
