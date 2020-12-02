/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { QueryFilters } from '../models';
// @ts-ignore
import { QueryFiltersLegacy } from '../models';
/**
 * FilterApi - axios parameter creator
 * @export
 */
export const FilterApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets query filters.
         * @param {string} [userId] Optional. User id.
         * @param {string} [parentId] Optional. Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<string>} [includeItemTypes] Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
         * @param {boolean} [isAiring] Optional. Is item airing.
         * @param {boolean} [isMovie] Optional. Is item movie.
         * @param {boolean} [isSports] Optional. Is item sports.
         * @param {boolean} [isKids] Optional. Is item kids.
         * @param {boolean} [isNews] Optional. Is item news.
         * @param {boolean} [isSeries] Optional. Is item series.
         * @param {boolean} [recursive] Optional. Search recursive.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getQueryFilters: async (userId?: string, parentId?: string, includeItemTypes?: Array<string>, isAiring?: boolean, isMovie?: boolean, isSports?: boolean, isKids?: boolean, isNews?: boolean, isSeries?: boolean, recursive?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Items/Filters2`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (parentId !== undefined) {
                localVarQueryParameter['parentId'] = parentId;
            }

            if (includeItemTypes) {
                localVarQueryParameter['includeItemTypes'] = includeItemTypes;
            }

            if (isAiring !== undefined) {
                localVarQueryParameter['isAiring'] = isAiring;
            }

            if (isMovie !== undefined) {
                localVarQueryParameter['isMovie'] = isMovie;
            }

            if (isSports !== undefined) {
                localVarQueryParameter['isSports'] = isSports;
            }

            if (isKids !== undefined) {
                localVarQueryParameter['isKids'] = isKids;
            }

            if (isNews !== undefined) {
                localVarQueryParameter['isNews'] = isNews;
            }

            if (isSeries !== undefined) {
                localVarQueryParameter['isSeries'] = isSeries;
            }

            if (recursive !== undefined) {
                localVarQueryParameter['recursive'] = recursive;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets legacy query filters.
         * @param {string} [userId] Optional. User id.
         * @param {string} [parentId] Optional. Parent id.
         * @param {Array<string>} [includeItemTypes] Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
         * @param {Array<string>} [mediaTypes] Optional. Filter by MediaType. Allows multiple, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getQueryFiltersLegacy: async (userId?: string, parentId?: string, includeItemTypes?: Array<string>, mediaTypes?: Array<string>, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Items/Filters`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (parentId !== undefined) {
                localVarQueryParameter['parentId'] = parentId;
            }

            if (includeItemTypes) {
                localVarQueryParameter['includeItemTypes'] = includeItemTypes;
            }

            if (mediaTypes) {
                localVarQueryParameter['mediaTypes'] = mediaTypes;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FilterApi - functional programming interface
 * @export
 */
export const FilterApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets query filters.
         * @param {string} [userId] Optional. User id.
         * @param {string} [parentId] Optional. Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<string>} [includeItemTypes] Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
         * @param {boolean} [isAiring] Optional. Is item airing.
         * @param {boolean} [isMovie] Optional. Is item movie.
         * @param {boolean} [isSports] Optional. Is item sports.
         * @param {boolean} [isKids] Optional. Is item kids.
         * @param {boolean} [isNews] Optional. Is item news.
         * @param {boolean} [isSeries] Optional. Is item series.
         * @param {boolean} [recursive] Optional. Search recursive.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getQueryFilters(userId?: string, parentId?: string, includeItemTypes?: Array<string>, isAiring?: boolean, isMovie?: boolean, isSports?: boolean, isKids?: boolean, isNews?: boolean, isSeries?: boolean, recursive?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QueryFilters>> {
            const localVarAxiosArgs = await FilterApiAxiosParamCreator(configuration).getQueryFilters(userId, parentId, includeItemTypes, isAiring, isMovie, isSports, isKids, isNews, isSeries, recursive, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets legacy query filters.
         * @param {string} [userId] Optional. User id.
         * @param {string} [parentId] Optional. Parent id.
         * @param {Array<string>} [includeItemTypes] Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
         * @param {Array<string>} [mediaTypes] Optional. Filter by MediaType. Allows multiple, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getQueryFiltersLegacy(userId?: string, parentId?: string, includeItemTypes?: Array<string>, mediaTypes?: Array<string>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QueryFiltersLegacy>> {
            const localVarAxiosArgs = await FilterApiAxiosParamCreator(configuration).getQueryFiltersLegacy(userId, parentId, includeItemTypes, mediaTypes, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * FilterApi - factory interface
 * @export
 */
export const FilterApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Gets query filters.
         * @param {string} [userId] Optional. User id.
         * @param {string} [parentId] Optional. Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<string>} [includeItemTypes] Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
         * @param {boolean} [isAiring] Optional. Is item airing.
         * @param {boolean} [isMovie] Optional. Is item movie.
         * @param {boolean} [isSports] Optional. Is item sports.
         * @param {boolean} [isKids] Optional. Is item kids.
         * @param {boolean} [isNews] Optional. Is item news.
         * @param {boolean} [isSeries] Optional. Is item series.
         * @param {boolean} [recursive] Optional. Search recursive.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getQueryFilters(userId?: string, parentId?: string, includeItemTypes?: Array<string>, isAiring?: boolean, isMovie?: boolean, isSports?: boolean, isKids?: boolean, isNews?: boolean, isSeries?: boolean, recursive?: boolean, options?: any): AxiosPromise<QueryFilters> {
            return FilterApiFp(configuration).getQueryFilters(userId, parentId, includeItemTypes, isAiring, isMovie, isSports, isKids, isNews, isSeries, recursive, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets legacy query filters.
         * @param {string} [userId] Optional. User id.
         * @param {string} [parentId] Optional. Parent id.
         * @param {Array<string>} [includeItemTypes] Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
         * @param {Array<string>} [mediaTypes] Optional. Filter by MediaType. Allows multiple, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getQueryFiltersLegacy(userId?: string, parentId?: string, includeItemTypes?: Array<string>, mediaTypes?: Array<string>, options?: any): AxiosPromise<QueryFiltersLegacy> {
            return FilterApiFp(configuration).getQueryFiltersLegacy(userId, parentId, includeItemTypes, mediaTypes, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getQueryFilters operation in FilterApi.
 * @export
 * @interface FilterApiGetQueryFiltersRequest
 */
export interface FilterApiGetQueryFiltersRequest {
    /**
     * Optional. User id.
     * @type {string}
     * @memberof FilterApiGetQueryFilters
     */
    readonly userId?: string

    /**
     * Optional. Specify this to localize the search to a specific item or folder. Omit to use the root.
     * @type {string}
     * @memberof FilterApiGetQueryFilters
     */
    readonly parentId?: string

    /**
     * Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
     * @type {Array<string>}
     * @memberof FilterApiGetQueryFilters
     */
    readonly includeItemTypes?: Array<string>

    /**
     * Optional. Is item airing.
     * @type {boolean}
     * @memberof FilterApiGetQueryFilters
     */
    readonly isAiring?: boolean

    /**
     * Optional. Is item movie.
     * @type {boolean}
     * @memberof FilterApiGetQueryFilters
     */
    readonly isMovie?: boolean

    /**
     * Optional. Is item sports.
     * @type {boolean}
     * @memberof FilterApiGetQueryFilters
     */
    readonly isSports?: boolean

    /**
     * Optional. Is item kids.
     * @type {boolean}
     * @memberof FilterApiGetQueryFilters
     */
    readonly isKids?: boolean

    /**
     * Optional. Is item news.
     * @type {boolean}
     * @memberof FilterApiGetQueryFilters
     */
    readonly isNews?: boolean

    /**
     * Optional. Is item series.
     * @type {boolean}
     * @memberof FilterApiGetQueryFilters
     */
    readonly isSeries?: boolean

    /**
     * Optional. Search recursive.
     * @type {boolean}
     * @memberof FilterApiGetQueryFilters
     */
    readonly recursive?: boolean
}

/**
 * Request parameters for getQueryFiltersLegacy operation in FilterApi.
 * @export
 * @interface FilterApiGetQueryFiltersLegacyRequest
 */
export interface FilterApiGetQueryFiltersLegacyRequest {
    /**
     * Optional. User id.
     * @type {string}
     * @memberof FilterApiGetQueryFiltersLegacy
     */
    readonly userId?: string

    /**
     * Optional. Parent id.
     * @type {string}
     * @memberof FilterApiGetQueryFiltersLegacy
     */
    readonly parentId?: string

    /**
     * Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
     * @type {Array<string>}
     * @memberof FilterApiGetQueryFiltersLegacy
     */
    readonly includeItemTypes?: Array<string>

    /**
     * Optional. Filter by MediaType. Allows multiple, comma delimited.
     * @type {Array<string>}
     * @memberof FilterApiGetQueryFiltersLegacy
     */
    readonly mediaTypes?: Array<string>
}

/**
 * FilterApi - object-oriented interface
 * @export
 * @class FilterApi
 * @extends {BaseAPI}
 */
export class FilterApi extends BaseAPI {
    /**
     * 
     * @summary Gets query filters.
     * @param {FilterApiGetQueryFiltersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilterApi
     */
    public getQueryFilters(requestParameters: FilterApiGetQueryFiltersRequest = {}, options?: any) {
        return FilterApiFp(this.configuration).getQueryFilters(requestParameters.userId, requestParameters.parentId, requestParameters.includeItemTypes, requestParameters.isAiring, requestParameters.isMovie, requestParameters.isSports, requestParameters.isKids, requestParameters.isNews, requestParameters.isSeries, requestParameters.recursive, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets legacy query filters.
     * @param {FilterApiGetQueryFiltersLegacyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilterApi
     */
    public getQueryFiltersLegacy(requestParameters: FilterApiGetQueryFiltersLegacyRequest = {}, options?: any) {
        return FilterApiFp(this.configuration).getQueryFiltersLegacy(requestParameters.userId, requestParameters.parentId, requestParameters.includeItemTypes, requestParameters.mediaTypes, options).then((request) => request(this.axios, this.basePath));
    }
}
