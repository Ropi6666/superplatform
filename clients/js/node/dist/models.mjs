import { ChatSvcAddMessageRequest } from './chatSvcAddMessageRequest.mjs';
import { ChatSvcAddThreadRequest } from './chatSvcAddThreadRequest.mjs';
import { ChatSvcAddThreadResponse } from './chatSvcAddThreadResponse.mjs';
import { ChatSvcAsset } from './chatSvcAsset.mjs';
import { ChatSvcEventMessageAdded } from './chatSvcEventMessageAdded.mjs';
import { ChatSvcEventThreadAdded } from './chatSvcEventThreadAdded.mjs';
import { ChatSvcEventThreadUpdate } from './chatSvcEventThreadUpdate.mjs';
import { ChatSvcGetMessagesResponse } from './chatSvcGetMessagesResponse.mjs';
import { ChatSvcGetThreadResponse } from './chatSvcGetThreadResponse.mjs';
import { ChatSvcGetThreadsResponse } from './chatSvcGetThreadsResponse.mjs';
import { ChatSvcMessage } from './chatSvcMessage.mjs';
import { ChatSvcThread } from './chatSvcThread.mjs';
import { ChatSvcUpdateThreadRequest } from './chatSvcUpdateThreadRequest.mjs';
import { ConfigSvcConfig } from './configSvcConfig.mjs';
import { ConfigSvcGetConfigResponse } from './configSvcGetConfigResponse.mjs';
import { ConfigSvcSaveConfigRequest } from './configSvcSaveConfigRequest.mjs';
import { DatastoreFilter } from './datastoreFilter.mjs';
import { DatastoreOp } from './datastoreOp.mjs';
import { DatastoreOrderBy } from './datastoreOrderBy.mjs';
import { DatastoreQuery } from './datastoreQuery.mjs';
import { DeploySvcAutoScalingConfig } from './deploySvcAutoScalingConfig.mjs';
import { DeploySvcDeleteDeploymentRequest } from './deploySvcDeleteDeploymentRequest.mjs';
import { DeploySvcDeployment } from './deploySvcDeployment.mjs';
import { DeploySvcDeploymentStatus } from './deploySvcDeploymentStatus.mjs';
import { DeploySvcDeploymentStrategy } from './deploySvcDeploymentStrategy.mjs';
import { DeploySvcErrorResponse } from './deploySvcErrorResponse.mjs';
import { DeploySvcListDeploymentsResponse } from './deploySvcListDeploymentsResponse.mjs';
import { DeploySvcResourceLimits } from './deploySvcResourceLimits.mjs';
import { DeploySvcSaveDeploymentRequest } from './deploySvcSaveDeploymentRequest.mjs';
import { DeploySvcStrategyType } from './deploySvcStrategyType.mjs';
import { DeploySvcTargetRegion } from './deploySvcTargetRegion.mjs';
import { DockerSvcBuildImageRequest } from './dockerSvcBuildImageRequest.mjs';
import { DockerSvcContainerIsRunningResponse } from './dockerSvcContainerIsRunningResponse.mjs';
import { DockerSvcDockerInfo } from './dockerSvcDockerInfo.mjs';
import { DockerSvcErrorResponse } from './dockerSvcErrorResponse.mjs';
import { DockerSvcGetContainerSummaryResponse } from './dockerSvcGetContainerSummaryResponse.mjs';
import { DockerSvcGetDockerHostResponse } from './dockerSvcGetDockerHostResponse.mjs';
import { DockerSvcGetInfoResponse } from './dockerSvcGetInfoResponse.mjs';
import { DockerSvcRunContainerOptions } from './dockerSvcRunContainerOptions.mjs';
import { DockerSvcRunContainerRequest } from './dockerSvcRunContainerRequest.mjs';
import { DockerSvcRunContainerResponse } from './dockerSvcRunContainerResponse.mjs';
import { DockerSvcRunInfo } from './dockerSvcRunInfo.mjs';
import { DockerSvcStopContainerRequest } from './dockerSvcStopContainerRequest.mjs';
import { DownloadSvcDownloadDetails } from './downloadSvcDownloadDetails.mjs';
import { DownloadSvcDownloadRequest } from './downloadSvcDownloadRequest.mjs';
import { DownloadSvcDownloadsResponse } from './downloadSvcDownloadsResponse.mjs';
import { DownloadSvcErrorResponse } from './downloadSvcErrorResponse.mjs';
import { DownloadSvcGetDownloadResponse } from './downloadSvcGetDownloadResponse.mjs';
import { DynamicSvcCreateObjectRequest } from './dynamicSvcCreateObjectRequest.mjs';
import { DynamicSvcCreateObjectResponse } from './dynamicSvcCreateObjectResponse.mjs';
import { DynamicSvcDeleteObjectRequest } from './dynamicSvcDeleteObjectRequest.mjs';
import { DynamicSvcErrorResponse } from './dynamicSvcErrorResponse.mjs';
import { DynamicSvcObject } from './dynamicSvcObject.mjs';
import { DynamicSvcObjectCreateFields } from './dynamicSvcObjectCreateFields.mjs';
import { DynamicSvcQueryRequest } from './dynamicSvcQueryRequest.mjs';
import { DynamicSvcQueryResponse } from './dynamicSvcQueryResponse.mjs';
import { DynamicSvcUpdateObjectRequest } from './dynamicSvcUpdateObjectRequest.mjs';
import { DynamicSvcUpsertObjectRequest } from './dynamicSvcUpsertObjectRequest.mjs';
import { DynamicSvcUpsertObjectResponse } from './dynamicSvcUpsertObjectResponse.mjs';
import { EmailSvcErrorResponse } from './emailSvcErrorResponse.mjs';
import { EmailSvcFile } from './emailSvcFile.mjs';
import { EmailSvcSendEmailRequest } from './emailSvcSendEmailRequest.mjs';
import { EmailSvcSendEmailResponse } from './emailSvcSendEmailResponse.mjs';
import { FirehoseSvcErrorResponse } from './firehoseSvcErrorResponse.mjs';
import { FirehoseSvcEvent } from './firehoseSvcEvent.mjs';
import { FirehoseSvcEventPublishRequest } from './firehoseSvcEventPublishRequest.mjs';
import { ModelSvcArchitectures } from './modelSvcArchitectures.mjs';
import { ModelSvcContainer } from './modelSvcContainer.mjs';
import { ModelSvcErrorResponse } from './modelSvcErrorResponse.mjs';
import { ModelSvcGetModelResponse } from './modelSvcGetModelResponse.mjs';
import { ModelSvcListResponse } from './modelSvcListResponse.mjs';
import { ModelSvcModel } from './modelSvcModel.mjs';
import { ModelSvcModelStatus } from './modelSvcModelStatus.mjs';
import { ModelSvcPlatform } from './modelSvcPlatform.mjs';
import { ModelSvcStatusResponse } from './modelSvcStatusResponse.mjs';
import { PolicySvcBlocklistParameters } from './policySvcBlocklistParameters.mjs';
import { PolicySvcCheckRequest } from './policySvcCheckRequest.mjs';
import { PolicySvcCheckResponse } from './policySvcCheckResponse.mjs';
import { PolicySvcEntity } from './policySvcEntity.mjs';
import { PolicySvcErrorResponse } from './policySvcErrorResponse.mjs';
import { PolicySvcInstance } from './policySvcInstance.mjs';
import { PolicySvcRateLimitParameters } from './policySvcRateLimitParameters.mjs';
import { PolicySvcScope } from './policySvcScope.mjs';
import { PolicySvcTemplateId } from './policySvcTemplateId.mjs';
import { PolicySvcUpsertInstanceRequest } from './policySvcUpsertInstanceRequest.mjs';
import { PromptSvcAddPromptRequest } from './promptSvcAddPromptRequest.mjs';
import { PromptSvcAddPromptResponse } from './promptSvcAddPromptResponse.mjs';
import { PromptSvcErrorResponse } from './promptSvcErrorResponse.mjs';
import { PromptSvcListPromptsRequest } from './promptSvcListPromptsRequest.mjs';
import { PromptSvcListPromptsResponse } from './promptSvcListPromptsResponse.mjs';
import { PromptSvcPrompt } from './promptSvcPrompt.mjs';
import { PromptSvcPromptStatus } from './promptSvcPromptStatus.mjs';
import { PromptSvcRemovePromptRequest } from './promptSvcRemovePromptRequest.mjs';
import { RegistrySvcAPISpec } from './registrySvcAPISpec.mjs';
import { RegistrySvcClient } from './registrySvcClient.mjs';
import { RegistrySvcDefinition } from './registrySvcDefinition.mjs';
import { RegistrySvcErrorResponse } from './registrySvcErrorResponse.mjs';
import { RegistrySvcGPU } from './registrySvcGPU.mjs';
import { RegistrySvcImageSpec } from './registrySvcImageSpec.mjs';
import { RegistrySvcInstance } from './registrySvcInstance.mjs';
import { RegistrySvcInstanceStatus } from './registrySvcInstanceStatus.mjs';
import { RegistrySvcLanguage } from './registrySvcLanguage.mjs';
import { RegistrySvcListDefinitionsResponse } from './registrySvcListDefinitionsResponse.mjs';
import { RegistrySvcListInstancesResponse } from './registrySvcListInstancesResponse.mjs';
import { RegistrySvcListNodesResponse } from './registrySvcListNodesResponse.mjs';
import { RegistrySvcNode } from './registrySvcNode.mjs';
import { RegistrySvcProcess } from './registrySvcProcess.mjs';
import { RegistrySvcRegisterInstanceRequest } from './registrySvcRegisterInstanceRequest.mjs';
import { RegistrySvcRepositorySpec } from './registrySvcRepositorySpec.mjs';
import { RegistrySvcResourceUsage } from './registrySvcResourceUsage.mjs';
import { RegistrySvcSaveDefinitionRequest } from './registrySvcSaveDefinitionRequest.mjs';
import { RegistrySvcUsage } from './registrySvcUsage.mjs';
import { SecretSvcDecryptValueRequest } from './secretSvcDecryptValueRequest.mjs';
import { SecretSvcDecryptValueResponse } from './secretSvcDecryptValueResponse.mjs';
import { SecretSvcEncryptValueRequest } from './secretSvcEncryptValueRequest.mjs';
import { SecretSvcEncryptValueResponse } from './secretSvcEncryptValueResponse.mjs';
import { SecretSvcListSecretsRequest } from './secretSvcListSecretsRequest.mjs';
import { SecretSvcListSecretsResponse } from './secretSvcListSecretsResponse.mjs';
import { SecretSvcRemoveSecretsRequest } from './secretSvcRemoveSecretsRequest.mjs';
import { SecretSvcSaveSecretsRequest } from './secretSvcSaveSecretsRequest.mjs';
import { SecretSvcSecret } from './secretSvcSecret.mjs';
import { SourceSvcCheckoutRepoRequest } from './sourceSvcCheckoutRepoRequest.mjs';
import { SourceSvcCheckoutRepoResponse } from './sourceSvcCheckoutRepoResponse.mjs';
import { SourceSvcErrorResponse } from './sourceSvcErrorResponse.mjs';
import { UserSvcAddUserToOrganizationRequest } from './userSvcAddUserToOrganizationRequest.mjs';
import { UserSvcAuthToken } from './userSvcAuthToken.mjs';
import { UserSvcChangePasswordAdminRequest } from './userSvcChangePasswordAdminRequest.mjs';
import { UserSvcChangePasswordRequest } from './userSvcChangePasswordRequest.mjs';
import { UserSvcContact } from './userSvcContact.mjs';
import { UserSvcCreateOrganizationRequest } from './userSvcCreateOrganizationRequest.mjs';
import { UserSvcCreateRoleRequest } from './userSvcCreateRoleRequest.mjs';
import { UserSvcCreateRoleResponse } from './userSvcCreateRoleResponse.mjs';
import { UserSvcCreateUserRequest } from './userSvcCreateUserRequest.mjs';
import { UserSvcErrorResponse } from './userSvcErrorResponse.mjs';
import { UserSvcGetPermissionsResponse } from './userSvcGetPermissionsResponse.mjs';
import { UserSvcGetPublicKeyResponse } from './userSvcGetPublicKeyResponse.mjs';
import { UserSvcGetRolesResponse } from './userSvcGetRolesResponse.mjs';
import { UserSvcGetUsersRequest } from './userSvcGetUsersRequest.mjs';
import { UserSvcGetUsersResponse } from './userSvcGetUsersResponse.mjs';
import { UserSvcIsAuthorizedRequest } from './userSvcIsAuthorizedRequest.mjs';
import { UserSvcIsAuthorizedResponse } from './userSvcIsAuthorizedResponse.mjs';
import { UserSvcLoginRequest } from './userSvcLoginRequest.mjs';
import { UserSvcLoginResponse } from './userSvcLoginResponse.mjs';
import { UserSvcOrganization } from './userSvcOrganization.mjs';
import { UserSvcPermission } from './userSvcPermission.mjs';
import { UserSvcReadUserByTokenResponse } from './userSvcReadUserByTokenResponse.mjs';
import { UserSvcRegisterRequest } from './userSvcRegisterRequest.mjs';
import { UserSvcRegisterResponse } from './userSvcRegisterResponse.mjs';
import { UserSvcRole } from './userSvcRole.mjs';
import { UserSvcSaveProfileRequest } from './userSvcSaveProfileRequest.mjs';
import { UserSvcSetRolePermissionsRequest } from './userSvcSetRolePermissionsRequest.mjs';
import { UserSvcUpserPermissionRequest } from './userSvcUpserPermissionRequest.mjs';
import { UserSvcUser } from './userSvcUser.mjs';

