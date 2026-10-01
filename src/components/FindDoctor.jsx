import React, { useState } from "react";
import { Card, Button, Input, Select, Empty, Slider } from "antd";
import {
  SearchOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  UserOutlined,
  FilterOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import Footer from "./Footer";

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
  },
  {
    id: 5,
    name: "Dr. Nisha Gurung",
    specialty: "Gynecologist",
    experienceYears: 9,
    feeValue: 1000,
    availability: "Available tomorrow",
    time: "10:00 AM - 2:00 PM",
    gender: "Female",
  },
  {
    id: 6,
    name: "Dr. Bikash Shrestha",
    specialty: "Orthopedic",
    experienceYears: 15,
    feeValue: 1300,
    availability: "Available today",
    time: "1:00 PM - 5:00 PM",
    gender: "Male",
  },
  {
    id: 7,
    name: "Dr. Aarav Joshi",
    specialty: "Neurologist",
    experienceYears: 11,
    feeValue: 1500,
    availability: "Available today",
    time: "9:00 AM - 2:00 PM",
    gender: "Male",
  },
  {
    id: 8,
    name: "Dr. Maya Shrestha",
    specialty: "ENT Specialist",
    experienceYears: 7,
    feeValue: 900,
    availability: "Available tomorrow",
    time: "10:00 AM - 4:00 PM",
    gender: "Female",
  },
  {
    id: 9,
    name: "Dr. Kiran Maharjan",
    specialty: "Psychiatrist",
    experienceYears: 13,
    feeValue: 1100,
    availability: "Available today",
    time: "2:00 PM - 7:00 PM",
    gender: "Male",
  },
  {
    id: 10,
    name: "Dr. Sneha Rai",
    specialty: "Ophthalmologist",
    experienceYears: 8,
    feeValue: 850,
    availability: "Available today",
    time: "11:00 AM - 5:00 PM",
    gender: "Female",
  },
  {
    id: 11,
    name: "Dr. Rajan KC",
    specialty: "Dentist",
    experienceYears: 10,
    feeValue: 700,
    availability: "Available tomorrow",
    time: "9:00 AM - 1:00 PM",
    gender: "Male",
  },
  {
    id: 12,
    name: "Dr. Sita Poudel",
    specialty: "Nutritionist",
    experienceYears: 6,
    feeValue: 600,
    availability: "Available today",
    time: "10:00 AM - 3:00 PM",
    gender: "Female",
  },
];

