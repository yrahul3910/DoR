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
    ExternalIDsV20,
    ExternalIDsV20FromJSON,
    ExternalIDsV20FromJSONTyped,
    ExternalIDsV20ToJSON,
    LastModifiedDateV20,
    LastModifiedDateV20FromJSON,
    LastModifiedDateV20FromJSONTyped,
    LastModifiedDateV20ToJSON,
    WorkSummaryV20,
    WorkSummaryV20FromJSON,
    WorkSummaryV20FromJSONTyped,
    WorkSummaryV20ToJSON,
} from './';

/**
 * 
 * @export
 * @interface WorkGroupV20
 */
export interface WorkGroupV20 {
    /**
     * 
     * @type {LastModifiedDateV20}
     * @memberof WorkGroupV20
     */
    lastModifiedDate?: LastModifiedDateV20;
    /**
     * 
     * @type {ExternalIDsV20}
     * @memberof WorkGroupV20
     */
    externalIds?: ExternalIDsV20;
    /**
     * 
     * @type {Array<WorkSummaryV20>}
     * @memberof WorkGroupV20
     */
    workSummary?: Array<WorkSummaryV20>;
}

export function WorkGroupV20FromJSON(json: any): WorkGroupV20 {
    return WorkGroupV20FromJSONTyped(json, false);
}

export function WorkGroupV20FromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkGroupV20 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV20FromJSON(json['last-modified-date']),
        'externalIds': !exists(json, 'external-ids') ? undefined : ExternalIDsV20FromJSON(json['external-ids']),
        'workSummary': !exists(json, 'work-summary') ? undefined : ((json['work-summary'] as Array<any>).map(WorkSummaryV20FromJSON)),
    };
}

export function WorkGroupV20ToJSON(value?: WorkGroupV20 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last-modified-date': LastModifiedDateV20ToJSON(value.lastModifiedDate),
        'external-ids': ExternalIDsV20ToJSON(value.externalIds),
        'work-summary': value.workSummary === undefined ? undefined : ((value.workSummary as Array<any>).map(WorkSummaryV20ToJSON)),
    };
}


