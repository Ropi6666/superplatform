/* tslint:disable */
/* eslint-disable */
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


/**
 * 
 * @export
 */
export const DeploySvcStrategyType = {
    StrategyRollingUpdate: 'RollingUpdate',
    StrategyRecreate: 'Recreate'
} as const;
export type DeploySvcStrategyType = typeof DeploySvcStrategyType[keyof typeof DeploySvcStrategyType];


export function instanceOfDeploySvcStrategyType(value: any): boolean {
    for (const key in DeploySvcStrategyType) {
        if (Object.prototype.hasOwnProperty.call(DeploySvcStrategyType, key)) {
            if (DeploySvcStrategyType[key as keyof typeof DeploySvcStrategyType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DeploySvcStrategyTypeFromJSON(json: any): DeploySvcStrategyType {
    return DeploySvcStrategyTypeFromJSONTyped(json, false);
}

export function DeploySvcStrategyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeploySvcStrategyType {
    return json as DeploySvcStrategyType;
}

export function DeploySvcStrategyTypeToJSON(value?: DeploySvcStrategyType | null): any {
    return value as any;
}
