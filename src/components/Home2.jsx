import { useState } from "react";
import { Rate } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const reviews = [
  {
    category: "dermatology",
    quote: "sabitaQuote",
    name: "sabitaName",
    location: "kathmandu",
  },
  {
    category: "pediatricFollowUp",
    quote: "nikeshQuote",
    name: "nikeshName",
    location: "itahari",
  },
  {
    category: "instantConsultation",
    quote: "upaQuote",
    name: "upaName",
    location: "pokhara",
  },
  {
    category: "generalConsultation",
    quote: "sumanQuote",
    name: "sumanName",
    location: "lalitpur",
  },
  {
    category: "quickAppointment",
    quote: "priyaQuote",
    name: "priyaName",
    location: "bhaktapur",
  },
  {
    category: "digitalPrescription",
    quote: "aashishQuote",
    name: "aashishName",
    location: "chitwan",
  },
  {
    category: "easyConsultation",
    quote: "bikashQuote",
    name: "bikashName",
    location: "kathmandu",
  },
  {
    category: "doctorAvailability",
    quote: "saritaQuote",
    name: "saritaName",
    location: "biratnagar",
  },
  {
    category: "onlineFollowUp",
    quote: "rameshQuote",
    name: "rameshName",
    location: "dharan",
  },
];

function Home2() {
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(0);

  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const startIndex = currentPage * reviewsPerPage;

  const currentReviews = reviews.slice(
    startIndex,
    startIndex + reviewsPerPage
  );

  const nextReviews = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousReviews = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section
      id="home2"
      className="
        relative
        min-h-screen
        bg-white
        px-4
        sm:px-6
        md:px-10
        lg:px-16
        xl:px-20
        py-12
        sm:py-16
        lg:py-20
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Top Heading */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">

          {/* Overline */}
          <p
            className="
              text-[12px]
              leading-[16px]
              font-semibold
              text-rose-600
              uppercase
              mb-2
              sm:mb-3
            "
          >
            {t("home2.happyPatients")}
          </p>

          {/* Heading H2 */}
          <h2
            className="
              text-[32px]
              leading-[40px]
              font-semibold
              !text-black
              !mb-3
            "
          >
            {t("home2.title")}
          </h2>

          {/* Body Medium */}
          <p
            className="
              !text-[16px]
              !leading-[24px]
              !font-normal
              !text-gray-500
              !max-w-xl
              !mx-auto
              !justify-center
            "
          >
            {t("home2.description")}
          </p>

        </div>


        {/* Rating */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            !items-center
            !justify-center
            gap-2
            sm:gap-4
            mb-8
            sm:mb-12
          "
        >

          {/* H4 */}
          <span
            className="
              text-[24px]
              leading-[32px]
              font-semibold
              text-black
            "
          >
            4.4
          </span>

          <Rate
            disabled
            defaultValue={4.5}
            allowHalf
          />

          {/* Body Small */}
          <span
            className="
              text-[14px]
              leading-[20px]
              font-normal
              text-gray-400
              sm:border-l
              sm:pl-4
            "
          >
            ⭐ 1,200+ {t("home2.reviews")}
          </span>

        </div>


        {/* Reviews */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            sm:gap-5
            lg:gap-6
          "
        >

          {currentReviews.map((review) => (
            <div
              key={review.name}
              className="
                bg-gray-50
                border
                border-gray-300
                rounded-2xl
                p-5
                sm:p-6
                min-h-[260px]
                flex
                flex-col
              "
            >

              {/* Review Header */}
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-2
                  mb-5
                "
              >

                <Rate
                  disabled
                  defaultValue={5}
                />

                {/* Overline */}
                <span
                  className="
                    text-[12px]
                    leading-[16px]
                    font-semibold
                    text-gray-400
                    uppercase
                  "
                >
                  {t(`home2.${review.category}`)}
                </span>

              </div>


              {/* Quote - Body Medium */}
              <p
                className="
                  text-[16px]
                  leading-[24px]
                  font-normal
                  text-gray-600
                  mb-6
                  flex-1
                "
              >
                "{t(`home2.${review.quote}`)}"
              </p>


              {/* User */}
              <div className="border-t border-gray-200 pt-4">

                {/* Body Medium Strong */}
                <p
                  className="
                    text-[16px]
                    leading-[24px]
                    font-medium
                    text-black
                  "
                >
                  {t(`home2.${review.name}`)}
                </p>

                {/* Body Small */}
                <p
                  className="
                    text-[14px]
                    leading-[20px]
                    font-normal
                    text-gray-400
                    mt-1
                  "
                >
                  {t(`home2.${review.location}`)}
                </p>

              </div>

            </div>
          ))}

        </div>


        {/* Previous / Next Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">

          {/* Previous Button */}
          <button
            onClick={previousReviews}
            disabled={currentPage === 0}
            className="
              w-10
              h-10
              rounded-full
              border
              border-gray-300
              bg-white
              flex
              items-center
              justify-center
              text-gray-600
              hover:bg-gray-100
              transition
              cursor-pointer
              disabled:opacity-30
              disabled:cursor-not-allowed
            "
          >
            <LeftOutlined />
          </button>


          {/* Dots */}
          <div className="flex items-center gap-2">

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`
                  rounded-full
                  transition-all
                  ${
                    currentPage === index
                      ? "w-6 h-2 bg-gray-700"
                      : "w-2 h-2 bg-gray-300"
                  }
                `}
              />
            ))}

          </div>


          {/* Next Button */}
          <button
            onClick={nextReviews}
            disabled={currentPage === totalPages - 1}
            className="
              w-10
              h-10
              rounded-full
              border
              border-gray-300
              bg-white
              flex
              items-center
              justify-center
              text-gray-600
              hover:bg-gray-100
              transition
              cursor-pointer
              disabled:opacity-30
              disabled:cursor-not-allowed
            "
          >
            <RightOutlined />
          </button>

        </div>


        {/* Read All Reviews */}
        <div className="text-center mt-6 sm:mt-8">

          <button
            className="
              border
              border-gray-400
              rounded-lg
              px-5
              sm:px-6
              py-2.5
              sm:py-3
              bg-white
              text-[14px]
              leading-[20px]
              font-semibold
              text-gray-600
              hover:bg-gray-100
              transition
              cursor-pointer
            "
          >
            {t("home2.readAllReviews")} ↗
          </button>

        </div>

      </div>
    </section>
  );
}

export default Home2;