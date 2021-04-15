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
    CreatedDateV30Rc2,
    CreatedDateV30Rc2FromJSON,
    CreatedDateV30Rc2FromJSONTyped,
    CreatedDateV30Rc2ToJSON,
    ExternalIDsV30Rc2,
    ExternalIDsV30Rc2FromJSON,
    ExternalIDsV30Rc2FromJSONTyped,
    ExternalIDsV30Rc2ToJSON,
    FuzzyDateV30Rc2,
    FuzzyDateV30Rc2FromJSON,
    FuzzyDateV30Rc2FromJSONTyped,
    FuzzyDateV30Rc2ToJSON,
    LastModifiedDateV30Rc2,
    LastModifiedDateV30Rc2FromJSON,
    LastModifiedDateV30Rc2FromJSONTyped,
    LastModifiedDateV30Rc2ToJSON,
    OrganizationV30Rc2,
    OrganizationV30Rc2FromJSON,
    OrganizationV30Rc2FromJSONTyped,
    OrganizationV30Rc2ToJSON,
    SourceV30Rc2,
    SourceV30Rc2FromJSON,
    SourceV30Rc2FromJSONTyped,
    SourceV30Rc2ToJSON,
    UrlV30Rc2,
    UrlV30Rc2FromJSON,
    UrlV30Rc2FromJSONTyped,
    UrlV30Rc2ToJSON,
} from './';

/**
 * 
 * @export
 * @interface DistinctionSummaryV30Rc2
 */
export interface DistinctionSummaryV30Rc2 {
    /**
     * 
     * @type {CreatedDateV30Rc2}
     * @memberof DistinctionSummaryV30Rc2
     */
    createdDate?: CreatedDateV30Rc2;
    /**
     * 
     * @type {LastModifiedDateV30Rc2}
     * @memberof DistinctionSummaryV30Rc2
     */
    lastModifiedDate?: LastModifiedDateV30Rc2;
    /**
     * 
     * @type {SourceV30Rc2}
     * @memberof DistinctionSummaryV30Rc2
     */
    source?: SourceV30Rc2;
    /**
     * 
     * @type {number}
     * @memberof DistinctionSummaryV30Rc2
     */
    putCode?: number;
    /**
     * 
     * @type {string}
     * @memberof DistinctionSummaryV30Rc2
     */
    departmentName?: string;
    /**
     * 
     * @type {string}
     * @memberof DistinctionSummaryV30Rc2
     */
    roleTitle?: string;
    /**
     * 
     * @type {FuzzyDateV30Rc2}
     * @memberof DistinctionSummaryV30Rc2
     */
    startDate?: FuzzyDateV30Rc2;
    /**
     * 
     * @type {FuzzyDateV30Rc2}
     * @memberof DistinctionSummaryV30Rc2
     */
    endDate?: FuzzyDateV30Rc2;
    /**
     * 
     * @type {OrganizationV30Rc2}
     * @memberof DistinctionSummaryV30Rc2
     */
    organization?: OrganizationV30Rc2;
    /**
     * 
     * @type {UrlV30Rc2}
     * @memberof DistinctionSummaryV30Rc2
     */
    url?: UrlV30Rc2;
    /**
     * 
     * @type {ExternalIDsV30Rc2}
     * @memberof DistinctionSummaryV30Rc2
     */
    externalIds?: ExternalIDsV30Rc2;
    /**
     * 
     * @type {string}
     * @memberof DistinctionSummaryV30Rc2
     */
    displayIndex?: string;
    /**
     * 
     * @type {string}
     * @memberof DistinctionSummaryV30Rc2
     */
    visibility?: DistinctionSummaryV30Rc2VisibilityEnum;
    /**
     * 
     * @type {string}
     * @memberof DistinctionSummaryV30Rc2
     */
    path?: string;
}

/**
* @export
* @enum {string}
*/
export enum DistinctionSummaryV30Rc2VisibilityEnum {
    Limited = 'LIMITED',
    RegisteredOnly = 'REGISTERED_ONLY',
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export function DistinctionSummaryV30Rc2FromJSON(json: any): DistinctionSummaryV30Rc2 {
    return DistinctionSummaryV30Rc2FromJSONTyped(json, false);
}

export function DistinctionSummaryV30Rc2FromJSONTyped(json: any, ignoreDiscriminator: boolean): DistinctionSummaryV30Rc2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV30Rc2FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30Rc2FromJSON(json['last-modified-date']),
        'source': !exists(json, 'source') ? undefined : SourceV30Rc2FromJSON(json['source']),
        'putCode': !exists(json, 'put-code') ? undefined : json['put-code'],
        'departmentName': !exists(json, 'department-name') ? undefined : json['department-name'],
        'roleTitle': !exists(json, 'role-title') ? undefined : json['role-title'],
        'startDate': !exists(json, 'start-date') ? undefined : FuzzyDateV30Rc2FromJSON(json['start-date']),
        'endDate': !exists(json, 'end-date') ? undefined : FuzzyDateV30Rc2FromJSON(json['end-date']),
        'organization': !exists(json, 'organization') ? undefined : OrganizationV30Rc2FromJSON(json['organization']),
        'url': !exists(json, 'url') ? undefined : UrlV30Rc2FromJSON(json['url']),
        'externalIds': !exists(json, 'external-ids') ? undefined : ExternalIDsV30Rc2FromJSON(json['external-ids']),
        'displayIndex': !exists(json, 'display-index') ? undefined : json['display-index'],
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function DistinctionSummaryV30Rc2ToJSON(value?: DistinctionSummaryV30Rc2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created-date': CreatedDateV30Rc2ToJSON(value.createdDate),
        'last-modified-date': LastModifiedDateV30Rc2ToJSON(value.lastModifiedDate),
        'source': SourceV30Rc2ToJSON(value.source),
        'put-code': value.putCode,
        'department-name': value.departmentName,
        'role-title': value.roleTitle,
        'start-date': FuzzyDateV30Rc2ToJSON(value.startDate),
        'end-date': FuzzyDateV30Rc2ToJSON(value.endDate),
        'organization': OrganizationV30Rc2ToJSON(value.organization),
        'url': UrlV30Rc2ToJSON(value.url),
        'external-ids': ExternalIDsV30Rc2ToJSON(value.externalIds),
        'display-index': value.displayIndex,
        'visibility': value.visibility,
        'path': value.path,
    };
}


