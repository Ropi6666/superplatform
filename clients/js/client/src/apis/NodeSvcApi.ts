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


import * as runtime from '../runtime';
import type {
  NodeSvcErrorResponse,
  NodeSvcListNodesResponse,
} from '../models/index';
import {
    NodeSvcErrorResponseFromJSON,
    NodeSvcErrorResponseToJSON,
    NodeSvcListNodesResponseFromJSON,
    NodeSvcListNodesResponseToJSON,
} from '../models/index';

export interface ListNodesRequest {
    body?: object;
}

/**
 * 
 */
export class NodeSvcApi extends runtime.BaseAPI {

    /**
     * Retrieve a list of nodes.
     * List Nodes
     */
    async listNodesRaw(requestParameters: ListNodesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NodeSvcListNodesResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // BearerAuth authentication
        }

        const response = await this.request({
            path: `/node-svc/nodes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NodeSvcListNodesResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of nodes.
     * List Nodes
     */
    async listNodes(requestParameters: ListNodesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NodeSvcListNodesResponse> {
        const response = await this.listNodesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}