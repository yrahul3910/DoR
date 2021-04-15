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
    DistinctionSummaryV30Rc2,
    DistinctionSummaryV30Rc2FromJSON,
    DistinctionSummaryV30Rc2FromJSONTyped,
    DistinctionSummaryV30Rc2ToJSON,
    ExternalIDsV30Rc2,
    ExternalIDsV30Rc2FromJSON,
    ExternalIDsV30Rc2FromJSONTyped,
    ExternalIDsV30Rc2ToJSON,
    LastModifiedDateV30Rc2,
    LastModifiedDateV30Rc2FromJSON,
    LastModifiedDateV30Rc2FromJSONTyped,
    LastModifiedDateV30Rc2ToJSON,
} from './';

/**
 * 
 * @export
 * @interface AffiliationGroupV30Rc2DistinctionSummaryV30Rc2
 */
export interface AffiliationGroupV30Rc2DistinctionSummaryV30Rc2 {
    /**
     * 
     * @type {LastModifiedDateV30Rc2}
     * @memberof AffiliationGroupV30Rc2DistinctionSummaryV30Rc2
     */
    lastModifiedDate?: LastModifiedDateV30Rc2;
    /**
     * 
     * @type {ExternalIDsV30Rc2}
     * @memberof AffiliationGroupV30Rc2DistinctionSummaryV30Rc2
     */
    externalIds?: ExternalIDsV30Rc2;
    /**
     * 
     * @type {Array<DistinctionSummaryV30Rc2>}
     * @memberof AffiliationGroupV30Rc2DistinctionSummaryV30Rc2
     */
    summaries?: Array<DistinctionSummaryV30Rc2>;
}

export function AffiliationGroupV30Rc2DistinctionSummaryV30Rc2FromJSON(json: any): AffiliationGroupV30Rc2DistinctionSummaryV30Rc2 {
    return AffiliationGroupV30Rc2DistinctionSummaryV30Rc2FromJSONTyped(json, false);
}

export function AffiliationGroupV30Rc2DistinctionSummaryV30Rc2FromJSONTyped(json: any, ignoreDiscriminator: boolean): AffiliationGroupV30Rc2DistinctionSummaryV30Rc2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30Rc2FromJSON(json['last-modified-date']),
        'externalIds': !exists(json, 'external-ids') ? undefined : ExternalIDsV30Rc2FromJSON(json['external-ids']),
        'summaries': !exists(json, 'summaries') ? undefined : ((json['summaries'] as Array<any>).map(DistinctionSummaryV30Rc2FromJSON)),
    };
}

export function AffiliationGroupV30Rc2DistinctionSummaryV30Rc2ToJSON(value?: AffiliationGroupV30Rc2DistinctionSummaryV30Rc2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last-modified-date': LastModifiedDateV30Rc2ToJSON(value.lastModifiedDate),
        'external-ids': ExternalIDsV30Rc2ToJSON(value.externalIds),
        'summaries': value.summaries === undefined ? undefined : ((value.summaries as Array<any>).map(DistinctionSummaryV30Rc2ToJSON)),
    };
}


