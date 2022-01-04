// @generated by protobuf-ts 2.1.0 with parameter server_grpc1,generate_dependencies
// @generated from protobuf file "beam_provision_api.proto" (package "org.apache.beam.model.fn_execution.v1", syntax proto3)
// tslint:disable
//
//
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
//
// Protocol Buffers describing the Provision API, for communicating with a runner
// for job and environment provisioning information over GRPC.
//
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { ArtifactInformation } from "./beam_runner_api";
import { ApiServiceDescriptor } from "./endpoints";
import { Struct } from "./google/protobuf/struct";
/**
 * A request to get the provision info of a SDK harness worker instance.
 *
 * @generated from protobuf message org.apache.beam.model.fn_execution.v1.GetProvisionInfoRequest
 */
export interface GetProvisionInfoRequest {
}
/**
 * A response containing the provision info of a SDK harness worker instance.
 *
 * @generated from protobuf message org.apache.beam.model.fn_execution.v1.GetProvisionInfoResponse
 */
export interface GetProvisionInfoResponse {
    /**
     * @generated from protobuf field: org.apache.beam.model.fn_execution.v1.ProvisionInfo info = 1;
     */
    info?: ProvisionInfo;
}
/**
 * Runtime provisioning information for a SDK harness worker instance,
 * such as pipeline options, resource constraints and other job metadata
 *
 * @generated from protobuf message org.apache.beam.model.fn_execution.v1.ProvisionInfo
 */
export interface ProvisionInfo {
    /**
     * (required) Pipeline options. For non-template jobs, the options are
     * identical to what is passed to job submission.
     *
     * @generated from protobuf field: google.protobuf.Struct pipeline_options = 3;
     */
    pipelineOptions?: Struct;
    /**
     * (required) The artifact retrieval token produced by
     * LegacyArtifactStagingService.CommitManifestResponse.
     *
     * @generated from protobuf field: string retrieval_token = 6;
     */
    retrievalToken: string;
    /**
     * (optional) The endpoint that the runner is hosting for the SDK to submit
     * status reports to during pipeline execution. This field will only be
     * populated if the runner supports SDK status reports. For more details see
     * https://s.apache.org/beam-fn-api-harness-status
     *
     * @generated from protobuf field: org.apache.beam.model.pipeline.v1.ApiServiceDescriptor status_endpoint = 7;
     */
    statusEndpoint?: ApiServiceDescriptor;
    /**
     * (optional) The logging endpoint this SDK should use.
     *
     * @generated from protobuf field: org.apache.beam.model.pipeline.v1.ApiServiceDescriptor logging_endpoint = 8;
     */
    loggingEndpoint?: ApiServiceDescriptor;
    /**
     * (optional) The artifact retrieval endpoint this SDK should use.
     *
     * @generated from protobuf field: org.apache.beam.model.pipeline.v1.ApiServiceDescriptor artifact_endpoint = 9;
     */
    artifactEndpoint?: ApiServiceDescriptor;
    /**
     * (optional) The control endpoint this SDK should use.
     *
     * @generated from protobuf field: org.apache.beam.model.pipeline.v1.ApiServiceDescriptor control_endpoint = 10;
     */
    controlEndpoint?: ApiServiceDescriptor;
    /**
     * The set of dependencies that should be staged into this environment.
     *
     * @generated from protobuf field: repeated org.apache.beam.model.pipeline.v1.ArtifactInformation dependencies = 11;
     */
    dependencies: ArtifactInformation[];
    /**
     * (optional) A set of capabilities that this SDK is allowed to use in its
     * interactions with this runner.
     *
     * @generated from protobuf field: repeated string runner_capabilities = 12;
     */
    runnerCapabilities: string[];
    /**
     * (optional) Runtime environment metadata that are static throughout the
     * pipeline execution.
     *
     * @generated from protobuf field: map<string, string> metadata = 13;
     */
    metadata: {
        [key: string]: string;
    };
    /**
     * (optional) If this environment supports SIBLING_WORKERS, used to indicate
     * the ids of sibling workers, if any, that should be started in addition
     * to this worker (which already has its own worker id).
     *
     * @generated from protobuf field: repeated string sibling_worker_ids = 14;
     */
    siblingWorkerIds: string[];
}
// @generated message type with reflection information, may provide speed optimized methods
class GetProvisionInfoRequest$Type extends MessageType<GetProvisionInfoRequest> {
    constructor() {
        super("org.apache.beam.model.fn_execution.v1.GetProvisionInfoRequest", []);
    }
    create(value?: PartialMessage<GetProvisionInfoRequest>): GetProvisionInfoRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetProvisionInfoRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetProvisionInfoRequest): GetProvisionInfoRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: GetProvisionInfoRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message org.apache.beam.model.fn_execution.v1.GetProvisionInfoRequest
 */
export const GetProvisionInfoRequest = new GetProvisionInfoRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetProvisionInfoResponse$Type extends MessageType<GetProvisionInfoResponse> {
    constructor() {
        super("org.apache.beam.model.fn_execution.v1.GetProvisionInfoResponse", [
            { no: 1, name: "info", kind: "message", T: () => ProvisionInfo }
        ]);
    }
    create(value?: PartialMessage<GetProvisionInfoResponse>): GetProvisionInfoResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetProvisionInfoResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetProvisionInfoResponse): GetProvisionInfoResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* org.apache.beam.model.fn_execution.v1.ProvisionInfo info */ 1:
                    message.info = ProvisionInfo.internalBinaryRead(reader, reader.uint32(), options, message.info);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetProvisionInfoResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* org.apache.beam.model.fn_execution.v1.ProvisionInfo info = 1; */
        if (message.info)
            ProvisionInfo.internalBinaryWrite(message.info, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message org.apache.beam.model.fn_execution.v1.GetProvisionInfoResponse
 */
export const GetProvisionInfoResponse = new GetProvisionInfoResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProvisionInfo$Type extends MessageType<ProvisionInfo> {
    constructor() {
        super("org.apache.beam.model.fn_execution.v1.ProvisionInfo", [
            { no: 3, name: "pipeline_options", kind: "message", T: () => Struct },
            { no: 6, name: "retrieval_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "status_endpoint", kind: "message", T: () => ApiServiceDescriptor },
            { no: 8, name: "logging_endpoint", kind: "message", T: () => ApiServiceDescriptor },
            { no: 9, name: "artifact_endpoint", kind: "message", T: () => ApiServiceDescriptor },
            { no: 10, name: "control_endpoint", kind: "message", T: () => ApiServiceDescriptor },
            { no: 11, name: "dependencies", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ArtifactInformation },
            { no: 12, name: "runner_capabilities", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "metadata", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } },
            { no: 14, name: "sibling_worker_ids", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ProvisionInfo>): ProvisionInfo {
        const message = { retrievalToken: "", dependencies: [], runnerCapabilities: [], metadata: {}, siblingWorkerIds: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ProvisionInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProvisionInfo): ProvisionInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.Struct pipeline_options */ 3:
                    message.pipelineOptions = Struct.internalBinaryRead(reader, reader.uint32(), options, message.pipelineOptions);
                    break;
                case /* string retrieval_token */ 6:
                    message.retrievalToken = reader.string();
                    break;
                case /* org.apache.beam.model.pipeline.v1.ApiServiceDescriptor status_endpoint */ 7:
                    message.statusEndpoint = ApiServiceDescriptor.internalBinaryRead(reader, reader.uint32(), options, message.statusEndpoint);
                    break;
                case /* org.apache.beam.model.pipeline.v1.ApiServiceDescriptor logging_endpoint */ 8:
                    message.loggingEndpoint = ApiServiceDescriptor.internalBinaryRead(reader, reader.uint32(), options, message.loggingEndpoint);
                    break;
                case /* org.apache.beam.model.pipeline.v1.ApiServiceDescriptor artifact_endpoint */ 9:
                    message.artifactEndpoint = ApiServiceDescriptor.internalBinaryRead(reader, reader.uint32(), options, message.artifactEndpoint);
                    break;
                case /* org.apache.beam.model.pipeline.v1.ApiServiceDescriptor control_endpoint */ 10:
                    message.controlEndpoint = ApiServiceDescriptor.internalBinaryRead(reader, reader.uint32(), options, message.controlEndpoint);
                    break;
                case /* repeated org.apache.beam.model.pipeline.v1.ArtifactInformation dependencies */ 11:
                    message.dependencies.push(ArtifactInformation.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated string runner_capabilities */ 12:
                    message.runnerCapabilities.push(reader.string());
                    break;
                case /* map<string, string> metadata */ 13:
                    this.binaryReadMap13(message.metadata, reader, options);
                    break;
                case /* repeated string sibling_worker_ids */ 14:
                    message.siblingWorkerIds.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    private binaryReadMap13(map: ProvisionInfo["metadata"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof ProvisionInfo["metadata"] | undefined, val: ProvisionInfo["metadata"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field org.apache.beam.model.fn_execution.v1.ProvisionInfo.metadata");
            }
        }
        map[key ?? ""] = val ?? "";
    }
    internalBinaryWrite(message: ProvisionInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.Struct pipeline_options = 3; */
        if (message.pipelineOptions)
            Struct.internalBinaryWrite(message.pipelineOptions, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* string retrieval_token = 6; */
        if (message.retrievalToken !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.retrievalToken);
        /* org.apache.beam.model.pipeline.v1.ApiServiceDescriptor status_endpoint = 7; */
        if (message.statusEndpoint)
            ApiServiceDescriptor.internalBinaryWrite(message.statusEndpoint, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* org.apache.beam.model.pipeline.v1.ApiServiceDescriptor logging_endpoint = 8; */
        if (message.loggingEndpoint)
            ApiServiceDescriptor.internalBinaryWrite(message.loggingEndpoint, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* org.apache.beam.model.pipeline.v1.ApiServiceDescriptor artifact_endpoint = 9; */
        if (message.artifactEndpoint)
            ApiServiceDescriptor.internalBinaryWrite(message.artifactEndpoint, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* org.apache.beam.model.pipeline.v1.ApiServiceDescriptor control_endpoint = 10; */
        if (message.controlEndpoint)
            ApiServiceDescriptor.internalBinaryWrite(message.controlEndpoint, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* repeated org.apache.beam.model.pipeline.v1.ArtifactInformation dependencies = 11; */
        for (let i = 0; i < message.dependencies.length; i++)
            ArtifactInformation.internalBinaryWrite(message.dependencies[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* repeated string runner_capabilities = 12; */
        for (let i = 0; i < message.runnerCapabilities.length; i++)
            writer.tag(12, WireType.LengthDelimited).string(message.runnerCapabilities[i]);
        /* map<string, string> metadata = 13; */
        for (let k of Object.keys(message.metadata))
            writer.tag(13, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k).tag(2, WireType.LengthDelimited).string(message.metadata[k]).join();
        /* repeated string sibling_worker_ids = 14; */
        for (let i = 0; i < message.siblingWorkerIds.length; i++)
            writer.tag(14, WireType.LengthDelimited).string(message.siblingWorkerIds[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message org.apache.beam.model.fn_execution.v1.ProvisionInfo
 */
export const ProvisionInfo = new ProvisionInfo$Type();
/**
 * @generated ServiceType for protobuf service org.apache.beam.model.fn_execution.v1.ProvisionService
 */
export const ProvisionService = new ServiceType("org.apache.beam.model.fn_execution.v1.ProvisionService", [
    { name: "GetProvisionInfo", options: {}, I: GetProvisionInfoRequest, O: GetProvisionInfoResponse }
]);
