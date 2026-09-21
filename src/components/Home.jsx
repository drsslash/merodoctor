import React, { useState } from "react";
import { Button, Card, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useForm } from "@tanstack/react-form";
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

  return (
    <div className="min-h-screen bg-[#294454] flex items-center px-20">

      {/* ================= LEFT SIDE ================= */}

      <div className="w-1/2 !text-left">

        <h1 className="text-white text-4xl font-bold leading-tight">
          See a doctor
          <br />
          without leaving home
        </h1>

        <p className="text-gray-300 text-sm w-[450px] mt-4">
          Video consultations with 200+ verified doctors across
          15+ specialties. Book in under two minutes, pay with
          eSewa, Khalti or Connect IPS, and get your prescription
          digitally.
        </p>

        {/* Stats */}
        <div className="flex gap-10 mt-6">

          <div>
            <h3 className="text-white font-bold">200+</h3>
            <p className="text-gray-400 text-xs">
              Verified doctors
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold">15+</h3>
            <p className="text-gray-400 text-xs">
              Specialties
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold">
              Online
            </h3>
            <p className="text-gray-400 text-xs">
              Consult from home
            </p>
          </div>

        </div>

        <Button
          className="
            !mt-6
            !rounded-full
            !bg-[#17d69a]
            !border-none
            !text-[#06483c]
            !font-bold
          "
        >
          DOCTORS ONLINE NOW
        </Button>

      </div>

      {/* ================= RIGHT SIDE ================= */}

      <div className="w-1/2 flex justify-center">

        <Card
          className="!w-[650px] !h-[400px] !rounded-2xl !text-left"
          bordered={false}
        >

          {/* ================= LOGIN ================= */}

          {!isSignup && !isOTP && (
            <>
              <h2 className="text-xl font-bold !text-black">
                Welcome Back
              </h2>

              <p className="text-gray-500 text-xs !mt-2">
                Log in to manage your appointments and consultations.
              </p>

              {/* Mobile */}
              <p className="text-gray-600 text-xs font-semibold !mt-6 !mb-2">
                Mobile number
              </p>

              <div className="flex border border-red-500 rounded-lg overflow-hidden">

                <div className="px-4 flex items-center bg-gray-100 text-xs">
                  +977
                </div>

                <loginForm.Field
                  name="mobile"
                  validators={{
                    onChange: ({ value }) => {
                      const result = mobileSchema.safeParse(value);

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
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      onBlur={field.handleBlur}
                    />
                  )}
                </loginForm.Field>

              </div>

              {loginForm.state.values.mobile &&
                loginForm.getFieldMeta("mobile")?.errors?.length > 0 && (
                  <p className="text-red-500 text-xs mt-1">
                    {loginForm.getFieldMeta("mobile").errors[0]}
                  </p>
                )}

              {/* Password */}
              <p className="text-gray-600 text-xs font-semibold !mt-2 !mb-2">
                Password
              </p>

              <div className="flex border border-red-500 rounded-lg overflow-hidden">

                <loginForm.Field
                  name="password"
                  validators={{
                    onChange: ({ value }) => {
                      const result = passwordSchema.safeParse(value);

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
                      placeholder="Enter your password"
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      onBlur={field.handleBlur}
                    />
                  )}
                </loginForm.Field>

              </div>

              <p className="flex justify-between text-gray-400 text-xs !mt-2">
                Forget Your Password?

                <span className="text-red-500 font-semibold cursor-pointer">
                  Login with OTP instead.
                </span>
              </p>

              <Button
                type="primary"
                block
                onClick={() => loginForm.handleSubmit()}
                className="
                  !mt-5
                  !h-10
                  !rounded-lg
                  !bg-[#f5224b]
                  !border-none
                "
              >
                Login
              </Button>

              <p className="text-gray-400 text-xs !mt-2 !text-center">
                Don't have an account?{" "}

                <span
                  onClick={() => setIsSignup(true)}
                  className="text-red-500 font-semibold cursor-pointer"
                >
                  Sign up
                </span>
              </p>
            </>
          )}

          {/* ================= SIGN UP ================= */}

          {isSignup && !isOTP && (
            <>
              <h2 className="text-xl font-bold !text-black">
                Create your account
              </h2>

              <p className="text-gray-500 text-xs !mt-2">
                Enter your mobile number to get started. We will check
                if you already have an account.
              </p>

              <p className="text-gray-600 text-xs font-semibold !mt-6 !mb-2">
                Mobile number
              </p>

              <div className="flex border border-red-500 rounded-lg overflow-hidden">

                <div className="px-4 flex items-center bg-gray-100 text-xs">
                  +977
                </div>

                <signupForm.Field
                  name="mobile"
                  validators={{
                    onChange: ({ value }) => {
                      const result = mobileSchema.safeParse(value);

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
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      onBlur={field.handleBlur}
                    />
                  )}
                </signupForm.Field>

              </div>

              <p className="text-gray-400 text-xs !mt-2">
                We will send a 6-digit OTP to verify this number.
              </p>

              <Button
                type="primary"
                block
                onClick={() => signupForm.handleSubmit()}
                className="
                  !mt-5
                  !w-40
                  !h-10
                  !rounded-lg
                  !bg-[#f5224b]
                  !border-none
                "
              >
                Continue
              </Button>

              <p className="text-gray-400 text-xs !mt-4">
                By continuing, you agree to our Terms of Service and
                Privacy Policy.
              </p>

              <p className="text-gray-400 !font-semibold !text-left">
                Already have an account?{" "}

                <span
                  onClick={() => setIsSignup(false)}
                  className="text-red-500 !font-semibold cursor-pointer"
                >
                  Log in
                </span>
              </p>
            </>
          )}

          {/* ================= OTP ================= */}

          {isSignup && isOTP && (
            <>
              <p
                onClick={() => setIsOTP(false)}
                className="text-red-500 text-xs font-semibold cursor-pointer mt-4"
              >
                ← BACK
              </p>

              <p className="text-xs font-semibold cursor-pointer !mt-1">
                Step 1 of 4
              </p>

              <h2 className="text-xl font-bold !text-black !mt-2">
                OTP Verification
              </h2>

              <p className="text-gray-500 text-xs !mt-2">
                A verification code has been sent to your mobile number.
                <br />
                Enter the 6-digit code below.
              </p>

              {/* OTP Boxes */}
              <div className="flex gap-3 !mt-4">

                {otpForm.state.values.otp.map((value, index) => (

                  <otpForm.Field
                    key={index}
                    name={`otp[${index}]`}
                  >
                    {(field) => (
                      <Input
                        id={`otp-${index}`}
                        value={field.state.value}
                        maxLength={1}
                        className="
                          !w-12
                          !h-12
                          !text-center
                          !text-lg
                          !font-bold
                          !border-gray-300
                        "
                        onChange={(e) => {
                          const newValue = e.target.value;

                          if (!/^[0-9]?$/.test(newValue)) {
                            return;
                          }

                          field.handleChange(newValue);

                          if (newValue && index < 5) {
                            document
                              .getElementById(`otp-${index + 1}`)
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
                              .getElementById(`otp-${index - 1}`)
                              ?.focus();
                          }
                        }}
                      />
                    )}
                  </otpForm.Field>

                ))}

              </div>

              {/* Resend OTP */}
              <p className="text-gray-400 text-xs !mt-3">
                <span className="text-red-500 font-semibold cursor-pointer">
                  Resend OTP
                </span>
              </p>

              {/* Verify */}
              <Button
                type="primary"
                block
                onClick={() => otpForm.handleSubmit()}
                className="
                  !mt-5
                  !w-40
                  !h-10
                  !rounded-lg
                  !bg-[#f5224b]
                  !border-none
                "
              >
                Verify & Continue
              </Button>

              <p className="text-gray-400 text-xs !mt-4">
                By continuing, you agree to our Terms of Service and
                Privacy Policy.
              </p>

              <p className="text-gray-400 !font-semibold !text-left">
                Already have an account?{" "}

                <span
                  onClick={() => setIsSignup(false)}
                  className="text-red-500 !font-semibold cursor-pointer"
                >
                  Log in
                </span>
              </p>
            </>
          )}

        </Card>

      </div>

      {/* ================= SCROLL ================= */}

      {!startWithOTP && (
        <div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center cursor-pointer"
          onClick={() => {
            const target = document.getElementById("home2");

            if (!target) return;

            const start = window.scrollY;
            const end = target.offsetTop;
            const duration = 400;
            const startTime = performance.now();

            function scrollAnimation(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 3);

              window.scrollTo(
                0,
                start + (end - start) * ease
              );

              if (progress < 1) {
                requestAnimationFrame(scrollAnimation);
              }
            }

            requestAnimationFrame(scrollAnimation);
          }}
        >

          <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center mx-auto">
            <DownOutlined className="!text-white !text-xs" />
          </div>

          <p className="text-gray-300 text-xs mt-2">
            Scroll to see more
          </p>

        </div>
      )}

    </div>
  );
}

export default Home;