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
    ContributorAttributesV30Rc2,
    ContributorAttributesV30Rc2FromJSON,
    ContributorAttributesV30Rc2FromJSONTyped,
    ContributorAttributesV30Rc2ToJSON,
    ContributorEmailV30Rc2,
    ContributorEmailV30Rc2FromJSON,
    ContributorEmailV30Rc2FromJSONTyped,
    ContributorEmailV30Rc2ToJSON,
    ContributorOrcidV30Rc2,
    ContributorOrcidV30Rc2FromJSON,
    ContributorOrcidV30Rc2FromJSONTyped,
    ContributorOrcidV30Rc2ToJSON,
    CreditNameV30Rc2,
    CreditNameV30Rc2FromJSON,
    CreditNameV30Rc2FromJSONTyped,
    CreditNameV30Rc2ToJSON,
} from './';

/**
 * 
 * @export
 * @interface ContributorV30Rc2
 */
export interface ContributorV30Rc2 {
    /**
     * 
     * @type {ContributorOrcidV30Rc2}
     * @memberof ContributorV30Rc2
     */
    contributorOrcid?: ContributorOrcidV30Rc2;
    /**
     * 
     * @type {CreditNameV30Rc2}
     * @memberof ContributorV30Rc2
     */
    creditName?: CreditNameV30Rc2;
    /**
     * 
     * @type {ContributorEmailV30Rc2}
     * @memberof ContributorV30Rc2
     */
    contributorEmail?: ContributorEmailV30Rc2;
    /**
     * 
     * @type {ContributorAttributesV30Rc2}
     * @memberof ContributorV30Rc2
     */
    contributorAttributes?: ContributorAttributesV30Rc2;
}

export function ContributorV30Rc2FromJSON(json: any): ContributorV30Rc2 {
    return ContributorV30Rc2FromJSONTyped(json, false);
}

export function ContributorV30Rc2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ContributorV30Rc2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contributorOrcid': !exists(json, 'contributor-orcid') ? undefined : ContributorOrcidV30Rc2FromJSON(json['contributor-orcid']),
        'creditName': !exists(json, 'credit-name') ? undefined : CreditNameV30Rc2FromJSON(json['credit-name']),
        'contributorEmail': !exists(json, 'contributor-email') ? undefined : ContributorEmailV30Rc2FromJSON(json['contributor-email']),
        'contributorAttributes': !exists(json, 'contributor-attributes') ? undefined : ContributorAttributesV30Rc2FromJSON(json['contributor-attributes']),
    };
}

export function ContributorV30Rc2ToJSON(value?: ContributorV30Rc2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contributor-orcid': ContributorOrcidV30Rc2ToJSON(value.contributorOrcid),
        'credit-name': CreditNameV30Rc2ToJSON(value.creditName),
        'contributor-email': ContributorEmailV30Rc2ToJSON(value.contributorEmail),
        'contributor-attributes': ContributorAttributesV30Rc2ToJSON(value.contributorAttributes),
    };
}


