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
 *
 * @export
 * @interface ConfigSvcModelServiceConfig
 */
export interface ConfigSvcModelServiceConfig {
    /**
     *
     * @type {string}
     * @memberof ConfigSvcModelServiceConfig
     */
    currentModelId?: string;
}
/**
 * Check if a given object implements the ConfigSvcModelServiceConfig interface.
 */
export declare function instanceOfConfigSvcModelServiceConfig(value: object): value is ConfigSvcModelServiceConfig;
export declare function ConfigSvcModelServiceConfigFromJSON(json: any): ConfigSvcModelServiceConfig;
export declare function ConfigSvcModelServiceConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigSvcModelServiceConfig;
export declare function ConfigSvcModelServiceConfigToJSON(value?: ConfigSvcModelServiceConfig | null): any;