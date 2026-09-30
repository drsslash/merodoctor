import React from "react";
import { Input, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { useTranslation } from "react-i18next";

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(
        /[A-Z]/,
        "Password must contain at least 1 uppercase letter"
      )
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least 1 special character"
      ),

    confirmPassword: z
      .string()
      .min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function SetPassword({ setPage }) {
  const { t } = useTranslation();

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

  const PasswordField = form.Field;

  return (
    <div className="min-h-screen lg:h-screen bg-[#294454] flex flex-col lg:overflow-hidden">

      {/* ================= NAVBAR SPACE ================= */}

      <div className="h-[70px] sm:h-[82px] flex-shrink-0" />

      {/* ================= MAIN AREA ================= */}

      <div
        className="
          flex-1
          min-h-0
          flex
          items-start
          lg:items-center
          justify-center
          px-3
          sm:px-5
          pb-5
          overflow-y-auto
        "
      >

        {/* ================= MAIN CARD ================= */}

        <div
          className="
            w-full
            max-w-[1250px]
            bg-white
            rounded-xl
            overflow-hidden
            flex
            flex-col
            lg:flex-row
            lg:h-[480px]
          "
        >

          {/* ================= LEFT SIDEBAR ================= */}

          <div
            className="
              w-full
              lg:w-[185px]
              bg-[#f7f8fa]
              px-4
              sm:px-6
              lg:px-4
              py-4
              lg:py-5
              relative
              flex-shrink-0
            "
          >

            {/* Overline */}
            <p
              className="
                text-[12px]
                leading-[16px]
                font-semibold
                text-[#f5224b]
                !mb-1
                !text-left
              "
            >
              {t("siderbar.step4")}
            </p>

            {/* Heading H4 */}
            <h2
              className="
                text-[24px]
                leading-[32px]
                font-semibold
                !text-black
                !mb-4
                lg:!mb-5
                !text-left
              "
            >
              {t("signup.title")}
            </h2>

            {/* ================= DESKTOP STEPPER ================= */}

            <div className="hidden lg:block relative">

              <div className="absolute left-[13px] top-[15px] h-[220px] border-l border-dashed border-[#d8dce1]" />

              {/* Step 1 */}

              <div className="relative flex gap-3 mb-6">

                <div className="z-10 w-[27px] h-[27px] rounded-full bg-[#20c4b5] flex items-center justify-center text-white">
                  <CheckOutlined className="text-[12px]" />
                </div>

                <div>
                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#30465b]
                    "
                  >
                    {t("siderbar.mobileNumber")}
                  </p>

                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#20b8aa]
                      mt-1
                    "
                  >
                    {t("siderbar.verified")}
                  </p>
                </div>

              </div>

              {/* Step 2 */}

              <div className="relative flex gap-3 mb-6">

                <div className="z-10 w-[27px] h-[27px] rounded-full bg-[#20c4b5] flex items-center justify-center text-white">
                  <CheckOutlined className="text-[12px]" />
                </div>

                <div>
                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#30465b]
                    "
                  >
                    {t("siderbar.personalDetails")}
                  </p>

                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#20b8aa]
                      mt-1
                    "
                  >
                    {t("siderbar.verified")}
                  </p>
                </div>

              </div>

              {/* Step 3 */}

              <div className="relative flex gap-3 mb-6">

                <div className="z-10 w-[27px] h-[27px] rounded-full bg-[#20c4b5] flex items-center justify-center text-white">
                  <CheckOutlined className="text-[12px]" />
                </div>

                <div>
                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#30465b]
                    "
                  >
                    {t("siderbar.address")}
                  </p>

                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#20b8aa]
                      mt-1
                    "
                  >
                    {t("siderbar.verified")}
                  </p>
                </div>

              </div>

              {/* Step 4 */}

              <div className="relative flex gap-3">

                <div className="z-10 w-[27px] h-[27px] rounded-full bg-[#f5224b] flex items-center justify-center text-white">
                  <span className="text-[12px] leading-[16px] font-medium">
                    4
                  </span>
                </div>

                <div>
                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#f5224b]
                    "
                  >
                    {t("siderbar.setPassword")}
                  </p>

                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#f5224b]
                      mt-1
                    "
                  >
                    {t("siderbar.inProgress")}
                  </p>
                </div>

              </div>

            </div>

            {/* ================= MOBILE / TABLET STEPPER ================= */}

            <div className="lg:hidden w-full">

              <div className="flex items-start w-full">

                {/* Step 1 */}

                <div className="flex flex-col items-center flex-1 min-w-0">

                  <div className="w-7 h-7 rounded-full bg-[#20c4b5] flex items-center justify-center text-white flex-shrink-0">
                    <CheckOutlined className="text-[12px]" />
                  </div>

                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#30465b]
                      mt-1
                      text-center
                      max-w-[70px]
                    "
                  >
                    {t("siderbar.mobileNumber")}
                  </p>

                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#20b8aa]
                      mt-0.5
                    "
                  >
                    {t("siderbar.verified")}
                  </p>

                </div>

                {/* Line */}

                <div className="flex-1 border-t border-dashed border-[#d8dce1] mt-[13px]" />

                {/* Step 2 */}

                <div className="flex flex-col items-center flex-1 min-w-0">

                  <div className="w-7 h-7 rounded-full bg-[#20c4b5] flex items-center justify-center text-white flex-shrink-0">
                    <CheckOutlined className="text-[12px]" />
                  </div>

                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#30465b]
                      mt-1
                      text-center
                      max-w-[70px]
                    "
                  >
                    {t("siderbar.personalDetails")}
                  </p>

                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#20b8aa]
                      mt-0.5
                    "
                  >
                    {t("siderbar.verified")}
                  </p>

                </div>

                {/* Line */}

                <div className="flex-1 border-t border-dashed border-[#d8dce1] mt-[13px]" />

                {/* Step 3 */}

                <div className="flex flex-col items-center flex-1 min-w-0">

                  <div className="w-7 h-7 rounded-full bg-[#20c4b5] flex items-center justify-center text-white flex-shrink-0">
                    <CheckOutlined className="text-[12px]" />
                  </div>

                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#30465b]
                      mt-1
                      text-center
                      max-w-[70px]
                    "
                  >
                    {t("siderbar.address")}
                  </p>

                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#20b8aa]
                      mt-0.5
                    "
                  >
                    {t("siderbar.verified")}
                  </p>

                </div>

                {/* Line */}

                <div className="flex-1 border-t border-dashed border-[#d8dce1] mt-[13px]" />

                {/* Step 4 */}

                <div className="flex flex-col items-center flex-1 min-w-0">

                  <div className="w-7 h-7 rounded-full bg-[#f5224b] flex items-center justify-center text-white flex-shrink-0">
                    <span className="text-[12px] leading-[16px] font-medium">
                      4
                    </span>
                  </div>

                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#f5224b]
                      mt-1
                      text-center
                      max-w-[70px]
                    "
                  >
                    {t("siderbar.setPassword")}
                  </p>

                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#f5224b]
                      mt-0.5
                    "
                  >
                    {t("siderbar.inProgress")}
                  </p>

                </div>

              </div>

            </div>

            {/* ================= DECORATIVE CIRCLES ================= */}

            <div className="hidden lg:block absolute -bottom-8 -left-8 w-[115px] h-[115px] rounded-full bg-[#eef3f9]" />

            <div className="hidden lg:block absolute -bottom-8 -left-4 w-[75px] h-[75px] rounded-full bg-[#e4ebf4]" />

          </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div
            className="
              flex-1
              px-4
              sm:px-6
              lg:px-8
              py-4
              lg:py-3
              overflow-visible
              !text-left
            "
          >

            {/* ================= FORM BOX ================= */}

            <div
              className="
                border
                border-[#e1e5e9]
                rounded-xl
                p-4
                sm:p-5
                !mt-2
              "
            >

              {/* Back */}

              <p
                onClick={() => setPage("address")}
                className="
                  text-red-500
                  text-[14px]
                  leading-[20px]
                  font-medium
                  cursor-pointer
                  !mt-0
                  !mb-1
                  !text-left
                "
              >
                ← {t("otp.back")}
              </p>

              {/* Heading H4 */}

              <h1
                className="
                  !text-[24px]
                  !leading-[32px]
                  font-semibold
                  !text-black
                  !mb-2
                  !text-left
                "
              >
                {t("information.setpassword")}
              </h1>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  form.handleSubmit();
                }}
              >

                {/* ================= NEW PASSWORD ================= */}

                <PasswordField
                  name="password"
                  validators={{
                    onChange: ({ value }) => {
                      const result =
                        passwordSchema.shape.password.safeParse(value);

                      return result.success
                        ? undefined
                        : result.error.issues[0].message;
                    },
                  }}
                >
                  {(field) => {
                    const password = field.state.value;

                    const hasSixCharacters =
                      password.length >= 6;

                    const hasUppercase =
                      /[A-Z]/.test(password);

                    const hasSpecial =
                      /[!@#$%^&*(),.?":{}|<>]/.test(password);

                    return (
                      <>

                        {/* New Password */}

                        <div className="mb-3">

                          <label
                            className="
                              block
                              !text-[14px]
                              !leading-[20px]
                              font-medium
                              text-[#687685]
                              !mb-1
                              !text-left
                            "
                          >
                            {t("information.newPassword")}
                          </label>

                          <Input.Password
                            placeholder={t("information.newPassword")}
                            value={password}
                            onChange={(e) =>
                              field.handleChange(e.target.value)
                            }
                            onBlur={field.handleBlur}
                            className="
                              !h-[32px]
                              !rounded-md
                              !text-[16px]
                              !leading-[24px]
                              !w-full
                            "
                          />

                          <div className="h-2 mt-0.5">
                            {field.state.meta.isTouched &&
                              field.state.meta.errors.length > 0 && (
                                <p
                                  className="
                                    text-red-500
                                    text-[12px]
                                    leading-[16px]
                                    font-normal
                                    !text-left
                                  "
                                >
                                  {field.state.meta.errors[0]}
                                </p>
                              )}
                          </div>

                        </div>

                        {/* ================= CONFIRM PASSWORD ================= */}

                        <PasswordField
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

                            <div className="mb-3">

                              <label
                                className="
                                  block
                                  !text-[14px]
                                  !leading-[20px]
                                  font-medium
                                  text-[#687685]
                                  !mb-1
                                  !text-left
                                "
                              >
                                {t("information.confirmPassword")}
                              </label>

                              <Input.Password
                                placeholder={t("information.confirmPassword")}
                                value={confirmField.state.value}
                                onChange={(e) =>
                                  confirmField.handleChange(
                                    e.target.value
                                  )
                                }
                                onBlur={confirmField.handleBlur}
                                className="
                                  !h-[32px]
                                  !rounded-md
                                  !text-[16px]
                                  !leading-[24px]
                                  !w-full
                                "
                              />

                              <div className="h-2 mt-0.5">
                                {confirmField.state.meta.errors.length >
                                  0 && (
                                  <p
                                    className="
                                      text-red-500
                                      text-[12px]
                                      leading-[16px]
                                      font-normal
                                      !text-left
                                    "
                                  >
                                    {confirmField.state.meta.errors[0]}
                                  </p>
                                )}
                              </div>

                            </div>

                          )}
                        </PasswordField>

                        {/* ================= REQUIREMENTS ================= */}

                        <div className="text-left mb-4">

                          {/* Label Medium */}
                          <p
                            className="
                              text-[14px]
                              leading-[20px]
                              font-medium
                              text-[#687685]
                              mb-2
                            "
                          >
                            {t("information.passwordRequirements")}
                          </p>

                          {/* Body Small */}
                          <p
                            className={`
                              text-[14px]
                              leading-[20px]
                              font-normal
                              ${
                                hasSixCharacters
                                  ? "text-[#20b8aa]"
                                  : "text-[#7b8794]"
                              }
                            `}
                          >
                            {hasSixCharacters ? "✓" : "○"}{" "}
                            {t("information.atLeastSixCharacters")}
                          </p>

                          <p
                            className={`
                              text-[14px]
                              leading-[20px]
                              font-normal
                              ${
                                hasUppercase
                                  ? "text-[#20b8aa]"
                                  : "text-[#7b8794]"
                              }
                            `}
                          >
                            {hasUppercase ? "✓" : "○"}{" "}
                            {t("information.atLeastOneUppercaseLetter")}
                          </p>

                          <p
                            className={`
                              text-[14px]
                              leading-[20px]
                              font-normal
                              ${
                                hasSpecial
                                  ? "text-[#20b8aa]"
                                  : "text-[#7b8794]"
                              }
                            `}
                          >
                            {hasSpecial ? "✓" : "○"}{" "}
                            {t("information.atLeastOneSpecialCharacter")}
                          </p>

                        </div>

                        {/* ================= CONTINUE ================= */}

                        <div className="flex justify-start">

                          <Button
                            htmlType="submit"
                            type="primary"
                            className="
                              !h-[32px]
                              !w-full
                              sm:!w-[180px]
                              !bg-[#f5224b]
                              !border-[#f5224b]
                              !rounded-md
                              !text-[14px]
                              !leading-[20px]
                              !font-semibold
                            "
                          >
                            {t("signup.continue")}
                          </Button>

                        </div>

                      </>
                    );
                  }}
                </PasswordField>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SetPassword;