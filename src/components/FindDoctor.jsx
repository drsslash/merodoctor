import React, { useState } from "react";
import { Card, Button, Input, Empty } from "antd";
import {
  SearchOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

const doctors = [
  {
    id: 1,
    name: "Dr. Anisha Sharma",
    specialty: "Dermatologist",
    experience: "8 years experience",
    fee: "Rs. 800",
    availability: "Available today",
    time: "10:00 AM - 5:00 PM",
  },
  {
    id: 2,
    name: "Dr. Ramesh Thapa",
    specialty: "Cardiologist",
    experience: "12 years experience",
    fee: "Rs. 1,200",
    availability: "Available today",
    time: "11:00 AM - 4:00 PM",
  },
  {
    id: 3,
    name: "Dr. Priya Karki",
    specialty: "Pediatrician",
    experience: "6 years experience",
    fee: "Rs. 700",
    availability: "Available tomorrow",
    time: "9:00 AM - 3:00 PM",
  },
  {
    id: 4,
    name: "Dr. Suman Adhikari",
    specialty: "General Physician",
    experience: "10 years experience",
    fee: "Rs. 600",
    availability: "Available today",
    time: "12:00 PM - 6:00 PM",
  },
  {
    id: 5,
    name: "Dr. Nisha Gurung",
    specialty: "Gynecologist",
    experience: "9 years experience",
    fee: "Rs. 1,000",
    availability: "Available tomorrow",
    time: "10:00 AM - 2:00 PM",
  },
  {
    id: 6,
    name: "Dr. Bikash Shrestha",
    specialty: "Orthopedic",
    experience: "15 years experience",
    fee: "Rs. 1,300",
    availability: "Available today",
    time: "1:00 PM - 5:00 PM",
  },
  {
    id: 7,
    name: "Dr. Aarav Joshi",
    specialty: "Neurologist",
    experience: "11 years experience",
    fee: "Rs. 1,500",
    availability: "Available today",
    time: "9:00 AM - 2:00 PM",
  },
  {
    id: 8,
    name: "Dr. Maya Shrestha",
    specialty: "ENT Specialist",
    experience: "7 years experience",
    fee: "Rs. 900",
    availability: "Available tomorrow",
    time: "10:00 AM - 4:00 PM",
  },
  {
    id: 9,
    name: "Dr. Kiran Maharjan",
    specialty: "Psychiatrist",
    experience: "13 years experience",
    fee: "Rs. 1,100",
    availability: "Available today",
    time: "2:00 PM - 7:00 PM",
  },
  {
    id: 10,
    name: "Dr. Sneha Rai",
    specialty: "Ophthalmologist",
    experience: "8 years experience",
    fee: "Rs. 850",
    availability: "Available today",
    time: "11:00 AM - 5:00 PM",
  },
  {
    id: 11,
    name: "Dr. Rajan KC",
    specialty: "Dentist",
    experience: "10 years experience",
    fee: "Rs. 700",
    availability: "Available tomorrow",
    time: "9:00 AM - 1:00 PM",
  },
  {
    id: 12,
    name: "Dr. Sita Poudel",
    specialty: "Nutritionist",
    experience: "6 years experience",
    fee: "Rs. 600",
    availability: "Available today",
    time: "10:00 AM - 3:00 PM",
  },
];

function FindDoctor({ setPage }) {
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  const filteredDoctors = doctors.filter((doctor) => {
    return (
      doctor.name.toLowerCase().includes(searchText.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const handleSearch = () => {
    setSearchText(search);
  };

  return (
    <div className="min-h-screen bg-[#f5f7f9]">

      {/* ================= TOP GRAY SECTION ================= */}

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

          {/* ================= LEFT SIDE - HEADER ================= */}

          <div className="flex-1 text-left w-full">

            {/* Overline */}
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
              TRUSTED CARE
            </p>

            {/* Heading H2 */}
            <h1
              className="
                !text-[32px]
                !leading-[40px]
                !font-semibold
                !text-white
                !mb-1
              "
            >
              Find a doctor and book a time
            </h1>

            {/* Body Medium */}
            <p
              className="
                !text-[16px]
                !leading-[24px]
                !font-normal
                !text-gray-300
                !mb-1
              "
            >
              Search by name, specialty or symptom, then pick the next open slot
            </p>

          </div>

          {/* ================= RIGHT SIDE - SEARCH ================= */}

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
              placeholder="Search by doctor name or specialty"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
              Search
            </Button>

          </div>

        </div>

      </div>

      {/* ================= DOCTORS SECTION ================= */}

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

          {/* ================= DOCTOR COUNT ================= */}

          <div className="mb-5">

            {/* Heading H5 */}
            <h2
              className="
                text-[20px]
                leading-[28px]
                font-semibold
                text-[#243b49]
              "
            >
              Available doctors
            </h2>

            {/* Body Small */}
            <p
              className="
                text-[14px]
                leading-[20px]
                font-normal
                text-gray-500
                mt-1
              "
            >
              {filteredDoctors.length} doctors found
            </p>

          </div>

          {/* ================= DOCTOR CARDS ================= */}

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
                  bodyStyle={{ padding: "20px" }}
                >

                  {/* ================= DOCTOR AVATAR ================= */}

                  <div className="flex items-center gap-3 mb-5">

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

                      {/* Heading H6 */}
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

                      {/* Body Small */}
                      <p
                        className="
                          text-[14px]
                          leading-[20px]
                          font-normal
                          text-[#f5224b]
                          mt-1
                        "
                      >
                        {doctor.specialty}
                      </p>

                    </div>

                  </div>

                  {/* ================= EXPERIENCE ================= */}

                  <p
                    className="
                      text-[14px]
                      leading-[20px]
                      font-normal
                      text-gray-500
                      !mb-4
                    "
                  >
                    {doctor.experience}
                  </p>

                  {/* ================= AVAILABILITY ================= */}

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
                        {doctor.availability}
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

                  {/* ================= CONSULTATION FEE ================= */}

                  <div className="flex items-center justify-between gap-2 mb-5">

                    {/* Body Small */}
                    <span
                      className="
                        text-[14px]
                        leading-[20px]
                        font-normal
                        text-gray-500
                      "
                    >
                      Consultation fee
                    </span>

                    {/* Body Large Strong */}
                    <span
                      className="
                        text-[18px]
                        leading-[28px]
                        font-medium
                        text-[#243b49]
                        whitespace-nowrap
                      "
                    >
                      {doctor.fee}
                    </span>

                  </div>

                  {/* ================= BOOK BUTTON ================= */}

                  <Button
                    type="primary"
                    block
                    onClick={() => setPage("book-appointment")}
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
                    Book appointment
                  </Button>

                </Card>

              ))}

            </div>

          ) : (

            <div className="bg-white rounded-xl p-8 sm:p-12">

              <Empty description="No doctors found" />

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default FindDoctor;