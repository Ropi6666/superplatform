'use strict';

var DeploySvcDeploymentStrategy = require('./DeploySvcDeploymentStrategy.js');
var DeploySvcAutoScalingConfig = require('./DeploySvcAutoScalingConfig.js');
var DeploySvcTargetRegion = require('./DeploySvcTargetRegion.js');
var DeploySvcResourceLimits = require('./DeploySvcResourceLimits.js');
require('./DeploySvcStrategyType.js');

/* tslint:disable */
/* eslint-disable */
/**
 * Superplatform
 * On-premise AI platform and microservices ecosystem.
 *
 * The version of the OpenAPI document: 0.2
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Check if a given object implements the DeploySvcDeployment interface.
 */
function instanceOfDeploySvcDeployment(value) {
    if (!('serviceSlug' in value) || value['serviceSlug'] === undefined)
        return false;
    return true;
}
function DeploySvcDeploymentFromJSON(json) {
    return DeploySvcDeploymentFromJSONTyped(json);
}
function DeploySvcDeploymentFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'autoScaling': json['autoScaling'] == null ? undefined : DeploySvcAutoScalingConfig.DeploySvcAutoScalingConfigFromJSON(json['autoScaling']),
        'id': json['id'] == null ? undefined : json['id'],
        'replicas': json['replicas'] == null ? undefined : json['replicas'],
        'resources': json['resources'] == null ? undefined : DeploySvcResourceLimits.DeploySvcResourceLimitsFromJSON(json['resources']),
        'serviceSlug': json['serviceSlug'],
        'strategy': json['strategy'] == null ? undefined : DeploySvcDeploymentStrategy.DeploySvcDeploymentStrategyFromJSON(json['strategy']),
        'targetRegions': json['targetRegions'] == null ? undefined : (json['targetRegions'].map(DeploySvcTargetRegion.DeploySvcTargetRegionFromJSON)),
    };
}
function DeploySvcDeploymentToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'autoScaling': DeploySvcAutoScalingConfig.DeploySvcAutoScalingConfigToJSON(value['autoScaling']),
        'id': value['id'],
        'replicas': value['replicas'],
        'resources': DeploySvcResourceLimits.DeploySvcResourceLimitsToJSON(value['resources']),
        'serviceSlug': value['serviceSlug'],
        'strategy': DeploySvcDeploymentStrategy.DeploySvcDeploymentStrategyToJSON(value['strategy']),
        'targetRegions': value['targetRegions'] == null ? undefined : (value['targetRegions'].map(DeploySvcTargetRegion.DeploySvcTargetRegionToJSON)),
    };
}

exports.DeploySvcDeploymentFromJSON = DeploySvcDeploymentFromJSON;
exports.DeploySvcDeploymentFromJSONTyped = DeploySvcDeploymentFromJSONTyped;
exports.DeploySvcDeploymentToJSON = DeploySvcDeploymentToJSON;
exports.instanceOfDeploySvcDeployment = instanceOfDeploySvcDeployment;