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

  // ================= FORM =================

  const form = useForm({
    defaultValues: {
      district: "",
      municipality: "",
      ward: "",
      tole: "",
    },

    // ================= SUBMIT =================

    onSubmit: async ({ value }) => {
      // ================= VALIDATE ADDRESS =================

      const result = addressSchema.safeParse(value);

      if (!result.success) {
        console.log("Address validation failed:", result.error.issues);
        return;
      }

      // ================= GET USER FROM LOCAL STORAGE =================

      const savedUserString = localStorage.getItem("pendingUser");

      if (!savedUserString) {
        console.error(
          "No pending user information found. Please complete User Information first."
        );
        return;
      }

      // ================= CONVERT SAVED USER DATA =================

      let savedUser;

      try {
        savedUser = JSON.parse(savedUserString);
      } catch (error) {
        console.error("Invalid pending user data:", error);

        localStorage.removeItem("pendingUser");

        return;
      }

      // ================= ADD ADDRESS =================

      const updatedUser = {
        ...savedUser,

        address: {
          district: value.district,
          municipality: value.municipality,
          ward: value.ward || "",
          tole: value.tole || "",
        },
      };

      // ================= SAVE UPDATED USER =================

      localStorage.setItem(
        "pendingUser",
        JSON.stringify(updatedUser)
      );

      // ================= DEBUG =================

      console.log("Address saved successfully.");
      console.log("Updated pending user:", updatedUser);

      // ================= NEXT STEP =================

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
              {t("siderbar.step3")}
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

              {/* Stepper line */}

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

              {/* ================= STEP 1 ================= */}

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

              {/* ================= STEP 2 ================= */}

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

              {/* ================= STEP 3 ================= */}

              <div className="relative flex gap-3 mb-6">

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

              {/* ================= STEP 4 ================= */}

              <div className="relative flex gap-3">

                <div
                  className="
                    z-10
                    w-[27px]
                    h-[27px]
                    rounded-full
                    border
                    border-[#cbd1d8]
                    bg-white
                    flex
                    items-center
                    justify-center
                    text-[#667585]
                  "
                >
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

                {/* ================= STEP 1 ================= */}

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

                  <p
                    className="
                      text-[10px]
                      sm:text-[12px]
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
                      text-[10px]
                      sm:text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#20b8aa]
                      mt-0.5
                    "
                  >
                    {t("siderbar.verified")}
                  </p>

                </div>

                {/* ================= LINE ================= */}

                <div
                  className="
                    flex-1
                    border-t
                    border-dashed
                    border-[#d8dce1]
                    mt-[13px]
                  "
                />

                {/* ================= STEP 2 ================= */}

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

                  <p
                    className="
                      text-[10px]
                      sm:text-[12px]
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
                      text-[10px]
                      sm:text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#20b8aa]
                      mt-0.5
                    "
                  >
                    {t("siderbar.verified")}
                  </p>

                </div>

                {/* ================= LINE ================= */}

                <div
                  className="
                    flex-1
                    border-t
                    border-dashed
                    border-[#d8dce1]
                    mt-[13px]
                  "
                />

                {/* ================= STEP 3 ================= */}

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
                      3
                    </span>
                  </div>

                  <p
                    className="
                      text-[10px]
                      sm:text-[12px]
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
                      text-[10px]
                      sm:text-[12px]
                      leading-[16px]
                      font-medium
                      text-[#f5224b]
                      mt-0.5
                    "
                  >
                    {t("siderbar.inProgress")}
                  </p>

                </div>

                {/* ================= LINE ================= */}

                <div
                  className="
                    flex-1
                    border-t
                    border-dashed
                    border-[#d8dce1]
                    mt-[13px]
                  "
                />

                {/* ================= STEP 4 ================= */}

                <div className="flex flex-col items-center flex-1 min-w-0">

                  <div
                    className="
                      w-7
                      h-7
                      rounded-full
                      border
                      border-[#cbd1d8]
                      bg-white
                      flex
                      items-center
                      justify-center
                      text-[#667585]
                      flex-shrink-0
                    "
                  >
                    <span className="text-[12px] leading-[16px] font-medium">
                      4
                    </span>
                  </div>

                  <p
                    className="
                      text-[10px]
                      sm:text-[12px]
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
                      text-[10px]
                      sm:text-[12px]
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
            "
          >

            {/* ================= BACK ================= */}

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

            {/* ================= HEADING ================= */}

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

              {/* ================= DISTRICT ================= */}

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
                {(field) => {

                  const hasError =
                    field.state.meta.isTouched &&
                    field.state.meta.errors.length > 0;

                  return (
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
                        placeholder={
                          hasError
                            ? field.state.meta.errors[0]
                            : t("information.district")
                        }
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
                        status={hasError ? "error" : ""}
                      />

                    </div>
                  );
                }}
              </AddressField>

              {/* ================= MUNICIPALITY ================= */}

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
                {(field) => {

                  const hasError =
                    field.state.meta.isTouched &&
                    field.state.meta.errors.length > 0;

                  return (
                    <div className="mt-3">

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
                        placeholder={
                          hasError
                            ? field.state.meta.errors[0]
                            : t("information.village")
                        }
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
                        status={hasError ? "error" : ""}
                      />

                    </div>
                  );
                }}
              </AddressField>

              {/* ================= WARD + TOLE ================= */}

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-x-4
                  gap-y-3
                  !text-left
                  mt-3
                "
              >

                {/* ================= WARD ================= */}

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

                {/* ================= TOLE ================= */}

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

              {/* ================= BOTTOM ================= */}

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