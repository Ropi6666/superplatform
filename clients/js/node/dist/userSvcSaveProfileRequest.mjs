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
class UserSvcSaveProfileRequest {
    static getAttributeTypeMap() {
        return UserSvcSaveProfileRequest.attributeTypeMap;
    }
}
UserSvcSaveProfileRequest.discriminator = undefined;
UserSvcSaveProfileRequest.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "slug",
        "baseName": "slug",
        "type": "string"
    }
];

export { UserSvcSaveProfileRequest };