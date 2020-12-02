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


import { LiveTvServiceStatus } from './live-tv-service-status';

/**
 * Class ServiceInfo.
 * @export
 * @interface LiveTvServiceInfo
 */
export interface LiveTvServiceInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof LiveTvServiceInfo
     */
    Name?: string | null;
    /**
     * Gets or sets the home page URL.
     * @type {string}
     * @memberof LiveTvServiceInfo
     */
    HomePageUrl?: string | null;
    /**
     * 
     * @type {LiveTvServiceStatus}
     * @memberof LiveTvServiceInfo
     */
    Status?: LiveTvServiceStatus;
    /**
     * Gets or sets the status message.
     * @type {string}
     * @memberof LiveTvServiceInfo
     */
    StatusMessage?: string | null;
    /**
     * Gets or sets the version.
     * @type {string}
     * @memberof LiveTvServiceInfo
     */
    Version?: string | null;
    /**
     * Gets or sets a value indicating whether this instance has update available.
     * @type {boolean}
     * @memberof LiveTvServiceInfo
     */
    HasUpdateAvailable?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is visible.
     * @type {boolean}
     * @memberof LiveTvServiceInfo
     */
    IsVisible?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof LiveTvServiceInfo
     */
    Tuners?: Array<string> | null;
}


