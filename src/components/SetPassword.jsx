import React from "react";
import { Input, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { useTranslation } from "react-i18next";

// ================= VALIDATION =================

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

  // ================= FORM =================

  const form = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },

    // ================= SUBMIT =================

    onSubmit: async ({ value }) => {
      // ================= VALIDATE PASSWORD =================

      const result = passwordSchema.safeParse(value);

      if (!result.success) {
        console.log(
          "Password validation failed:",
          result.error.issues
        );
        return;
      }

      // ================= GET PENDING USER =================

      const pendingUserString =
        localStorage.getItem("pendingUser");

      if (!pendingUserString) {
        console.error(
          "No pending user information found."
        );

        alert(
          "Your signup information could not be found. Please start the signup process again."
        );

        return;
      }

      // ================= PARSE PENDING USER =================

      let pendingUser;

      try {
        pendingUser = JSON.parse(pendingUserString);
      } catch (error) {
        console.error(
          "Invalid pending user data:",
          error
        );

        localStorage.removeItem("pendingUser");

        alert(
          "Your signup information is invalid. Please start again."
        );

        return;
      }

      // ================= GET EXISTING USERS =================

      const existingUsers = JSON.parse(
        localStorage.getItem("users") || "[]"
      );

      // ================= CHECK DUPLICATE MOBILE =================

      const mobileAlreadyExists = existingUsers.some(
        (user) => user.mobile === pendingUser.mobile
      );

      if (mobileAlreadyExists) {
        console.error(
          "An account with this mobile number already exists."
        );

        alert(
          "An account with this mobile number already exists."
        );

        return;
      }

      // ================= CREATE COMPLETE USER =================

      const newUser = {
        ...pendingUser,

        password: value.password,

        createdAt: new Date().toISOString(),
      };

      // ================= SAVE USER =================

      const updatedUsers = [
        ...existingUsers,
        newUser,
      ];

      localStorage.setItem(
        "users",
        JSON.stringify(updatedUsers)
      );

      // ================= SAVE CURRENT USER =================

      localStorage.setItem(
        "currentUser",
        JSON.stringify(newUser)
      );

      // ================= REMOVE TEMPORARY DATA =================

      localStorage.removeItem("pendingUser");
      localStorage.removeItem("pendingMobile");

      // ================= DEBUG =================

      console.log(
        "Registered user:",
        newUser
      );

      console.log(
        "All registered users:",
        updatedUsers
      );

      console.log(
        "Current user:",
        newUser
      );

      // ================= OPEN DASHBOARD =================

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
          lg:px-6
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
            lg:min-h-[460px]
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

            {/* ================= OVERLINE ================= */}

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

            {/* ================= HEADING ================= */}

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

              <div
                className="
                  absolute
                  left-[13px]
                  top-[15px]
                  h-[220px]
                  border-l
                  border-dashed
                  border-[#d8dce1]
                "
              />

              {/* STEP 1 */}

              <div className="relative flex gap-3 mb-6">

                <div
                  className="
                    z-10
                    w-[27px]
                    h-[27px]
                    rounded-full
                    bg-[#20c4b5]
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  <CheckOutlined className="text-[12px]" />
                </div>

                <div>
                  <p className="text-[12px] leading-[16px] font-medium text-[#30465b]">
                    {t("siderbar.mobileNumber")}
                  </p>

                  <p className="text-[12px] leading-[16px] font-medium text-[#20b8aa] mt-1">
                    {t("siderbar.verified")}
                  </p>
                </div>

              </div>

              {/* STEP 2 */}

              <div className="relative flex gap-3 mb-6">

                <div
                  className="
                    z-10
                    w-[27px]
                    h-[27px]
                    rounded-full
                    bg-[#20c4b5]
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  <CheckOutlined className="text-[12px]" />
                </div>

                <div>
                  <p className="text-[12px] leading-[16px] font-medium text-[#30465b]">
                    {t("siderbar.personalDetails")}
                  </p>

                  <p className="text-[12px] leading-[16px] font-medium text-[#20b8aa] mt-1">
                    {t("siderbar.verified")}
                  </p>
                </div>

              </div>

              {/* STEP 3 */}

              <div className="relative flex gap-3 mb-6">

                <div
                  className="
                    z-10
                    w-[27px]
                    h-[27px]
                    rounded-full
                    bg-[#20c4b5]
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  <CheckOutlined className="text-[12px]" />
                </div>

                <div>
                  <p className="text-[12px] leading-[16px] font-medium text-[#30465b]">
                    {t("siderbar.address")}
                  </p>

                  <p className="text-[12px] leading-[16px] font-medium text-[#20b8aa] mt-1">
                    {t("siderbar.verified")}
                  </p>
                </div>

              </div>

              {/* STEP 4 */}

              <div className="relative flex gap-3">

                <div
                  className="
                    z-10
                    w-[27px]
                    h-[27px]
                    rounded-full
                    bg-[#f5224b]
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  <span className="text-[12px] leading-[16px] font-medium">
                    4
                  </span>
                </div>

                <div>
                  <p className="text-[12px] leading-[16px] font-medium text-[#f5224b]">
                    {t("siderbar.setPassword")}
                  </p>

                  <p className="text-[12px] leading-[16px] font-medium text-[#f5224b] mt-1">
                    {t("siderbar.inProgress")}
                  </p>
                </div>

              </div>

            </div>

            {/* ================= MOBILE / TABLET STEPPER ================= */}

            <div className="lg:hidden w-full">

              <div className="flex items-start w-full">

                {/* STEP 1 */}

                <div className="flex flex-col items-center flex-1 min-w-0">

                  <div
                    className="
                      w-7
                      h-7
                      rounded-full
                      bg-[#20c4b5]
                      flex
                      items-center
                      justify-center
                      text-white
                      flex-shrink-0
                    "
                  >
                    <CheckOutlined className="text-[12px]" />
                  </div>

                  <p className="text-[10px] sm:text-[12px] leading-[16px] font-medium text-[#30465b] mt-1 text-center max-w-[70px]">
                    {t("siderbar.mobileNumber")}
                  </p>

                  <p className="text-[10px] sm:text-[12px] leading-[16px] font-medium text-[#20b8aa] mt-0.5">
                    {t("siderbar.verified")}
                  </p>

                </div>

                <div className="flex-1 border-t border-dashed border-[#d8dce1] mt-[13px]" />

                {/* STEP 2 */}

                <div className="flex flex-col items-center flex-1 min-w-0">

                  <div
                    className="
                      w-7
                      h-7
                      rounded-full
                      bg-[#20c4b5]
                      flex
                      items-center
                      justify-center
                      text-white
                      flex-shrink-0
                    "
                  >
                    <CheckOutlined className="text-[12px]" />
                  </div>

                  <p className="text-[10px] sm:text-[12px] leading-[16px] font-medium text-[#30465b] mt-1 text-center max-w-[70px]">
                    {t("siderbar.personalDetails")}
                  </p>

                  <p className="text-[10px] sm:text-[12px] leading-[16px] font-medium text-[#20b8aa] mt-0.5">
                    {t("siderbar.verified")}
                  </p>

                </div>

                <div className="flex-1 border-t border-dashed border-[#d8dce1] mt-[13px]" />

                {/* STEP 3 */}

                <div className="flex flex-col items-center flex-1 min-w-0">

                  <div
                    className="
                      w-7
                      h-7
                      rounded-full
                      bg-[#20c4b5]
                      flex
                      items-center
                      justify-center
                      text-white
                      flex-shrink-0
                    "
                  >
                    <CheckOutlined className="text-[12px]" />
                  </div>

                  <p className="text-[10px] sm:text-[12px] leading-[16px] font-medium text-[#30465b] mt-1 text-center max-w-[70px]">
                    {t("siderbar.address")}
                  </p>

                  <p className="text-[10px] sm:text-[12px] leading-[16px] font-medium text-[#20b8aa] mt-0.5">
                    {t("siderbar.verified")}
                  </p>

                </div>

                <div className="flex-1 border-t border-dashed border-[#d8dce1] mt-[13px]" />

                {/* STEP 4 */}

                <div className="flex flex-col items-center flex-1 min-w-0">

                  <div
                    className="
                      w-7
                      h-7
                      rounded-full
                      bg-[#f5224b]
                      flex
                      items-center
                      justify-center
                      text-white
                      flex-shrink-0
                    "
                  >
                    <span className="text-[12px] leading-[16px] font-medium">
                      4
                    </span>
                  </div>

                  <p className="text-[10px] sm:text-[12px] leading-[16px] font-medium text-[#f5224b] mt-1 text-center max-w-[70px]">
                    {t("siderbar.setPassword")}
                  </p>

                  <p className="text-[10px] sm:text-[12px] leading-[16px] font-medium text-[#f5224b] mt-0.5">
                    {t("siderbar.inProgress")}
                  </p>

                </div>

              </div>

            </div>

            {/* ================= DECORATIVE CIRCLES ================= */}

            <div
              className="
                hidden
                lg:block
                absolute
                -bottom-8
                -left-8
                w-[115px]
                h-[115px]
                rounded-full
                bg-[#eef3f9]
              "
            />

            <div
              className="
                hidden
                lg:block
                absolute
                -bottom-8
                -left-4
                w-[75px]
                h-[75px]
                rounded-full
                bg-[#e4ebf4]
              "
            />

          </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div
            className="
              flex-1
              min-w-0
              px-4
              sm:px-6
              lg:px-8
              py-4
              lg:py-3
              overflow-visible
              !text-left
            "
          >

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

              {/* ================= BACK ================= */}

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

              {/* ================= HEADING ================= */}

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

              {/* ================= FORM ================= */}

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
                        passwordSchema.shape.password.safeParse(
                          value
                        );

                      return result.success
                        ? undefined
                        : result.error.issues[0].message;
                    },
                  }}
                >
                  {(field) => {

                    const password = field.state.value;

                    const hasError =
                      field.state.meta.errors.length > 0;

                    const hasSixCharacters =
                      password.length >= 6;

                    const hasUppercase =
                      /[A-Z]/.test(password);

                    const hasSpecial =
                      /[!@#$%^&*(),.?":{}|<>]/.test(password);

                    return (
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
                          placeholder={
                            hasError
                              ? field.state.meta.errors[0]
                              : t(
                                  "information.newPassword"
                                )
                          }
                          value={password}
                          onChange={(e) =>
                            field.handleChange(
                              e.target.value
                            )
                          }
                          onBlur={field.handleBlur}
                          status={hasError ? "error" : ""}
                          className="
                            !h-[32px]
                            !rounded-md
                            !text-[16px]
                            !leading-[24px]
                            !w-full
                          "
                        />

                        {/* ================= REQUIREMENTS ================= */}

                        <div className="text-left mt-3">

                          <p
                            className="
                              text-[14px]
                              leading-[20px]
                              font-medium
                              text-[#687685]
                              mb-2
                            "
                          >
                            {t(
                              "information.passwordRequirements"
                            )}
                          </p>

                          {/* 6 Characters */}

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
                            {t(
                              "information.atLeastSixCharacters"
                            )}
                          </p>

                          {/* Uppercase */}

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
                            {t(
                              "information.atLeastOneUppercaseLetter"
                            )}
                          </p>

                          {/* Special Character */}

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
                            {t(
                              "information.atLeastOneSpecialCharacter"
                            )}
                          </p>

                        </div>

                      </div>
                    );
                  }}
                </PasswordField>

                {/* ================= CONFIRM PASSWORD ================= */}

                <PasswordField
                  name="confirmPassword"
                  validators={{
                    onChange: ({ value }) => {

                      if (!value) {
                        return "Please confirm your password";
                      }

                      const password =
                        form.getFieldValue("password");

                      if (value !== password) {
                        return "Passwords do not match";
                      }

                      return undefined;
                    },
                  }}
                >
                  {(confirmField) => {

                    const confirmPassword =
                      confirmField.state.value;

                    const hasError =
                      confirmField.state.meta.errors.length > 0;

                    return (
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
                          {t(
                            "information.confirmPassword"
                          )}
                        </label>

                        <Input.Password
                          placeholder={
                            hasError
                              ? confirmField.state.meta.errors[0]
                              : t(
                                  "information.confirmPassword"
                                )
                          }
                          value={confirmPassword}
                          onChange={(e) =>
                            confirmField.handleChange(
                              e.target.value
                            )
                          }
                          onBlur={confirmField.handleBlur}
                          status={hasError ? "error" : ""}
                          className="
                            !h-[32px]
                            !rounded-md
                            !text-[16px]
                            !leading-[24px]
                            !w-full
                          "
                        />

                      </div>
                    );
                  }}
                </PasswordField>

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

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SetPassword;