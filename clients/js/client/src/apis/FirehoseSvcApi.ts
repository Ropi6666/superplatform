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
  FirehoseSvcErrorResponse,
  FirehoseSvcPublishRequest,
} from '../models/index';
import {
    FirehoseSvcErrorResponseFromJSON,
    FirehoseSvcErrorResponseToJSON,
    FirehoseSvcPublishRequestFromJSON,
    FirehoseSvcPublishRequestToJSON,
} from '../models/index';

export interface FirehoseSvcPublishPostRequest {
    event: FirehoseSvcPublishRequest;
}

/**
 * 
 */
export class FirehoseSvcApi extends runtime.BaseAPI {

    /**
     * Publishes an event to the firehose service after authorization check
     * Publish an Event
     */
    async firehoseSvcPublishPostRaw(requestParameters: FirehoseSvcPublishPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['event'] == null) {
            throw new runtime.RequiredError(
                'event',
                'Required parameter "event" was null or undefined when calling firehoseSvcPublishPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // BearerAuth authentication
        }

        const response = await this.request({
            path: `/firehose-svc/publish`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FirehoseSvcPublishRequestToJSON(requestParameters['event']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Publishes an event to the firehose service after authorization check
     * Publish an Event
     */
    async firehoseSvcPublishPost(requestParameters: FirehoseSvcPublishPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.firehoseSvcPublishPostRaw(requestParameters, initOverrides);
    }

    /**
     * Establish a subscription to the firehose events and accept a real time stream of them.
     * Subscribe to the Event Stream
     */
    async firehoseSvcSubscribeGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // BearerAuth authentication
        }

        const response = await this.request({
            path: `/firehose-svc/subscribe`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Establish a subscription to the firehose events and accept a real time stream of them.
     * Subscribe to the Event Stream
     */
    async firehoseSvcSubscribeGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.firehoseSvcSubscribeGetRaw(initOverrides);
        return await response.value();
    }

}