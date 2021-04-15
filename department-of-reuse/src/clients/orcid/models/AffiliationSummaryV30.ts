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
    CreatedDateV30,
    CreatedDateV30FromJSON,
    CreatedDateV30FromJSONTyped,
    CreatedDateV30ToJSON,
    ExternalIDsV30,
    ExternalIDsV30FromJSON,
    ExternalIDsV30FromJSONTyped,
    ExternalIDsV30ToJSON,
    FuzzyDateV30,
    FuzzyDateV30FromJSON,
    FuzzyDateV30FromJSONTyped,
    FuzzyDateV30ToJSON,
    LastModifiedDateV30,
    LastModifiedDateV30FromJSON,
    LastModifiedDateV30FromJSONTyped,
    LastModifiedDateV30ToJSON,
    OrganizationV30,
    OrganizationV30FromJSON,
    OrganizationV30FromJSONTyped,
    OrganizationV30ToJSON,
    SourceV30,
    SourceV30FromJSON,
    SourceV30FromJSONTyped,
    SourceV30ToJSON,
    UrlV30,
    UrlV30FromJSON,
    UrlV30FromJSONTyped,
    UrlV30ToJSON,
} from './';

/**
 * 
 * @export
 * @interface AffiliationSummaryV30
 */
export interface AffiliationSummaryV30 {
    /**
     * 
     * @type {CreatedDateV30}
     * @memberof AffiliationSummaryV30
     */
    createdDate?: CreatedDateV30;
    /**
     * 
     * @type {LastModifiedDateV30}
     * @memberof AffiliationSummaryV30
     */
    lastModifiedDate?: LastModifiedDateV30;
    /**
     * 
     * @type {SourceV30}
     * @memberof AffiliationSummaryV30
     */
    source?: SourceV30;
    /**
     * 
     * @type {number}
     * @memberof AffiliationSummaryV30
     */
    putCode?: number;
    /**
     * 
     * @type {string}
     * @memberof AffiliationSummaryV30
     */
    departmentName?: string;
    /**
     * 
     * @type {string}
     * @memberof AffiliationSummaryV30
     */
    roleTitle?: string;
    /**
     * 
     * @type {FuzzyDateV30}
     * @memberof AffiliationSummaryV30
     */
    startDate?: FuzzyDateV30;
    /**
     * 
     * @type {FuzzyDateV30}
     * @memberof AffiliationSummaryV30
     */
    endDate?: FuzzyDateV30;
    /**
     * 
     * @type {OrganizationV30}
     * @memberof AffiliationSummaryV30
     */
    organization?: OrganizationV30;
    /**
     * 
     * @type {UrlV30}
     * @memberof AffiliationSummaryV30
     */
    url?: UrlV30;
    /**
     * 
     * @type {ExternalIDsV30}
     * @memberof AffiliationSummaryV30
     */
    externalIds?: ExternalIDsV30;
    /**
     * 
     * @type {string}
     * @memberof AffiliationSummaryV30
     */
    displayIndex?: string;
    /**
     * 
     * @type {string}
     * @memberof AffiliationSummaryV30
     */
    visibility?: AffiliationSummaryV30VisibilityEnum;
    /**
     * 
     * @type {string}
     * @memberof AffiliationSummaryV30
     */
    path?: string;
}

/**
* @export
* @enum {string}
*/
export enum AffiliationSummaryV30VisibilityEnum {
    Limited = 'LIMITED',
    RegisteredOnly = 'REGISTERED_ONLY',
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export function AffiliationSummaryV30FromJSON(json: any): AffiliationSummaryV30 {
    return AffiliationSummaryV30FromJSONTyped(json, false);
}

export function AffiliationSummaryV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): AffiliationSummaryV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV30FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30FromJSON(json['last-modified-date']),
        'source': !exists(json, 'source') ? undefined : SourceV30FromJSON(json['source']),
        'putCode': !exists(json, 'put-code') ? undefined : json['put-code'],
        'departmentName': !exists(json, 'department-name') ? undefined : json['department-name'],
        'roleTitle': !exists(json, 'role-title') ? undefined : json['role-title'],
        'startDate': !exists(json, 'start-date') ? undefined : FuzzyDateV30FromJSON(json['start-date']),
        'endDate': !exists(json, 'end-date') ? undefined : FuzzyDateV30FromJSON(json['end-date']),
        'organization': !exists(json, 'organization') ? undefined : OrganizationV30FromJSON(json['organization']),
        'url': !exists(json, 'url') ? undefined : UrlV30FromJSON(json['url']),
        'externalIds': !exists(json, 'external-ids') ? undefined : ExternalIDsV30FromJSON(json['external-ids']),
        'displayIndex': !exists(json, 'display-index') ? undefined : json['display-index'],
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function AffiliationSummaryV30ToJSON(value?: AffiliationSummaryV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created-date': CreatedDateV30ToJSON(value.createdDate),
        'last-modified-date': LastModifiedDateV30ToJSON(value.lastModifiedDate),
        'source': SourceV30ToJSON(value.source),
        'put-code': value.putCode,
        'department-name': value.departmentName,
        'role-title': value.roleTitle,
        'start-date': FuzzyDateV30ToJSON(value.startDate),
        'end-date': FuzzyDateV30ToJSON(value.endDate),
        'organization': OrganizationV30ToJSON(value.organization),
        'url': UrlV30ToJSON(value.url),
        'external-ids': ExternalIDsV30ToJSON(value.externalIds),
        'display-index': value.displayIndex,
        'visibility': value.visibility,
        'path': value.path,
    };
}


