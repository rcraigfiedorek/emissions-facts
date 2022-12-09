/* tslint:disable */
/* eslint-disable */
/**
 * Corporate Emission Facts API
 * This is a free and public API that exposes sanitized corporate emissions data sourced from the <a href=\"https://www.epa.gov/ghgreporting\" target=\"_blank\" rel=\"noopener noreferrer\">EPA Greenhouse Gas Reporting Program</a>. Functions that aid public comprehension of the magnitude of corporate emissions are also included.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: rcraigfiedorek@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface CompanyListOutput
 */
export interface CompanyListOutput {
    /**
     * 
     * @type {number}
     * @memberof CompanyListOutput
     */
    'page'?: number;
    /**
     * 
     * @type {number}
     * @memberof CompanyListOutput
     */
    'per_page'?: number;
    /**
     * 
     * @type {number}
     * @memberof CompanyListOutput
     */
    'pages'?: number;
    /**
     * 
     * @type {number}
     * @memberof CompanyListOutput
     */
    'total'?: number;
    /**
     * 
     * @type {string}
     * @memberof CompanyListOutput
     */
    'current'?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyListOutput
     */
    'next'?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyListOutput
     */
    'prev'?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyListOutput
     */
    'first'?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyListOutput
     */
    'last'?: string;
    /**
     * A list of queried companies
     * @type {Array<CompanyOutput>}
     * @memberof CompanyListOutput
     */
    'companies': Array<CompanyOutput>;
}
/**
 * 
 * @export
 * @interface CompanyOutput
 */
export interface CompanyOutput {
    /**
     * Name of the company, as reported to the EPA
     * @type {string}
     * @memberof CompanyOutput
     */
    'name': string;
    /**
     * This API\'s unique identifier for the company. Susceptible to change before v1.0.0.
     * @type {number}
     * @memberof CompanyOutput
     */
    'id': number;
    /**
     * A mapping whose keys are years and whose values are this company\'s emissions data for that year
     * @type {{ [key: string]: EmissionsYearOutput; }}
     * @memberof CompanyOutput
     */
    'emissions_by_year': { [key: string]: EmissionsYearOutput; };
}
/**
 * 
 * @export
 * @interface EmissionComparisonFactOutput
 */
export interface EmissionComparisonFactOutput {
    /**
     * A text fact comparing the specified emissions to another action of equivalent impact.
     * @type {string}
     * @memberof EmissionComparisonFactOutput
     */
    'fact': string;
    /**
     * The shuffle key that was used to select the output fact. If a shuffle key was specified as input, then this will be identical.
     * @type {number}
     * @memberof EmissionComparisonFactOutput
     */
    'current_shuffle_key': number;
    /**
     * The next shuffle key to use in order to maintain the backend\'s shuffle order.
     * @type {number}
     * @memberof EmissionComparisonFactOutput
     */
    'next_shuffle_key': number;
    /**
     * A list of citations for the information given in the fact. Currently omitted -- sources may be found at <a rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://github.com/rcraigfiedorek/emissions-bot/blob/main/SOURCES.md\">https://github.com/rcraigfiedorek/emissions-bot/blob/main/SOURCES.md</a>.
     * @type {Array<string>}
     * @memberof EmissionComparisonFactOutput
     */
    'citations': Array<string>;
}
/**
 * 
 * @export
 * @interface EmissionsYearOutput
 */
export interface EmissionsYearOutput {
    /**
     * Given a company and a year, this is the number of facilities that reported emissions to the EPA in that year in which the company has an ownership stake.
     * @type {number}
     * @memberof EmissionsYearOutput
     */
    'facility_count': number;
    /**
     * The sum of all emissions reported by facilities the company had an ownership stake in for the given year. Given in metric tonnes of CO<sub>2</sub> equivalent.
     * @type {number}
     * @memberof EmissionsYearOutput
     */
    'all_facility_emissions': number;
    /**
     * The sum of all emissions reported by facilities the company had an ownership stake in for the given year, normalized by ownership percentage. Given in metric tonnes of CO<sub>2</sub> equivalent.
     * @type {number}
     * @memberof EmissionsYearOutput
     */
    'fully_owned_emissions': number;
}
/**
 * 
 * @export
 * @interface FormatQuantityOutput
 */
export interface FormatQuantityOutput {
    /**
     * The input quantity, formatted to match the styles of the fact endpoint.
     * @type {string}
     * @memberof FormatQuantityOutput
     */
    'formatted_quantity'?: string;
}
/**
 * 
 * @export
 * @interface HTTPError
 */
export interface HTTPError {
    /**
     * 
     * @type {object}
     * @memberof HTTPError
     */
    'detail'?: object;
    /**
     * 
     * @type {string}
     * @memberof HTTPError
     */
    'message'?: string;
}
/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {ValidationErrorDetail}
     * @memberof ValidationError
     */
    'detail'?: ValidationErrorDetail;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'message'?: string;
}
/**
 * 
 * @export
 * @interface ValidationErrorDetail
 */
