/**
 * Superplatform
 * On-premise AI platform and microservices ecosystem.
 *
 * The version of the OpenAPI document: 0.3.0-rc.1
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { DockerSvcRunInfo } from './dockerSvcRunInfo';

export class DockerSvcRunContainerResponse {
    'info'?: DockerSvcRunInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "info",
            "baseName": "info",
            "type": "DockerSvcRunInfo"
        }    ];

    static getAttributeTypeMap() {
        return DockerSvcRunContainerResponse.attributeTypeMap;
    }
}
