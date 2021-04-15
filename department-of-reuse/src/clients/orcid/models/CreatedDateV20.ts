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
 * @interface CreatedDateV20
 */
export interface CreatedDateV20 {
    /**
     * 
     * @type {Date}
     * @memberof CreatedDateV20
     */
    readonly value?: Date;
}

export function CreatedDateV20FromJSON(json: any): CreatedDateV20 {
    return CreatedDateV20FromJSONTyped(json, false);
}

export function CreatedDateV20FromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatedDateV20 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : (new Date(json['value'])),
    };
}

export function CreatedDateV20ToJSON(value?: CreatedDateV20 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}


