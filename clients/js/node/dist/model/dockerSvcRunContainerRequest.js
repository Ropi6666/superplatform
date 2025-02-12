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
export class DockerSvcRunContainerRequest {
    static getAttributeTypeMap() {
        return DockerSvcRunContainerRequest.attributeTypeMap;
    }
}
DockerSvcRunContainerRequest.discriminator = undefined;
DockerSvcRunContainerRequest.attributeTypeMap = [
    {
        "name": "hostPort",
        "baseName": "hostPort",
        "type": "number"
    },
    {
        "name": "image",
        "baseName": "image",
        "type": "string"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "DockerSvcRunContainerOptions"
    },
    {
        "name": "port",
        "baseName": "port",
        "type": "number"
    }
];
