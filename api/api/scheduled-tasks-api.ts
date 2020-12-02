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
import { ProblemDetails } from '../models';
// @ts-ignore
import { TaskInfo } from '../models';
// @ts-ignore
import { TaskTriggerInfo } from '../models';
/**
 * ScheduledTasksApi - axios parameter creator
 * @export
 */
export const ScheduledTasksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get task by id.
         * @param {string} taskId Task Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTask: async (taskId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskId' is not null or undefined
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling getTask.');
            }
            const localVarPath = `/ScheduledTasks/{taskId}`
                .replace(`{${"taskId"}}`, encodeURIComponent(String(taskId)));
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
         * @summary Get tasks.
         * @param {boolean} [isHidden] Optional filter tasks that are hidden, or not.
         * @param {boolean} [isEnabled] Optional filter tasks that are enabled, or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTasks: async (isHidden?: boolean, isEnabled?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/ScheduledTasks`;
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

            if (isHidden !== undefined) {
                localVarQueryParameter['isHidden'] = isHidden;
            }

            if (isEnabled !== undefined) {
                localVarQueryParameter['isEnabled'] = isEnabled;
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
         * @summary Start specified task.
         * @param {string} taskId Task Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startTask: async (taskId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskId' is not null or undefined
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling startTask.');
            }
            const localVarPath = `/ScheduledTasks/Running/{taskId}`
                .replace(`{${"taskId"}}`, encodeURIComponent(String(taskId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
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
         * @summary Stop specified task.
         * @param {string} taskId Task Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stopTask: async (taskId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskId' is not null or undefined
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling stopTask.');
            }
            const localVarPath = `/ScheduledTasks/Running/{taskId}`
                .replace(`{${"taskId"}}`, encodeURIComponent(String(taskId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
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
         * @summary Update specified task triggers.
         * @param {string} taskId Task Id.
         * @param {Array<TaskTriggerInfo>} taskTriggerInfo Triggers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTask: async (taskId: string, taskTriggerInfo: Array<TaskTriggerInfo>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskId' is not null or undefined
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateTask.');
            }
            // verify required parameter 'taskTriggerInfo' is not null or undefined
            if (taskTriggerInfo === null || taskTriggerInfo === undefined) {
                throw new RequiredError('taskTriggerInfo','Required parameter taskTriggerInfo was null or undefined when calling updateTask.');
            }
            const localVarPath = `/ScheduledTasks/{taskId}/Triggers`
                .replace(`{${"taskId"}}`, encodeURIComponent(String(taskId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

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
            const needsSerialization = (typeof taskTriggerInfo !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(taskTriggerInfo !== undefined ? taskTriggerInfo : {}) : (taskTriggerInfo || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ScheduledTasksApi - functional programming interface
 * @export
 */
export const ScheduledTasksApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get task by id.
         * @param {string} taskId Task Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTask(taskId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskInfo>> {
            const localVarAxiosArgs = await ScheduledTasksApiAxiosParamCreator(configuration).getTask(taskId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get tasks.
         * @param {boolean} [isHidden] Optional filter tasks that are hidden, or not.
         * @param {boolean} [isEnabled] Optional filter tasks that are enabled, or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTasks(isHidden?: boolean, isEnabled?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TaskInfo>>> {
            const localVarAxiosArgs = await ScheduledTasksApiAxiosParamCreator(configuration).getTasks(isHidden, isEnabled, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Start specified task.
         * @param {string} taskId Task Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async startTask(taskId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ScheduledTasksApiAxiosParamCreator(configuration).startTask(taskId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Stop specified task.
         * @param {string} taskId Task Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async stopTask(taskId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ScheduledTasksApiAxiosParamCreator(configuration).stopTask(taskId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update specified task triggers.
         * @param {string} taskId Task Id.
         * @param {Array<TaskTriggerInfo>} taskTriggerInfo Triggers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTask(taskId: string, taskTriggerInfo: Array<TaskTriggerInfo>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ScheduledTasksApiAxiosParamCreator(configuration).updateTask(taskId, taskTriggerInfo, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ScheduledTasksApi - factory interface
 * @export
 */
export const ScheduledTasksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Get task by id.
         * @param {string} taskId Task Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTask(taskId: string, options?: any): AxiosPromise<TaskInfo> {
            return ScheduledTasksApiFp(configuration).getTask(taskId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get tasks.
         * @param {boolean} [isHidden] Optional filter tasks that are hidden, or not.
         * @param {boolean} [isEnabled] Optional filter tasks that are enabled, or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTasks(isHidden?: boolean, isEnabled?: boolean, options?: any): AxiosPromise<Array<TaskInfo>> {
            return ScheduledTasksApiFp(configuration).getTasks(isHidden, isEnabled, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Start specified task.
         * @param {string} taskId Task Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startTask(taskId: string, options?: any): AxiosPromise<void> {
            return ScheduledTasksApiFp(configuration).startTask(taskId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Stop specified task.
         * @param {string} taskId Task Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stopTask(taskId: string, options?: any): AxiosPromise<void> {
            return ScheduledTasksApiFp(configuration).stopTask(taskId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update specified task triggers.
         * @param {string} taskId Task Id.
         * @param {Array<TaskTriggerInfo>} taskTriggerInfo Triggers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTask(taskId: string, taskTriggerInfo: Array<TaskTriggerInfo>, options?: any): AxiosPromise<void> {
            return ScheduledTasksApiFp(configuration).updateTask(taskId, taskTriggerInfo, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getTask operation in ScheduledTasksApi.
 * @export
 * @interface ScheduledTasksApiGetTaskRequest
 */
export interface ScheduledTasksApiGetTaskRequest {
    /**
     * Task Id.
     * @type {string}
     * @memberof ScheduledTasksApiGetTask
     */
    readonly taskId: string
}

/**
 * Request parameters for getTasks operation in ScheduledTasksApi.
 * @export
 * @interface ScheduledTasksApiGetTasksRequest
 */
export interface ScheduledTasksApiGetTasksRequest {
    /**
     * Optional filter tasks that are hidden, or not.
     * @type {boolean}
     * @memberof ScheduledTasksApiGetTasks
     */
    readonly isHidden?: boolean

    /**
     * Optional filter tasks that are enabled, or not.
     * @type {boolean}
     * @memberof ScheduledTasksApiGetTasks
     */
    readonly isEnabled?: boolean
}

/**
 * Request parameters for startTask operation in ScheduledTasksApi.
 * @export
 * @interface ScheduledTasksApiStartTaskRequest
 */
export interface ScheduledTasksApiStartTaskRequest {
    /**
     * Task Id.
     * @type {string}
     * @memberof ScheduledTasksApiStartTask
     */
    readonly taskId: string
}

/**
 * Request parameters for stopTask operation in ScheduledTasksApi.
 * @export
 * @interface ScheduledTasksApiStopTaskRequest
 */
export interface ScheduledTasksApiStopTaskRequest {
    /**
     * Task Id.
     * @type {string}
     * @memberof ScheduledTasksApiStopTask
     */
    readonly taskId: string
}

/**
 * Request parameters for updateTask operation in ScheduledTasksApi.
 * @export
 * @interface ScheduledTasksApiUpdateTaskRequest
 */
export interface ScheduledTasksApiUpdateTaskRequest {
    /**
     * Task Id.
     * @type {string}
     * @memberof ScheduledTasksApiUpdateTask
     */
    readonly taskId: string

    /**
     * Triggers.
     * @type {Array<TaskTriggerInfo>}
     * @memberof ScheduledTasksApiUpdateTask
     */
    readonly taskTriggerInfo: Array<TaskTriggerInfo>
}

/**
 * ScheduledTasksApi - object-oriented interface
 * @export
 * @class ScheduledTasksApi
 * @extends {BaseAPI}
 */
export class ScheduledTasksApi extends BaseAPI {
    /**
     * 
     * @summary Get task by id.
     * @param {ScheduledTasksApiGetTaskRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledTasksApi
     */
    public getTask(requestParameters: ScheduledTasksApiGetTaskRequest, options?: any) {
        return ScheduledTasksApiFp(this.configuration).getTask(requestParameters.taskId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get tasks.
     * @param {ScheduledTasksApiGetTasksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledTasksApi
     */
    public getTasks(requestParameters: ScheduledTasksApiGetTasksRequest = {}, options?: any) {
        return ScheduledTasksApiFp(this.configuration).getTasks(requestParameters.isHidden, requestParameters.isEnabled, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Start specified task.
     * @param {ScheduledTasksApiStartTaskRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledTasksApi
     */
    public startTask(requestParameters: ScheduledTasksApiStartTaskRequest, options?: any) {
        return ScheduledTasksApiFp(this.configuration).startTask(requestParameters.taskId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Stop specified task.
     * @param {ScheduledTasksApiStopTaskRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledTasksApi
     */
    public stopTask(requestParameters: ScheduledTasksApiStopTaskRequest, options?: any) {
        return ScheduledTasksApiFp(this.configuration).stopTask(requestParameters.taskId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update specified task triggers.
     * @param {ScheduledTasksApiUpdateTaskRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledTasksApi
     */
    public updateTask(requestParameters: ScheduledTasksApiUpdateTaskRequest, options?: any) {
        return ScheduledTasksApiFp(this.configuration).updateTask(requestParameters.taskId, requestParameters.taskTriggerInfo, options).then((request) => request(this.axios, this.basePath));
    }
}
