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
/**
 * 
 * @export
 * @interface DatastoreEqualsMatch
 */
export interface DatastoreEqualsMatch {
    /**
     * Selector selects one, more or all fields
     * @type {object}
     * @memberof DatastoreEqualsMatch
     */
    value?: object;
}

/**
 * Check if a given object implements the DatastoreEqualsMatch interface.
 */
export function instanceOfDatastoreEqualsMatch(value: object): value is DatastoreEqualsMatch {
    return true;
}

export function DatastoreEqualsMatchFromJSON(json: any): DatastoreEqualsMatch {
    return DatastoreEqualsMatchFromJSONTyped(json, false);
}

export function DatastoreEqualsMatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatastoreEqualsMatch {
    if (json == null) {
        return json;
    }
    return {
        
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function DatastoreEqualsMatchToJSON(value?: DatastoreEqualsMatch | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'value': value['value'],
    };
}
