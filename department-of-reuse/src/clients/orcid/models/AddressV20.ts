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
    CountryV20,
    CountryV20FromJSON,
    CountryV20FromJSONTyped,
    CountryV20ToJSON,
    CreatedDateV20,
    CreatedDateV20FromJSON,
    CreatedDateV20FromJSONTyped,
    CreatedDateV20ToJSON,
    LastModifiedDateV20,
    LastModifiedDateV20FromJSON,
    LastModifiedDateV20FromJSONTyped,
    LastModifiedDateV20ToJSON,
    SourceV20,
    SourceV20FromJSON,
    SourceV20FromJSONTyped,
    SourceV20ToJSON,
} from './';

/**
 * 
 * @export
 * @interface AddressV20
 */
export interface AddressV20 {
    /**
     * 
     * @type {CreatedDateV20}
     * @memberof AddressV20
     */
    createdDate?: CreatedDateV20;
    /**
     * 
     * @type {LastModifiedDateV20}
     * @memberof AddressV20
     */
    lastModifiedDate?: LastModifiedDateV20;
    /**
     * 
     * @type {SourceV20}
     * @memberof AddressV20
     */
    source?: SourceV20;
    /**
     * 
     * @type {CountryV20}
     * @memberof AddressV20
     */
    country: CountryV20;
    /**
     * 
     * @type {string}
     * @memberof AddressV20
     */
    visibility?: AddressV20VisibilityEnum;
    /**
     * 
     * @type {string}
     * @memberof AddressV20
     */
    path?: string;
    /**
     * 
     * @type {number}
     * @memberof AddressV20
     */
    putCode?: number;
    /**
     * 
     * @type {number}
     * @memberof AddressV20
     */
    displayIndex?: number;
}

/**
* @export
* @enum {string}
*/
export enum AddressV20VisibilityEnum {
    Limited = 'LIMITED',
    RegisteredOnly = 'REGISTERED_ONLY',
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export function AddressV20FromJSON(json: any): AddressV20 {
    return AddressV20FromJSONTyped(json, false);
}

export function AddressV20FromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressV20 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV20FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV20FromJSON(json['last-modified-date']),
        'source': !exists(json, 'source') ? undefined : SourceV20FromJSON(json['source']),
        'country': CountryV20FromJSON(json['country']),
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'putCode': !exists(json, 'put-code') ? undefined : json['put-code'],
        'displayIndex': !exists(json, 'display-index') ? undefined : json['display-index'],
    };
}

export function AddressV20ToJSON(value?: AddressV20 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created-date': CreatedDateV20ToJSON(value.createdDate),
        'last-modified-date': LastModifiedDateV20ToJSON(value.lastModifiedDate),
        'source': SourceV20ToJSON(value.source),
        'country': CountryV20ToJSON(value.country),
        'visibility': value.visibility,
        'path': value.path,
        'put-code': value.putCode,
        'display-index': value.displayIndex,
    };
}


