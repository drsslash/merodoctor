import { Input, Button, Checkbox, Select, DatePicker } from "antd";
import {
  CheckOutlined,
  CalendarOutlined,
  ManOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
              {t("siderbar.step2")}
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

                <div className="z-10 w-[27px] h-[27px] rounded-full bg-[#f5224b] flex items-center justify-center text-white">
                  <span className="text-[12px] leading-[16px] font-medium">
                    2
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
                    {t("siderbar.personalDetails")}
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

              {/* Step 3 */}

              <div className="relative flex gap-3 mb-6">

                <div className="z-10 w-[27px] h-[27px] rounded-full border border-[#cbd1d8] bg-white flex items-center justify-center text-[#667585]">
                  <span className="text-[12px] leading-[16px] font-medium">
                    3
                  </span>
                </div>

                <div>
                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#7b8794]
                    "
                  >
                    {t("siderbar.address")}
                  </p>

                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-normal
                      text-[#aab1b8]
                      mt-1
                    "
                  >
                    {t("siderbar.next")}
                  </p>
                </div>

              </div>

              {/* Step 4 */}

              <div className="relative flex gap-3">

                <div className="z-10 w-[27px] h-[27px] rounded-full border border-[#cbd1d8] bg-white flex items-center justify-center text-[#667585]">
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
                      text-[#7b8794]
                    "
                  >
                    {t("siderbar.setPassword")}
                  </p>

                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-normal
                      text-[#aab1b8]
                      mt-1
                    "
                  >
                    {t("siderbar.later")}
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

                  <div className="w-7 h-7 rounded-full bg-[#f5224b] flex items-center justify-center text-white flex-shrink-0">
                    <span className="text-[12px] leading-[16px] font-medium">
                      2
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
                    {t("siderbar.personalDetails")}
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

                {/* Line */}

                <div className="flex-1 border-t border-dashed border-[#d8dce1] mt-[13px]" />

                {/* Step 3 */}

                <div className="flex flex-col items-center flex-1 min-w-0">

                  <div className="w-7 h-7 rounded-full border border-[#cbd1d8] bg-white flex items-center justify-center text-[#667585] flex-shrink-0">
                    <span className="text-[12px] leading-[16px] font-medium">
                      3
                    </span>
                  </div>

                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#7b8794]
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
                      font-normal
                      text-[#aab1b8]
                      mt-0.5
                    "
                  >
                    {t("siderbar.next")}
                  </p>

                </div>

                {/* Line */}

                <div className="flex-1 border-t border-dashed border-[#d8dce1] mt-[13px]" />

                {/* Step 4 */}

                <div className="flex flex-col items-center flex-1 min-w-0">

                  <div className="w-7 h-7 rounded-full border border-[#cbd1d8] bg-white flex items-center justify-center text-[#667585] flex-shrink-0">
                    <span className="text-[12px] leading-[16px] font-medium">
                      4
                    </span>
                  </div>

                  <p
                    className="
                      text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#7b8794]
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
                      font-normal
                      text-[#aab1b8]
                      mt-0.5
                    "
                  >
                    {t("siderbar.later")}
                  </p>

                </div>

              </div>

            </div>

            {/* ================= BOTTOM DECORATION ================= */}

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
            "
          >

            {/* Back */}

            <p
              onClick={() => setPage("home-otp")}
              className="
                text-red-500
                text-[14px]
                leading-[20px]
                font-medium
                cursor-pointer
                mt-0
                mb-0
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
                sm:!text-[24px]
                sm:!leading-[32px]
                font-semibold
                !text-black
                !text-left
                !mb-2
              "
            >
              {t("information.yourInformation")}
            </h1>

            {/* ================= FORM ================= */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-x-4
                gap-y-0
                !text-left
              "
            >

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

                    <label
                      className="
                        block
                        !text-[14px]
                        !leading-[20px]
                        font-medium
                        text-[#687685]
                        mb-0.5
                      "
                    >
                      {t("information.firstName")}
                    </label>

                    <Input
                      placeholder={t("information.firstName")}
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      onBlur={field.handleBlur}
                      className="
                        !h-[32px]
                        !rounded-md
                        !text-[16px]
                        !leading-[24px]
                      "
                    />

                    <div className="h-2 mt-0">
                      {field.state.meta.isTouched &&
                        field.state.meta.errors.length > 0 && (
                          <p
                            className="
                              text-red-500
                              text-[12px]
                              leading-[16px]
                              font-normal
                            "
                          >
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

                    <label
                      className="
                        block
                        !text-[14px]
                        !leading-[20px]
                        font-medium
                        text-[#687685]
                        mb-0.5
                      "
                    >
                      {t("information.lastName")}
                    </label>

                    <Input
                      placeholder={t("information.lastName")}
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      onBlur={field.handleBlur}
                      className="
                        !h-[32px]
                        !rounded-md
                        !text-[16px]
                        !leading-[24px]
                      "
                    />

                    <div className="h-2 mt-0">
                      {field.state.meta.isTouched &&
                        field.state.meta.errors.length > 0 && (
                          <p
                            className="
                              text-red-500
                              text-[12px]
                              leading-[16px]
                              font-normal
                            "
                          >
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

                    <label
                      className="
                        block
                        !text-[14px]
                        !leading-[20px]
                        font-medium
                        text-[#687685]
                        mb-0.5
                      "
                    >
                      {t("information.age")}
                    </label>

                    <div className="flex">

                      <Select
                        defaultValue="Year"
                        className="w-[65px]"
                        size="small"
                        options={[
                          {
                            value: "Year",
                            label: "Year",
                          },
                        ]}
                      />

                      <Input
                        placeholder={t("information.age")}
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(e.target.value)
                        }
                        onBlur={field.handleBlur}
                        className="
                          !h-[32px]
                          !rounded-l-none
                          flex-1
                          !text-[16px]
                          !leading-[24px]
                        "
                      />

                    </div>

                    <div className="h-2 mt-0">
                      {field.state.meta.isTouched &&
                        field.state.meta.errors.length > 0 && (
                          <p
                            className="
                              text-red-500
                              text-[12px]
                              leading-[16px]
                              font-normal
                            "
                          >
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

                    <label
                      className="
                        block
                        !text-[14px]
                        !leading-[20px]
                        font-medium
                        text-[#687685]
                        mb-0.5
                      "
                    >
                      {t("information.dateOfBirth")}
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
                      size="small"
                      className="
                        w-full
                        !h-[32px]
                        !rounded-md
                        !text-[16px]
                        !leading-[24px]
                      "
                    />

                    <div className="mt-0">

                      <Checkbox>
                        <span
                          className="
                            !text-[12px]
                            !leading-[16px]
                            font-medium
                            text-[#687685]
                          "
                        >
                          Is real DOB?
                        </span>
                      </Checkbox>

                    </div>

                    <div className="h-2">
                      {field.state.meta.isTouched &&
                        field.state.meta.errors.length > 0 && (
                          <p
                            className="
                              text-red-500
                              text-[12px]
                              leading-[16px]
                              font-normal
                            "
                          >
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

                    <label
                      className="
                        block
                        !text-[14px]
                        !leading-[20px]
                        font-medium
                        text-[#687685]
                        mb-0.5
                      "
                    >
                      {t("information.mobileNumber")}
                    </label>

                    <Input
                      addonBefore="+977"
                      placeholder={t("information.mobileNumber")}
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      onBlur={field.handleBlur}
                      className="
                        !h-[32px]
                        !rounded-md
                        !text-[16px]
                        !leading-[24px]
                      "
                    />

                    <div className="h-2 mt-0">
                      {field.state.meta.isTouched &&
                        field.state.meta.errors.length > 0 && (
                          <p
                            className="
                              text-red-500
                              text-[12px]
                              leading-[16px]
                              font-normal
                            "
                          >
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

                    <label
                      className="
                        block
                        !text-[14px]
                        !leading-[20px]
                        font-medium
                        text-[#687685]
                        mb-0.5
                      "
                    >
                      {t("information.gender")}
                    </label>

                    <div className="flex gap-1.5">

                      {/* Male */}

                      <button
                        type="button"
                        onClick={() =>
                          field.handleChange("Male")
                        }
                        className={`h-[32px] flex-1 rounded-md border flex items-center justify-center gap-1 !text-[14px] !leading-[20px] font-medium transition ${
                          field.state.value === "Male"
                            ? "border-[#f5224b] text-[#f5224b]"
                            : "border-[#dfe3e8] text-[#687685]"
                        }`}
                      >
                        <ManOutlined className="text-[14px]" />
                        {t("information.male")}
                      </button>

                      {/* Female */}

                      <button
                        type="button"
                        onClick={() =>
                          field.handleChange("Female")
                        }
                        className={`h-[32px] flex-1 rounded-md border flex items-center justify-center gap-1 !text-[14px] !leading-[20px] font-medium transition ${
                          field.state.value === "Female"
                            ? "border-[#f5224b] text-[#f5224b]"
                            : "border-[#dfe3e8] text-[#687685]"
                        }`}
                      >
                        <WomanOutlined className="text-[14px]" />
                        {t("information.female")}
                      </button>

                      {/* Others */}

                      <button
                        type="button"
                        onClick={() =>
                          field.handleChange("Others")
                        }
                        className={`h-[32px] flex-1 rounded-md border flex items-center justify-center gap-1 !text-[14px] !leading-[20px] font-medium transition ${
                          field.state.value === "Others"
                            ? "border-[#f5224b] text-[#f5224b]"
                            : "border-[#dfe3e8] text-[#687685]"
                        }`}
                      >
                        ⚧
                        {t("information.other")}
                      </button>

                    </div>

                    <div className="h-2 mt-0">
                      {field.state.meta.isTouched &&
                        field.state.meta.errors.length > 0 && (
                          <p
                            className="
                              text-red-500
                              text-[12px]
                              leading-[16px]
                              font-normal
                            "
                          >
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
                  <div className="col-span-1 sm:col-span-2">

                    <label
                      className="
                        block
                        !text-[14px]
                        !leading-[20px]
                        font-medium
                        text-[#687685]
                        mb-0.5
                      "
                    >
                      {t("information.email")}
                    </label>

                    <Input
                      placeholder="you@example.com"
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      onBlur={field.handleBlur}
                      className="
                        !h-[32px]
                        !rounded-md
                        !text-[16px]
                        !leading-[24px]
                      "
                    />

                    <div className="h-2 mt-0">
                      {field.state.meta.isTouched &&
                        field.state.meta.errors.length > 0 && (
                          <p
                            className="
                              text-red-500
                              text-[12px]
                              leading-[16px]
                              font-normal
                            "
                          >
                            {field.state.meta.errors[0]}
                          </p>
                        )}
                    </div>

                  </div>
                )}
              </form.Field>

            </div>

            {/* ================= BOTTOM ================= */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                gap-2
                sm:gap-4
                mt-1
                text-left
              "
            >

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
                      <span
                        className="
                          !text-[14px]
                          !leading-[20px]
                          font-normal
                          text-[#687685]
                        "
                      >
                        I agree to the{" "}

                        <span
                          className="
                            !text-[#319ed8]
                            !text-[14px]
                            !leading-[20px]
                            font-medium
                          "
                        >
                          Terms & Conditions
                        </span>{" "}

                        and{" "}

                        <span
                          className="
                            !text-[#319ed8]
                            !text-[14px]
                            !leading-[20px]
                            font-medium
                          "
                        >
                          Privacy Policy
                        </span>
                      </span>
                    </Checkbox>

                    <div className="h-2 mt-0.5">
                      {field.state.meta.isTouched &&
                        field.state.meta.errors.length > 0 && (
                          <p
                            className="
                              text-red-500
                              text-[12px]
                              leading-[16px]
                              font-normal
                            "
                          >
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
                {t("siderbar.next")}
              </Button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default UserInformation;