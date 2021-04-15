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
    CreatedDateV20,
    CreatedDateV20FromJSON,
    CreatedDateV20FromJSONTyped,
    CreatedDateV20ToJSON,
    FuzzyDateV20,
    FuzzyDateV20FromJSON,
    FuzzyDateV20FromJSONTyped,
    FuzzyDateV20ToJSON,
    LastModifiedDateV20,
    LastModifiedDateV20FromJSON,
    LastModifiedDateV20FromJSONTyped,
    LastModifiedDateV20ToJSON,
    OrganizationV20,
    OrganizationV20FromJSON,
    OrganizationV20FromJSONTyped,
    OrganizationV20ToJSON,
    SourceV20,
    SourceV20FromJSON,
    SourceV20FromJSONTyped,
    SourceV20ToJSON,
} from './';

/**
 * 
 * @export
 * @interface EducationSummaryV20
 */
export interface EducationSummaryV20 {
    /**
     * 
     * @type {CreatedDateV20}
     * @memberof EducationSummaryV20
     */
    createdDate?: CreatedDateV20;
    /**
     * 
     * @type {LastModifiedDateV20}
     * @memberof EducationSummaryV20
     */
    lastModifiedDate?: LastModifiedDateV20;
    /**
     * 
     * @type {SourceV20}
     * @memberof EducationSummaryV20
     */
    source?: SourceV20;
    /**
     * 
     * @type {string}
     * @memberof EducationSummaryV20
     */
    departmentName?: string;
    /**
     * 
     * @type {string}
     * @memberof EducationSummaryV20
     */
    roleTitle?: string;
    /**
     * 
     * @type {FuzzyDateV20}
     * @memberof EducationSummaryV20
     */
    startDate?: FuzzyDateV20;
    /**
     * 
     * @type {FuzzyDateV20}
     * @memberof EducationSummaryV20
     */
    endDate?: FuzzyDateV20;
    /**
     * 
     * @type {OrganizationV20}
     * @memberof EducationSummaryV20
     */
    organization?: OrganizationV20;
    /**
     * 
     * @type {string}
     * @memberof EducationSummaryV20
     */
    visibility?: EducationSummaryV20VisibilityEnum;
    /**
     * 
     * @type {number}
     * @memberof EducationSummaryV20
     */
    putCode?: number;
    /**
     * 
     * @type {string}
     * @memberof EducationSummaryV20
     */
    path?: string;
}

/**
* @export
* @enum {string}
*/
export enum EducationSummaryV20VisibilityEnum {
    Limited = 'LIMITED',
    RegisteredOnly = 'REGISTERED_ONLY',
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export function EducationSummaryV20FromJSON(json: any): EducationSummaryV20 {
    return EducationSummaryV20FromJSONTyped(json, false);
}

export function EducationSummaryV20FromJSONTyped(json: any, ignoreDiscriminator: boolean): EducationSummaryV20 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV20FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV20FromJSON(json['last-modified-date']),
        'source': !exists(json, 'source') ? undefined : SourceV20FromJSON(json['source']),
        'departmentName': !exists(json, 'department-name') ? undefined : json['department-name'],
        'roleTitle': !exists(json, 'role-title') ? undefined : json['role-title'],
        'startDate': !exists(json, 'start-date') ? undefined : FuzzyDateV20FromJSON(json['start-date']),
        'endDate': !exists(json, 'end-date') ? undefined : FuzzyDateV20FromJSON(json['end-date']),
        'organization': !exists(json, 'organization') ? undefined : OrganizationV20FromJSON(json['organization']),
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'putCode': !exists(json, 'put-code') ? undefined : json['put-code'],
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function EducationSummaryV20ToJSON(value?: EducationSummaryV20 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created-date': CreatedDateV20ToJSON(value.createdDate),
        'last-modified-date': LastModifiedDateV20ToJSON(value.lastModifiedDate),
        'source': SourceV20ToJSON(value.source),
        'department-name': value.departmentName,
        'role-title': value.roleTitle,
        'start-date': FuzzyDateV20ToJSON(value.startDate),
        'end-date': FuzzyDateV20ToJSON(value.endDate),
        'organization': OrganizationV20ToJSON(value.organization),
        'visibility': value.visibility,
        'put-code': value.putCode,
        'path': value.path,
    };
}


