// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetPublicAccessBlockConfigRequest, GetPublicAccessBlockConfigResponse } from "../models/models_0";
import { de_GetPublicAccessBlockConfigCommand, se_GetPublicAccessBlockConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPublicAccessBlockConfigCommand}.
 */
export interface GetPublicAccessBlockConfigCommandInput extends GetPublicAccessBlockConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetPublicAccessBlockConfigCommand}.
 */
export interface GetPublicAccessBlockConfigCommandOutput extends GetPublicAccessBlockConfigResponse, __MetadataBearer {}

/**
 * <p>Retrieve the public-access settings for a function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetPublicAccessBlockConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetPublicAccessBlockConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // GetPublicAccessBlockConfigRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetPublicAccessBlockConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetPublicAccessBlockConfigResponse
 * //   PublicAccessBlockConfig: { // PublicAccessBlockConfig
 * //     BlockPublicPolicy: true || false,
 * //     RestrictPublicResource: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPublicAccessBlockConfigCommandInput - {@link GetPublicAccessBlockConfigCommandInput}
 * @returns {@link GetPublicAccessBlockConfigCommandOutput}
 * @see {@link GetPublicAccessBlockConfigCommandInput} for command's `input` shape.
 * @see {@link GetPublicAccessBlockConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 * @public
 */
export class GetPublicAccessBlockConfigCommand extends $Command
  .classBuilder<
    GetPublicAccessBlockConfigCommandInput,
    GetPublicAccessBlockConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGirApiService", "GetPublicAccessBlockConfig", {})
  .n("LambdaClient", "GetPublicAccessBlockConfigCommand")
  .f(void 0, void 0)
  .ser(se_GetPublicAccessBlockConfigCommand)
  .de(de_GetPublicAccessBlockConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPublicAccessBlockConfigRequest;
      output: GetPublicAccessBlockConfigResponse;
    };
    sdk: {
      input: GetPublicAccessBlockConfigCommandInput;
      output: GetPublicAccessBlockConfigCommandOutput;
    };
  };
}
