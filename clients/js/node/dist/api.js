'use strict';

var chatSvcApi = require('./apis.js');
var models = require('./models.js');
var chatSvcAddMessageRequest = require('./chatSvcAddMessageRequest.js');
var chatSvcAddThreadRequest = require('./chatSvcAddThreadRequest.js');
var chatSvcAddThreadResponse = require('./chatSvcAddThreadResponse.js');
var chatSvcAsset = require('./chatSvcAsset.js');
var chatSvcGetMessagesResponse = require('./chatSvcGetMessagesResponse.js');
var chatSvcGetThreadResponse = require('./chatSvcGetThreadResponse.js');
var chatSvcGetThreadsResponse = require('./chatSvcGetThreadsResponse.js');
var chatSvcMessage = require('./chatSvcMessage.js');
var chatSvcThread = require('./chatSvcThread.js');
var chatSvcUpdateThreadRequest = require('./chatSvcUpdateThreadRequest.js');
var configSvcAppServiceConfig = require('./configSvcAppServiceConfig.js');
var configSvcConfig = require('./configSvcConfig.js');
var configSvcDownloadServiceConfig = require('./configSvcDownloadServiceConfig.js');
var configSvcGetConfigResponse = require('./configSvcGetConfigResponse.js');
var configSvcModelServiceConfig = require('./configSvcModelServiceConfig.js');
var configSvcSaveConfigRequest = require('./configSvcSaveConfigRequest.js');
var datastoreCondition = require('./datastoreCondition.js');
var datastoreContainsCondition = require('./datastoreContainsCondition.js');
var datastoreEqualCondition = require('./datastoreEqualCondition.js');
var datastoreFieldSelector = require('./datastoreFieldSelector.js');
var datastoreOrderBy = require('./datastoreOrderBy.js');
var datastoreQuery = require('./datastoreQuery.js');
var datastoreStartsWithCondition = require('./datastoreStartsWithCondition.js');
var dockerSvcContainerIsRunningResponse = require('./dockerSvcContainerIsRunningResponse.js');
var dockerSvcDockerInfo = require('./dockerSvcDockerInfo.js');
var dockerSvcErrorResponse = require('./dockerSvcErrorResponse.js');
var dockerSvcGetContainerSummaryResponse = require('./dockerSvcGetContainerSummaryResponse.js');
var dockerSvcGetDockerHostResponse = require('./dockerSvcGetDockerHostResponse.js');
var dockerSvcGetInfoResponse = require('./dockerSvcGetInfoResponse.js');
var dockerSvcLaunchContainerOptions = require('./dockerSvcLaunchContainerOptions.js');
var dockerSvcLaunchContainerRequest = require('./dockerSvcLaunchContainerRequest.js');
var dockerSvcLaunchContainerResponse = require('./dockerSvcLaunchContainerResponse.js');
var dockerSvcLaunchInfo = require('./dockerSvcLaunchInfo.js');
var downloadSvcDownloadDetails = require('./downloadSvcDownloadDetails.js');
var downloadSvcDownloadRequest = require('./downloadSvcDownloadRequest.js');
var downloadSvcDownloadsResponse = require('./downloadSvcDownloadsResponse.js');
var downloadSvcErrorResponse = require('./downloadSvcErrorResponse.js');
var downloadSvcGetDownloadResponse = require('./downloadSvcGetDownloadResponse.js');
var dynamicSvcCreateObjectRequest = require('./dynamicSvcCreateObjectRequest.js');
var dynamicSvcCreateObjectResponse = require('./dynamicSvcCreateObjectResponse.js');
var dynamicSvcDeleteObjectRequest = require('./dynamicSvcDeleteObjectRequest.js');
var dynamicSvcErrorResponse = require('./dynamicSvcErrorResponse.js');
var dynamicSvcGenericObject = require('./dynamicSvcGenericObject.js');
var dynamicSvcGenericObjectCreateFields = require('./dynamicSvcGenericObjectCreateFields.js');
var dynamicSvcQueryRequest = require('./dynamicSvcQueryRequest.js');
var dynamicSvcQueryResponse = require('./dynamicSvcQueryResponse.js');
var dynamicSvcUpdateObjectRequest = require('./dynamicSvcUpdateObjectRequest.js');
var dynamicSvcUpsertObjectRequest = require('./dynamicSvcUpsertObjectRequest.js');
var dynamicSvcUpsertObjectResponse = require('./dynamicSvcUpsertObjectResponse.js');
var firehoseSvcErrorResponse = require('./firehoseSvcErrorResponse.js');
var firehoseSvcEvent = require('./firehoseSvcEvent.js');
var firehoseSvcPublishRequest = require('./firehoseSvcPublishRequest.js');
var modelSvcArchitectures = require('./modelSvcArchitectures.js');
var modelSvcContainer = require('./modelSvcContainer.js');
var modelSvcErrorResponse = require('./modelSvcErrorResponse.js');
var modelSvcGetModelResponse = require('./modelSvcGetModelResponse.js');
var modelSvcListResponse = require('./modelSvcListResponse.js');
var modelSvcModel = require('./modelSvcModel.js');
var modelSvcModelStatus = require('./modelSvcModelStatus.js');
var modelSvcPlatform = require('./modelSvcPlatform.js');
var modelSvcStatusResponse = require('./modelSvcStatusResponse.js');
var nodeSvcErrorResponse = require('./nodeSvcErrorResponse.js');
var nodeSvcGPU = require('./nodeSvcGPU.js');
var nodeSvcListNodesResponse = require('./nodeSvcListNodesResponse.js');
var nodeSvcNode = require('./nodeSvcNode.js');
var nodeSvcProcess = require('./nodeSvcProcess.js');
var policySvcBlocklistParameters = require('./policySvcBlocklistParameters.js');
var policySvcCheckRequest = require('./policySvcCheckRequest.js');
var policySvcCheckResponse = require('./policySvcCheckResponse.js');
var policySvcEntity = require('./policySvcEntity.js');
var policySvcErrorResponse = require('./policySvcErrorResponse.js');
var policySvcInstance = require('./policySvcInstance.js');
var policySvcRateLimitParameters = require('./policySvcRateLimitParameters.js');
var policySvcScope = require('./policySvcScope.js');
var policySvcTemplateId = require('./policySvcTemplateId.js');
var policySvcUpsertInstanceRequest = require('./policySvcUpsertInstanceRequest.js');
var promptSvcAddPromptRequest = require('./promptSvcAddPromptRequest.js');
var promptSvcAddPromptResponse = require('./promptSvcAddPromptResponse.js');
var promptSvcErrorResponse = require('./promptSvcErrorResponse.js');
var promptSvcListPromptsRequest = require('./promptSvcListPromptsRequest.js');
var promptSvcListPromptsResponse = require('./promptSvcListPromptsResponse.js');
var promptSvcPrompt = require('./promptSvcPrompt.js');
var promptSvcPromptStatus = require('./promptSvcPromptStatus.js');
var promptSvcRemovePromptRequest = require('./promptSvcRemovePromptRequest.js');
var userSvcAddUserToOrganizationRequest = require('./userSvcAddUserToOrganizationRequest.js');
var userSvcAuthToken = require('./userSvcAuthToken.js');
var userSvcChangePasswordAdminRequest = require('./userSvcChangePasswordAdminRequest.js');
var userSvcChangePasswordRequest = require('./userSvcChangePasswordRequest.js');
var userSvcContact = require('./userSvcContact.js');
var userSvcCreateOrganizationRequest = require('./userSvcCreateOrganizationRequest.js');
var userSvcCreateRoleRequest = require('./userSvcCreateRoleRequest.js');
var userSvcCreateRoleResponse = require('./userSvcCreateRoleResponse.js');
var userSvcCreateUserRequest = require('./userSvcCreateUserRequest.js');
var userSvcErrorResponse = require('./userSvcErrorResponse.js');
var userSvcGetPermissionsResponse = require('./userSvcGetPermissionsResponse.js');
var userSvcGetPublicKeyResponse = require('./userSvcGetPublicKeyResponse.js');
var userSvcGetRolesResponse = require('./userSvcGetRolesResponse.js');
var userSvcGetUsersRequest = require('./userSvcGetUsersRequest.js');
var userSvcGetUsersResponse = require('./userSvcGetUsersResponse.js');
var userSvcIsAuthorizedRequest = require('./userSvcIsAuthorizedRequest.js');
var userSvcIsAuthorizedResponse = require('./userSvcIsAuthorizedResponse.js');
var userSvcLoginRequest = require('./userSvcLoginRequest.js');
var userSvcLoginResponse = require('./userSvcLoginResponse.js');
var userSvcPermission = require('./userSvcPermission.js');
var userSvcReadUserByTokenRequest = require('./userSvcReadUserByTokenRequest.js');
var userSvcReadUserByTokenResponse = require('./userSvcReadUserByTokenResponse.js');
var userSvcRegisterRequest = require('./userSvcRegisterRequest.js');
var userSvcRole = require('./userSvcRole.js');
var userSvcSaveProfileRequest = require('./userSvcSaveProfileRequest.js');
var userSvcSetRolePermissionsRequest = require('./userSvcSetRolePermissionsRequest.js');
var userSvcUpserPermissionRequest = require('./userSvcUpserPermissionRequest.js');
var userSvcUser = require('./userSvcUser.js');
require('net');
require('url');
require('util');
require('punycode');
require('crypto');
require('buffer');
require('http');
require('https');
require('stream');
require('zlib');
require('querystring');
require('assert');
require('path');
require('tls');
require('fs');
require('events');



