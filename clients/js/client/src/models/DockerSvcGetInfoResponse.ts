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

import { mapValues } from '../runtime';
import type { DockerSvcDockerInfo } from './DockerSvcDockerInfo';
import {
    DockerSvcDockerInfoFromJSON,
    DockerSvcDockerInfoFromJSONTyped,
    DockerSvcDockerInfoToJSON,
    DockerSvcDockerInfoToJSONTyped,
} from './DockerSvcDockerInfo';

/**
 * 
 * @export
 * @interface DockerSvcGetInfoResponse
 */
export interface DockerSvcGetInfoResponse {
    /**
     * 
     * @type {DockerSvcDockerInfo}
     * @memberof DockerSvcGetInfoResponse
     */
    info?: DockerSvcDockerInfo;
}

/**
 * Check if a given object implements the DockerSvcGetInfoResponse interface.
 */
export function instanceOfDockerSvcGetInfoResponse(value: object): value is DockerSvcGetInfoResponse {
    return true;
}

export function DockerSvcGetInfoResponseFromJSON(json: any): DockerSvcGetInfoResponse {
    return DockerSvcGetInfoResponseFromJSONTyped(json, false);
}

export function DockerSvcGetInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DockerSvcGetInfoResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'info': json['info'] == null ? undefined : DockerSvcDockerInfoFromJSON(json['info']),
    };
}

  export function DockerSvcGetInfoResponseToJSON(json: any): DockerSvcGetInfoResponse {
      return DockerSvcGetInfoResponseToJSONTyped(json, false);
  }

  export function DockerSvcGetInfoResponseToJSONTyped(value?: DockerSvcGetInfoResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'info': DockerSvcDockerInfoToJSON(value['info']),
    };
}

