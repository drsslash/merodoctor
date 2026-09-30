import React from "react";
import { Input, Button, Select } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { useTranslation } from "react-i18next";

// ================= OPTIONS =================

const districtOptions = [
  { value: "Kathmandu", label: "Kathmandu" },
  { value: "Lalitpur", label: "Lalitpur" },
  { value: "Bhaktapur", label: "Bhaktapur" },
  { value: "Kavre", label: "Kavre" },
  { value: "Chitwan", label: "Chitwan" },
];

const municipalityOptions = [
  {
    value: "Kathmandu Metropolitan City",
    label: "Kathmandu Metropolitan City",
  },
  {
    value: "Kirtipur Municipality",
    label: "Kirtipur Municipality",
  },
  {
    value: "Budhanilkantha Municipality",
    label: "Budhanilkantha Municipality",
  },
  {
    value: "Tokha Municipality",
    label: "Tokha Municipality",
  },
];

// ================= VALIDATION =================

const addressSchema = z.object({
  district: z.string().min(1, "District is required"),

  municipality: z
    .string()
    .min(1, "Village / Municipality is required"),

  ward: z.string().optional(),

  tole: z.string().optional(),
});

function AddressInformation({ setPage }) {
  const { t } = useTranslation();

  const form = useForm({
    defaultValues: {
      district: "",
      municipality: "",
      ward: "",
      tole: "",
    },

    onSubmit: async ({ value }) => {
      const result = addressSchema.safeParse(value);

      if (!result.success) {
        console.log(result.error.issues);
        return;
      }

      console.log("Address information:", value);

      setPage("set-password");
    },
  });

  const AddressField = form.Field;

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
              {t("siderbar.step3")}
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

                <div className="z-10 w-[27px] h-[27px] rounded-full bg-[#f5224b] flex items-center justify-center text-white">
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
                      text-[#f5224b]
                    "
                  >
                    {t("siderbar.address")}
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
                    {t("siderbar.next")}
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

                  <div className="w-7 h-7 rounded-full bg-[#f5224b] flex items-center justify-center text-white flex-shrink-0">
                    <span className="text-[12px] leading-[16px] font-medium">
                      3
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
                    {t("siderbar.address")}
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
                    {t("siderbar.next")}
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
              onClick={() => setPage("information")}
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
                font-semibold
                !text-black
                !text-left
                !mb-2
              "
            >
              {t("information.address")}
            </h1>

            {/* ================= FORM BOX ================= */}

            <div
              className="
                border
                border-[#e1e5e9]
                rounded-xl
                p-4
                sm:p-5
                mt-2
                !text-left
              "
            >

              {/* District */}

              <AddressField
                name="district"
                validators={{
                  onBlur: ({ value }) => {
                    const result = z
                      .string()
                      .min(1, "District is required")
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
                        !mb-1
                      "
                    >
                      {t("information.district")}*
                    </label>

                    <Select
                      placeholder={t("information.district")}
                      className="
                        w-full
                        !text-left
                        !text-[16px]
                        !leading-[24px]
                      "
                      size="small"
                      value={field.state.value || undefined}
                      onChange={(value) =>
                        field.handleChange(value)
                      }
                      onBlur={field.handleBlur}
                      options={districtOptions}
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
                )}
              </AddressField>

              {/* Village / Municipality */}

              <AddressField
                name="municipality"
                validators={{
                  onBlur: ({ value }) => {
                    const result = z
                      .string()
                      .min(
                        1,
                        "Village / Municipality is required"
                      )
                      .safeParse(value);

                    return result.success
                      ? undefined
                      : result.error.issues[0].message;
                  },
                }}
              >
                {(field) => (
                  <div className="mt-1">

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
                      {t("information.village")}*
                    </label>

                    <Select
                      placeholder={t("information.village")}
                      className="
                        w-full
                        !text-left
                        !text-[16px]
                        !leading-[24px]
                      "
                      size="small"
                      value={field.state.value || undefined}
                      onChange={(value) =>
                        field.handleChange(value)
                      }
                      onBlur={field.handleBlur}
                      options={municipalityOptions}
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
                )}
              </AddressField>

              {/* Ward + Tole */}

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-x-4
                  gap-y-2
                  !text-left
                  mt-1
                "
              >

                {/* Ward */}

                <AddressField name="ward">
                  {(field) => (
                    <div>

                      <label
                        className="
                          block
                          !text-[14px]
                          !leading-[20px]
                          font-medium
                          text-[#687685]
                          !mb-1
                        "
                      >
                        {t("information.ward")} (
                        {t("information.option")})
                      </label>

                      <Input
                        placeholder={t("information.ward")}
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

                    </div>
                  )}
                </AddressField>

                {/* Tole */}

                <AddressField name="tole">
                  {(field) => (
                    <div>

                      <label
                        className="
                          block
                          !text-[14px]
                          !leading-[20px]
                          font-medium
                          text-[#687685]
                          !mb-1
                        "
                      >
                        {t("information.tole")} (
                        {t("information.option")})
                      </label>

                      <Input
                        placeholder={t("information.tole")}
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

                    </div>
                  )}
                </AddressField>

              </div>

              {/* Bottom */}

              <div
                className="
                  flex
                  justify-end
                  mt-4
                "
              >

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
                  {t("information.save")}
                </Button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddressInformation;