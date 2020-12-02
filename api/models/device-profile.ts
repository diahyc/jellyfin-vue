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


import { CodecProfile } from './codec-profile';
import { ContainerProfile } from './container-profile';
import { DeviceIdentification } from './device-identification';
import { DirectPlayProfile } from './direct-play-profile';
import { ResponseProfile } from './response-profile';
import { SubtitleProfile } from './subtitle-profile';
import { TranscodingProfile } from './transcoding-profile';
import { XmlAttribute } from './xml-attribute';

/**
 * Defines the MediaBrowser.Model.Dlna.DeviceProfile.
 * @export
 * @interface DeviceProfile
 */
export interface DeviceProfile {
    /**
     * Gets or sets the Name.
     * @type {string}
     * @memberof DeviceProfile
     */
    Name?: string | null;
    /**
     * Gets or sets the Id.
     * @type {string}
     * @memberof DeviceProfile
     */
    Id?: string | null;
    /**
     * 
     * @type {DeviceIdentification}
     * @memberof DeviceProfile
     */
    Identification?: DeviceIdentification;
    /**
     * Gets or sets the FriendlyName.
     * @type {string}
     * @memberof DeviceProfile
     */
    FriendlyName?: string | null;
    /**
     * Gets or sets the Manufacturer.
     * @type {string}
     * @memberof DeviceProfile
     */
    Manufacturer?: string | null;
    /**
     * Gets or sets the ManufacturerUrl.
     * @type {string}
     * @memberof DeviceProfile
     */
    ManufacturerUrl?: string | null;
    /**
     * Gets or sets the ModelName.
     * @type {string}
     * @memberof DeviceProfile
     */
    ModelName?: string | null;
    /**
     * Gets or sets the ModelDescription.
     * @type {string}
     * @memberof DeviceProfile
     */
    ModelDescription?: string | null;
    /**
     * Gets or sets the ModelNumber.
     * @type {string}
     * @memberof DeviceProfile
     */
    ModelNumber?: string | null;
    /**
     * Gets or sets the ModelUrl.
     * @type {string}
     * @memberof DeviceProfile
     */
    ModelUrl?: string | null;
    /**
     * Gets or sets the SerialNumber.
     * @type {string}
     * @memberof DeviceProfile
     */
    SerialNumber?: string | null;
    /**
     * Gets or sets a value indicating whether EnableAlbumArtInDidl.
     * @type {boolean}
     * @memberof DeviceProfile
     */
    EnableAlbumArtInDidl?: boolean;
    /**
     * Gets or sets a value indicating whether EnableSingleAlbumArtLimit.
     * @type {boolean}
     * @memberof DeviceProfile
     */
    EnableSingleAlbumArtLimit?: boolean;
    /**
     * Gets or sets a value indicating whether EnableSingleSubtitleLimit.
     * @type {boolean}
     * @memberof DeviceProfile
     */
    EnableSingleSubtitleLimit?: boolean;
    /**
     * Gets or sets the SupportedMediaTypes.
     * @type {string}
     * @memberof DeviceProfile
     */
    SupportedMediaTypes?: string | null;
    /**
     * Gets or sets the UserId.
     * @type {string}
     * @memberof DeviceProfile
     */
    UserId?: string | null;
    /**
     * Gets or sets the AlbumArtPn.
     * @type {string}
     * @memberof DeviceProfile
     */
    AlbumArtPn?: string | null;
    /**
     * Gets or sets the MaxAlbumArtWidth.
     * @type {number}
     * @memberof DeviceProfile
     */
    MaxAlbumArtWidth?: number;
    /**
     * Gets or sets the MaxAlbumArtHeight.
     * @type {number}
     * @memberof DeviceProfile
     */
    MaxAlbumArtHeight?: number;
    /**
     * Gets or sets the MaxIconWidth.
     * @type {number}
     * @memberof DeviceProfile
     */
    MaxIconWidth?: number | null;
    /**
     * Gets or sets the MaxIconHeight.
     * @type {number}
     * @memberof DeviceProfile
     */
    MaxIconHeight?: number | null;
    /**
     * Gets or sets the MaxStreamingBitrate.
     * @type {number}
     * @memberof DeviceProfile
     */
    MaxStreamingBitrate?: number | null;
    /**
     * Gets or sets the MaxStaticBitrate.
     * @type {number}
     * @memberof DeviceProfile
     */
    MaxStaticBitrate?: number | null;
    /**
     * Gets or sets the MusicStreamingTranscodingBitrate.
     * @type {number}
     * @memberof DeviceProfile
     */
    MusicStreamingTranscodingBitrate?: number | null;
    /**
     * Gets or sets the MaxStaticMusicBitrate.
     * @type {number}
     * @memberof DeviceProfile
     */
    MaxStaticMusicBitrate?: number | null;
    /**
     * Gets or sets the content of the aggregationFlags element in the urn:schemas-sonycom:av namespace.
     * @type {string}
     * @memberof DeviceProfile
     */
    SonyAggregationFlags?: string | null;
    /**
     * Gets or sets the ProtocolInfo.
     * @type {string}
     * @memberof DeviceProfile
     */
    ProtocolInfo?: string | null;
    /**
     * Gets or sets the TimelineOffsetSeconds.
     * @type {number}
     * @memberof DeviceProfile
     */
    TimelineOffsetSeconds?: number;
    /**
     * Gets or sets a value indicating whether RequiresPlainVideoItems.
     * @type {boolean}
     * @memberof DeviceProfile
     */
    RequiresPlainVideoItems?: boolean;
    /**
     * Gets or sets a value indicating whether RequiresPlainFolders.
     * @type {boolean}
     * @memberof DeviceProfile
     */
    RequiresPlainFolders?: boolean;
    /**
     * Gets or sets a value indicating whether EnableMSMediaReceiverRegistrar.
     * @type {boolean}
     * @memberof DeviceProfile
     */
    EnableMSMediaReceiverRegistrar?: boolean;
    /**
     * Gets or sets a value indicating whether IgnoreTranscodeByteRangeRequests.
     * @type {boolean}
     * @memberof DeviceProfile
     */
    IgnoreTranscodeByteRangeRequests?: boolean;
    /**
     * Gets or sets the XmlRootAttributes.
     * @type {Array<XmlAttribute>}
     * @memberof DeviceProfile
     */
    XmlRootAttributes?: Array<XmlAttribute> | null;
    /**
     * Gets or sets the direct play profiles.
     * @type {Array<DirectPlayProfile>}
     * @memberof DeviceProfile
     */
    DirectPlayProfiles?: Array<DirectPlayProfile> | null;
    /**
     * Gets or sets the transcoding profiles.
     * @type {Array<TranscodingProfile>}
     * @memberof DeviceProfile
     */
    TranscodingProfiles?: Array<TranscodingProfile> | null;
    /**
     * Gets or sets the ContainerProfiles.
     * @type {Array<ContainerProfile>}
     * @memberof DeviceProfile
     */
    ContainerProfiles?: Array<ContainerProfile> | null;
    /**
     * Gets or sets the CodecProfiles.
     * @type {Array<CodecProfile>}
     * @memberof DeviceProfile
     */
    CodecProfiles?: Array<CodecProfile> | null;
    /**
     * Gets or sets the ResponseProfiles.
     * @type {Array<ResponseProfile>}
     * @memberof DeviceProfile
     */
    ResponseProfiles?: Array<ResponseProfile> | null;
    /**
     * Gets or sets the SubtitleProfiles.
     * @type {Array<SubtitleProfile>}
     * @memberof DeviceProfile
     */
    SubtitleProfiles?: Array<SubtitleProfile> | null;
}


