'use strict';

var RegistrySvcAPISpec = require('./RegistrySvcAPISpec.js');
var RegistrySvcImageSpec = require('./RegistrySvcImageSpec.js');
var RegistrySvcClient = require('./RegistrySvcClient.js');
require('./RegistrySvcLanguage.js');

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
 * Check if a given object implements the RegistrySvcServiceDefinition interface.
 */
function instanceOfRegistrySvcServiceDefinition(value) {
    if (!('serviceSlug' in value) || value['serviceSlug'] === undefined)
        return false;
    return true;
}
function RegistrySvcServiceDefinitionFromJSON(json) {
    return RegistrySvcServiceDefinitionFromJSONTyped(json);
}
function RegistrySvcServiceDefinitionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'apiSpecs': json['apiSpecs'] == null ? undefined : (json['apiSpecs'].map(RegistrySvcAPISpec.RegistrySvcAPISpecFromJSON)),
        'clients': json['clients'] == null ? undefined : (json['clients'].map(RegistrySvcClient.RegistrySvcClientFromJSON)),
        'image': json['image'] == null ? undefined : RegistrySvcImageSpec.RegistrySvcImageSpecFromJSON(json['image']),
        'serviceSlug': json['serviceSlug'],
    };
}
function RegistrySvcServiceDefinitionToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'apiSpecs': value['apiSpecs'] == null ? undefined : (value['apiSpecs'].map(RegistrySvcAPISpec.RegistrySvcAPISpecToJSON)),
        'clients': value['clients'] == null ? undefined : (value['clients'].map(RegistrySvcClient.RegistrySvcClientToJSON)),
        'image': RegistrySvcImageSpec.RegistrySvcImageSpecToJSON(value['image']),
        'serviceSlug': value['serviceSlug'],
    };
}

exports.RegistrySvcServiceDefinitionFromJSON = RegistrySvcServiceDefinitionFromJSON;
exports.RegistrySvcServiceDefinitionFromJSONTyped = RegistrySvcServiceDefinitionFromJSONTyped;
exports.RegistrySvcServiceDefinitionToJSON = RegistrySvcServiceDefinitionToJSON;
exports.instanceOfRegistrySvcServiceDefinition = instanceOfRegistrySvcServiceDefinition;