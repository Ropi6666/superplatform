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
import type { DatastoreFieldSelector } from './DatastoreFieldSelector';
import type { DatastoreStartsWithMatch } from './DatastoreStartsWithMatch';
import type { DatastoreContainsMatch } from './DatastoreContainsMatch';
import type { DatastoreEqualsMatch } from './DatastoreEqualsMatch';
import type { DatastoreIntersectsMatch } from './DatastoreIntersectsMatch';
/**
 *
 * @export
 * @interface DatastoreFilter
 */
export interface DatastoreFilter {
    /**
     * All condition returns all objects.
     * @type {object}
     * @memberof DatastoreFilter
     */
    all?: object;
    /**
     * Contains condition returns all objects where the field(s) values contain a particular string or slice element.
     * @type {DatastoreContainsMatch}
     * @memberof DatastoreFilter
     */
    contains?: DatastoreContainsMatch;
    /**
     * Equals condition returns objects where value of a field equals (=) to the specified value in the query.
     * @type {DatastoreEqualsMatch}
     * @memberof DatastoreFilter
     */
    equal?: DatastoreEqualsMatch;
    /**
     * Intersects condition returns objects where the slice value of a field intersects with the slice value in the query.
     * @type {DatastoreIntersectsMatch}
     * @memberof DatastoreFilter
     */
    intersects?: DatastoreIntersectsMatch;
    /**
     *
     * @type {DatastoreFieldSelector}
     * @memberof DatastoreFilter
     */
    selector?: DatastoreFieldSelector;
    /**
     * StartsWith condition returns all objects where the field(s) values start with a particular string.
     * @type {DatastoreStartsWithMatch}
     * @memberof DatastoreFilter
     */
    startsWith?: DatastoreStartsWithMatch;
}
/**
 * Check if a given object implements the DatastoreFilter interface.
 */
export declare function instanceOfDatastoreFilter(value: object): value is DatastoreFilter;
export declare function DatastoreFilterFromJSON(json: any): DatastoreFilter;
export declare function DatastoreFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatastoreFilter;
export declare function DatastoreFilterToJSON(value?: DatastoreFilter | null): any;