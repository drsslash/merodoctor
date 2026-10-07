import React from "react";
import { Input, Button } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
  UserOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import familyImage from "../assets/family.png";

// ================= DATA =================
const doctors = [
  {
    id: 1,
    name: "Dr. Anisha Sharma",
    specialty: "Dermatologist",
    experienceYears: 8,
    feeValue: 800,
    availability: "Available today",
    time: "10:00 AM - 5:00 PM",
    gender: "Female",
  },
  {
    id: 2,
    name: "Dr. Ramesh Thapa",
    specialty: "Cardiologist",
    experienceYears: 12,
    feeValue: 1200,
    availability: "Available today",
    time: "11:00 AM - 4:00 PM",
    gender: "Male",
  },
  {
    id: 3,
    name: "Dr. Priya Karki",
    specialty: "Pediatrician",
    experienceYears: 6,
    feeValue: 700,
    availability: "Available tomorrow",
    time: "9:00 AM - 3:00 PM",
    gender: "Female",
  },
  {
    id: 4,
    name: "Dr. Suman Adhikari",
    specialty: "General Physician",
    experienceYears: 10,
    feeValue: 600,
    availability: "Available today",
    time: "12:00 PM - 6:00 PM",
    gender: "Male",
  }
];

const SLOTS = [
  {
    specialty: "General medicine",
    day: "TODAY",
    time: "3:15 PM",
    doctor: "Dr. Bikash Shrestha",
    sub: "General Medic...",
    fee: "Rs 500",
  },
  {
    specialty: "Gynaecology",
    day: "TODAY",
    time: "4:30 PM",
    doctor: "Dr. Aasha Sharma...",
    sub: "Gynaecology",
    fee: "Rs 800",
  },
  {
    specialty: "Paediatrics",
    day: "TOMORROW",
    time: "6:00 PM",
    doctor: "Dr. Nirmal Karki",
    sub: "Paediatrics",
    fee: "Rs 600",
  },
];

const POPULAR = [
  "Fever",
  "Skin",
  "Gynaecology",
  "Child health",
  "Mental health",
];

// ================= SMALL PIECES =================

