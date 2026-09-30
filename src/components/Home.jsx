import React, { useState } from "react";
import { Button, Card, Input } from "antd";
import { useForm } from "@tanstack/react-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

// ================= VALIDATION =================

const mobileSchema = z
  .string()
  .regex(/^[0-9]{10}$/, "Mobile number must be 10 digits");

const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters");

const otpSchema = z
  .string()
  .regex(/^[0-9]{6}$/, "OTP must be 6 digits");

function Home({ setPage, startWithOTP = false }) {
  const { t } = useTranslation();

  const [isSignup, setIsSignup] = useState(startWithOTP);
  const [isOTP, setIsOTP] = useState(startWithOTP);

  // ================= LOGIN FORM =================

  const loginForm = useForm({
    defaultValues: {
      mobile: "",
      password: "",
    },

    onSubmit: async ({ value }) => {
      const result = z
        .object({
          mobile: mobileSchema,
          password: passwordSchema,
        })
        .safeParse(value);

      if (!result.success) {
        return;
      }

      console.log("Login:", value);
    },
  });

  // ================= SIGNUP FORM =================

  const signupForm = useForm({
    defaultValues: {
      mobile: "",
    },

    onSubmit: async ({ value }) => {
      const result = z
        .object({
          mobile: mobileSchema,
        })
        .safeParse(value);

      if (!result.success) {
        return;
      }

      setIsOTP(true);
    },
  });

  // ================= OTP FORM =================

  const otpForm = useForm({
    defaultValues: {
      otp: ["", "", "", "", "", ""],
    },

    onSubmit: async ({ value }) => {
      const otpValue = value.otp.join("");

      const result = otpSchema.safeParse(otpValue);

      if (!result.success) {
        return;
      }

      console.log("OTP:", otpValue);

      setPage("information");
    },
  });

  // Field aliases
  const LoginField = loginForm.Field;
  const SignupField = signupForm.Field;
  const OtpField = otpForm.Field;

  return (
    <div
      className="
        min-h-screen
        bg-[#294050]
        flex
        flex-col
        lg:flex-row
        items-center
        justify-center
        gap-10
        px-5
        sm:px-8
        lg:px-20
        py-24
        lg:py-20
        relative
      "
    >
      {/* ================= LEFT SIDE ================= */}

      <div
        className="
          w-full
          lg:w-1/2
          text-left
          flex
          flex-col
          items-start
        "
      >
        <h1
          className="
            !text-white
            !text-[40px]
            !leading-[48px]
            !sm:text-[48px]
            !sm:leading-[56px]
            !font-semibold
          "
        >
          {t("home.title")}
          <br />
          {t("home.titleLine2")}
        </h1>

        <p
          className="
            !text-gray-300
            !text-[18px]
            !leading-[28px]
            !font-normal
            !w-full
            !max-w-[450px]
            !mt-4
          "
        >
          {t("home.description")}
        </p>

        {/* Stats */}

        <div
          className="
            flex
            flex-wrap
            gap-6
            sm:gap-10
            mt-6
          "
        >
          <div>
            <h3
              className="
                !text-white
                !text-[24px]
                !leading-[32px]
                !font-semibold
              "
            >
              200+
            </h3>

            <p
              className="
                !text-gray-400
                !text-[14px]
                !leading-[20px]
                !font-normal
              "
            >
              {t("home.verifiedDoctors")}
            </p>
          </div>

          <div>
            <h3
              className="
                !text-white
                !text-[24px]
                !leading-[32px]
                !font-semibold
              "
            >
              15+
            </h3>

            <p
              className="
                !text-gray-400
                !text-[14px]
                !leading-[20px]
                !Sfont-normal
              "
            >
              {t("home.specialties")}
            </p>
          </div>

          <div>
            <h3
              className="
                !text-white
                !text-[24px]
                !leading-[32px]
                !font-semibold
              "
            >
              {t("home.online")}
            </h3>

            <p
              className="
                !text-gray-400
                !text-[14px]
                !leading-[20px]
                !Sfont-normal
              "
            >
              {t("home.consultFromHome")}
            </p>
          </div>
        </div>

        <Button
          className="
            !mt-6
            !rounded-full
            !bg-[#0EA46A]
            !border-none
            !text-[#06483c]
            !text-[16px]
            !leading-[24px]
            !font-semibold
          "
        >
          {t("home.doctorsOnline")}
        </Button>
      </div>

      {/* ================= RIGHT SIDE ================= */}

      <div
        className="
          w-full
          lg:w-1/2
          flex
          justify-center
        "
      >
        <Card
          className="
            !w-full
            !max-w-[650px]
            !min-h-[400px]
            !h-auto
            !rounded-2xl
            !text-left
          "
          bordered={false}
        >
          {/* ================= LOGIN ================= */}

          {!isSignup && !isOTP && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                loginForm.handleSubmit();
              }}
            >
              <h2
                className="
                  text-[24px]
                  leading-[32px]
                  font-semibold
                  !text-black
                "
              >
                {t("login.welcomeBack")}
              </h2>

              <p
                className="
                  text-gray-500
                  text-[16px]
                  leading-[24px]
                  font-normal
                  !mt-2
                "
              >
                {t("login.description")}
              </p>

              {/* Mobile */}

              <p
                className="
                  text-gray-600
                  text-[14px]
                  leading-[20px]
                  font-medium
                  !mt-6
                  !mb-2
                "
              >
                {t("login.mobileNumber")}
              </p>

              <div className="flex border border-red-500 rounded-lg overflow-hidden">
                <div
                  className="
                    px-4
                    flex
                    items-center
                    bg-gray-100
                    text-[16px]
                    leading-[24px]
                    font-normal
                  "
                >
                  +977
                </div>

                <LoginField
                  name="mobile"
                  validators={{
                    onChange: ({ value }) => {
                      const result =
                        mobileSchema.safeParse(value);

                      if (!result.success) {
                        return result.error.issues[0].message;
                      }

                      return undefined;
                    },
                  }}
                >
                  {(field) => (
                    <Input
                      bordered={false}
                      placeholder="98XXXXXXXX"
                      value={field.state.value}
                      className="
                        !text-[16px]
                        !leading-[24px]
                      "
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      onBlur={field.handleBlur}
                    />
                  )}
                </LoginField>
              </div>

              {loginForm.state.values.mobile &&
                loginForm.getFieldMeta("mobile")?.errors
                  ?.length > 0 && (
                  <p
                    className="
                      text-red-500
                      text-[12px]
                      leading-[16px]
                      font-normal
                      mt-1
                    "
                  >
                    {
                      loginForm.getFieldMeta("mobile")
                        .errors[0]
                    }
                  </p>
                )}

              {/* Password */}

              <p
                className="
                  text-gray-600
                  text-[14px]
                  leading-[20px]
                  font-medium
                  !mt-2
                  !mb-2
                "
              >
                {t("login.password")}
              </p>

              <div className="flex border border-red-500 rounded-lg overflow-hidden">
                <LoginField
                  name="password"
                  validators={{
                    onChange: ({ value }) => {
                      const result =
                        passwordSchema.safeParse(value);

                      if (!result.success) {
                        return result.error.issues[0].message;
                      }

                      return undefined;
                    },
                  }}
                >
                  {(field) => (
                    <Input.Password
                      bordered={false}
                      placeholder={t("login.enterPassword")}
                      value={field.state.value}
                      className="
                        !text-[16px]
                        !leading-[24px]
                      "
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      onBlur={field.handleBlur}
                    />
                  )}
                </LoginField>
              </div>

              <p
                className="
                  flex
                  flex-wrap
                  justify-between
                  gap-2
                  text-gray-400
                  text-[14px]
                  leading-[20px]
                  font-normal
                  !mt-2
                "
              >
                {t("login.forgotPassword")}

                <span className="text-red-500 text-[14px] leading-[20px] font-medium cursor-pointer">
                  {t("login.loginWithOtp")}
                </span>
              </p>

              <Button
                type="primary"
                htmlType="submit"
                block
                className="
                  !mt-5
                  !h-10
                  !rounded-lg
                  !bg-[#f5224b]
                  !border-none
                  !text-[16px]
                  !leading-[24px]
                  !font-semibold
                "
              >
                {t("login.login")}
              </Button>

              <p
                className="
                  text-gray-400
                  text-[12px]
                  leading-[16px]
                  font-normal
                  !mt-2
                  !text-center
                "
              >
                {t("login.noAccount")}{" "}

                <span
                  onClick={() => setIsSignup(true)}
                  className="
                    text-red-500
                    text-[12px]
                    leading-[16px]
                    font-medium
                    cursor-pointer
                  "
                >
                  {t("login.signup")}
                </span>
              </p>
            </form>
          )}

          {/* ================= SIGN UP ================= */}

          {isSignup && !isOTP && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                signupForm.handleSubmit();
              }}
            >
              <h2
                className="
                  text-[24px]
                  leading-[32px]
                  font-semibold
                  !text-black
                "
              >
                {t("signup.title")}
              </h2>

              <p
                className="
                  text-gray-500
                  text-[16px]
                  leading-[24px]
                  font-normal
                  !mt-2
                "
              >
                {t("signup.description")}
              </p>

              <p
                className="
                  text-gray-600
                  text-[14px]
                  leading-[20px]
                  font-medium
                  !mt-6
                  !mb-2
                "
              >
                {t("signup.mobileNumber")}
              </p>

              <div className="flex border border-red-500 rounded-lg overflow-hidden">
                <div
                  className="
                    px-4
                    flex
                    items-center
                    bg-gray-100
                    text-[16px]
                    leading-[24px]
                    font-normal
                  "
                >
                  +977
                </div>

                <SignupField
                  name="mobile"
                  validators={{
                    onChange: ({ value }) => {
                      const result =
                        mobileSchema.safeParse(value);

                      if (!result.success) {
                        return result.error.issues[0].message;
                      }

                      return undefined;
                    },
                  }}
                >
                  {(field) => (
                    <Input
                      bordered={false}
                      placeholder="98XXXXXXXX"
                      value={field.state.value}
                      className="
                        !text-[16px]
                        !leading-[24px]
                      "
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      onBlur={field.handleBlur}
                    />
                  )}
                </SignupField>
              </div>

              <p
                className="
                  text-gray-400
                  text-[12px]
                  leading-[16px]
                  font-normal
                  !mt-2
                "
              >
                {t("signup.otpMessage")}
              </p>

              <Button
                type="primary"
                htmlType="submit"
                block
                className="
                  !mt-5
                  !w-40
                  !h-10
                  !rounded-lg
                  !bg-[#f5224b]
                  !border-none
                  !text-[16px]
                  !leading-[24px]
                  !font-semibold
                "
              >
                {t("signup.continue")}
              </Button>

              <p
                className="
                  text-gray-400
                  text-[12px]
                  leading-[16px]
                  font-normal
                  !mt-4
                "
              >
                {t("signup.terms")}
              </p>

              <p
                className="
                  text-gray-400
                  text-[14px]
                  leading-[20px]
                  font-medium
                  !text-left
                "
              >
                {t("signup.haveAccount")}{" "}

                <span
                  onClick={() => setIsSignup(false)}
                  className="
                    text-red-500
                    text-[14px]
                    leading-[20px]
                    font-medium
                    cursor-pointer
                  "
                >
                  {t("signup.login")}
                </span>
              </p>
            </form>
          )}

          {/* ================= OTP ================= */}

          {isSignup && isOTP && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                otpForm.handleSubmit();
              }}
            >
              <p
                onClick={() => setIsOTP(false)}
                className="
                  text-red-500
                  text-[14px]
                  leading-[20px]
                  font-medium
                  cursor-pointer
                  mt-4
                "
              >
                ← {t("otp.back")}
              </p>

              <p
                className="
                  text-[12px]
                  leading-[16px]
                  font-semibold
                  cursor-pointer
                  !mt-1
                "
              >
                {t("otp.step")}
              </p>

              <h2
                className="
                  text-[24px]
                  leading-[32px]
                  font-semibold
                  !text-black
                  !mt-2
                "
              >
                {t("otp.title")}
              </h2>

              <p
                className="
                  text-gray-500
                  text-[16px]
                  leading-[24px]
                  font-normal
                  !mt-2
                "
              >
                {t("otp.description")}
                <br />
                {t("otp.enterCode")}
              </p>

              {/* OTP Boxes */}

              <div className="flex flex-wrap gap-2 sm:gap-3 !mt-4">
                {otpForm.state.values.otp.map(
                  (value, index) => (
                    <OtpField
                      key={index}
                      name={`otp[${index}]`}
                    >
                      {(field) => (
                        <Input
                          id={`otp-${index}`}
                          value={field.state.value}
                          maxLength={1}
                          className="
                            !w-10
                            sm:!w-12
                            !h-10
                            sm:!h-12
                            !text-center
                            !text-[20px]
                            !leading-[28px]
                            !font-semibold
                            !border-gray-300
                          "
                          onChange={(e) => {
                            const newValue =
                              e.target.value;

                            if (
                              !/^[0-9]?$/.test(
                                newValue
                              )
                            ) {
                              return;
                            }

                            field.handleChange(
                              newValue
                            );

                            if (
                              newValue &&
                              index < 5
                            ) {
                              document
                                .getElementById(
                                  `otp-${index + 1}`
                                )
                                ?.focus();
                            }
                          }}
                          onKeyDown={(e) => {
                            if (
                              e.key === "Backspace" &&
                              !field.state.value &&
                              index > 0
                            ) {
                              document
                                .getElementById(
                                  `otp-${index - 1}`
                                )
                                ?.focus();
                            }
                          }}
                        />
                      )}
                    </OtpField>
                  )
                )}
              </div>

              {/* Resend OTP */}

              <p
                className="
                  text-gray-400
                  text-[14px]
                  leading-[20px]
                  font-normal
                  !mt-3
                "
              >
                <span className="text-red-500 text-[14px] leading-[20px] font-medium cursor-pointer">
                  {t("otp.resend")}
                </span>
              </p>

              {/* Verify */}

              <Button
                type="primary"
                htmlType="submit"
                block
                className="
                  !mt-5
                  !w-40
                  !h-10
                  !rounded-lg
                  !bg-[#f5224b]
                  !border-none
                  !text-[16px]
                  !leading-[24px]
                  !font-semibold
                "
              >
                {t("otp.verify")}
              </Button>

              <p
                className="
                  text-gray-400
                  text-[12px]
                  leading-[16px]
                  font-normal
                  !mt-4
                "
              >
                {t("otp.terms")}
              </p>

              <p
                className="
                  text-gray-400
                  text-[14px]
                  leading-[20px]
                  font-medium
                  !text-left
                "
              >
                {t("otp.haveAccount")}{" "}

                <span
                  onClick={() => setIsSignup(false)}
                  className="
                    text-red-500
                    text-[14px]
                    leading-[20px]
                    font-medium
                    cursor-pointer
                  "
                >
                  {t("otp.login")}
                </span>
              </p>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Home;