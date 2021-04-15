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
 * @interface ContributorEmailV30
 */
export interface ContributorEmailV30 {
    /**
     * 
     * @type {string}
     * @memberof ContributorEmailV30
     */
    value?: string;
}

export function ContributorEmailV30FromJSON(json: any): ContributorEmailV30 {
    return ContributorEmailV30FromJSONTyped(json, false);
}

export function ContributorEmailV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): ContributorEmailV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function ContributorEmailV30ToJSON(value?: ContributorEmailV30 | null): any {
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


