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
 * @interface SourceNameV30Rc2
 */
export interface SourceNameV30Rc2 {
    /**
     * 
     * @type {string}
     * @memberof SourceNameV30Rc2
     */
    value?: string;
}

export function SourceNameV30Rc2FromJSON(json: any): SourceNameV30Rc2 {
    return SourceNameV30Rc2FromJSONTyped(json, false);
}

export function SourceNameV30Rc2FromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceNameV30Rc2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function SourceNameV30Rc2ToJSON(value?: SourceNameV30Rc2 | null): any {
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