exports.APIS = chatSvcApi.APIS;
exports.ChatSvcApi = chatSvcApi.ChatSvcApi;
Object.defineProperty(exports, 'ChatSvcApiApiKeys', {
	enumerable: true,
	get: function () { return chatSvcApi.ChatSvcApiApiKeys; }
});
exports.ConfigSvcApi = chatSvcApi.ConfigSvcApi;
Object.defineProperty(exports, 'ConfigSvcApiApiKeys', {
	enumerable: true,
	get: function () { return chatSvcApi.ConfigSvcApiApiKeys; }
});
exports.DockerSvcApi = chatSvcApi.DockerSvcApi;
Object.defineProperty(exports, 'DockerSvcApiApiKeys', {
	enumerable: true,
	get: function () { return chatSvcApi.DockerSvcApiApiKeys; }
});
exports.DownloadSvcApi = chatSvcApi.DownloadSvcApi;
Object.defineProperty(exports, 'DownloadSvcApiApiKeys', {
	enumerable: true,
	get: function () { return chatSvcApi.DownloadSvcApiApiKeys; }
});
exports.DynamicSvcApi = chatSvcApi.DynamicSvcApi;
Object.defineProperty(exports, 'DynamicSvcApiApiKeys', {
	enumerable: true,
	get: function () { return chatSvcApi.DynamicSvcApiApiKeys; }
});
exports.FirehoseSvcApi = chatSvcApi.FirehoseSvcApi;
Object.defineProperty(exports, 'FirehoseSvcApiApiKeys', {
	enumerable: true,
	get: function () { return chatSvcApi.FirehoseSvcApiApiKeys; }
});
exports.HttpError = chatSvcApi.HttpError;
exports.ModelSvcApi = chatSvcApi.ModelSvcApi;
Object.defineProperty(exports, 'ModelSvcApiApiKeys', {
	enumerable: true,
	get: function () { return chatSvcApi.ModelSvcApiApiKeys; }
});
exports.NodeSvcApi = chatSvcApi.NodeSvcApi;
Object.defineProperty(exports, 'NodeSvcApiApiKeys', {
	enumerable: true,
	get: function () { return chatSvcApi.NodeSvcApiApiKeys; }
});
exports.PolicySvcApi = chatSvcApi.PolicySvcApi;
Object.defineProperty(exports, 'PolicySvcApiApiKeys', {
	enumerable: true,
	get: function () { return chatSvcApi.PolicySvcApiApiKeys; }
});
exports.PromptSvcApi = chatSvcApi.PromptSvcApi;
Object.defineProperty(exports, 'PromptSvcApiApiKeys', {
	enumerable: true,
	get: function () { return chatSvcApi.PromptSvcApiApiKeys; }
});
exports.UserSvcApi = chatSvcApi.UserSvcApi;
Object.defineProperty(exports, 'UserSvcApiApiKeys', {
	enumerable: true,
	get: function () { return chatSvcApi.UserSvcApiApiKeys; }
});
exports.ApiKeyAuth = models.ApiKeyAuth;
exports.HttpBasicAuth = models.HttpBasicAuth;
exports.HttpBearerAuth = models.HttpBearerAuth;
exports.OAuth = models.OAuth;
exports.ObjectSerializer = models.ObjectSerializer;
exports.VoidAuth = models.VoidAuth;
exports.ChatSvcAddMessageRequest = chatSvcAddMessageRequest.ChatSvcAddMessageRequest;
exports.ChatSvcAddThreadRequest = chatSvcAddThreadRequest.ChatSvcAddThreadRequest;
exports.ChatSvcAddThreadResponse = chatSvcAddThreadResponse.ChatSvcAddThreadResponse;
exports.ChatSvcAsset = chatSvcAsset.ChatSvcAsset;
exports.ChatSvcGetMessagesResponse = chatSvcGetMessagesResponse.ChatSvcGetMessagesResponse;
exports.ChatSvcGetThreadResponse = chatSvcGetThreadResponse.ChatSvcGetThreadResponse;
exports.ChatSvcGetThreadsResponse = chatSvcGetThreadsResponse.ChatSvcGetThreadsResponse;
exports.ChatSvcMessage = chatSvcMessage.ChatSvcMessage;
exports.ChatSvcThread = chatSvcThread.ChatSvcThread;
exports.ChatSvcUpdateThreadRequest = chatSvcUpdateThreadRequest.ChatSvcUpdateThreadRequest;
exports.ConfigSvcAppServiceConfig = configSvcAppServiceConfig.ConfigSvcAppServiceConfig;
exports.ConfigSvcConfig = configSvcConfig.ConfigSvcConfig;
exports.ConfigSvcDownloadServiceConfig = configSvcDownloadServiceConfig.ConfigSvcDownloadServiceConfig;
exports.ConfigSvcGetConfigResponse = configSvcGetConfigResponse.ConfigSvcGetConfigResponse;
exports.ConfigSvcModelServiceConfig = configSvcModelServiceConfig.ConfigSvcModelServiceConfig;
exports.ConfigSvcSaveConfigRequest = configSvcSaveConfigRequest.ConfigSvcSaveConfigRequest;
exports.DatastoreCondition = datastoreCondition.DatastoreCondition;
exports.DatastoreContainsCondition = datastoreContainsCondition.DatastoreContainsCondition;
exports.DatastoreEqualCondition = datastoreEqualCondition.DatastoreEqualCondition;
exports.DatastoreFieldSelector = datastoreFieldSelector.DatastoreFieldSelector;
exports.DatastoreOrderBy = datastoreOrderBy.DatastoreOrderBy;
exports.DatastoreQuery = datastoreQuery.DatastoreQuery;
exports.DatastoreStartsWithCondition = datastoreStartsWithCondition.DatastoreStartsWithCondition;
exports.DockerSvcContainerIsRunningResponse = dockerSvcContainerIsRunningResponse.DockerSvcContainerIsRunningResponse;
exports.DockerSvcDockerInfo = dockerSvcDockerInfo.DockerSvcDockerInfo;
exports.DockerSvcErrorResponse = dockerSvcErrorResponse.DockerSvcErrorResponse;
exports.DockerSvcGetContainerSummaryResponse = dockerSvcGetContainerSummaryResponse.DockerSvcGetContainerSummaryResponse;
exports.DockerSvcGetDockerHostResponse = dockerSvcGetDockerHostResponse.DockerSvcGetDockerHostResponse;
exports.DockerSvcGetInfoResponse = dockerSvcGetInfoResponse.DockerSvcGetInfoResponse;
exports.DockerSvcLaunchContainerOptions = dockerSvcLaunchContainerOptions.DockerSvcLaunchContainerOptions;
exports.DockerSvcLaunchContainerRequest = dockerSvcLaunchContainerRequest.DockerSvcLaunchContainerRequest;
exports.DockerSvcLaunchContainerResponse = dockerSvcLaunchContainerResponse.DockerSvcLaunchContainerResponse;
exports.DockerSvcLaunchInfo = dockerSvcLaunchInfo.DockerSvcLaunchInfo;
exports.DownloadSvcDownloadDetails = downloadSvcDownloadDetails.DownloadSvcDownloadDetails;
exports.DownloadSvcDownloadRequest = downloadSvcDownloadRequest.DownloadSvcDownloadRequest;
exports.DownloadSvcDownloadsResponse = downloadSvcDownloadsResponse.DownloadSvcDownloadsResponse;
exports.DownloadSvcErrorResponse = downloadSvcErrorResponse.DownloadSvcErrorResponse;
exports.DownloadSvcGetDownloadResponse = downloadSvcGetDownloadResponse.DownloadSvcGetDownloadResponse;
exports.DynamicSvcCreateObjectRequest = dynamicSvcCreateObjectRequest.DynamicSvcCreateObjectRequest;
exports.DynamicSvcCreateObjectResponse = dynamicSvcCreateObjectResponse.DynamicSvcCreateObjectResponse;
exports.DynamicSvcDeleteObjectRequest = dynamicSvcDeleteObjectRequest.DynamicSvcDeleteObjectRequest;
exports.DynamicSvcErrorResponse = dynamicSvcErrorResponse.DynamicSvcErrorResponse;
exports.DynamicSvcGenericObject = dynamicSvcGenericObject.DynamicSvcGenericObject;
exports.DynamicSvcGenericObjectCreateFields = dynamicSvcGenericObjectCreateFields.DynamicSvcGenericObjectCreateFields;
exports.DynamicSvcQueryRequest = dynamicSvcQueryRequest.DynamicSvcQueryRequest;
exports.DynamicSvcQueryResponse = dynamicSvcQueryResponse.DynamicSvcQueryResponse;
exports.DynamicSvcUpdateObjectRequest = dynamicSvcUpdateObjectRequest.DynamicSvcUpdateObjectRequest;
exports.DynamicSvcUpsertObjectRequest = dynamicSvcUpsertObjectRequest.DynamicSvcUpsertObjectRequest;
exports.DynamicSvcUpsertObjectResponse = dynamicSvcUpsertObjectResponse.DynamicSvcUpsertObjectResponse;
exports.FirehoseSvcErrorResponse = firehoseSvcErrorResponse.FirehoseSvcErrorResponse;
exports.FirehoseSvcEvent = firehoseSvcEvent.FirehoseSvcEvent;
exports.FirehoseSvcPublishRequest = firehoseSvcPublishRequest.FirehoseSvcPublishRequest;
exports.ModelSvcArchitectures = modelSvcArchitectures.ModelSvcArchitectures;
exports.ModelSvcContainer = modelSvcContainer.ModelSvcContainer;
exports.ModelSvcErrorResponse = modelSvcErrorResponse.ModelSvcErrorResponse;
exports.ModelSvcGetModelResponse = modelSvcGetModelResponse.ModelSvcGetModelResponse;
exports.ModelSvcListResponse = modelSvcListResponse.ModelSvcListResponse;
exports.ModelSvcModel = modelSvcModel.ModelSvcModel;
exports.ModelSvcModelStatus = modelSvcModelStatus.ModelSvcModelStatus;
exports.ModelSvcPlatform = modelSvcPlatform.ModelSvcPlatform;
exports.ModelSvcStatusResponse = modelSvcStatusResponse.ModelSvcStatusResponse;
exports.NodeSvcErrorResponse = nodeSvcErrorResponse.NodeSvcErrorResponse;
exports.NodeSvcGPU = nodeSvcGPU.NodeSvcGPU;
exports.NodeSvcListNodesResponse = nodeSvcListNodesResponse.NodeSvcListNodesResponse;
exports.NodeSvcNode = nodeSvcNode.NodeSvcNode;
exports.NodeSvcProcess = nodeSvcProcess.NodeSvcProcess;
exports.PolicySvcBlocklistParameters = policySvcBlocklistParameters.PolicySvcBlocklistParameters;
exports.PolicySvcCheckRequest = policySvcCheckRequest.PolicySvcCheckRequest;
exports.PolicySvcCheckResponse = policySvcCheckResponse.PolicySvcCheckResponse;
Object.defineProperty(exports, 'PolicySvcEntity', {
	enumerable: true,
	get: function () { return policySvcEntity.PolicySvcEntity; }
});
exports.PolicySvcErrorResponse = policySvcErrorResponse.PolicySvcErrorResponse;
exports.PolicySvcInstance = policySvcInstance.PolicySvcInstance;
exports.PolicySvcRateLimitParameters = policySvcRateLimitParameters.PolicySvcRateLimitParameters;
Object.defineProperty(exports, 'PolicySvcScope', {
	enumerable: true,
	get: function () { return policySvcScope.PolicySvcScope; }
});
Object.defineProperty(exports, 'PolicySvcTemplateId', {
	enumerable: true,
	get: function () { return policySvcTemplateId.PolicySvcTemplateId; }
});
exports.PolicySvcUpsertInstanceRequest = policySvcUpsertInstanceRequest.PolicySvcUpsertInstanceRequest;
exports.PromptSvcAddPromptRequest = promptSvcAddPromptRequest.PromptSvcAddPromptRequest;
exports.PromptSvcAddPromptResponse = promptSvcAddPromptResponse.PromptSvcAddPromptResponse;
exports.PromptSvcErrorResponse = promptSvcErrorResponse.PromptSvcErrorResponse;
exports.PromptSvcListPromptsRequest = promptSvcListPromptsRequest.PromptSvcListPromptsRequest;
exports.PromptSvcListPromptsResponse = promptSvcListPromptsResponse.PromptSvcListPromptsResponse;
exports.PromptSvcPrompt = promptSvcPrompt.PromptSvcPrompt;
Object.defineProperty(exports, 'PromptSvcPromptStatus', {
	enumerable: true,
	get: function () { return promptSvcPromptStatus.PromptSvcPromptStatus; }
});
exports.PromptSvcRemovePromptRequest = promptSvcRemovePromptRequest.PromptSvcRemovePromptRequest;
exports.UserSvcAddUserToOrganizationRequest = userSvcAddUserToOrganizationRequest.UserSvcAddUserToOrganizationRequest;
exports.UserSvcAuthToken = userSvcAuthToken.UserSvcAuthToken;
exports.UserSvcChangePasswordAdminRequest = userSvcChangePasswordAdminRequest.UserSvcChangePasswordAdminRequest;
exports.UserSvcChangePasswordRequest = userSvcChangePasswordRequest.UserSvcChangePasswordRequest;
exports.UserSvcContact = userSvcContact.UserSvcContact;
exports.UserSvcCreateOrganizationRequest = userSvcCreateOrganizationRequest.UserSvcCreateOrganizationRequest;
exports.UserSvcCreateRoleRequest = userSvcCreateRoleRequest.UserSvcCreateRoleRequest;
exports.UserSvcCreateRoleResponse = userSvcCreateRoleResponse.UserSvcCreateRoleResponse;
exports.UserSvcCreateUserRequest = userSvcCreateUserRequest.UserSvcCreateUserRequest;
exports.UserSvcErrorResponse = userSvcErrorResponse.UserSvcErrorResponse;
exports.UserSvcGetPermissionsResponse = userSvcGetPermissionsResponse.UserSvcGetPermissionsResponse;
exports.UserSvcGetPublicKeyResponse = userSvcGetPublicKeyResponse.UserSvcGetPublicKeyResponse;
exports.UserSvcGetRolesResponse = userSvcGetRolesResponse.UserSvcGetRolesResponse;
exports.UserSvcGetUsersRequest = userSvcGetUsersRequest.UserSvcGetUsersRequest;
exports.UserSvcGetUsersResponse = userSvcGetUsersResponse.UserSvcGetUsersResponse;
exports.UserSvcIsAuthorizedRequest = userSvcIsAuthorizedRequest.UserSvcIsAuthorizedRequest;
exports.UserSvcIsAuthorizedResponse = userSvcIsAuthorizedResponse.UserSvcIsAuthorizedResponse;
exports.UserSvcLoginRequest = userSvcLoginRequest.UserSvcLoginRequest;
exports.UserSvcLoginResponse = userSvcLoginResponse.UserSvcLoginResponse;
exports.UserSvcPermission = userSvcPermission.UserSvcPermission;
exports.UserSvcReadUserByTokenRequest = userSvcReadUserByTokenRequest.UserSvcReadUserByTokenRequest;
exports.UserSvcReadUserByTokenResponse = userSvcReadUserByTokenResponse.UserSvcReadUserByTokenResponse;
exports.UserSvcRegisterRequest = userSvcRegisterRequest.UserSvcRegisterRequest;
exports.UserSvcRole = userSvcRole.UserSvcRole;
exports.UserSvcSaveProfileRequest = userSvcSaveProfileRequest.UserSvcSaveProfileRequest;
exports.UserSvcSetRolePermissionsRequest = userSvcSetRolePermissionsRequest.UserSvcSetRolePermissionsRequest;
exports.UserSvcUpserPermissionRequest = userSvcUpserPermissionRequest.UserSvcUpserPermissionRequest;
exports.UserSvcUser = userSvcUser.UserSvcUser;