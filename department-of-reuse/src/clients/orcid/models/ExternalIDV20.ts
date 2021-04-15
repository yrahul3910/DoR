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
    UrlV20,
    UrlV20FromJSON,
    UrlV20FromJSONTyped,
    UrlV20ToJSON,
} from './';

/**
 * 
 * @export
 * @interface ExternalIDV20
 */
export interface ExternalIDV20 {
    /**
     * 
     * @type {string}
     * @memberof ExternalIDV20
     */
    externalIdType: string;
    /**
     * 
     * @type {string}
     * @memberof ExternalIDV20
     */
    externalIdValue: string;
    /**
     * 
     * @type {UrlV20}
     * @memberof ExternalIDV20
     */
    externalIdUrl?: UrlV20;
    /**
     * 
     * @type {string}
     * @memberof ExternalIDV20
     */
    externalIdRelationship?: ExternalIDV20ExternalIdRelationshipEnum;
}

/**
* @export
* @enum {string}
*/
export enum ExternalIDV20ExternalIdRelationshipEnum {
    PartOf = 'PART_OF',
    Self = 'SELF'
}

export function ExternalIDV20FromJSON(json: any): ExternalIDV20 {
    return ExternalIDV20FromJSONTyped(json, false);
}

export function ExternalIDV20FromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalIDV20 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'externalIdType': json['external-id-type'],
        'externalIdValue': json['external-id-value'],
        'externalIdUrl': !exists(json, 'external-id-url') ? undefined : UrlV20FromJSON(json['external-id-url']),
        'externalIdRelationship': !exists(json, 'external-id-relationship') ? undefined : json['external-id-relationship'],
    };
}

export function ExternalIDV20ToJSON(value?: ExternalIDV20 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'external-id-type': value.externalIdType,
        'external-id-value': value.externalIdValue,
        'external-id-url': UrlV20ToJSON(value.externalIdUrl),
        'external-id-relationship': value.externalIdRelationship,
    };
}


