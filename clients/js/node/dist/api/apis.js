export * from './chatSvcApi';
import { ChatSvcApi } from './chatSvcApi';
export * from './configSvcApi';
import { ConfigSvcApi } from './configSvcApi';
export * from './dockerSvcApi';
import { DockerSvcApi } from './dockerSvcApi';
export * from './downloadSvcApi';
import { DownloadSvcApi } from './downloadSvcApi';
export * from './dynamicSvcApi';
import { DynamicSvcApi } from './dynamicSvcApi';
export * from './firehoseSvcApi';
import { FirehoseSvcApi } from './firehoseSvcApi';
export * from './modelSvcApi';
import { ModelSvcApi } from './modelSvcApi';
export * from './nodeSvcApi';
import { NodeSvcApi } from './nodeSvcApi';
export * from './policySvcApi';
import { PolicySvcApi } from './policySvcApi';
export * from './promptSvcApi';
import { PromptSvcApi } from './promptSvcApi';
export * from './userSvcApi';
import { UserSvcApi } from './userSvcApi';
export class HttpError extends Error {
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
export const APIS = [ChatSvcApi, ConfigSvcApi, DockerSvcApi, DownloadSvcApi, DynamicSvcApi, FirehoseSvcApi, ModelSvcApi, NodeSvcApi, PolicySvcApi, PromptSvcApi, UserSvcApi];