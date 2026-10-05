import React, { useState } from "react";
import { Input, Button, Modal, Select } from "antd";
import {
  VideoCameraOutlined,
  InfoCircleOutlined,
  ExportOutlined,
  PhoneOutlined,
  PlusCircleOutlined,
  UserOutlined,
  SafetyOutlined,
  ThunderboltOutlined,
  SafetyCertificateOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { useForm } from "@tanstack/react-form";

// ================= DATA =================

const FEATURES = [
  {
    icon: <SafetyOutlined />,
    title: "Secure & Private",
    text: "Your health, his privacy",
  },
  {
    icon: <ThunderboltOutlined />,
    title: "Fast & Easy",
    text: "Get help in minutes",
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Qualified Doctors",
    text: "NMC-verified experts",
  },
  {
    icon: <HeartOutlined />,
    title: "Better Health",
    text: "No consultation fee",
  },
];

const GENDERS = ["Male", "Female", "Other"];

const RELATIONS = [
  "Spouse",
  "Son",
  "Daughter",
  "Father",
  "Mother",
  "Brother",
  "Sister",
  "Other",
];

const STATES = [
  "Koshi",
  "Madhesh",
  "Bagmati",
  "Gandaki",
  "Lumbini",
  "Karnali",
  "Sudurpashchim",
];

// ================= DEPENDENT FORM =================

function AddDependentModal({ open, onClose, onAdd }) {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      dob: "",
      mobile: "",
      email: "",
      gender: "",
      relationship: "",
      state: "",
      district: "",
      municipality: "",
      ward: "",
      address: "",
    },

    onSubmit: ({ value }) => {
      onAdd({
        name: `${value.firstName} ${value.lastName}`.trim(),
        relation: value.relationship,
        dob: value.dob || "—",
        mobile: value.mobile,
      });

      form.reset();
      onClose();
    },
  });

  const inputClass =
    "!h-9 !w-full !rounded-md !text-[14px]";

  const required = (label) => ({
    onChange: ({ value }) =>
      value ? undefined : `${label} is required`,

    onSubmit: ({ value }) =>
      value ? undefined : `${label} is required`,
  });

  const field = (
    name,
    label,
    placeholder,
    options = null
  ) => (
    <form.Field
      name={name}
      validators={required(label)}
    >
      {(field) => {
        const error = field.state.meta.errors[0];

        return (
          <div>
            <label className="mb-1 block text-left text-[14px] font-medium leading-[20px] text-[#687685]">
              {label}
              <span className="ml-1 text-[#f5224b]">
                *
              </span>
            </label>

            {options ? (
              <Select
                value={field.state.value || undefined}
                onChange={field.handleChange}
                options={options.map((item) => ({
                  value: item,
                  label: item,
                }))}
                placeholder={placeholder}
                status={error ? "error" : ""}
                className={inputClass}
              />
            ) : (
              <Input
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange(e.target.value)
                }
                placeholder={placeholder}
                status={error ? "error" : ""}
                className={inputClass}
              />
            )}

            {error && (
              <p className="mt-1 text-[12px] leading-[16px] text-[#f5224b]">
                {error}
              </p>
            )}
          </div>
        );
      }}
    </form.Field>
  );

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      destroyOnClose
      width={640}
      title={
        <span className="text-[20px] font-semibold leading-[28px] text-[#1d2b36]">
          Add New Dependent
        </span>
      }
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        {/* PERSONAL DETAILS */}

        <h3 className="mb-3 mt-5 text-[18px] font-semibold leading-[28px] text-[#1d2b36]">
          Personal details
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {field(
            "firstName",
            "First Name",
            "Enter first name"
          )}

          {field(
            "lastName",
            "Last Name",
            "Enter last name"
          )}

          <form.Field
            name="age"
            validators={required("Age")}
          >
            {(field) => (
              <div>
                <label className="mb-1 block text-left text-[14px] font-medium leading-[20px] text-[#687685]">
                  Age
                  <span className="ml-1 text-[#f5224b]">
                    *
                  </span>
                </label>

                <Input
                  type="number"
                  min={0}
                  value={field.state.value}
                  onChange={(e) =>
                    field.handleChange(e.target.value)
                  }
                  placeholder="Enter age"
                  className={inputClass}
                  addonBefore="Year"
                />
              </div>
            )}
          </form.Field>

          {field(
            "dob",
            "Date of Birth",
            "Select date"
          )}
        </div>

        {/* CONTACT DETAILS */}

        <h3 className="mb-3 mt-6 text-[18px] font-semibold leading-[28px] text-[#1d2b36]">
          Contact details
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {field(
            "mobile",
            "Mobile Number",
            "Enter mobile number"
          )}

          <form.Field name="email">
            {(field) => (
              <div>
                <label className="mb-1 block text-left text-[14px] font-medium leading-[20px] text-[#687685]">
                  Email
                </label>

                <Input
                  value={field.state.value}
                  onChange={(e) =>
                    field.handleChange(e.target.value)
                  }
                  placeholder="Enter email address"
                  className={inputClass}
                />
              </div>
            )}
          </form.Field>
        </div>

        {/* IDENTITY DETAILS */}

        <h3 className="mb-3 mt-6 text-[18px] font-semibold leading-[28px] text-[#1d2b36]">
          Identity details
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {field(
            "gender",
            "Gender",
            "Select gender",
            GENDERS
          )}

          {field(
            "relationship",
            "Relationship",
            "Select relationship",
            RELATIONS
          )}
        </div>

        {/* ADDRESS DETAILS */}

        <h3 className="mb-3 mt-6 text-[18px] font-semibold leading-[28px] text-[#1d2b36]">
          Address details
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {field(
            "state",
            "State / Province",
            "Select state",
            STATES
          )}

          {field(
            "district",
            "District",
            "Enter district"
          )}

          {field(
            "municipality",
            "VDC / Municipality",
            "Enter municipality"
          )}

          {field(
            "ward",
            "Ward",
            "Enter ward"
          )}

          <div className="sm:col-span-2">
            <form.Field name="address">
              {(field) => (
                <div>
                  <label className="mb-1 block text-left text-[14px] font-medium leading-[20px] text-[#687685]">
                    Address
                  </label>

                  <Input
                    value={field.state.value}
                    onChange={(e) =>
                      field.handleChange(e.target.value)
                    }
                    placeholder="Enter full address"
                    className={inputClass}
                  />
                </div>
              )}
            </form.Field>
          </div>
        </div>

        {/* FOOTER */}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0 text-[12px] leading-[16px] text-[#f5224b]">
            * Required fields
          </p>

          <Button
            htmlType="submit"
            type="primary"
            className="!h-9 !w-full !rounded-md !border-[#f5224b] !bg-[#f5224b] !text-[14px] !font-semibold sm:!w-[220px]"
          >
            Add Dependent
          </Button>
        </div>
      </form>
    </Modal>
  );
}

