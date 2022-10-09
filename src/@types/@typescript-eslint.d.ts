/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * for using variable message
 */
import type { ReportDescriptor } from "@typescript-eslint/utils/dist/ts-eslint"
import type {
  RuleModule,
  RuleContext as RuleContextOrigin,
} from "@typescript-eslint/utils/dist/ts-eslint/Rule"
import type {
  ValidTestCase,
  InvalidTestCase as InvalidTestCaseOrigin,
} from "@typescript-eslint/utils/dist/ts-eslint/RuleTester"

declare module "@typescript-eslint/utils/dist/ts-eslint" {
  interface RuleContext<TMessageIds extends string> extends RuleContextOrigin {
    report(
      descriptor: Partial<ReportDescriptor<TMessageIds>> & {
        message: string
      },
    )
  }

  interface InvalidTestCase<
    TMessageIds extends string,
    TOptions extends Readonly<unknown[]>,
  > extends InvalidTestCaseOrigin,
      ValidTestCase<TOptions> {
    readonly errors: readonly string[]
  }

  type RunTests<
    TMessageIds extends string,
    TOptions extends Readonly<unknown[]>,
  > = {
    readonly invalid: readonly InvalidTestCase<TMessageIds, TOptions>[]
  }

  class RuleTesterBase {
    run<TMessageIds extends string, TOptions extends Readonly<unknown[]>>(
      ruleName: string,
      rule: RuleModule<TMessageIds, TOptions>,
      tests: RunTests<TMessageIds, TOptions>,
    ): void
  }
}