function SlotCard({ slot, t }) {
  const today = slot.day === "TODAY";

  return (
    <div className="min-w-[230px] flex-1 rounded-lg border border-[#e6eaee] bg-white p-3 text-left shadow-sm">
      <div className="flex items-center justify-between">
        <p className="m-0 text-[14px] leading-[20px] font-medium text-[#1d2b36]">
          {t(`dashboard.slots.${slot.specialty}`)}
        </p>

        <span
          className={`rounded px-1.5 py-0.5 text-[12px] leading-[16px] font-medium ${
            today
              ? "bg-[#d9f5ee] text-[#0fa383]"
              : "bg-[#fdf0cf] text-[#b7791f]"
          }`}
        >
          {t(`dashboard.${slot.day.toLowerCase()}`)}
        </span>
      </div>

      <div className="mt-1 flex items-end justify-between">
        <div>
          <p className="m-0 text-[20px] leading-[28px] font-semibold text-[#1d2b36]">
            {slot.time}
          </p>

          <p className="m-0 cursor-pointer text-[14px] leading-[20px] font-semibold text-[#f5224b]">
            {t("dashboard.book")} ›
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e9eef2] text-[#687685]">
            <UserOutlined className="text-[12px]" />
          </div>

          <div className="text-[12px] leading-[16px] text-[#687685]">
            <p className="m-0 font-medium text-[#1d2b36]">
              {slot.doctor}
            </p>

            <p className="m-0">
              {slot.sub}{" "}
              <span className="ml-1">
                {slot.fee}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DoctorCard({ doctor, setPage }) {
  return (
    <div className="flex-1 rounded-lg border border-[#e6eaee] bg-white p-5 py-6 text-left shadow-sm flex flex-col justify-between">
      <div>
        {/* Profile Avatar & Bookmark Icon Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#e9eef2] text-[#687685]">
            <UserOutlined className="text-[20px]" />
          </div>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 border border-gray-200 text-gray-500 hover:text-[#f5224b] hover:border-[#f5224b] transition-colors cursor-pointer">
            <StarOutlined className="text-[14px]" />
          </button>
        </div>

        {/* Name below profile */}
        <div className="mb-3">
          <h3 className="text-[16px] font-semibold text-[#1d2b36] m-0 leading-[22px]">
            {doctor.name}
          </h3>
          <p className="text-[13px] text-[#687685] m-0 mt-0.5">
            {doctor.specialty}
          </p>
        </div>

        {/* Experience & Price side by side with a line in between */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-[12px]">
            <span className="text-[#8a96a3]">
              <span className="font-medium text-[#1d2b36]">{doctor.experienceYears} years</span> experience
            </span>
            <div className="h-4 w-[1px] bg-gray-200 mx-2"></div>
            <span className="font-semibold text-[#1d2b36]">
              Rs {doctor.feeValue}
            </span>
          </div>
          <div className="mt-2 inline-flex items-center justify-center rounded-full bg-gray-50 border border-gray-200 px-6 py-4 text-[12px] font-medium text-gray-600">
            {doctor.time}
          </div>
        </div>
      </div>

      {/* Action Buttons Side-by-side */}
      <div className="mt-3 flex items-center gap-2">
        <p
          onClick={() => setPage("doctors")}
          className="cursor-pointer text-[10px] leading-[20px] font-semibold text-blue-500 underline"
        >
          View Profile
        </p>
        <Button
          type="primary"
          onClick={() => setPage("doctors")}
          className="!h-[36px] !w-[100px] !rounded-md !border-[#f5224b] !bg-[#f5224b] !text-[12px] !font-semibold flex-1"
        >
          Book Appointment
        </Button>
      </div>
    </div>
  );
}

// ================= DASHBOARD =================

function Dashboard({ setPage }) {
  const { t } = useTranslation();

  const slide = 1;

  return (
    <div
      id="dashboard"
      className="min-h-screen bg-[#294454] flex flex-col text-left"
    >
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[linear-gradient(100deg,#294454_0%,#1f6a66_35%,#0fbf9f_70%,#06c39e_100%)]">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 pt-[110px] pb-6 relative">

          <div className="relative z-10 max-w-[480px]">
            <h1 className="!m-0 !text-left !text-[40px] !leading-[48px] sm:!text-[40px] sm:!leading-[48px] !font-semibold !text-white">
              {t("dashboard.heroTitle")}
            </h1>

            <p className="!mt-4 !mb-5 max-w-[400px] text-[14px] leading-[24px] font-normal text-white/85">
              {t("dashboard.heroDescription")}
            </p>

            <div>
              <Button
                onClick={() => setPage("doctors")}
                className="!h-[50px] !w-[200px] !rounded-md !border-0 !bg-gray-500 !text-white !text-[14px] !leading-[20px] !font-semibold"
              >
                {t("dashboard.findDoctor")}{" "}
                <RightOutlined className="text-[10px]" />
              </Button>
            </div>

            {/* ---------- Slide controls ---------- */}

            <div className="!mt-5 !mb-2 inline-flex items-center gap-2">
              <LeftOutlined className="!text-[11px] !text-white/70" />

              <div className="flex items-center gap-1">
                <span className="h-[3px] w-5 rounded bg-white" />

                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="h-[3px] w-3 rounded bg-white/25"
                  />
                ))}
              </div>

              <span className="text-[12px] leading-[16px] font-normal text-white/70">
                {slide} / 5
              </span>

              <RightOutlined className="!text-[11px] !text-white" />
            </div>
          </div>

          {/* ---------- Hero image ---------- */}

          <img
            src={familyImage}
            alt={t("dashboard.familyImageAlt")}
            className="
              hidden
              md:block
              absolute
              right-6
              bottom-0
              w-[420px]
              h-[500px]
              object-cover
              rounded-2xl
              opacity-95
            "
          />

          {/* ---------- Next available slots ---------- */}

          <div className="relative z-10 !mt-3 rounded-xl bg-white px-4 py-3 shadow-md">
            <div className="flex items-center justify-between">
              <p className="m-0 text-[14px] leading-[20px] font-medium text-[#1d2b36]">
                {t("dashboard.nextAvailableSlots")}{" "}
                <span className="ml-1 text-[14px] leading-[20px] font-normal text-[#8a96a3]">
                  {t("dashboard.slotsDescription")}
                </span>
              </p>

              <span className="cursor-pointer text-[14px] leading-[20px] font-semibold text-[#f5224b]">
                {t("dashboard.viewAllSpecialties")} ›
              </span>
            </div>

            <div className="!mt-3 flex items-center gap-2">
              <button className="hidden h-6 w-6 flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#e1e5e9] bg-white text-[#687685] sm:flex">
                <LeftOutlined className="text-[9px]" />
              </button>

              <div className="flex flex-1 gap-3 overflow-x-auto pb-1">
                {SLOTS.map((s) => (
                  <SlotCard
                    key={s.specialty}
                    slot={s}
                    t={t}
                  />
                ))}
              </div>

              <button className="hidden h-6 w-6 flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#e1e5e9] bg-white text-[#687685] sm:flex">
                <RightOutlined className="text-[9px]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SEARCH + INSTANT CONSULT ================= */}

      <section className="flex-1 bg-[#294050] !text-left">
        <div className="relative mx-auto flex max-w-[1100px] flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:gap-12">

          {/* ---------- Search ---------- */}

          <div className="max-w-[720px] flex-1">
            <h2 className="!m-0 !text-left !text-[32px] !leading-[40px] !font-semibold !text-white">
              {t("dashboard.notSureTitle")}
            </h2>

            <p className="!mt-4 !mb-5 text-[14px] leading-[20px] font-normal text-white/60">
              {t("dashboard.searchDescription")}
            </p>

            <div className="flex items-center gap-2 rounded-lg bg-white p-1.5">
              <Input
                variant="borderless"
                prefix={
                  <SearchOutlined className="text-[#8a96a3]" />
                }
                placeholder={t("dashboard.searchPlaceholder")}
                className="!text-[16px] !leading-[24px]"
              />

              <Button
                type="primary"
                className="!h-[40px] !rounded-md !border-[#f5224b] !bg-[#f5224b] !text-[14px] !leading-[20px] !font-semibold"
              >
                {t("dashboard.search")}
              </Button>
            </div>

            <div className="!mt-5 flex flex-wrap items-center gap-2">
              <span className="text-[14px] leading-[20px] font-normal text-white/50">
                {t("dashboard.popular")}
              </span>

              {POPULAR.map((p) => (
                <span
                  key={p}
                  className="cursor-pointer rounded-full bg-[#3c5667] px-2.5 py-1 text-[14px] leading-[20px] font-normal text-white/80"
                >
                  {t(`dashboard.popularItems.${p}`)}
                </span>
              ))}
            </div>
          </div>

          {/* ---------- Free instant consultation ---------- */}

          <div className="w-full rounded-xl bg-[#3a5262] p-4 lg:w-[350px]">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[11px] leading-[16px] font-semibold text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#20c4b5]" />
                {t("dashboard.instantConsultation")}
              </span>

              <span className="rounded bg-white px-1.5 py-0.5 text-[12px] leading-[16px] font-semibold text-[#0fa383]">
                {t("dashboard.free")}
              </span>
            </div>

            <div className="!mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#294454]">
                <UserOutlined />
              </div>

              <div>
                <p className="!m-0 text-[16px] leading-[24px] font-semibold text-white">
                  {t("dashboard.doctorAvailable")}
                </p>

                <p className="!m-0 text-[14px] leading-[20px] font-normal text-white/60">
                  {t("dashboard.doctorHours")}
                </p>
              </div>
            </div>

            <Button
              type="primary"
              block
              onClick={() =>
                setPage("instant-consultation")
              }
              className="!mt-5 !h-[40px] !rounded-md !border-[#f5224b] !bg-[#f5224b] !text-[14px] !leading-[20px] !font-semibold"
            >
              {t("dashboard.startInstantConsultation")}{" "}
              <RightOutlined className="text-[9px]" />
            </Button>

            <p className="!mt-4 !mb-0 !text-center !text-[10px] !leading-[16px] !font-normal !text-white/40">
              {t("dashboard.privateEncrypted")}
            </p>
          </div>
        </div>
      </section>

      {/* ================= DOCTORS SECTION ================= */}

      <div className="!text-left bg-gray-100 flex items-center justify-between w-full relative">

        {/* LEFT ARROW - OUTSIDE THE CONTENT MARGIN */}
        <button
          className="
            absolute
            left-15
            top-1/2
            -translate-y-1/2
            z-10
            hidden
            h-8
            w-8
            flex-shrink-0
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border
            border-[#e1e5e9]
            bg-white
            text-[#687685]
            sm:flex
          "
        >
          <LeftOutlined className="text-[9px]" />
        </button>

        <div className="max-w-7xl w-[1190px] mx-auto px-6 sm:px-10 lg:px-16 py-10">
          {/* Overline */}
          <p
            className="
              text-[12px]
              leading-[16px]
              font-semibold
              text-rose-500
              uppercase
              !mb-2
            "
          >
            Trusted Care
          </p>

          {/* Heading H2 */}
          <h2
            className="
              text-[32px]
              leading-[40px]
              font-semibold
              !text-black
            "
          >
            Appointments with Doctors
          </h2>

          <div className="flex items-center justify-between mt-2">
            {/* Body Medium */}
            <p
              className="
                text-[12px]
                leading-[24px]
                font-normal
                !text-gray-700
                mb-0
              "
            >
              200+ experienced practitioners available for video consultations and appointments.
            </p>

            <p
              onClick={() => setPage("find-doctor")}
              className="text-[12px]
                leading-[24px]
                font-semibold
                !text-black
                mb-0
                cursor-pointer
                hover:text-[#f5224b]
              "
            >
              View all doctors <RightOutlined className="text-[9px]" />
            </p>
          </div>

          {/* Doctors Grid */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

            {doctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} setPage={setPage} />
            ))}
          </div>
        </div>

        {/* RIGHT ARROW - OUTSIDE THE CONTENT MARGIN */}
        <button
          className="
            absolute
            right-15
            top-1/2
            -translate-y-1/2
            z-10
            hidden
            h-8
            w-8
            flex-shrink-0
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border
            border-[#e1e5e9]
            bg-white
            text-[#687685]
            sm:flex
          "
        >
          <RightOutlined className="text-[9px]" />
        </button>

      </div>
    </div>
  );
}

export default Dashboard;