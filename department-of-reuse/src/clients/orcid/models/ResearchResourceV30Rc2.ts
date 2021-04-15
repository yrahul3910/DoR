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
    LastModifiedDateV30Rc2,
    LastModifiedDateV30Rc2FromJSON,
    LastModifiedDateV30Rc2FromJSONTyped,
    LastModifiedDateV30Rc2ToJSON,
    ResearchResourceItemV30Rc2,
    ResearchResourceItemV30Rc2FromJSON,
    ResearchResourceItemV30Rc2FromJSONTyped,
    ResearchResourceItemV30Rc2ToJSON,
    ResearchResourceProposalV30Rc2,
    ResearchResourceProposalV30Rc2FromJSON,
    ResearchResourceProposalV30Rc2FromJSONTyped,
    ResearchResourceProposalV30Rc2ToJSON,
    SourceV30Rc2,
    SourceV30Rc2FromJSON,
    SourceV30Rc2FromJSONTyped,
    SourceV30Rc2ToJSON,
} from './';

/**
 * 
 * @export
 * @interface ResearchResourceV30Rc2
 */
export interface ResearchResourceV30Rc2 {
    /**
     * 
     * @type {CreatedDateV30Rc2}
     * @memberof ResearchResourceV30Rc2
     */
    createdDate?: CreatedDateV30Rc2;
    /**
     * 
     * @type {LastModifiedDateV30Rc2}
     * @memberof ResearchResourceV30Rc2
     */
    lastModifiedDate?: LastModifiedDateV30Rc2;
    /**
     * 
     * @type {SourceV30Rc2}
     * @memberof ResearchResourceV30Rc2
     */
    source?: SourceV30Rc2;
    /**
     * 
     * @type {ResearchResourceProposalV30Rc2}
     * @memberof ResearchResourceV30Rc2
     */
    proposal?: ResearchResourceProposalV30Rc2;
    /**
     * 
     * @type {Array<ResearchResourceItemV30Rc2>}
     * @memberof ResearchResourceV30Rc2
     */
    resourceItem?: Array<ResearchResourceItemV30Rc2>;
    /**
     * 
     * @type {string}
     * @memberof ResearchResourceV30Rc2
     */
    displayIndex?: string;
    /**
     * 
     * @type {string}
     * @memberof ResearchResourceV30Rc2
     */
    visibility?: ResearchResourceV30Rc2VisibilityEnum;
    /**
     * 
     * @type {number}
     * @memberof ResearchResourceV30Rc2
     */
    putCode?: number;
    /**
     * 
     * @type {string}
     * @memberof ResearchResourceV30Rc2
     */
    path?: string;
}

/**
* @export
* @enum {string}
*/
export enum ResearchResourceV30Rc2VisibilityEnum {
    Limited = 'LIMITED',
    RegisteredOnly = 'REGISTERED_ONLY',
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export function ResearchResourceV30Rc2FromJSON(json: any): ResearchResourceV30Rc2 {
    return ResearchResourceV30Rc2FromJSONTyped(json, false);
}

export function ResearchResourceV30Rc2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ResearchResourceV30Rc2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV30Rc2FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30Rc2FromJSON(json['last-modified-date']),
        'source': !exists(json, 'source') ? undefined : SourceV30Rc2FromJSON(json['source']),
        'proposal': !exists(json, 'proposal') ? undefined : ResearchResourceProposalV30Rc2FromJSON(json['proposal']),
        'resourceItem': !exists(json, 'resource-item') ? undefined : ((json['resource-item'] as Array<any>).map(ResearchResourceItemV30Rc2FromJSON)),
        'displayIndex': !exists(json, 'display-index') ? undefined : json['display-index'],
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'putCode': !exists(json, 'put-code') ? undefined : json['put-code'],
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function ResearchResourceV30Rc2ToJSON(value?: ResearchResourceV30Rc2 | null): any {
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
        'proposal': ResearchResourceProposalV30Rc2ToJSON(value.proposal),
        'resource-item': value.resourceItem === undefined ? undefined : ((value.resourceItem as Array<any>).map(ResearchResourceItemV30Rc2ToJSON)),
        'display-index': value.displayIndex,
        'visibility': value.visibility,
        'put-code': value.putCode,
        'path': value.path,
    };
}


