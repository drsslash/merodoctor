import React from "react";
import { Input, Button, Checkbox, Select, DatePicker } from "antd";
import {
  CheckOutlined,
  CalendarOutlined,
  ManOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";

// ================= VALIDATION =================

const userInformationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),

  lastName: z.string().min(1, "Last name is required"),

  age: z
    .string()
    .min(1, "Age is required")
    .regex(/^[0-9]+$/, "Age must be a number"),

  dateOfBirth: z
    .any()
    .refine((value) => value !== null, "Date of birth is required"),

  mobile: z
    .string()
    .regex(/^[0-9]{10}$/, "Mobile number must be 10 digits"),

  gender: z.string().min(1, "Please select your gender"),

  email: z
    .string()
    .email("Please enter a valid email")
    .or(z.literal("")),

  agreed: z.boolean().refine((value) => value === true, {
    message: "You must agree to the Terms & Conditions",
  }),
});

function UserInformation({ setPage }) {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      dateOfBirth: null,
      mobile: "",
      gender: "",
      email: "",
      agreed: true,
    },

    onSubmit: async ({ value }) => {
      const result = userInformationSchema.safeParse(value);

      if (!result.success) {
        console.log(result.error.issues);
        return;
      }

      console.log("User information:", value);

      setPage("address");
    },
  });

  return (
    <div className="h-screen overflow-hidden bg-[#294454] flex items-center justify-center p-2">

      {/* Main Card */}
      <div className="w-full max-w-[1200px] h-[570px] bg-white rounded-xl overflow-hidden flex">

        {/* ================= LEFT SIDEBAR ================= */}

        <div className="w-[185px] bg-[#f7f8fa] px-4 py-7 relative flex-shrink-0">

          <p className="text-[11px] font-bold text-[#f5224b] !mb-2 !text-left">
            STEP 2 OF 4
          </p>

          <h2 className="text-[18px] leading-[22px] font-bold !text-black !mb-7 !text-left">
            Create your
            <br />
            account
          </h2>

          {/* Stepper */}
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
              <div className="z-10 w-[27px] h-[27px] rounded-full bg-[#f5224b] flex items-center justify-center text-white text-[11px]">
                2
              </div>

              <div>
                <p className="text-[10px] font-semibold text-[#f5224b] leading-3">
                  Personal details
                </p>

                <p className="text-[9px] font-medium text-[#f5224b] mt-1">
                  In progress
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex gap-3 mb-9">
              <div className="z-10 w-[27px] h-[27px] rounded-full border border-[#cbd1d8] bg-white flex items-center justify-center text-[#667585] text-[10px]">
                3
              </div>

              <div>
                <p className="text-[10px] font-medium text-[#7b8794]">
                  Address
                </p>

                <p className="text-[9px] text-[#aab1b8] mt-1">
                  Next
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex gap-3">
              <div className="z-10 w-[27px] h-[27px] rounded-full border border-[#cbd1d8] bg-white flex items-center justify-center text-[#667585] text-[10px]">
                4
              </div>

              <div>
                <p className="text-[10px] font-medium text-[#7b8794]">
                  Set password
                </p>

                <p className="text-[9px] text-[#aab1b8] mt-1">
                  Later
                </p>
              </div>
            </div>

          </div>

          {/* Bottom decorative circles */}
          <div className="absolute -bottom-8 -left-8 w-[115px] h-[115px] rounded-full bg-[#eef3f9]" />

          <div className="absolute -bottom-8 -left-4 w-[75px] h-[75px] rounded-full bg-[#e4ebf4]" />

        </div>

        {/* ================= RIGHT CONTENT ================= */}

        <div className="flex-1 px-8 py-5 !font-small">

          {/* Back */}
          <p
            onClick={() => setPage("home-otp")}
            className="text-red-500 text-xs font-semibold cursor-pointer mt-1 mb-1 !text-left"
          >
            ← BACK
          </p>

          {/* Heading */}
          <h1 className="!text-[30px] font-bold !text-black !text-left !mb-3">
            Your information
          </h1>

          {/* ================= FORM ================= */}

          <div className="grid grid-cols-2 gap-x-4 gap-y-1 !text-left">

            {/* FIRST NAME */}
            <form.Field
              name="firstName"
              validators={{
                onBlur: ({ value }) => {
                  const result = z
                    .string()
                    .min(1, "First name is required")
                    .safeParse(value);

                  return result.success
                    ? undefined
                    : result.error.issues[0].message;
                },
              }}
            >
              {(field) => (
                <div>
                  <label className="block !text-[13px] font-semibold text-[#687685] mb-1">
                    First name
                  </label>

                  <Input
                    placeholder="First Name"
                    value={field.state.value}
                    onChange={(e) =>
                      field.handleChange(e.target.value)
                    }
                    onBlur={field.handleBlur}
                    className="!h-[40px] !rounded-md"
                  />

                  <div className="h-3 mt-1">
                    {field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0 && (
                        <p className="text-red-500 text-[10px] leading-3">
                          {field.state.meta.errors[0]}
                        </p>
                      )}
                  </div>
                </div>
              )}
            </form.Field>

            {/* LAST NAME */}
            <form.Field
              name="lastName"
              validators={{
                onBlur: ({ value }) => {
                  const result = z
                    .string()
                    .min(1, "Last name is required")
                    .safeParse(value);

                  return result.success
                    ? undefined
                    : result.error.issues[0].message;
                },
              }}
            >
              {(field) => (
                <div>
                  <label className="block !text-[13px] font-semibold text-[#687685] mb-1">
                    Last name
                  </label>

                  <Input
                    placeholder="Last Name"
                    value={field.state.value}
                    onChange={(e) =>
                      field.handleChange(e.target.value)
                    }
                    onBlur={field.handleBlur}
                    className="!h-[40px] !rounded-md"
                  />

                  <div className="h-3 mt-1">
                    {field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0 && (
                        <p className="text-red-500 text-[10px] leading-3">
                          {field.state.meta.errors[0]}
                        </p>
                      )}
                  </div>
                </div>
              )}
            </form.Field>

            {/* AGE */}
            <form.Field
              name="age"
              validators={{
                onBlur: ({ value }) => {
                  const result = z
                    .string()
                    .min(1, "Age is required")
                    .regex(/^[0-9]+$/, "Age must be a number")
                    .safeParse(value);

                  return result.success
                    ? undefined
                    : result.error.issues[0].message;
                },
              }}
            >
              {(field) => (
                <div>
                  <label className="block !text-[13px] font-semibold text-[#687685] mb-1">
                    Age
                  </label>

                  <div className="flex">

                    <Select
                      defaultValue="Year"
                      className="w-[80px]"
                      size="large"
                      options={[
                        {
                          value: "Year",
                          label: "Year",
                        },
                      ]}
                    />

                    <Input
                      placeholder="Enter Age"
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      onBlur={field.handleBlur}
                      className="!h-[40px] !rounded-l-none flex-1"
                    />

                  </div>

                  <div className="h-3 mt-1">
                    {field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0 && (
                        <p className="text-red-500 text-[10px] leading-3">
                          {field.state.meta.errors[0]}
                        </p>
                      )}
                  </div>
                </div>
              )}
            </form.Field>

            {/* DATE OF BIRTH */}
            <form.Field
              name="dateOfBirth"
              validators={{
                onBlur: ({ value }) => {
                  if (!value) {
                    return "Date of birth is required";
                  }

                  return undefined;
                },
              }}
            >
              {(field) => (
                <div>
                  <label className="block !text-[13px] font-semibold text-[#687685] mb-1">
                    Date of Birth
                  </label>

                  <DatePicker
                    placeholder="YYYY/MM/DD"
                    format="YYYY/MM/DD"
                    suffixIcon={<CalendarOutlined />}
                    value={field.state.value}
                    onChange={(date) =>
                      field.handleChange(date)
                    }
                    onBlur={field.handleBlur}
                    className="w-full !h-[40px] !rounded-md"
                  />

                  <div className="mt-1">
                    <Checkbox>
                      <span className="!text-[11px] font-medium text-[#687685]">
                        Is real DOB?
                      </span>
                    </Checkbox>
                  </div>

                  <div className="h-3">
                    {field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0 && (
                        <p className="text-red-500 text-[10px] leading-3">
                          {field.state.meta.errors[0]}
                        </p>
                      )}
                  </div>
                </div>
              )}
            </form.Field>

            {/* MOBILE NUMBER */}
            <form.Field
              name="mobile"
              validators={{
                onBlur: ({ value }) => {
                  const result = z
                    .string()
                    .regex(
                      /^[0-9]{10}$/,
                      "Mobile number must be 10 digits"
                    )
                    .safeParse(value);

                  return result.success
                    ? undefined
                    : result.error.issues[0].message;
                },
              }}
            >
              {(field) => (
                <div>
                  <label className="block !text-[13px] font-semibold text-[#687685] mb-1">
                    Mobile number
                  </label>

                  <Input
                    addonBefore="+977"
                    placeholder="Number"
                    value={field.state.value}
                    onChange={(e) =>
                      field.handleChange(e.target.value)
                    }
                    onBlur={field.handleBlur}
                    className="!h-[40px] !rounded-md"
                  />

                  <div className="h-3 mt-1">
                    {field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0 && (
                        <p className="text-red-500 text-[10px] leading-3">
                          {field.state.meta.errors[0]}
                        </p>
                      )}
                  </div>
                </div>
              )}
            </form.Field>

            {/* GENDER */}
            <form.Field
              name="gender"
              validators={{
                onBlur: ({ value }) => {
                  if (!value) {
                    return "Please select your gender";
                  }

                  return undefined;
                },
              }}
            >
              {(field) => (
                <div>
                  <label className="block !text-[13px] font-semibold text-[#687685] mb-1">
                    Gender
                  </label>

                  <div className="flex gap-2">

                    {/* Male */}
                    <button
                      type="button"
                      onClick={() =>
                        field.handleChange("Male")
                      }
                      className={`h-[40px] flex-1 rounded-md border flex items-center justify-center gap-2 !text-[13px] font-medium transition ${
                        field.state.value === "Male"
                          ? "border-[#f5224b] text-[#f5224b]"
                          : "border-[#dfe3e8] text-[#687685]"
                      }`}
                    >
                      <ManOutlined className="text-[15px]" />
                      Male
                    </button>

                    {/* Female */}
                    <button
                      type="button"
                      onClick={() =>
                        field.handleChange("Female")
                      }
                      className={`h-[40px] flex-1 rounded-md border flex items-center justify-center gap-2 !text-[13px] font-medium transition ${
                        field.state.value === "Female"
                          ? "border-[#f5224b] text-[#f5224b]"
                          : "border-[#dfe3e8] text-[#687685]"
                      }`}
                    >
                      <WomanOutlined className="text-[15px]" />
                      Female
                    </button>

                    {/* Others */}
                    <button
                      type="button"
                      onClick={() =>
                        field.handleChange("Others")
                      }
                      className={`h-[40px] flex-1 rounded-md border flex items-center justify-center gap-2 !text-[13px] font-medium transition ${
                        field.state.value === "Others"
                          ? "border-[#f5224b] text-[#f5224b]"
                          : "border-[#dfe3e8] text-[#687685]"
                      }`}
                    >
                      ⚧
                      Others
                    </button>

                  </div>

                  <div className="h-3 mt-1">
                    {field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0 && (
                        <p className="text-red-500 text-[10px] leading-3">
                          {field.state.meta.errors[0]}
                        </p>
                      )}
                  </div>
                </div>
              )}
            </form.Field>

            {/* EMAIL */}
            <form.Field
              name="email"
              validators={{
                onBlur: ({ value }) => {
                  if (!value) {
                    return undefined;
                  }

                  const result = z
                    .string()
                    .email("Please enter a valid email")
                    .safeParse(value);

                  return result.success
                    ? undefined
                    : result.error.issues[0].message;
                },
              }}
            >
              {(field) => (
                <div className="col-span-2">
                  <label className="block !text-[13px] font-semibold text-[#687685] mb-1">
                    Email (optional)
                  </label>

                  <Input
                    placeholder="you@example.com"
                    value={field.state.value}
                    onChange={(e) =>
                      field.handleChange(e.target.value)
                    }
                    onBlur={field.handleBlur}
                    className="!h-[40px] !rounded-md"
                  />

                  <div className="h-3 mt-1">
                    {field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0 && (
                        <p className="text-red-500 text-[10px] leading-3">
                          {field.state.meta.errors[0]}
                        </p>
                      )}
                  </div>
                </div>
              )}
            </form.Field>

          </div>

          {/* ================= BOTTOM ================= */}

          <div className="flex items-center gap-6 !mt-1 !text-left">

            {/* TERMS */}
            <form.Field
              name="agreed"
              validators={{
                onChange: ({ value }) => {
                  if (!value) {
                    return "You must agree to the Terms & Conditions";
                  }

                  return undefined;
                },
              }}
            >
              {(field) => (
                <div className="flex-1">

                  <Checkbox
                    checked={field.state.value}
                    onChange={(e) =>
                      field.handleChange(e.target.checked)
                    }
                  >
                    <span className="!text-[12px] font-medium text-[#687685]">
                      I agree to the{" "}
                      <span className="!text-[#319ed8] font-semibold">
                        Terms & Conditions
                      </span>{" "}
                      and{" "}
                      <span className="!text-[#319ed8] font-semibold">
                        Privacy Policy
                      </span>
                    </span>
                  </Checkbox>

                  <div className="h-3 mt-1">
                    {field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0 && (
                        <p className="text-red-500 text-[10px] leading-3">
                          {field.state.meta.errors[0]}
                        </p>
                      )}
                  </div>

                </div>
              )}
            </form.Field>

            {/* NEXT */}
            <Button
              type="primary"
              onClick={() => form.handleSubmit()}
              className="!h-[40px] !w-[400px] !bg-[#f5224b] !border-[#f5224b] !rounded-md !text-[11px] !font-semibold"
            >
              Next
            </Button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default UserInformation;