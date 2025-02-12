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
class PromptSvcPrompt {
    static getAttributeTypeMap() {
        return PromptSvcPrompt.attributeTypeMap;
    }
}
PromptSvcPrompt.discriminator = undefined;
PromptSvcPrompt.attributeTypeMap = [
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "string"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "lastRun",
        "baseName": "lastRun",
        "type": "string"
    },
    {
        "name": "maxRetries",
        "baseName": "maxRetries",
        "type": "number"
    },
    {
        "name": "modelId",
        "baseName": "modelId",
        "type": "string"
    },
    {
        "name": "prompt",
        "baseName": "prompt",
        "type": "string"
    },
    {
        "name": "runCount",
        "baseName": "runCount",
        "type": "number"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "PromptSvcPromptStatus"
    },
    {
        "name": "sync",
        "baseName": "sync",
        "type": "boolean"
    },
    {
        "name": "template",
        "baseName": "template",
        "type": "string"
    },
    {
        "name": "threadId",
        "baseName": "threadId",
        "type": "string"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "string"
    },
    {
        "name": "userId",
        "baseName": "userId",
        "type": "string"
    }
];

export { PromptSvcPrompt };
