import { useState } from "react";
import { Button, Input } from "antd";
import {
  SearchOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";

const hospitals = [
  {
    id: 1,
    name: "Grande International Hospital",
    city: "Kathmandu",
    phone: "01-5159266",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Norvic International Hospital",
    city: "Kathmandu",
    phone: "01-4258554",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Nepal Mediciti Hospital",
    city: "Lalitpur",
    phone: "01-4217766",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "B&B Hospital",
    city: "Lalitpur",
    phone: "01-5531933",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Om Hospital and Research Centre",
    city: "Kathmandu",
    phone: "01-4476225",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "HAMS Hospital",
    city: "Kathmandu",
    phone: "01-4786111",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
  },
];

function HospitalAppointments({ setPage }) {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");

  const filteredHospitals = hospitals.filter((hospital) => {
    const searchText = search.toLowerCase().trim();

    return (
      hospital.name.toLowerCase().includes(searchText) ||
      hospital.city.toLowerCase().includes(searchText) ||
      hospital.phone.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="min-h-screen bg-[#f5f7f9]">

      {/* ================= HERO ================= */}

      <div className="w-full bg-[#203847] pt-28 pb-10">
        <div
          className="
            max-w-6xl
            mx-auto
            px-4
            sm:px-6
            lg:px-10
          "
        >
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
                  !text-[17px]
                  !leading-[20px]
                  !font-semibold
                  !text-white
                "
              >
                {t("hospitalPage.title")}
              </p>

            </div>

            {/* Search */}

            <div
              className="
                w-full
                lg:w-[600px]
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
                placeholder={t("hospitalPage.searchPlaceholder")}
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
                onClick={() => setSearch(search.trim())}
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
                {t("hospitalPage.search")}
              </Button>

            </div>

          </div>
        </div>
      </div>

      {/* ================= HOSPITAL LIST ================= */}

      <div
        className="
          max-w-6xl
          mx-auto
          px-4
          sm:px-6
          lg:px-10
          py-10
        "
      >

        {/* Results */}

        <div className="mb-6">

          <h2
            className="
              text-[24px]
              leading-[32px]
              font-semibold
              text-[#243b49]
            "
          >
            {t("hospitalPage.availableHospitals")}
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
            {t("hospitalPage.hospitalsFound", {
              count: filteredHospitals.length,
            })}
          </p>

        </div>

        {/* Hospital Cards */}

        {filteredHospitals.length > 0 ? (

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-5
            "
          >

            {filteredHospitals.map((hospital) => (

              <div
                key={hospital.id}
                className="
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  border
                  border-gray-200
                  shadow-sm
                  hover:shadow-md
                  transition-shadow
                "
              >

                {/* Hospital Image */}

                <div className="w-full h-[200px] overflow-hidden">

                  <img
                    src={hospital.image}
                    alt={hospital.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      hover:scale-105
                      transition-transform
                      duration-300
                    "
                  />

                </div>

                {/* Card Content */}

                <div className="p-5">

                  {/* Hospital Name */}

                  <h3
                    className="
                      text-[20px]
                      leading-[28px]
                      font-semibold
                      text-[#243b49]
                      mb-3
                    "
                  >
                    {hospital.name}
                  </h3>

                  {/* Location */}

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-[14px]
                      leading-[20px]
                      font-normal
                      text-gray-500
                      mb-2
                    "
                  >
                    <EnvironmentOutlined />

                    <span>
                      {hospital.city}
                    </span>
                  </div>

                  {/* Phone */}

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-[14px]
                      leading-[20px]
                      font-normal
                      text-gray-500
                      mb-5
                    "
                  >
                    <PhoneOutlined />

                    <span>
                      {hospital.phone}
                    </span>
                  </div>

                  {/* Book Appointment */}

                  <Button
                    type="primary"
                    block
                    onClick={() =>
                      console.log(
                        "Book appointment:",
                        hospital.name
                      )
                    }
                    className="
                      !h-10
                      !rounded-lg
                      !bg-[#f5224b]
                      !border-[#f5224b]
                      !text-[14px]
                      !leading-[20px]
                      !font-semibold
                    "
                  >
                    {t("hospitalPage.bookAppointment")}
                  </Button>

                </div>

              </div>

            ))}

          </div>

        ) : (

          /* No Results */

          <div
            className="
              bg-white
              rounded-xl
              p-10
              text-center
            "
          >
            <p
              className="
                text-[16px]
                leading-[24px]
                font-normal
                text-gray-500
              "
            >
              {t("hospitalPage.noHospitals")}
            </p>
          </div>

        )}

      </div>

      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default HospitalAppointments;