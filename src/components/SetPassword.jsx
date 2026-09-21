import React from "react";
import { Input, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]/, "Password must contain at least 1 uppercase letter")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least 1 special character"
      ),

    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function SetPassword({ setPage }) {
  const form = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },

    onSubmit: async ({ value }) => {
      const result = passwordSchema.safeParse(value);

      if (!result.success) {
        console.log(result.error.issues);
        return;
      }

      console.log("Password:", value.password);

      // Registration completed
      setPage("home");
    },
  });

  return (
    <div className="h-screen overflow-hidden bg-[#294454] flex items-center justify-center p-2">
      <div className="w-full max-w-[1200px] h-[570px] bg-white rounded-xl overflow-hidden flex">

        {/* LEFT SIDEBAR */}
        <div className="w-[185px] bg-[#f7f8fa] px-4 py-7 relative flex-shrink-0">

          <p className="text-[11px] font-bold text-[#f5224b] !mb-2 !text-left">
            STEP 4 OF 4
          </p>

          <h2 className="text-[18px] leading-[22px] font-bold !text-black !mb-7 !text-left">
            Create your
            <br />
            account
          </h2>

          {/* STEPPER */}
          <div className="relative">

            <div className="absolute left-[13px] top-[15px] h-[265px] border-l border-dashed border-[#d8dce1]" />

            {/* Step 1 */}
            <div className="relative flex gap-3 mb-9">
              <div className="z-10 w-[27px] h-[27px] rounded-full bg-[#20c4b5] flex items-center justify-center text-white text-[12px]">
                <CheckOutlined />
              </div>

              <div>
                <p className="text-[10px] font-semibold text-[#30465b] leading-3">
                  Mobile number
                </p>
                <p className="text-[9px] font-medium text-[#20b8aa] mt-1">
                  Verified
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex gap-3 mb-9">
              <div className="z-10 w-[27px] h-[27px] rounded-full bg-[#20c4b5] flex items-center justify-center text-white text-[12px]">
                <CheckOutlined />
              </div>

              <div>
                <p className="text-[10px] font-semibold text-[#30465b] leading-3">
                  Personal details
                </p>
                <p className="text-[9px] font-medium text-[#20b8aa] mt-1">
                  Verified
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex gap-3 mb-9">
              <div className="z-10 w-[27px] h-[27px] rounded-full bg-[#20c4b5] flex items-center justify-center text-white text-[12px]">
                <CheckOutlined />
              </div>

              <div>
                <p className="text-[10px] font-semibold text-[#30465b] leading-3">
                  Address
                </p>
                <p className="text-[9px] font-medium text-[#20b8aa] mt-1">
                  Verified
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex gap-3">
              <div className="z-10 w-[27px] h-[27px] rounded-full bg-[#f5224b] flex items-center justify-center text-white text-[11px]">
                4
              </div>

              <div>
                <p className="text-[10px] font-semibold text-[#f5224b] leading-3">
                  Set password
                </p>
                <p className="text-[9px] font-medium text-[#f5224b] mt-1">
                  In progress
                </p>
              </div>
            </div>

          </div>

          {/* Decorative circles */}
          <div className="absolute -bottom-8 -left-8 w-[115px] h-[115px] rounded-full bg-[#eef3f9]" />
          <div className="absolute -bottom-8 -left-4 w-[75px] h-[75px] rounded-full bg-[#e4ebf4]" />
        </div>

        {/* RIGHT CONTENT */}
        

        <div className="flex-1 px-8 py-6 !text-left">
            <div className="border border-[#e1e5e9] rounded-xl p-5 mt-2">

          <p
            onClick={() => setPage("address")}
            className="text-red-500 text-xs font-semibold cursor-pointer mt-1 mb-2 !text-left"
          >
            ← BACK
          </p>

          <h1 className="!text-[30px] font-bold !text-black !mb-2 !text-left">
            Set your password
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >

            {/* New Password */}
            <form.Field
              name="password"
              validators={{
                onChange: ({ value }) => {
                  const result = passwordSchema.shape.password.safeParse(value);

                  return result.success
                    ? undefined
                    : result.error.issues[0].message;
                },
              }}
            >
              {(field) => {
                const password = field.state.value;

                const hasSixCharacters = password.length >= 6;
                const hasUppercase = /[A-Z]/.test(password);
                const hasSpecial =
                  /[!@#$%^&*(),.?":{}|<>]/.test(password);

                return (
                  <>
                    <div className="mb-4">
                      <label className="block !text-[13px] font-semibold text-[#687685] !mb-2 !text-left">
                        New password
                      </label>

                      <Input.Password
                        placeholder="Enter new password"
                        value={password}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="!h-[40px] !rounded-md"
                      />
                    </div>

                    {/* Confirm Password */}
                    <form.Field
                      name="confirmPassword"
                      validators={{
                        onChange: ({ value }) => {
                          if (!value) {
                            return "Please confirm your password";
                          }

                          if (value !== password) {
                            return "Passwords do not match";
                          }

                          return undefined;
                        },
                      }}
                    >
                      {(confirmField) => (
                        <div className="mb-5">
                          <label className="block !text-[13px] font-semibold text-[#687685] !mb-2 !text-left">
                            Confirm password
                          </label>

                          <Input.Password
                            placeholder="Confirm your password"
                            value={confirmField.state.value}
                            onChange={(e) =>
                              confirmField.handleChange(e.target.value)
                            }
                            className="!h-[40px] !rounded-md"
                          />

                          <div className="h-3 mt-1">
                            {confirmField.state.meta.errors.length > 0 && (
                              <p className="text-red-500 text-[10px]">
                                {confirmField.state.meta.errors[0]}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </form.Field>

                    {/* Requirements */}
                    <div className="text-left mb-8">
                      <p className="text-[13px] !font-semibold text-[#687685] mb-3">
                        Password requirements
                      </p>

                      <p
                        className={`text-[12px] ${
                          hasSixCharacters
                            ? "text-[#20b8aa]"
                            : "text-[#7b8794]"
                        }`}
                      >
                        {hasSixCharacters ? "✓" : "○"} At least 6 characters
                      </p>

                      <p
                        className={`text-[12px] ${
                          hasUppercase
                            ? "text-[#20b8aa]"
                            : "text-[#7b8794]"
                        }`}
                      >
                        {hasUppercase ? "✓" : "○"} At least 1 uppercase letter
                      </p>

                      <p
                        className={`text-[12px] ${
                          hasSpecial
                            ? "text-[#20b8aa]"
                            : "text-[#7b8794]"
                        }`}
                      >
                        {hasSpecial ? "✓" : "○"} At least 1 special character
                      </p>
                    </div>

                    {/* Continue */}
                    <div className="flex justify-start">
                      <Button
                        htmlType="submit"
                        type="primary"
                        className="!h-[40px] !w-[150px] !bg-[#f5224b] !border-[#f5224b] !rounded-md !text-[11px] !font-semibold"
                      >
                        Continue
                      </Button>
                    </div>
                  </>
                );
              }}
            </form.Field>

          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetPassword;