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
 * @interface FamilyNameV30Rc2
 */
export interface FamilyNameV30Rc2 {
    /**
     * 
     * @type {string}
     * @memberof FamilyNameV30Rc2
     */
    value?: string;
}

export function FamilyNameV30Rc2FromJSON(json: any): FamilyNameV30Rc2 {
    return FamilyNameV30Rc2FromJSONTyped(json, false);
}

export function FamilyNameV30Rc2FromJSONTyped(json: any, ignoreDiscriminator: boolean): FamilyNameV30Rc2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function FamilyNameV30Rc2ToJSON(value?: FamilyNameV30Rc2 | null): any {
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


