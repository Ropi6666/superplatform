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
import type { NodeSvcProcess } from './NodeSvcProcess';
/**
 *
 * @export
 * @interface NodeSvcGPU
 */
export interface NodeSvcGPU {
    /**
     *
     * @type {string}
     * @memberof NodeSvcGPU
     */
    busId?: string;
    /**
     *
     * @type {string}
     * @memberof NodeSvcGPU
     */
    computeMode?: string;
    /**
     *
     * @type {number}
     * @memberof NodeSvcGPU
     */
    gpuUtilization?: number;
    /**
     * Id Node.Hostname + IntraNodeId
     * @type {string}
     * @memberof NodeSvcGPU
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof NodeSvcGPU
     */
    intraNodeId?: number;
    /**
     *
     * @type {number}
     * @memberof NodeSvcGPU
     */
    memoryTotal?: number;
    /**
     *
     * @type {number}
     * @memberof NodeSvcGPU
     */
    memoryUsage?: number;
    /**
     *
     * @type {string}
     * @memberof NodeSvcGPU
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof NodeSvcGPU
     */
    performanceState?: string;
    /**
     *
     * @type {number}
     * @memberof NodeSvcGPU
     */
    powerCap?: number;
    /**
     *
     * @type {number}
     * @memberof NodeSvcGPU
     */
    powerUsage?: number;
    /**
     *
     * @type {Array<NodeSvcProcess>}
     * @memberof NodeSvcGPU
     */
    processDetails?: Array<NodeSvcProcess>;
    /**
     *
     * @type {number}
     * @memberof NodeSvcGPU
     */
    temperature?: number;
}
/**
 * Check if a given object implements the NodeSvcGPU interface.
 */
export declare function instanceOfNodeSvcGPU(value: object): value is NodeSvcGPU;
export declare function NodeSvcGPUFromJSON(json: any): NodeSvcGPU;
export declare function NodeSvcGPUFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeSvcGPU;
export declare function NodeSvcGPUToJSON(value?: NodeSvcGPU | null): any;