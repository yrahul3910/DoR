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
    OrganizationV30Rc2,
    OrganizationV30Rc2FromJSON,
    OrganizationV30Rc2FromJSONTyped,
    OrganizationV30Rc2ToJSON,
} from './';

/**
 * 
 * @export
 * @interface ResearchResourceHostsV30Rc2
 */
export interface ResearchResourceHostsV30Rc2 {
    /**
     * 
     * @type {Array<OrganizationV30Rc2>}
     * @memberof ResearchResourceHostsV30Rc2
     */
    organization?: Array<OrganizationV30Rc2>;
}

export function ResearchResourceHostsV30Rc2FromJSON(json: any): ResearchResourceHostsV30Rc2 {
    return ResearchResourceHostsV30Rc2FromJSONTyped(json, false);
}

export function ResearchResourceHostsV30Rc2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ResearchResourceHostsV30Rc2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'organization': !exists(json, 'organization') ? undefined : ((json['organization'] as Array<any>).map(OrganizationV30Rc2FromJSON)),
    };
}

export function ResearchResourceHostsV30Rc2ToJSON(value?: ResearchResourceHostsV30Rc2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'organization': value.organization === undefined ? undefined : ((value.organization as Array<any>).map(OrganizationV30Rc2ToJSON)),
    };
}


