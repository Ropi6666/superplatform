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
import { DatastoreQueryFromJSON, DatastoreQueryToJSON, } from './DatastoreQuery';
/**
 * Check if a given object implements the DynamicSvcQueryRequest interface.
 */
export function instanceOfDynamicSvcQueryRequest(value) {
    return true;
}
export function DynamicSvcQueryRequestFromJSON(json) {
    return DynamicSvcQueryRequestFromJSONTyped(json, false);
}
export function DynamicSvcQueryRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'query': json['query'] == null ? undefined : DatastoreQueryFromJSON(json['query']),
        'readers': json['readers'] == null ? undefined : json['readers'],
        'table': json['table'] == null ? undefined : json['table'],
    };
}
export function DynamicSvcQueryRequestToJSON(json) {
    return DynamicSvcQueryRequestToJSONTyped(json, false);
}
export function DynamicSvcQueryRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'query': DatastoreQueryToJSON(value['query']),
        'readers': value['readers'],
        'table': value['table'],
    };
}
