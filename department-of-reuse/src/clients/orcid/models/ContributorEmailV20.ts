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
/**
 * 
 * @export
 * @interface ContributorEmailV20
 */
export interface ContributorEmailV20 {
    /**
     * 
     * @type {string}
     * @memberof ContributorEmailV20
     */
    value?: string;
}

export function ContributorEmailV20FromJSON(json: any): ContributorEmailV20 {
    return ContributorEmailV20FromJSONTyped(json, false);
}

export function ContributorEmailV20FromJSONTyped(json: any, ignoreDiscriminator: boolean): ContributorEmailV20 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function ContributorEmailV20ToJSON(value?: ContributorEmailV20 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
    };
}

