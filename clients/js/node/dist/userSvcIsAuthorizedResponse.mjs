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
class UserSvcIsAuthorizedResponse {
    static getAttributeTypeMap() {
        return UserSvcIsAuthorizedResponse.attributeTypeMap;
    }
}
UserSvcIsAuthorizedResponse.discriminator = undefined;
UserSvcIsAuthorizedResponse.attributeTypeMap = [
    {
        "name": "authorized",
        "baseName": "authorized",
        "type": "boolean"
    },
    {
        "name": "user",
        "baseName": "user",
        "type": "UserSvcUser"
    }
];

export { UserSvcIsAuthorizedResponse };