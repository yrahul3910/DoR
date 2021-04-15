/* tslint:disable */
/* eslint-disable */
/**
 * ORCID Public
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: Latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CreatedDateV20,
    CreatedDateV20FromJSON,
    CreatedDateV20FromJSONTyped,
    CreatedDateV20ToJSON,
    LastModifiedDateV20,
    LastModifiedDateV20FromJSON,
    LastModifiedDateV20FromJSONTyped,
    LastModifiedDateV20ToJSON,
} from './';

/**
 * 
 * @export
 * @interface BiographyV20
 */
export interface BiographyV20 {
    /**
     * 
     * @type {CreatedDateV20}
     * @memberof BiographyV20
     */
    createdDate?: CreatedDateV20;
    /**
     * 
     * @type {LastModifiedDateV20}
     * @memberof BiographyV20
     */
    lastModifiedDate?: LastModifiedDateV20;
    /**
     * 
     * @type {string}
     * @memberof BiographyV20
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof BiographyV20
     */
    visibility?: BiographyV20VisibilityEnum;
    /**
     * 
     * @type {string}
     * @memberof BiographyV20
     */
    path?: string;
}

/**
* @export
* @enum {string}
*/
export enum BiographyV20VisibilityEnum {
    Limited = 'LIMITED',
    RegisteredOnly = 'REGISTERED_ONLY',
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export function BiographyV20FromJSON(json: any): BiographyV20 {
    return BiographyV20FromJSONTyped(json, false);
}

export function BiographyV20FromJSONTyped(json: any, ignoreDiscriminator: boolean): BiographyV20 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV20FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV20FromJSON(json['last-modified-date']),
        'content': !exists(json, 'content') ? undefined : json['content'],
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function BiographyV20ToJSON(value?: BiographyV20 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created-date': CreatedDateV20ToJSON(value.createdDate),
        'last-modified-date': LastModifiedDateV20ToJSON(value.lastModifiedDate),
        'content': value.content,
        'visibility': value.visibility,
        'path': value.path,
    };
}


