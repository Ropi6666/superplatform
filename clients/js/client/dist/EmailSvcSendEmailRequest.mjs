import { EmailSvcFileFromJSON, EmailSvcFileToJSON } from './EmailSvcFile.mjs';

/* tslint:disable */
/* eslint-disable */
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
/**
 * Check if a given object implements the EmailSvcSendEmailRequest interface.
 */
function instanceOfEmailSvcSendEmailRequest(value) {
    if (!('body' in value) || value['body'] === undefined)
        return false;
    if (!('contentType' in value) || value['contentType'] === undefined)
        return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    if (!('subject' in value) || value['subject'] === undefined)
        return false;
    if (!('to' in value) || value['to'] === undefined)
        return false;
    return true;
}
function EmailSvcSendEmailRequestFromJSON(json) {
    return EmailSvcSendEmailRequestFromJSONTyped(json);
}
function EmailSvcSendEmailRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'attachments': json['attachments'] == null ? undefined : (json['attachments'].map(EmailSvcFileFromJSON)),
        'bcc': json['bcc'] == null ? undefined : json['bcc'],
        'body': json['body'],
        'cc': json['cc'] == null ? undefined : json['cc'],
        'contentType': json['contentType'],
        'createdAt': json['createdAt'],
        'id': json['id'] == null ? undefined : json['id'],
        'subject': json['subject'],
        'to': json['to'],
    };
}
function EmailSvcSendEmailRequestToJSON(json) {
    return EmailSvcSendEmailRequestToJSONTyped(json, false);
}
function EmailSvcSendEmailRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'attachments': value['attachments'] == null ? undefined : (value['attachments'].map(EmailSvcFileToJSON)),
        'bcc': value['bcc'],
        'body': value['body'],
        'cc': value['cc'],
        'contentType': value['contentType'],
        'createdAt': value['createdAt'],
        'id': value['id'],
        'subject': value['subject'],
        'to': value['to'],
    };
}

export { EmailSvcSendEmailRequestFromJSON, EmailSvcSendEmailRequestFromJSONTyped, EmailSvcSendEmailRequestToJSON, EmailSvcSendEmailRequestToJSONTyped, instanceOfEmailSvcSendEmailRequest };