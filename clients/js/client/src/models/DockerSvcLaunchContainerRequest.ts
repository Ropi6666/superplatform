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

import { mapValues } from '../runtime';
import type { DockerSvcLaunchContainerOptions } from './DockerSvcLaunchContainerOptions';
import {
    DockerSvcLaunchContainerOptionsFromJSON,
    DockerSvcLaunchContainerOptionsFromJSONTyped,
    DockerSvcLaunchContainerOptionsToJSON,
} from './DockerSvcLaunchContainerOptions';

/**
 * 
 * @export
 * @interface DockerSvcLaunchContainerRequest
 */
export interface DockerSvcLaunchContainerRequest {
    /**
     * HostPort is the port on the host machine that will be mapped to the container's port
     * example: 8081
     * @type {number}
     * @memberof DockerSvcLaunchContainerRequest
     */
    hostPort?: number;
    /**
     * Image is the Docker image to use for the container
     * @type {string}
     * @memberof DockerSvcLaunchContainerRequest
     */
    image?: string;
    /**
     * Options provides additional options for launching the container
     * @type {DockerSvcLaunchContainerOptions}
     * @memberof DockerSvcLaunchContainerRequest
     */
    options?: DockerSvcLaunchContainerOptions;
    /**
     * Port is the port number that the container will expose
     * example: 8080
     * @type {number}
     * @memberof DockerSvcLaunchContainerRequest
     */
    port?: number;
}

/**
 * Check if a given object implements the DockerSvcLaunchContainerRequest interface.
 */
export function instanceOfDockerSvcLaunchContainerRequest(value: object): value is DockerSvcLaunchContainerRequest {
    return true;
}

export function DockerSvcLaunchContainerRequestFromJSON(json: any): DockerSvcLaunchContainerRequest {
    return DockerSvcLaunchContainerRequestFromJSONTyped(json, false);
}

export function DockerSvcLaunchContainerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DockerSvcLaunchContainerRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'hostPort': json['hostPort'] == null ? undefined : json['hostPort'],
        'image': json['image'] == null ? undefined : json['image'],
        'options': json['options'] == null ? undefined : DockerSvcLaunchContainerOptionsFromJSON(json['options']),
        'port': json['port'] == null ? undefined : json['port'],
    };
}

export function DockerSvcLaunchContainerRequestToJSON(value?: DockerSvcLaunchContainerRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'hostPort': value['hostPort'],
        'image': value['image'],
        'options': DockerSvcLaunchContainerOptionsToJSON(value['options']),
        'port': value['port'],
    };
}
