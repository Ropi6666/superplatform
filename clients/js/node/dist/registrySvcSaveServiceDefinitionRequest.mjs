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
class RegistrySvcSaveServiceDefinitionRequest {
    static getAttributeTypeMap() {
        return RegistrySvcSaveServiceDefinitionRequest.attributeTypeMap;
    }
}
RegistrySvcSaveServiceDefinitionRequest.discriminator = undefined;
RegistrySvcSaveServiceDefinitionRequest.attributeTypeMap = [
    {
        "name": "serviceDefinition",
        "baseName": "serviceDefinition",
        "type": "RegistrySvcServiceDefinition"
    }
];

export { RegistrySvcSaveServiceDefinitionRequest };