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
import { ModelSvcArchitectures } from './modelSvcArchitectures';

export class ModelSvcPlatform {
    'architectures'?: ModelSvcArchitectures;
    'id'?: string;
    'name'?: string;
    'version'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "architectures",
            "baseName": "architectures",
            "type": "ModelSvcArchitectures"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ModelSvcPlatform.attributeTypeMap;
    }
}