// ================= PAGE =================

function InstantConsultation({ setPage }) {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") || "null"
  );

  const [people, setPeople] = useState([
    {
      id: "self",
      name: currentUser?.firstName
        ? `${currentUser.firstName} ${
            currentUser.lastName || ""
          }`.trim()
        : "Asbin Dahal",
      relation: "Self",
      dob: currentUser?.dob || "—",
      mobile: currentUser?.mobile || "9800000000",
    },
  ]);

  const [selectedId, setSelectedId] =
    useState("self");

  const [mode, setMode] =
    useState("video");

  const [modalOpen, setModalOpen] =
    useState(false);

  const addPerson = (person) => {
    const newPerson = {
      ...person,
      id: `dependent-${Date.now()}`,
    };

    setPeople((previous) => [
      ...previous,
      newPerson,
    ]);

    setSelectedId(newPerson.id);
  };

  return (
    <div className="min-h-screen w-full bg-[#294454] pt-[70px] sm:pt-[82px]">

      {/* FULL WIDTH CONTAINER */}

      <div className="w-full px-3 pb-8 sm:px-5 lg:px-8">

        <div className="w-full rounded-2xl bg-[#f3f5f7] p-3 sm:p-5">

          {/* ================= MAIN CARD ================= */}

          <div className="grid w-full gap-6 rounded-xl border border-[#e6eaee] bg-white p-4 sm:p-6 lg:grid-cols-[1.2fr_1fr]">

            {/* LEFT CONTENT */}

            <div className="text-left">

              {/* Badge */}

              <div className="inline-flex items-center gap-2 rounded-md border border-[#f9b4c0] bg-[#fff1f4] px-3 py-1">
                <VideoCameraOutlined className="text-[12px] text-[#f5224b]" />

                <span className="text-[12px] font-semibold leading-[16px] text-[#f5224b]">
                  INSTANT CONSULTATION
                </span>
              </div>

              {/* Heading */}

              <h1 className="mb-2 mt-4 text-left text-[40px] font-semibold leading-[48px] text-[#1d2b36]">
                Get Expert Medical Advice Instantly
              </h1>

              {/* Description */}

              <p className="mb-6 text-[16px] font-normal leading-[24px] text-[#687685]">
                Talk to a doctor via video consultation —
                quick, easy and from the comfort of your
                home.
              </p>

              {/* CONSULTATION OPTIONS */}

              <div className="space-y-3">

                {/* VIDEO */}

                <div
                  onClick={() => setMode("video")}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 text-left transition ${
                    mode === "video"
                      ? "border-[#f5224b] bg-[#fff1f4]"
                      : "border-[#e6eaee] bg-white"
                  }`}
                >
                  <VideoCameraOutlined className="text-[20px] text-[#f5224b]" />

                  <div className="flex-1">
                    <p className="m-0 text-[16px] font-medium leading-[24px] text-[#1d2b36]">
                      Instant Video Consultation
                    </p>

                    <p className="m-0 mt-1 text-[14px] font-normal leading-[20px] text-[#8a96a3]">
                      Connect with a doctor right away.
                      No booking needed.
                    </p>
                  </div>

                  <span className="rounded-md bg-[#f5224b] px-2 py-1 text-[12px] font-medium leading-[16px] text-white">
                    Available
                  </span>
                </div>

                {/* INFORMATION */}

                <div
                  onClick={() => setMode("info")}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 text-left transition ${
                    mode === "info"
                      ? "border-[#f5224b] bg-[#fff1f4]"
                      : "border-[#e6eaee] bg-white"
                  }`}
                >
                  <InfoCircleOutlined className="text-[20px] text-[#687685]" />

                  <div className="flex-1">
                    <p className="m-0 text-[16px] font-medium leading-[24px] text-[#1d2b36]">
                      To Know about Mero Doctor
                    </p>

                    <p className="m-0 mt-1 text-[14px] font-normal leading-[20px] text-[#8a96a3]">
                      Learn about our services, doctors
                      and how it works.
                    </p>
                  </div>

                  <span className="text-[14px] leading-[20px] text-[#8a96a3]">
                    7 AM – 9 PM
                  </span>
                </div>

              </div>

              {/* BUTTON */}

              <Button
                type="primary"
                block
                onClick={() =>
                  setPage(
                    mode === "video"
                      ? "video-consultation"
                      : "about"
                  )
                }
                className="!mt-5 !h-11 !rounded-md !border-[#f5224b] !bg-[#f5224b] !text-[16px] !font-semibold"
              >
                Start Video Consultation
                <ExportOutlined />
              </Button>

              {/* SUPPORT */}

              <p className="mb-0 mt-4 text-center text-[14px] leading-[20px] text-[#687685]">
                <PhoneOutlined className="mr-1 text-[#f5224b]" />

                Our team is available 7 AM to 9 PM or{" "}

                <span className="font-medium text-[#f5224b]">
                  9801234567
                </span>
              </p>
            </div>

            {/* RIGHT CONTENT */}

            <div>

              {/* VIDEO IMAGE */}

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#dfe7ec]">

                <img
                  src="/images/consultation-doctor.png"
                  alt="Doctor on video call"
                  className="h-full w-full object-cover"
                />

                <div className="absolute right-3 top-3 h-16 w-16 overflow-hidden rounded-lg border-2 border-white bg-[#c9d5dd]">

                  <img
                    src="/images/consultation-patient.png"
                    alt="Patient"
                    className="h-full w-full object-cover"
                  />

                </div>
              </div>

              {/* FEATURES */}

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">

                {FEATURES.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-center gap-3 rounded-lg border border-[#e6eaee] bg-white p-3 text-left"
                  >
                    <span className="text-[20px] text-[#687685]">
                      {feature.icon}
                    </span>

                    <div>
                      <p className="m-0 text-[14px] font-medium leading-[20px] text-[#1d2b36]">
                        {feature.title}
                      </p>

                      <p className="m-0 text-[12px] font-normal leading-[16px] text-[#8a96a3]">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* ================= CONSULTATION FOR ================= */}

          <div className="mt-5 w-full rounded-xl border border-[#e6eaee] bg-white p-4 sm:p-5">

            <div className="flex flex-col gap-4 text-left sm:flex-row sm:items-center sm:justify-between">

              <div>
                <h2 className="m-0 text-[32px] font-semibold leading-[40px] text-[#1d2b36]">
                  Who is this consultation for?
                </h2>

                <p className="m-0 mt-1 text-[16px] font-normal leading-[24px] text-[#8a96a3]">
                  Select the person you want to consult with.
                </p>
              </div>

              <Button
                type="primary"
                onClick={() => setModalOpen(true)}
                className="!h-10 !rounded-md !border-[#f5224b] !bg-[#f5224b] !text-[14px] !font-semibold"
              >
                Add New Dependent
                <PlusCircleOutlined />
              </Button>
            </div>

            {/* PEOPLE */}

            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">

              {people.map((person) => (
                <div
                  key={person.id}
                  onClick={() =>
                    setSelectedId(person.id)
                  }
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 text-left transition ${
                    selectedId === person.id
                      ? "border-[#f5224b] bg-[#fff1f4]"
                      : "border-[#e6eaee] bg-white"
                  }`}
                >

                  {/* AVATAR */}

                  <div
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[16px] font-medium ${
                      selectedId === person.id
                        ? "bg-[#f5224b] text-white"
                        : "bg-[#fde8ec] text-[#f5224b]"
                    }`}
                  >
                    {selectedId === person.id
                      ? person.name[0]
                      : <UserOutlined />}
                  </div>

                  {/* PERSON INFO */}

                  <div className="min-w-0 flex-1">
                    <p className="m-0 truncate text-[16px] font-medium leading-[24px] text-[#1d2b36]">
                      {person.name}
                    </p>

                    <p className="m-0 truncate text-[14px] font-normal leading-[20px] text-[#8a96a3]">
                      {person.relation}, {person.dob} ·{" "}
                      {person.mobile}
                    </p>
                  </div>

                  {/* RADIO */}

                  <span
                    className={`h-4 w-4 flex-shrink-0 rounded-full border ${
                      selectedId === person.id
                        ? "border-[#f5224b] bg-[#f5224b] shadow-[inset_0_0_0_3px_#fff]"
                        : "border-[#cfd6dd]"
                    }`}
                  />
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}

      <AddDependentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={addPerson}
      />
    </div>
  );
}

export default InstantConsultation;