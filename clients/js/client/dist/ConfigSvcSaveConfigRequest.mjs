import { ConfigSvcConfigFromJSON, ConfigSvcConfigToJSON } from './ConfigSvcConfig.mjs';
import './ConfigSvcAppServiceConfig.mjs';
import './ConfigSvcModelServiceConfig.mjs';
import './ConfigSvcDownloadServiceConfig.mjs';

/* tslint:disable */
/* eslint-disable */
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
/**
 * Check if a given object implements the ConfigSvcSaveConfigRequest interface.
 */
function instanceOfConfigSvcSaveConfigRequest(value) {
    return true;
}
function ConfigSvcSaveConfigRequestFromJSON(json) {
    return ConfigSvcSaveConfigRequestFromJSONTyped(json);
}
function ConfigSvcSaveConfigRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'config': json['config'] == null ? undefined : ConfigSvcConfigFromJSON(json['config']),
    };
}
function ConfigSvcSaveConfigRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'config': ConfigSvcConfigToJSON(value['config']),
    };
}

export { ConfigSvcSaveConfigRequestFromJSON, ConfigSvcSaveConfigRequestFromJSONTyped, ConfigSvcSaveConfigRequestToJSON, instanceOfConfigSvcSaveConfigRequest };