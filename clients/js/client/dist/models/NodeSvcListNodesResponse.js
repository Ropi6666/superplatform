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
import { NodeSvcNodeFromJSON, NodeSvcNodeToJSON, } from './NodeSvcNode';
/**
 * Check if a given object implements the NodeSvcListNodesResponse interface.
 */
export function instanceOfNodeSvcListNodesResponse(value) {
    return true;
}
export function NodeSvcListNodesResponseFromJSON(json) {
    return NodeSvcListNodesResponseFromJSONTyped(json, false);
}
export function NodeSvcListNodesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'nodes': json['nodes'] == null ? undefined : (json['nodes'].map(NodeSvcNodeFromJSON)),
    };
}
export function NodeSvcListNodesResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'nodes': value['nodes'] == null ? undefined : (value['nodes'].map(NodeSvcNodeToJSON)),
    };
}