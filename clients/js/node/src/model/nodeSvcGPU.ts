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

import { RequestFile } from './models';
import { NodeSvcProcess } from './nodeSvcProcess';

export class NodeSvcGPU {
    'busId'?: string;
    'computeMode'?: string;
    'gpuUtilization'?: number;
    /**
    * Id Node.Hostname + IntraNodeId
    */
    'id'?: string;
    'intraNodeId'?: number;
    'memoryTotal'?: number;
    'memoryUsage'?: number;
    'name'?: string;
    'performanceState'?: string;
    'powerCap'?: number;
    'powerUsage'?: number;
    'processDetails'?: Array<NodeSvcProcess>;
    'temperature'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "busId",
            "baseName": "busId",
            "type": "string"
        },
        {
            "name": "computeMode",
            "baseName": "computeMode",
            "type": "string"
        },
        {
            "name": "gpuUtilization",
            "baseName": "gpuUtilization",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "intraNodeId",
            "baseName": "intraNodeId",
            "type": "number"
        },
        {
            "name": "memoryTotal",
            "baseName": "memoryTotal",
            "type": "number"
        },
        {
            "name": "memoryUsage",
            "baseName": "memoryUsage",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "performanceState",
            "baseName": "performanceState",
            "type": "string"
        },
        {
            "name": "powerCap",
            "baseName": "powerCap",
            "type": "number"
        },
        {
            "name": "powerUsage",
            "baseName": "powerUsage",
            "type": "number"
        },
        {
            "name": "processDetails",
            "baseName": "processDetails",
            "type": "Array<NodeSvcProcess>"
        },
        {
            "name": "temperature",
            "baseName": "temperature",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return NodeSvcGPU.attributeTypeMap;
    }
}
