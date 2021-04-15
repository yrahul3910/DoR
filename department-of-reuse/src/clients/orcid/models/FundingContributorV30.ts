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
    ContributorEmailV30,
    ContributorEmailV30FromJSON,
    ContributorEmailV30FromJSONTyped,
    ContributorEmailV30ToJSON,
    ContributorOrcidV30,
    ContributorOrcidV30FromJSON,
    ContributorOrcidV30FromJSONTyped,
    ContributorOrcidV30ToJSON,
    CreditNameV30,
    CreditNameV30FromJSON,
    CreditNameV30FromJSONTyped,
    CreditNameV30ToJSON,
    FundingContributorAttributesV30,
    FundingContributorAttributesV30FromJSON,
    FundingContributorAttributesV30FromJSONTyped,
    FundingContributorAttributesV30ToJSON,
} from './';

/**
 * 
 * @export
 * @interface FundingContributorV30
 */
export interface FundingContributorV30 {
    /**
     * 
     * @type {ContributorOrcidV30}
     * @memberof FundingContributorV30
     */
    contributorOrcid?: ContributorOrcidV30;
    /**
     * 
     * @type {CreditNameV30}
     * @memberof FundingContributorV30
     */
    creditName?: CreditNameV30;
    /**
     * 
     * @type {ContributorEmailV30}
     * @memberof FundingContributorV30
     */
    contributorEmail?: ContributorEmailV30;
    /**
     * 
     * @type {FundingContributorAttributesV30}
     * @memberof FundingContributorV30
     */
    contributorAttributes?: FundingContributorAttributesV30;
}

export function FundingContributorV30FromJSON(json: any): FundingContributorV30 {
    return FundingContributorV30FromJSONTyped(json, false);
}

export function FundingContributorV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): FundingContributorV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contributorOrcid': !exists(json, 'contributor-orcid') ? undefined : ContributorOrcidV30FromJSON(json['contributor-orcid']),
        'creditName': !exists(json, 'credit-name') ? undefined : CreditNameV30FromJSON(json['credit-name']),
        'contributorEmail': !exists(json, 'contributor-email') ? undefined : ContributorEmailV30FromJSON(json['contributor-email']),
        'contributorAttributes': !exists(json, 'contributor-attributes') ? undefined : FundingContributorAttributesV30FromJSON(json['contributor-attributes']),
    };
}

export function FundingContributorV30ToJSON(value?: FundingContributorV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contributor-orcid': ContributorOrcidV30ToJSON(value.contributorOrcid),
        'credit-name': CreditNameV30ToJSON(value.creditName),
        'contributor-email': ContributorEmailV30ToJSON(value.contributorEmail),
        'contributor-attributes': FundingContributorAttributesV30ToJSON(value.contributorAttributes),
    };
}


