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
import { DatastoreFieldSelectorFromJSON, DatastoreFieldSelectorToJSON, } from './DatastoreFieldSelector';
import { DatastoreStartsWithMatchFromJSON, DatastoreStartsWithMatchToJSON, } from './DatastoreStartsWithMatch';
import { DatastoreContainsMatchFromJSON, DatastoreContainsMatchToJSON, } from './DatastoreContainsMatch';
import { DatastoreEqualsMatchFromJSON, DatastoreEqualsMatchToJSON, } from './DatastoreEqualsMatch';
import { DatastoreIntersectsMatchFromJSON, DatastoreIntersectsMatchToJSON, } from './DatastoreIntersectsMatch';
/**
 * Check if a given object implements the DatastoreFilter interface.
 */
export function instanceOfDatastoreFilter(value) {
    return true;
}
export function DatastoreFilterFromJSON(json) {
    return DatastoreFilterFromJSONTyped(json, false);
}
export function DatastoreFilterFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'all': json['all'] == null ? undefined : json['all'],
        'contains': json['contains'] == null ? undefined : DatastoreContainsMatchFromJSON(json['contains']),
        'equal': json['equal'] == null ? undefined : DatastoreEqualsMatchFromJSON(json['equal']),
        'intersects': json['intersects'] == null ? undefined : DatastoreIntersectsMatchFromJSON(json['intersects']),
        'selector': json['selector'] == null ? undefined : DatastoreFieldSelectorFromJSON(json['selector']),
        'startsWith': json['startsWith'] == null ? undefined : DatastoreStartsWithMatchFromJSON(json['startsWith']),
    };
}
export function DatastoreFilterToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'all': value['all'],
        'contains': DatastoreContainsMatchToJSON(value['contains']),
        'equal': DatastoreEqualsMatchToJSON(value['equal']),
        'intersects': DatastoreIntersectsMatchToJSON(value['intersects']),
        'selector': DatastoreFieldSelectorToJSON(value['selector']),
        'startsWith': DatastoreStartsWithMatchToJSON(value['startsWith']),
    };
}