'use strict';

var ModelSvcArchitectures = require('./ModelSvcArchitectures.js');
require('./ModelSvcContainer.js');

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
 * Check if a given object implements the ModelSvcPlatform interface.
 */
function instanceOfModelSvcPlatform(value) {
    return true;
}
function ModelSvcPlatformFromJSON(json) {
    return ModelSvcPlatformFromJSONTyped(json);
}
function ModelSvcPlatformFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'architectures': json['architectures'] == null ? undefined : ModelSvcArchitectures.ModelSvcArchitecturesFromJSON(json['architectures']),
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}
function ModelSvcPlatformToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'architectures': ModelSvcArchitectures.ModelSvcArchitecturesToJSON(value['architectures']),
        'id': value['id'],
        'name': value['name'],
        'version': value['version'],
    };
}

exports.ModelSvcPlatformFromJSON = ModelSvcPlatformFromJSON;
exports.ModelSvcPlatformFromJSONTyped = ModelSvcPlatformFromJSONTyped;
exports.ModelSvcPlatformToJSON = ModelSvcPlatformToJSON;
exports.instanceOfModelSvcPlatform = instanceOfModelSvcPlatform;