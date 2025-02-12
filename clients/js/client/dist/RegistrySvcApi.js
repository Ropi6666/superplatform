'use strict';

var runtime = require('./runtime2.js');
var RegistrySvcListDefinitionsResponse = require('./RegistrySvcListDefinitionsResponse.js');
var RegistrySvcListInstancesResponse = require('./RegistrySvcListInstancesResponse.js');
var RegistrySvcListNodesResponse = require('./RegistrySvcListNodesResponse.js');
var RegistrySvcRegisterInstanceRequest = require('./RegistrySvcRegisterInstanceRequest.js');
var RegistrySvcSaveDefinitionRequest = require('./RegistrySvcSaveDefinitionRequest.js');
require('./RegistrySvcDefinition.js');
require('./RegistrySvcAPISpec.js');
require('./RegistrySvcImageSpec.js');
require('./RegistrySvcRepositorySpec.js');
require('./RegistrySvcClient.js');
require('./RegistrySvcLanguage.js');
require('./RegistrySvcInstance.js');
require('./RegistrySvcInstanceStatus.js');
require('./RegistrySvcNode.js');
require('./RegistrySvcGPU.js');
require('./RegistrySvcProcess.js');
require('./RegistrySvcResourceUsage.js');
require('./RegistrySvcUsage.js');

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
/**
 *
 */
class RegistrySvcApi extends runtime.BaseAPI {
    /**
     * Deletes a registered definition by ID.
     * Delete Definition
     */
    deleteDefinitionRaw(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters['id'] == null) {
                throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling deleteDefinition().');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/registry-svc/definition/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Deletes a registered definition by ID.
     * Delete Definition
     */
    deleteDefinition(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            yield this.deleteDefinitionRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Deletes a registered node by node URL. This endpoint is useful when a node is no longer available but it\'s still present in the database.
     * Delete Node
     */
    deleteNodeRaw(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters['url'] == null) {
                throw new runtime.RequiredError('url', 'Required parameter "url" was null or undefined when calling deleteNode().');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/registry-svc/node/{url}`.replace(`{${"url"}}`, encodeURIComponent(String(requestParameters['url']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Deletes a registered node by node URL. This endpoint is useful when a node is no longer available but it\'s still present in the database.
     * Delete Node
     */
    deleteNode(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            yield this.deleteNodeRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Retrieves a list of all definitions or filters them by specific criteria.
     * List Definitions
     */
    listDefinitionsRaw(initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/registry-svc/definitions`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => RegistrySvcListDefinitionsResponse.RegistrySvcListDefinitionsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Retrieves a list of all definitions or filters them by specific criteria.
     * List Definitions
     */
    listDefinitions(initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.listDefinitionsRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieves a list of all instances or filters them by specific criteria (e.g., host, IP).
     * List Service Instances
     */
    listInstancesRaw(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['scheme'] != null) {
                queryParameters['scheme'] = requestParameters['scheme'];
            }
            if (requestParameters['ip'] != null) {
                queryParameters['ip'] = requestParameters['ip'];
            }
            if (requestParameters['deploymentId'] != null) {
                queryParameters['deploymentId'] = requestParameters['deploymentId'];
            }
            if (requestParameters['host'] != null) {
                queryParameters['host'] = requestParameters['host'];
            }
            if (requestParameters['ip2'] != null) {
                queryParameters['ip'] = requestParameters['ip2'];
            }
            if (requestParameters['id'] != null) {
                queryParameters['id'] = requestParameters['id'];
            }
            if (requestParameters['slug'] != null) {
                queryParameters['slug'] = requestParameters['slug'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/registry-svc/instances`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => RegistrySvcListInstancesResponse.RegistrySvcListInstancesResponseFromJSON(jsonValue));
        });
    }
    /**
     * Retrieves a list of all instances or filters them by specific criteria (e.g., host, IP).
     * List Service Instances
     */
    listInstances() {
        return runtime.__awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.listInstancesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieve a list of nodes.
     * List Nodes
     */
    listNodesRaw(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/registry-svc/nodes`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters['body'],
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => RegistrySvcListNodesResponse.RegistrySvcListNodesResponseFromJSON(jsonValue));
        });
    }
    /**
     * Retrieve a list of nodes.
     * List Nodes
     */
    listNodes() {
        return runtime.__awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.listNodesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Registers an instance. Idempoent.
     * Register Instance
     */
    registerInstanceRaw(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters['body'] == null) {
                throw new runtime.RequiredError('body', 'Required parameter "body" was null or undefined when calling registerInstance().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/registry-svc/instance`,
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: RegistrySvcRegisterInstanceRequest.RegistrySvcRegisterInstanceRequestToJSON(requestParameters['body']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Registers an instance. Idempoent.
     * Register Instance
     */
    registerInstance(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.registerInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Removes a registered instance by ID.
     * Remove Instance
     */
    removeInstanceRaw(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters['id'] == null) {
                throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling removeInstance().');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/registry-svc/instance/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Removes a registered instance by ID.
     * Remove Instance
     */
    removeInstance(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            yield this.removeInstanceRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Registers a new definition, associating an definition address with a slug acquired from the bearer token.
     * Register a Definition
     */
    saveDefinitionRaw(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters['body'] == null) {
                throw new runtime.RequiredError('body', 'Required parameter "body" was null or undefined when calling saveDefinition().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/registry-svc/definition`,
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: RegistrySvcSaveDefinitionRequest.RegistrySvcSaveDefinitionRequestToJSON(requestParameters['body']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Registers a new definition, associating an definition address with a slug acquired from the bearer token.
     * Register a Definition
     */
    saveDefinition(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.saveDefinitionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

exports.RegistrySvcApi = RegistrySvcApi;
