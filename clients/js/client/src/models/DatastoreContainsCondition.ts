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
import type { DatastoreFieldSelector } from './DatastoreFieldSelector';
import {
    DatastoreFieldSelectorFromJSON,
    DatastoreFieldSelectorFromJSONTyped,
    DatastoreFieldSelectorToJSON,
} from './DatastoreFieldSelector';

/**
 * 
 * @export
 * @interface DatastoreContainsCondition
 */
export interface DatastoreContainsCondition {
    /**
     * Selector selects one, more or all fields
     * @type {DatastoreFieldSelector}
     * @memberof DatastoreContainsCondition
     */
    selector?: DatastoreFieldSelector;
    /**
     * 
     * @type {object}
     * @memberof DatastoreContainsCondition
     */
    value?: object;
}

/**
 * Check if a given object implements the DatastoreContainsCondition interface.
 */
export function instanceOfDatastoreContainsCondition(value: object): value is DatastoreContainsCondition {
    return true;
}

export function DatastoreContainsConditionFromJSON(json: any): DatastoreContainsCondition {
    return DatastoreContainsConditionFromJSONTyped(json, false);
}

export function DatastoreContainsConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatastoreContainsCondition {
    if (json == null) {
        return json;
    }
    return {
        
        'selector': json['selector'] == null ? undefined : DatastoreFieldSelectorFromJSON(json['selector']),
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function DatastoreContainsConditionToJSON(value?: DatastoreContainsCondition | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'selector': DatastoreFieldSelectorToJSON(value['selector']),
        'value': value['value'],
    };
}
