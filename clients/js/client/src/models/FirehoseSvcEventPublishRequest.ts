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

import { mapValues } from '../runtime';
import type { FirehoseSvcEvent } from './FirehoseSvcEvent';
import {
    FirehoseSvcEventFromJSON,
    FirehoseSvcEventFromJSONTyped,
    FirehoseSvcEventToJSON,
} from './FirehoseSvcEvent';

/**
 * 
 * @export
 * @interface FirehoseSvcEventPublishRequest
 */
export interface FirehoseSvcEventPublishRequest {
    /**
     * 
     * @type {FirehoseSvcEvent}
     * @memberof FirehoseSvcEventPublishRequest
     */
    event?: FirehoseSvcEvent;
}

/**
 * Check if a given object implements the FirehoseSvcEventPublishRequest interface.
 */
export function instanceOfFirehoseSvcEventPublishRequest(value: object): value is FirehoseSvcEventPublishRequest {
    return true;
}

export function FirehoseSvcEventPublishRequestFromJSON(json: any): FirehoseSvcEventPublishRequest {
    return FirehoseSvcEventPublishRequestFromJSONTyped(json, false);
}

export function FirehoseSvcEventPublishRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FirehoseSvcEventPublishRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'event': json['event'] == null ? undefined : FirehoseSvcEventFromJSON(json['event']),
    };
}

export function FirehoseSvcEventPublishRequestToJSON(value?: FirehoseSvcEventPublishRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'event': FirehoseSvcEventToJSON(value['event']),
    };
}
