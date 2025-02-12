import { a as BaseAPI, _ as __awaiter, b as RequiredError, J as JSONApiResponse } from './runtime2.mjs';
import { SourceSvcCheckoutRepoRequestToJSON } from './SourceSvcCheckoutRepoRequest.mjs';
import { SourceSvcCheckoutRepoResponseFromJSON } from './SourceSvcCheckoutRepoResponse.mjs';

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
class SourceSvcApi extends BaseAPI {
    /**
     * Checkout a git repository over https or ssh at a specific version into a temporary directory. Performs a shallow clone with minimal history for faster checkout.
     * Checkout a git repository
     */
    checkoutRepoRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['body'] == null) {
                throw new RequiredError('body', 'Required parameter "body" was null or undefined when calling checkoutRepo().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/source-svc/repo/checkout`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: SourceSvcCheckoutRepoRequestToJSON(requestParameters['body']),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => SourceSvcCheckoutRepoResponseFromJSON(jsonValue));
        });
    }
    /**
     * Checkout a git repository over https or ssh at a specific version into a temporary directory. Performs a shallow clone with minimal history for faster checkout.
     * Checkout a git repository
     */
    checkoutRepo(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.checkoutRepoRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

export { SourceSvcApi };