/* tslint:disable:no-unused-variable */
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = {
    "DatastoreOp": DatastoreOp,
    "DeploySvcDeploymentStatus": DeploySvcDeploymentStatus,
    "DeploySvcStrategyType": DeploySvcStrategyType,
    "PolicySvcEntity": PolicySvcEntity,
    "PolicySvcScope": PolicySvcScope,
    "PolicySvcTemplateId": PolicySvcTemplateId,
    "PromptSvcPromptStatus": PromptSvcPromptStatus,
    "RegistrySvcInstanceStatus": RegistrySvcInstanceStatus,
    "RegistrySvcLanguage": RegistrySvcLanguage,
};
let typeMap = {
    "ChatSvcAddMessageRequest": ChatSvcAddMessageRequest,
    "ChatSvcAddThreadRequest": ChatSvcAddThreadRequest,
    "ChatSvcAddThreadResponse": ChatSvcAddThreadResponse,
    "ChatSvcAsset": ChatSvcAsset,
    "ChatSvcEventMessageAdded": ChatSvcEventMessageAdded,
    "ChatSvcEventThreadAdded": ChatSvcEventThreadAdded,
    "ChatSvcEventThreadUpdate": ChatSvcEventThreadUpdate,
    "ChatSvcGetMessagesResponse": ChatSvcGetMessagesResponse,
    "ChatSvcGetThreadResponse": ChatSvcGetThreadResponse,
    "ChatSvcGetThreadsResponse": ChatSvcGetThreadsResponse,
    "ChatSvcMessage": ChatSvcMessage,
    "ChatSvcThread": ChatSvcThread,
    "ChatSvcUpdateThreadRequest": ChatSvcUpdateThreadRequest,
    "ConfigSvcConfig": ConfigSvcConfig,
    "ConfigSvcGetConfigResponse": ConfigSvcGetConfigResponse,
    "ConfigSvcSaveConfigRequest": ConfigSvcSaveConfigRequest,
    "DatastoreFilter": DatastoreFilter,
    "DatastoreOrderBy": DatastoreOrderBy,
    "DatastoreQuery": DatastoreQuery,
    "DeploySvcAutoScalingConfig": DeploySvcAutoScalingConfig,
    "DeploySvcDeleteDeploymentRequest": DeploySvcDeleteDeploymentRequest,
    "DeploySvcDeployment": DeploySvcDeployment,
    "DeploySvcDeploymentStrategy": DeploySvcDeploymentStrategy,
    "DeploySvcErrorResponse": DeploySvcErrorResponse,
    "DeploySvcListDeploymentsResponse": DeploySvcListDeploymentsResponse,
    "DeploySvcResourceLimits": DeploySvcResourceLimits,
    "DeploySvcSaveDeploymentRequest": DeploySvcSaveDeploymentRequest,
    "DeploySvcTargetRegion": DeploySvcTargetRegion,
    "DockerSvcBuildImageRequest": DockerSvcBuildImageRequest,
    "DockerSvcContainerIsRunningResponse": DockerSvcContainerIsRunningResponse,
    "DockerSvcDockerInfo": DockerSvcDockerInfo,
    "DockerSvcErrorResponse": DockerSvcErrorResponse,
    "DockerSvcGetContainerSummaryResponse": DockerSvcGetContainerSummaryResponse,
    "DockerSvcGetDockerHostResponse": DockerSvcGetDockerHostResponse,
    "DockerSvcGetInfoResponse": DockerSvcGetInfoResponse,
    "DockerSvcRunContainerOptions": DockerSvcRunContainerOptions,
    "DockerSvcRunContainerRequest": DockerSvcRunContainerRequest,
    "DockerSvcRunContainerResponse": DockerSvcRunContainerResponse,
    "DockerSvcRunInfo": DockerSvcRunInfo,
    "DockerSvcStopContainerRequest": DockerSvcStopContainerRequest,
    "DownloadSvcDownloadDetails": DownloadSvcDownloadDetails,
    "DownloadSvcDownloadRequest": DownloadSvcDownloadRequest,
    "DownloadSvcDownloadsResponse": DownloadSvcDownloadsResponse,
    "DownloadSvcErrorResponse": DownloadSvcErrorResponse,
    "DownloadSvcGetDownloadResponse": DownloadSvcGetDownloadResponse,
    "DynamicSvcCreateObjectRequest": DynamicSvcCreateObjectRequest,
    "DynamicSvcCreateObjectResponse": DynamicSvcCreateObjectResponse,
    "DynamicSvcDeleteObjectRequest": DynamicSvcDeleteObjectRequest,
    "DynamicSvcErrorResponse": DynamicSvcErrorResponse,
    "DynamicSvcObject": DynamicSvcObject,
    "DynamicSvcObjectCreateFields": DynamicSvcObjectCreateFields,
    "DynamicSvcQueryRequest": DynamicSvcQueryRequest,
    "DynamicSvcQueryResponse": DynamicSvcQueryResponse,
    "DynamicSvcUpdateObjectRequest": DynamicSvcUpdateObjectRequest,
    "DynamicSvcUpsertObjectRequest": DynamicSvcUpsertObjectRequest,
    "DynamicSvcUpsertObjectResponse": DynamicSvcUpsertObjectResponse,
    "EmailSvcErrorResponse": EmailSvcErrorResponse,
    "EmailSvcFile": EmailSvcFile,
    "EmailSvcSendEmailRequest": EmailSvcSendEmailRequest,
    "EmailSvcSendEmailResponse": EmailSvcSendEmailResponse,
    "FirehoseSvcErrorResponse": FirehoseSvcErrorResponse,
    "FirehoseSvcEvent": FirehoseSvcEvent,
    "FirehoseSvcEventPublishRequest": FirehoseSvcEventPublishRequest,
    "ModelSvcArchitectures": ModelSvcArchitectures,
    "ModelSvcContainer": ModelSvcContainer,
    "ModelSvcErrorResponse": ModelSvcErrorResponse,
    "ModelSvcGetModelResponse": ModelSvcGetModelResponse,
    "ModelSvcListResponse": ModelSvcListResponse,
    "ModelSvcModel": ModelSvcModel,
    "ModelSvcModelStatus": ModelSvcModelStatus,
    "ModelSvcPlatform": ModelSvcPlatform,
    "ModelSvcStatusResponse": ModelSvcStatusResponse,
    "PolicySvcBlocklistParameters": PolicySvcBlocklistParameters,
    "PolicySvcCheckRequest": PolicySvcCheckRequest,
    "PolicySvcCheckResponse": PolicySvcCheckResponse,
    "PolicySvcErrorResponse": PolicySvcErrorResponse,
    "PolicySvcInstance": PolicySvcInstance,
    "PolicySvcRateLimitParameters": PolicySvcRateLimitParameters,
    "PolicySvcUpsertInstanceRequest": PolicySvcUpsertInstanceRequest,
    "PromptSvcAddPromptRequest": PromptSvcAddPromptRequest,
    "PromptSvcAddPromptResponse": PromptSvcAddPromptResponse,
    "PromptSvcErrorResponse": PromptSvcErrorResponse,
    "PromptSvcListPromptsRequest": PromptSvcListPromptsRequest,
    "PromptSvcListPromptsResponse": PromptSvcListPromptsResponse,
    "PromptSvcPrompt": PromptSvcPrompt,
    "PromptSvcRemovePromptRequest": PromptSvcRemovePromptRequest,
    "RegistrySvcAPISpec": RegistrySvcAPISpec,
    "RegistrySvcClient": RegistrySvcClient,
    "RegistrySvcDefinition": RegistrySvcDefinition,
    "RegistrySvcErrorResponse": RegistrySvcErrorResponse,
    "RegistrySvcGPU": RegistrySvcGPU,
    "RegistrySvcImageSpec": RegistrySvcImageSpec,
    "RegistrySvcInstance": RegistrySvcInstance,
    "RegistrySvcListDefinitionsResponse": RegistrySvcListDefinitionsResponse,
    "RegistrySvcListInstancesResponse": RegistrySvcListInstancesResponse,
    "RegistrySvcListNodesResponse": RegistrySvcListNodesResponse,
    "RegistrySvcNode": RegistrySvcNode,
    "RegistrySvcProcess": RegistrySvcProcess,
    "RegistrySvcRegisterInstanceRequest": RegistrySvcRegisterInstanceRequest,
    "RegistrySvcRepositorySpec": RegistrySvcRepositorySpec,
    "RegistrySvcResourceUsage": RegistrySvcResourceUsage,
    "RegistrySvcSaveDefinitionRequest": RegistrySvcSaveDefinitionRequest,
    "RegistrySvcUsage": RegistrySvcUsage,
    "SecretSvcDecryptValueRequest": SecretSvcDecryptValueRequest,
    "SecretSvcDecryptValueResponse": SecretSvcDecryptValueResponse,
    "SecretSvcEncryptValueRequest": SecretSvcEncryptValueRequest,
    "SecretSvcEncryptValueResponse": SecretSvcEncryptValueResponse,
    "SecretSvcListSecretsRequest": SecretSvcListSecretsRequest,
    "SecretSvcListSecretsResponse": SecretSvcListSecretsResponse,
    "SecretSvcRemoveSecretsRequest": SecretSvcRemoveSecretsRequest,
    "SecretSvcSaveSecretsRequest": SecretSvcSaveSecretsRequest,
    "SecretSvcSecret": SecretSvcSecret,
    "SourceSvcCheckoutRepoRequest": SourceSvcCheckoutRepoRequest,
    "SourceSvcCheckoutRepoResponse": SourceSvcCheckoutRepoResponse,
    "SourceSvcErrorResponse": SourceSvcErrorResponse,
    "UserSvcAddUserToOrganizationRequest": UserSvcAddUserToOrganizationRequest,
    "UserSvcAuthToken": UserSvcAuthToken,
    "UserSvcChangePasswordAdminRequest": UserSvcChangePasswordAdminRequest,
    "UserSvcChangePasswordRequest": UserSvcChangePasswordRequest,
    "UserSvcContact": UserSvcContact,
    "UserSvcCreateOrganizationRequest": UserSvcCreateOrganizationRequest,
    "UserSvcCreateRoleRequest": UserSvcCreateRoleRequest,
    "UserSvcCreateRoleResponse": UserSvcCreateRoleResponse,
    "UserSvcCreateUserRequest": UserSvcCreateUserRequest,
    "UserSvcErrorResponse": UserSvcErrorResponse,
    "UserSvcGetPermissionsResponse": UserSvcGetPermissionsResponse,
    "UserSvcGetPublicKeyResponse": UserSvcGetPublicKeyResponse,
    "UserSvcGetRolesResponse": UserSvcGetRolesResponse,
    "UserSvcGetUsersRequest": UserSvcGetUsersRequest,
    "UserSvcGetUsersResponse": UserSvcGetUsersResponse,
    "UserSvcIsAuthorizedRequest": UserSvcIsAuthorizedRequest,
    "UserSvcIsAuthorizedResponse": UserSvcIsAuthorizedResponse,
    "UserSvcLoginRequest": UserSvcLoginRequest,
    "UserSvcLoginResponse": UserSvcLoginResponse,
    "UserSvcOrganization": UserSvcOrganization,
    "UserSvcPermission": UserSvcPermission,
    "UserSvcReadUserByTokenResponse": UserSvcReadUserByTokenResponse,
    "UserSvcRegisterRequest": UserSvcRegisterRequest,
    "UserSvcRegisterResponse": UserSvcRegisterResponse,
    "UserSvcRole": UserSvcRole,
    "UserSvcSaveProfileRequest": UserSvcSaveProfileRequest,
    "UserSvcSetRolePermissionsRequest": UserSvcSetRolePermissionsRequest,
    "UserSvcUpserPermissionRequest": UserSvcUpserPermissionRequest,
    "UserSvcUser": UserSvcUser,
};
// Check if a string starts with another string without using es6 features
function startsWith(str, match) {
    return str.substring(0, match.length) === match;
}
// Check if a string ends with another string without using es6 features
function endsWith(str, match) {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}
const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (endsWith(type, nullableSuffix)) {
            let subType = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        }
        else if (endsWith(type, optionalSuffix)) {
            let subType = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        }
        else if (startsWith(type, arrayPrefix)) {
            let subType = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (startsWith(type, mapPrefix)) {
            let subType = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(data[key], subType);
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (endsWith(type, nullableSuffix)) {
            let subType = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        }
        else if (endsWith(type, optionalSuffix)) {
            let subType = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        }
        else if (startsWith(type, arrayPrefix)) {
            let subType = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (startsWith(type, mapPrefix)) {
            let subType = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(data[key], subType);
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
class HttpBearerAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
        // Do nothing
    }
}

export { ApiKeyAuth, ChatSvcAddMessageRequest, ChatSvcAddThreadRequest, ChatSvcAddThreadResponse, ChatSvcAsset, ChatSvcEventMessageAdded, ChatSvcEventThreadAdded, ChatSvcEventThreadUpdate, ChatSvcGetMessagesResponse, ChatSvcGetThreadResponse, ChatSvcGetThreadsResponse, ChatSvcMessage, ChatSvcThread, ChatSvcUpdateThreadRequest, ConfigSvcConfig, ConfigSvcGetConfigResponse, ConfigSvcSaveConfigRequest, DatastoreFilter, DatastoreOp, DatastoreOrderBy, DatastoreQuery, DeploySvcAutoScalingConfig, DeploySvcDeleteDeploymentRequest, DeploySvcDeployment, DeploySvcDeploymentStatus, DeploySvcDeploymentStrategy, DeploySvcErrorResponse, DeploySvcListDeploymentsResponse, DeploySvcResourceLimits, DeploySvcSaveDeploymentRequest, DeploySvcStrategyType, DeploySvcTargetRegion, DockerSvcBuildImageRequest, DockerSvcContainerIsRunningResponse, DockerSvcDockerInfo, DockerSvcErrorResponse, DockerSvcGetContainerSummaryResponse, DockerSvcGetDockerHostResponse, DockerSvcGetInfoResponse, DockerSvcRunContainerOptions, DockerSvcRunContainerRequest, DockerSvcRunContainerResponse, DockerSvcRunInfo, DockerSvcStopContainerRequest, DownloadSvcDownloadDetails, DownloadSvcDownloadRequest, DownloadSvcDownloadsResponse, DownloadSvcErrorResponse, DownloadSvcGetDownloadResponse, DynamicSvcCreateObjectRequest, DynamicSvcCreateObjectResponse, DynamicSvcDeleteObjectRequest, DynamicSvcErrorResponse, DynamicSvcObject, DynamicSvcObjectCreateFields, DynamicSvcQueryRequest, DynamicSvcQueryResponse, DynamicSvcUpdateObjectRequest, DynamicSvcUpsertObjectRequest, DynamicSvcUpsertObjectResponse, EmailSvcErrorResponse, EmailSvcFile, EmailSvcSendEmailRequest, EmailSvcSendEmailResponse, FirehoseSvcErrorResponse, FirehoseSvcEvent, FirehoseSvcEventPublishRequest, HttpBasicAuth, HttpBearerAuth, ModelSvcArchitectures, ModelSvcContainer, ModelSvcErrorResponse, ModelSvcGetModelResponse, ModelSvcListResponse, ModelSvcModel, ModelSvcModelStatus, ModelSvcPlatform, ModelSvcStatusResponse, OAuth, ObjectSerializer, PolicySvcBlocklistParameters, PolicySvcCheckRequest, PolicySvcCheckResponse, PolicySvcEntity, PolicySvcErrorResponse, PolicySvcInstance, PolicySvcRateLimitParameters, PolicySvcScope, PolicySvcTemplateId, PolicySvcUpsertInstanceRequest, PromptSvcAddPromptRequest, PromptSvcAddPromptResponse, PromptSvcErrorResponse, PromptSvcListPromptsRequest, PromptSvcListPromptsResponse, PromptSvcPrompt, PromptSvcPromptStatus, PromptSvcRemovePromptRequest, RegistrySvcAPISpec, RegistrySvcClient, RegistrySvcDefinition, RegistrySvcErrorResponse, RegistrySvcGPU, RegistrySvcImageSpec, RegistrySvcInstance, RegistrySvcInstanceStatus, RegistrySvcLanguage, RegistrySvcListDefinitionsResponse, RegistrySvcListInstancesResponse, RegistrySvcListNodesResponse, RegistrySvcNode, RegistrySvcProcess, RegistrySvcRegisterInstanceRequest, RegistrySvcRepositorySpec, RegistrySvcResourceUsage, RegistrySvcSaveDefinitionRequest, RegistrySvcUsage, SecretSvcDecryptValueRequest, SecretSvcDecryptValueResponse, SecretSvcEncryptValueRequest, SecretSvcEncryptValueResponse, SecretSvcListSecretsRequest, SecretSvcListSecretsResponse, SecretSvcRemoveSecretsRequest, SecretSvcSaveSecretsRequest, SecretSvcSecret, SourceSvcCheckoutRepoRequest, SourceSvcCheckoutRepoResponse, SourceSvcErrorResponse, UserSvcAddUserToOrganizationRequest, UserSvcAuthToken, UserSvcChangePasswordAdminRequest, UserSvcChangePasswordRequest, UserSvcContact, UserSvcCreateOrganizationRequest, UserSvcCreateRoleRequest, UserSvcCreateRoleResponse, UserSvcCreateUserRequest, UserSvcErrorResponse, UserSvcGetPermissionsResponse, UserSvcGetPublicKeyResponse, UserSvcGetRolesResponse, UserSvcGetUsersRequest, UserSvcGetUsersResponse, UserSvcIsAuthorizedRequest, UserSvcIsAuthorizedResponse, UserSvcLoginRequest, UserSvcLoginResponse, UserSvcOrganization, UserSvcPermission, UserSvcReadUserByTokenResponse, UserSvcRegisterRequest, UserSvcRegisterResponse, UserSvcRole, UserSvcSaveProfileRequest, UserSvcSetRolePermissionsRequest, UserSvcUpserPermissionRequest, UserSvcUser, VoidAuth };
