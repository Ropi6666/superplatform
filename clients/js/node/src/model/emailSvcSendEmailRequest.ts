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

import { RequestFile } from './models';
import { EmailSvcFile } from './emailSvcFile';

export class EmailSvcSendEmailRequest {
    /**
    * List of file attachments (optional)
    */
    'attachments'?: Array<EmailSvcFile>;
    /**
    * List of BCC recipient email addresses (optional)
    */
    'bcc'?: Array<string>;
    /**
    * Email body content (plain text or HTML)
    */
    'body': string;
    /**
    * List of CC recipient email addresses (optional)
    */
    'cc'?: Array<string>;
    /**
    * Content type: \"text/plain\" or \"text/html\"
    */
    'contentType': string;
    /**
    * Timestamp of email creation
    */
    'createdAt': string;
    /**
    * Unique identifier
    */
    'id'?: string;
    /**
    * Email subject line
    */
    'subject': string;
    /**
    * List of recipient email addresses
    */
    'to': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<EmailSvcFile>"
        },
        {
            "name": "bcc",
            "baseName": "bcc",
            "type": "Array<string>"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "cc",
            "baseName": "cc",
            "type": "Array<string>"
        },
        {
            "name": "contentType",
            "baseName": "contentType",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return EmailSvcSendEmailRequest.attributeTypeMap;
    }
}
