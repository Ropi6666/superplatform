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

import { mapValues } from '../runtime';
import type { RegistrySvcAPISpec } from './RegistrySvcAPISpec';
import {
    RegistrySvcAPISpecFromJSON,
    RegistrySvcAPISpecFromJSONTyped,
    RegistrySvcAPISpecToJSON,
} from './RegistrySvcAPISpec';
import type { RegistrySvcImageSpec } from './RegistrySvcImageSpec';
import {
    RegistrySvcImageSpecFromJSON,
    RegistrySvcImageSpecFromJSONTyped,
    RegistrySvcImageSpecToJSON,
} from './RegistrySvcImageSpec';
import type { RegistrySvcClient } from './RegistrySvcClient';
import {
    RegistrySvcClientFromJSON,
    RegistrySvcClientFromJSONTyped,
    RegistrySvcClientToJSON,
} from './RegistrySvcClient';

/**
 * 
 * @export
 * @interface RegistrySvcServiceDefinition
 */
export interface RegistrySvcServiceDefinition {
    /**
     * API Specs such as OpenAPI definitions etc.
     * @type {Array<RegistrySvcAPISpec>}
     * @memberof RegistrySvcServiceDefinition
     */
    apiSpecs?: Array<RegistrySvcAPISpec>;
    /**
     * 
     * @type {Array<RegistrySvcClient>}
     * @memberof RegistrySvcServiceDefinition
     */
    clients?: Array<RegistrySvcClient>;
    /**
     * Container specifications for Docker, K8s, etc.                                        // Programming language clients.
     * @type {RegistrySvcImageSpec}
     * @memberof RegistrySvcServiceDefinition
     */
    image?: RegistrySvcImageSpec;
    /**
     * The User Svc slug of the service whose instance is being registered.
     * @type {string}
     * @memberof RegistrySvcServiceDefinition
     */
    serviceSlug: string;
}

/**
 * Check if a given object implements the RegistrySvcServiceDefinition interface.
 */
export function instanceOfRegistrySvcServiceDefinition(value: object): value is RegistrySvcServiceDefinition {
    if (!('serviceSlug' in value) || value['serviceSlug'] === undefined) return false;
    return true;
}

export function RegistrySvcServiceDefinitionFromJSON(json: any): RegistrySvcServiceDefinition {
    return RegistrySvcServiceDefinitionFromJSONTyped(json, false);
}

export function RegistrySvcServiceDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrySvcServiceDefinition {
    if (json == null) {
        return json;
    }
    return {
        
        'apiSpecs': json['apiSpecs'] == null ? undefined : ((json['apiSpecs'] as Array<any>).map(RegistrySvcAPISpecFromJSON)),
        'clients': json['clients'] == null ? undefined : ((json['clients'] as Array<any>).map(RegistrySvcClientFromJSON)),
        'image': json['image'] == null ? undefined : RegistrySvcImageSpecFromJSON(json['image']),
        'serviceSlug': json['serviceSlug'],
    };
}

export function RegistrySvcServiceDefinitionToJSON(value?: RegistrySvcServiceDefinition | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiSpecs': value['apiSpecs'] == null ? undefined : ((value['apiSpecs'] as Array<any>).map(RegistrySvcAPISpecToJSON)),
        'clients': value['clients'] == null ? undefined : ((value['clients'] as Array<any>).map(RegistrySvcClientToJSON)),
        'image': RegistrySvcImageSpecToJSON(value['image']),
        'serviceSlug': value['serviceSlug'],
    };
}
