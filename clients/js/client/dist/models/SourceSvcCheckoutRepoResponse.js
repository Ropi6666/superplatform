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
/**
 * Check if a given object implements the SourceSvcCheckoutRepoResponse interface.
 */
export function instanceOfSourceSvcCheckoutRepoResponse(value) {
    return true;
}
export function SourceSvcCheckoutRepoResponseFromJSON(json) {
    return SourceSvcCheckoutRepoResponseFromJSONTyped(json, false);
}
export function SourceSvcCheckoutRepoResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'dir': json['dir'] == null ? undefined : json['dir'],
    };
}
export function SourceSvcCheckoutRepoResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'dir': value['dir'],
    };
}