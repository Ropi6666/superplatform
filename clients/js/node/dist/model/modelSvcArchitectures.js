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
export class ModelSvcArchitectures {
    static getAttributeTypeMap() {
        return ModelSvcArchitectures.attributeTypeMap;
    }
}
ModelSvcArchitectures.discriminator = undefined;
ModelSvcArchitectures.attributeTypeMap = [
    {
        "name": "cuda",
        "baseName": "cuda",
        "type": "ModelSvcContainer"
    },
    {
        "name": "_default",
        "baseName": "default",
        "type": "ModelSvcContainer"
    }
];