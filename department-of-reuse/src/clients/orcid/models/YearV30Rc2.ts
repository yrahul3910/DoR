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
 * @interface YearV30Rc2
 */
export interface YearV30Rc2 {
    /**
     * 
     * @type {string}
     * @memberof YearV30Rc2
     */
    value?: string;
}

export function YearV30Rc2FromJSON(json: any): YearV30Rc2 {
    return YearV30Rc2FromJSONTyped(json, false);
}

export function YearV30Rc2FromJSONTyped(json: any, ignoreDiscriminator: boolean): YearV30Rc2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function YearV30Rc2ToJSON(value?: YearV30Rc2 | null): any {
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