function FindDoctor({ setPage }) {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedAvailability, setSelectedAvailability] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedExperience, setSelectedExperience] = useState("All");

  const [maxFee, setMaxFee] = useState(2000);
  const [sortBy, setSortBy] = useState("default");

  const [showFilters, setShowFilters] = useState(false);

  // ================= SPECIALTY OPTIONS =================

  const specialtyOptions = [
    {
      label: t("findDoctor.allSpecialties"),
      value: "All",
    },
    ...Array.from(
      new Set(doctors.map((doctor) => doctor.specialty))
    ).map((specialty) => ({
      label: t(
        `findDoctor.specialties.${specialty}`
      ),
      value: specialty,
    })),
  ];

  // ================= AVAILABILITY OPTIONS =================

  const availabilityOptions = [
    {
      label: t("findDoctor.allAvailability"),
      value: "All",
    },
    {
      label: t("findDoctor.availableToday"),
      value: "Available today",
    },
    {
      label: t("findDoctor.availableTomorrow"),
      value: "Available tomorrow",
    },
  ];

  // ================= GENDER OPTIONS =================

  const genderOptions = [
    {
      label: t("findDoctor.allGenders"),
      value: "All",
    },
    {
      label: t("findDoctor.female"),
      value: "Female",
    },
    {
      label: t("findDoctor.male"),
      value: "Male",
    },
  ];

  // ================= EXPERIENCE OPTIONS =================

  const experienceOptions = [
    {
      label: t("findDoctor.allExperience"),
      value: "All",
    },
    {
      label: t("findDoctor.fivePlusYears"),
      value: "5",
    },
    {
      label: t("findDoctor.tenPlusYears"),
      value: "10",
    },
  ];

  // ================= SORT OPTIONS =================

  const sortOptions = [
    {
      label: t("findDoctor.defaultSort"),
      value: "default",
    },
    {
      label: t("findDoctor.feeLowToHigh"),
      value: "fee-asc",
    },
    {
      label: t("findDoctor.feeHighToLow"),
      value: "fee-desc",
    },
    {
      label: t("findDoctor.experienceHighToLow"),
      value: "exp-desc",
    },
  ];

  // ================= RESET =================

  const handleResetFilters = () => {
    setSelectedSpecialty("All");
    setSelectedAvailability("All");
    setSelectedGender("All");
    setSelectedExperience("All");
    setMaxFee(2000);
    setSortBy("default");
    setSearch("");
    setSearchText("");
  };

  // ================= FILTER =================

  const filteredDoctors = doctors
    .filter((doctor) => {
      const matchesSearch =
        doctor.name
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        doctor.specialty
          .toLowerCase()
          .includes(searchText.toLowerCase());

      const matchesSpecialty =
        selectedSpecialty === "All" ||
        doctor.specialty === selectedSpecialty;

      const matchesAvailability =
        selectedAvailability === "All" ||
        doctor.availability === selectedAvailability;

      const matchesGender =
        selectedGender === "All" ||
        doctor.gender === selectedGender;

      const matchesExperience =
        selectedExperience === "All" ||
        doctor.experienceYears >=
          parseInt(selectedExperience);

      const matchesFee =
        doctor.feeValue <= maxFee;

      return (
        matchesSearch &&
        matchesSpecialty &&
        matchesAvailability &&
        matchesGender &&
        matchesExperience &&
        matchesFee
      );
    })
    .sort((a, b) => {
      if (sortBy === "fee-asc") {
        return a.feeValue - b.feeValue;
      }

      if (sortBy === "fee-desc") {
        return b.feeValue - a.feeValue;
      }

      if (sortBy === "exp-desc") {
        return (
          b.experienceYears -
          a.experienceYears
        );
      }

      return 0;
    });

  // ================= SEARCH =================

  const handleSearch = () => {
    setSearchText(search);
  };

  return (
    <div className="min-h-screen bg-[#f5f7f9]">

      {/* ================= HERO ================= */}

      <div className="w-full bg-gray-700 pt-28 pb-10">

        <div
          className="
            w-full
            px-4
            sm:px-6
            lg:px-16
            flex
            flex-col
            lg:flex-row
            items-start
            lg:items-center
            gap-6
            lg:gap-16
          "
        >

          {/* Hero Text */}

          <div className="flex-1 text-left w-full">

            <p
              className="
                !text-[12px]
                !leading-[16px]
                !font-semibold
                !mb-1
                text-[#f5224b]
                uppercase
              "
            >
              {t("findDoctor.trustedCare")}
            </p>

            <h1
              className="
                !text-[30px]
                !leading-[40px]
                !font-semibold
                !text-white
                !mb-1
              "
            >
              {t("findDoctor.title")}
            </h1>

            <p
              className="
                !text-[16px]
                !leading-[24px]
                !font-normal
                !text-gray-300
                !mb-1
              "
            >
              {t("findDoctor.description")}
            </p>

          </div>

          {/* Search */}

          <div
            className="
              w-full
              lg:w-[700px]
              bg-white
              rounded-xl
              p-3
              sm:p-4
              lg:p-5
              shadow-sm
              flex
              flex-col
              sm:flex-row
              items-stretch
              sm:items-center
              gap-3
              sm:gap-4
              flex-shrink-0
            "
          >

            <Input
              size="large"
              prefix={<SearchOutlined />}
              placeholder={t(
                "findDoctor.searchPlaceholder"
              )}
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                flex-1
                !text-[16px]
                !leading-[24px]
              "
            />

            <Button
              type="primary"
              size="large"
              onClick={handleSearch}
              className="
                !h-10
                !w-full
                sm:!w-auto
                !px-6
                !rounded-lg
                !bg-[#f5224b]
                !border-[#f5224b]
                !text-[16px]
                !leading-[24px]
                !font-semibold
              "
            >
              {t("findDoctor.search")}
            </Button>

          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div
        className="
          w-full
          px-4
          sm:px-6
          lg:px-16
          py-6
          sm:py-8
          lg:py-10
        "
      >

        <div className="w-full">

          {/* ================= FILTER BAR ================= */}

          <div className="flex items-center justify-between mb-4">

            <Button
              icon={<FilterOutlined />}
              onClick={() =>
                setShowFilters(!showFilters)
              }
              className="
                !flex
                !items-center
                !gap-2
                !font-medium
              "
            >
              {showFilters
                ? t("findDoctor.hideFilters")
                : t("findDoctor.filter")}
            </Button>

            <Button
              icon={<ReloadOutlined />}
              onClick={handleResetFilters}
              className="
                !flex
                !items-center
                !gap-2
                text-gray-600
                hover:text-[#f5224b]
              "
            >
              {t("findDoctor.resetFilters")}
            </Button>

          </div>

          {/* ================= FILTER PANEL ================= */}

          {showFilters && (
            <div
              className="
                bg-white
                p-5
                rounded-xl
                shadow-sm
                mb-6
                flex
                flex-col
                gap-4
                transition-all
                duration-300
              "
            >

              <div className="flex items-center gap-2 text-gray-700 font-medium">

                <FilterOutlined />

                <span>
                  {t("findDoctor.advancedFilters")}
                </span>

              </div>

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-5
                  gap-3
                  w-full
                "
              >

                <Select
                  size="large"
                  value={selectedSpecialty}
                  onChange={(value) =>
                    setSelectedSpecialty(value)
                  }
                  options={specialtyOptions}
                  className="w-full"
                />

                <Select
                  size="large"
                  value={selectedAvailability}
                  onChange={(value) =>
                    setSelectedAvailability(value)
                  }
                  options={availabilityOptions}
                  className="w-full"
                />

                <Select
                  size="large"
                  value={selectedGender}
                  onChange={(value) =>
                    setSelectedGender(value)
                  }
                  options={genderOptions}
                  className="w-full"
                />

                <Select
                  size="large"
                  value={selectedExperience}
                  onChange={(value) =>
                    setSelectedExperience(value)
                  }
                  options={experienceOptions}
                  className="w-full"
                />

                <Select
                  size="large"
                  value={sortBy}
                  onChange={(value) =>
                    setSortBy(value)
                  }
                  options={sortOptions}
                  className="w-full"
                />

              </div>

              {/* Fee Slider */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  items-start
                  sm:items-center
                  justify-between
                  gap-2
                  pt-2
                  border-t
                  border-gray-100
                "
              >

                <span className="
                  text-[14px]
                  leading-[20px]
                  text-gray-600
                  font-medium
                ">
                  {t("findDoctor.maxConsultationFee", {
                    amount: maxFee,
                  })}
                </span>

                <div className="w-full sm:w-72">

                  <Slider
                    min={500}
                    max={2000}
                    step={50}
                    value={maxFee}
                    onChange={(value) =>
                      setMaxFee(value)
                    }
                  />

                </div>

              </div>

            </div>
          )}

          {/* ================= RESULTS ================= */}

          <div className="mb-5">

            <h2
              className="
                text-[20px]
                leading-[28px]
                font-semibold
                text-[#243b49]
              "
            >
              {t("findDoctor.availableDoctors")}
            </h2>

            <p
              className="
                text-[14px]
                leading-[20px]
                font-normal
                text-gray-500
                mt-1
              "
            >
              {t("findDoctor.doctorsFound", {
                count: filteredDoctors.length,
              })}
            </p>

          </div>

          {/* ================= DOCTORS ================= */}

          {filteredDoctors.length > 0 ? (

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-4
                lg:gap-5
              "
            >

              {filteredDoctors.map((doctor) => (

                <Card
                  key={doctor.id}
                  bordered={false}
                  className="rounded-2xl shadow-sm"
                  bodyStyle={{
                    padding: "20px",
                  }}
                >

                  {/* Doctor Header */}

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      mb-5
                    "
                  >

                    <div
                      className="
                        w-12
                        h-12
                        sm:w-14
                        sm:h-14
                        rounded-full
                        bg-[#dce8ee]
                        flex
                        items-center
                        justify-center
                        text-[#294454]
                        text-xl
                        flex-shrink-0
                      "
                    >
                      <UserOutlined />
                    </div>

                    <div className="min-w-0">

                      <h3
                        className="
                          text-[18px]
                          leading-[28px]
                          font-semibold
                          text-[#243b49]
                          truncate
                        "
                      >
                        {doctor.name}
                      </h3>

                      <p
                        className="
                          text-[14px]
                          leading-[20px]
                          font-normal
                          text-[#f5224b]
                          mt-1
                        "
                      >
                        {t(
                          `findDoctor.specialties.${doctor.specialty}`
                        )}
                      </p>

                    </div>

                  </div>

                  {/* Experience */}

                  <p
                    className="
                      text-[14px]
                      leading-[20px]
                      font-normal
                      text-gray-500
                      !mb-4
                    "
                  >
                    {t(
                      "findDoctor.yearsExperience",
                      {
                        count:
                          doctor.experienceYears,
                      }
                    )}
                  </p>

                  {/* Availability */}

                  <div className="space-y-3 mb-5">

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-[14px]
                        leading-[20px]
                        font-normal
                        text-gray-600
                      "
                    >
                      <CalendarOutlined />

                      <span>
                        {t(
                          `findDoctor.availability.${doctor.availability}`
                        )}
                      </span>
                    </div>

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-[14px]
                        leading-[20px]
                        font-normal
                        text-gray-600
                      "
                    >
                      <ClockCircleOutlined />

                      <span>
                        {doctor.time}
                      </span>
                    </div>

                  </div>

                  {/* Consultation Fee */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-2
                      mb-5
                    "
                  >

                    <span
                      className="
                        text-[14px]
                        leading-[20px]
                        font-normal
                        text-gray-500
                      "
                    >
                      {t(
                        "findDoctor.consultationFee"
                      )}
                    </span>

                    <span
                      className="
                        text-[18px]
                        leading-[28px]
                        font-medium
                        text-[#243b49]
                        whitespace-nowrap
                      "
                    >
                      Rs.{" "}
                      {doctor.feeValue.toLocaleString()}
                    </span>

                  </div>

                  {/* Book Appointment */}

                  <Button
                    type="primary"
                    block
                    onClick={() =>
                      setPage(
                        "book-appointment"
                      )
                    }
                    className="
                      !h-9
                      !rounded-lg
                      !bg-[#f5224b]
                      !border-[#f5224b]
                      !text-[14px]
                      !leading-[20px]
                      !font-semibold
                    "
                  >
                    {t(
                      "findDoctor.bookAppointment"
                    )}
                  </Button>

                </Card>

              ))}

            </div>

          ) : (

            <div className="bg-white rounded-xl p-8 sm:p-12">

              <Empty
                description={t(
                  "findDoctor.noDoctorsFound"
                )}
              />

            </div>

          )}

        </div>

      </div>

      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default FindDoctor;