import React from "react";
import { Input, Button, Select } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";

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

  ward: z
    .string().optional(),

  tole: z.string().optional(),
});

function AddressInformation({ setPage }) {
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

  return (
    <div className="h-screen overflow-hidden bg-[#294454] flex items-center justify-center p-2">

      {/* Main Card */}
      <div className="w-full max-w-[1200px] h-[570px] bg-white rounded-xl overflow-hidden flex">

        {/* LEFT SIDEBAR */}
        <div className="w-[185px] bg-[#f7f8fa] px-4 py-7 relative flex-shrink-0">

          <p className="text-[11px] font-bold text-[#f5224b] !mb-2 !text-left">
            STEP 3 OF 4
          </p>

          <h2 className="text-[18px] leading-[22px] font-bold !text-black !mb-7 !text-left">
            Create your
            <br />
            account
          </h2>

          {/* Stepper */}
          <div className="relative">

            {/* Connecting Line */}
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
              <div className="z-10 w-[27px] h-[27px] rounded-full bg-[#f5224b] flex items-center justify-center text-white text-[11px]">
                3
              </div>

              <div>
                <p className="text-[10px] font-semibold text-[#f5224b] leading-3">
                  Address
                </p>

                <p className="text-[9px] font-medium text-[#f5224b] mt-1">
                  In progress
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
                  Next
                </p>
              </div>
            </div>

          </div>

          {/* Bottom decorative circles */}
          <div className="absolute -bottom-8 -left-8 w-[115px] h-[115px] rounded-full bg-[#eef3f9]" />

          <div className="absolute -bottom-8 -left-4 w-[75px] h-[75px] rounded-full bg-[#e4ebf4]" />

        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 px-8 py-6">

          {/* Back */}
          <p
            onClick={() => setPage("information")}
            className="text-red-500 text-xs font-semibold cursor-pointer mt-1 mb-2 !text-left"
          >
            ← BACK
          </p>

          {/* Heading */}
          <h1 className="!text-[30px] font-bold !text-black !mb-5 !text-left">
            Add Address
          </h1>

          {/* ================= FORM ================= */}

          <div className="border border-[#e1e5e9] rounded-xl p-5 mt-2">

          {/* District */}
          <form.Field
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
                <label className="block !text-[13px] font-semibold text-[#687685] !mb-2 !text-left">
                  Select District*
                </label>

                <Select
                  placeholder="Select district"
                  className="w-full !text-left"
                  size="large"
                  value={field.state.value || undefined}
                  onChange={(value) => field.handleChange(value)}
                  onBlur={field.handleBlur}
                  options={districtOptions}
                />

                <div className="h-3 mt-1">
                  {field.state.meta.isTouched &&
                    field.state.meta.errors.length > 0 && (
                      <p className="text-red-500 text-[10px] leading-3 !text-left">
                        {field.state.meta.errors[0]}
                      </p>
                    )}
                </div>
              </div>
            )}
          </form.Field>

          {/* Village / Municipality */}
          <form.Field
            name="municipality"
            validators={{
              onBlur: ({ value }) => {
                const result = z
                  .string()
                  .min(1, "Village / Municipality is required")
                  .safeParse(value);

                return result.success
                  ? undefined
                  : result.error.issues[0].message;
              },
            }}
          >
            {(field) => (
              <div className="mt-2">

                <label className="block !text-[13px] font-semibold text-[#687685] !mb-2 !text-left">
                  Select Village / Municipality*
                </label>

                <Select
                  placeholder="Select village or municipality"
                  className="w-full !text-left"
                  size="large"
                  value={field.state.value || undefined}
                  onChange={(value) => field.handleChange(value)}
                  onBlur={field.handleBlur}
                  options={municipalityOptions}
                />

                <div className="h-3 mt-1">
                  {field.state.meta.isTouched &&
                    field.state.meta.errors.length > 0 && (
                      <p className="text-red-500 text-[10px] leading-3 !text-left">
                        {field.state.meta.errors[0]}
                      </p>
                    )}
                </div>

              </div>
            )}
          </form.Field>

          {/* Ward + Tole */}
          <div className="grid grid-cols-2 gap-x-4 !text-left mt-2">

            {/* Ward No */}
            <form.Field
              name="ward"
            >
              {(field) => (
                <div>

                  <label className="block !text-[13px] font-semibold text-[#687685] !mb-2">
                    Ward (Optional)
                  </label>

                  <Input
                    placeholder="Enter ward number"
                    value={field.state.value}
                    onChange={(e) =>
                      field.handleChange(e.target.value)
                    }
                    onBlur={field.handleBlur}
                    className="!h-[40px] !rounded-md"
                  />
                </div>
              )}
            </form.Field>

            {/* Tole */}
            <form.Field name="tole">
              {(field) => (
                <div>

                  <label className="block !text-[13px] font-semibold text-[#687685] !mb-2">
                    Tole (Optional)
                  </label>

                  <Input
                    placeholder="Enter tole"
                    value={field.state.value}
                    onChange={(e) =>
                      field.handleChange(e.target.value)
                    }
                    onBlur={field.handleBlur}
                    className="!h-[40px] !rounded-md"
                  />

                </div>
              )}
            </form.Field>

          </div>

          {/* Bottom */}
          <div className="flex items-center gap-6 !mt-8 !text-left">

            <div className="flex-1" />

            {/* Next */}
            <Button
              type="primary"
              onClick={() => form.handleSubmit()}
              className="!h-[40px] !w-[400px] !bg-[#f5224b] !border-[#f5224b] !rounded-md !text-[11px] !font-semibold"
            >
              Save
            </Button>

          </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddressInformation;