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

import { RequestFile } from './models';

export class SourceSvcCheckoutRepoResponse {
    /**
    * Directory where the repository was checked out
    */
    'dir'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dir",
            "baseName": "dir",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SourceSvcCheckoutRepoResponse.attributeTypeMap;
    }
}
