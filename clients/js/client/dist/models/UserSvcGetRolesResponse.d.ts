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
import type { UserSvcRole } from './UserSvcRole';
/**
 *
 * @export
 * @interface UserSvcGetRolesResponse
 */
export interface UserSvcGetRolesResponse {
    /**
     *
     * @type {Array<UserSvcRole>}
     * @memberof UserSvcGetRolesResponse
     */
    roles?: Array<UserSvcRole>;
}
/**
 * Check if a given object implements the UserSvcGetRolesResponse interface.
 */
export declare function instanceOfUserSvcGetRolesResponse(value: object): value is UserSvcGetRolesResponse;
export declare function UserSvcGetRolesResponseFromJSON(json: any): UserSvcGetRolesResponse;
export declare function UserSvcGetRolesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSvcGetRolesResponse;
export declare function UserSvcGetRolesResponseToJSON(value?: UserSvcGetRolesResponse | null): any;