export interface ValidationErrorDetail {
    /**
     * 
     * @type {ValidationErrorDetailLocation}
     * @memberof ValidationErrorDetail
     */
    '&lt;location&gt;'?: ValidationErrorDetailLocation;
}
/**
 * 
 * @export
 * @interface ValidationErrorDetailLocation
 */
export interface ValidationErrorDetailLocation {
    /**
     * 
     * @type {Array<string>}
     * @memberof ValidationErrorDetailLocation
     */
    '&lt;field_name&gt;'?: Array<string>;
}

/**
 * CorporateEmissionFactsApi - axios parameter creator
 * @export
 */
export const CorporateEmissionFactsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a specific company\'s emissions data
         * @param {number} companyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCompaniesCompanyIdGet: async (companyId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('apiCompaniesCompanyIdGet', 'companyId', companyId)
            const localVarPath = `/api/companies/{company_id}`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Query a list of companies and get their emissions data
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {string} [name] Filter to include only companies whose name contains this string. Case-insensitive.
         * @param {number} [year] Filter to include only companies who reported emissions in this year
         * @param {'name' | 'facility_count' | 'all_facility_emissions' | 'fully_owned_emissions'} [sortBy] Specifies what attribute to sort results by. If an attribute other than \&quot;name\&quot; is selected, then the \&quot;sort_year\&quot; field is required.
         * @param {number} [sortYear] Specifies which year the \&quot;sort_by\&quot; attribute should be collected from.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCompaniesGet: async (page?: number, perPage?: number, name?: string, year?: number, sortBy?: 'name' | 'facility_count' | 'all_facility_emissions' | 'fully_owned_emissions', sortYear?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/companies`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (year !== undefined) {
                localVarQueryParameter['year'] = year;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sort_by'] = sortBy;
            }

            if (sortYear !== undefined) {
                localVarQueryParameter['sort_year'] = sortYear;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a fact comparing an emission quantity to an action with equivalent impact.
         * @param {number} emission Specifies a quantity of GHG emissions in metric tonnes of CO&lt;sub&gt;2&lt;/sub&gt; equivalent.
         * @param {number} [shuffleKey] Optional. Use to obtain a deterministic shuffle order that doesn\&#39;t repeat fact templates until all have been returned.
         * @param {boolean} [includeBoldTags] If true, the output text will include HTML tags for text emphasis.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmissionComparisonFactGet: async (emission: number, shuffleKey?: number, includeBoldTags?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'emission' is not null or undefined
            assertParamExists('apiEmissionComparisonFactGet', 'emission', emission)
            const localVarPath = `/api/emissionComparisonFact`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (emission !== undefined) {
                localVarQueryParameter['emission'] = emission;
            }

            if (shuffleKey !== undefined) {
                localVarQueryParameter['shuffle_key'] = shuffleKey;
            }

            if (includeBoldTags !== undefined) {
                localVarQueryParameter['include_bold_tags'] = includeBoldTags;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Utility method for formatting unitful data
         * @param {string} [quantity] A string containing a number and a unit
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFormatQuantityGet: async (quantity?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/format-quantity`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (quantity !== undefined) {
                localVarQueryParameter['quantity'] = quantity;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CorporateEmissionFactsApi - functional programming interface
 * @export
 */
export const CorporateEmissionFactsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CorporateEmissionFactsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get a specific company\'s emissions data
         * @param {number} companyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCompaniesCompanyIdGet(companyId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompanyOutput>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCompaniesCompanyIdGet(companyId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Query a list of companies and get their emissions data
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {string} [name] Filter to include only companies whose name contains this string. Case-insensitive.
         * @param {number} [year] Filter to include only companies who reported emissions in this year
         * @param {'name' | 'facility_count' | 'all_facility_emissions' | 'fully_owned_emissions'} [sortBy] Specifies what attribute to sort results by. If an attribute other than \&quot;name\&quot; is selected, then the \&quot;sort_year\&quot; field is required.
         * @param {number} [sortYear] Specifies which year the \&quot;sort_by\&quot; attribute should be collected from.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCompaniesGet(page?: number, perPage?: number, name?: string, year?: number, sortBy?: 'name' | 'facility_count' | 'all_facility_emissions' | 'fully_owned_emissions', sortYear?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompanyListOutput>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCompaniesGet(page, perPage, name, year, sortBy, sortYear, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get a fact comparing an emission quantity to an action with equivalent impact.
         * @param {number} emission Specifies a quantity of GHG emissions in metric tonnes of CO&lt;sub&gt;2&lt;/sub&gt; equivalent.
         * @param {number} [shuffleKey] Optional. Use to obtain a deterministic shuffle order that doesn\&#39;t repeat fact templates until all have been returned.
         * @param {boolean} [includeBoldTags] If true, the output text will include HTML tags for text emphasis.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmissionComparisonFactGet(emission: number, shuffleKey?: number, includeBoldTags?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmissionComparisonFactOutput>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiEmissionComparisonFactGet(emission, shuffleKey, includeBoldTags, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Utility method for formatting unitful data
         * @param {string} [quantity] A string containing a number and a unit
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFormatQuantityGet(quantity?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FormatQuantityOutput>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFormatQuantityGet(quantity, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CorporateEmissionFactsApi - factory interface
 * @export
 */
export const CorporateEmissionFactsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CorporateEmissionFactsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get a specific company\'s emissions data
         * @param {number} companyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCompaniesCompanyIdGet(companyId: number, options?: any): AxiosPromise<CompanyOutput> {
            return localVarFp.apiCompaniesCompanyIdGet(companyId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Query a list of companies and get their emissions data
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {string} [name] Filter to include only companies whose name contains this string. Case-insensitive.
         * @param {number} [year] Filter to include only companies who reported emissions in this year
         * @param {'name' | 'facility_count' | 'all_facility_emissions' | 'fully_owned_emissions'} [sortBy] Specifies what attribute to sort results by. If an attribute other than \&quot;name\&quot; is selected, then the \&quot;sort_year\&quot; field is required.
         * @param {number} [sortYear] Specifies which year the \&quot;sort_by\&quot; attribute should be collected from.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCompaniesGet(page?: number, perPage?: number, name?: string, year?: number, sortBy?: 'name' | 'facility_count' | 'all_facility_emissions' | 'fully_owned_emissions', sortYear?: number, options?: any): AxiosPromise<CompanyListOutput> {
            return localVarFp.apiCompaniesGet(page, perPage, name, year, sortBy, sortYear, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a fact comparing an emission quantity to an action with equivalent impact.
         * @param {number} emission Specifies a quantity of GHG emissions in metric tonnes of CO&lt;sub&gt;2&lt;/sub&gt; equivalent.
         * @param {number} [shuffleKey] Optional. Use to obtain a deterministic shuffle order that doesn\&#39;t repeat fact templates until all have been returned.
         * @param {boolean} [includeBoldTags] If true, the output text will include HTML tags for text emphasis.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmissionComparisonFactGet(emission: number, shuffleKey?: number, includeBoldTags?: boolean, options?: any): AxiosPromise<EmissionComparisonFactOutput> {
            return localVarFp.apiEmissionComparisonFactGet(emission, shuffleKey, includeBoldTags, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Utility method for formatting unitful data
         * @param {string} [quantity] A string containing a number and a unit
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFormatQuantityGet(quantity?: string, options?: any): AxiosPromise<FormatQuantityOutput> {
            return localVarFp.apiFormatQuantityGet(quantity, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CorporateEmissionFactsApi - object-oriented interface
 * @export
 * @class CorporateEmissionFactsApi
 * @extends {BaseAPI}
 */
export class CorporateEmissionFactsApi extends BaseAPI {
    /**
     * 
     * @summary Get a specific company\'s emissions data
     * @param {number} companyId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CorporateEmissionFactsApi
     */
    public apiCompaniesCompanyIdGet(companyId: number, options?: AxiosRequestConfig) {
        return CorporateEmissionFactsApiFp(this.configuration).apiCompaniesCompanyIdGet(companyId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Query a list of companies and get their emissions data
     * @param {number} [page] 
     * @param {number} [perPage] 
     * @param {string} [name] Filter to include only companies whose name contains this string. Case-insensitive.
     * @param {number} [year] Filter to include only companies who reported emissions in this year
     * @param {'name' | 'facility_count' | 'all_facility_emissions' | 'fully_owned_emissions'} [sortBy] Specifies what attribute to sort results by. If an attribute other than \&quot;name\&quot; is selected, then the \&quot;sort_year\&quot; field is required.
     * @param {number} [sortYear] Specifies which year the \&quot;sort_by\&quot; attribute should be collected from.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CorporateEmissionFactsApi
     */
    public apiCompaniesGet(page?: number, perPage?: number, name?: string, year?: number, sortBy?: 'name' | 'facility_count' | 'all_facility_emissions' | 'fully_owned_emissions', sortYear?: number, options?: AxiosRequestConfig) {
        return CorporateEmissionFactsApiFp(this.configuration).apiCompaniesGet(page, perPage, name, year, sortBy, sortYear, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a fact comparing an emission quantity to an action with equivalent impact.
     * @param {number} emission Specifies a quantity of GHG emissions in metric tonnes of CO&lt;sub&gt;2&lt;/sub&gt; equivalent.
     * @param {number} [shuffleKey] Optional. Use to obtain a deterministic shuffle order that doesn\&#39;t repeat fact templates until all have been returned.
     * @param {boolean} [includeBoldTags] If true, the output text will include HTML tags for text emphasis.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CorporateEmissionFactsApi
     */
    public apiEmissionComparisonFactGet(emission: number, shuffleKey?: number, includeBoldTags?: boolean, options?: AxiosRequestConfig) {
        return CorporateEmissionFactsApiFp(this.configuration).apiEmissionComparisonFactGet(emission, shuffleKey, includeBoldTags, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Utility method for formatting unitful data
     * @param {string} [quantity] A string containing a number and a unit
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CorporateEmissionFactsApi
     */
    public apiFormatQuantityGet(quantity?: string, options?: AxiosRequestConfig) {
        return CorporateEmissionFactsApiFp(this.configuration).apiFormatQuantityGet(quantity, options).then((request) => request(this.axios, this.basePath));
    }
}


