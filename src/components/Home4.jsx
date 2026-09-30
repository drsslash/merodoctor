import { useState } from "react";
import {
  LeftOutlined,
  RightOutlined,
  CaretRightFilled,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import feather from "../assets/feather.jpg";

const steps = [
  {
    title: "findDoctor",
    description: "findDoctorDescription",
  },
  {
    title: "bookAppointment",
    description: "bookAppointmentDescription",
  },
  {
    title: "paySecurely",
    description: "paySecurelyDescription",
  },
  {
    title: "consultAndGetReport",
    description: "consultAndGetReportDescription",
  },
];

const images = [feather, feather, feather];

export default function Home4() {
  const { t } = useTranslation();

  const [currentImage, setCurrentImage] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const nextImage = () =>
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );

  const previousImage = () =>
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <section className="w-full bg-[#203847] py-12 sm:py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-5xl mx-auto text-left">

        {/* Overline */}
        <p
          className="
            text-[12px]
            leading-[16px]
            font-semibold
            text-rose-500
            uppercase
            mb-2
          "
        >
          {t("home4.experienceMeroDoctor")}
        </p>

        {/* Heading H2 */}
        <h2
          className="
            text-[32px]
            leading-[40px]
            font-semibold
            !text-white
            mb-1
          "
        >
          {t("home4.title")}
        </h2>

        {/* Body Medium */}
        <p
          className="
            text-[16px]
            leading-[24px]
            font-normal
            text-gray-300
            mb-6
          "
        >
          {t("home4.description")}
        </p>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.75fr_1fr] gap-6 lg:gap-8 mt-6">

          {/* Left Side */}
          <div>

            {/* Image */}
            <div
              className="
                relative
                w-full
                h-[220px]
                sm:h-[260px]
                lg:h-[300px]
                bg-gray-800
                rounded-lg
                overflow-hidden
              "
            >
              <img
                src={images[currentImage]}
                alt={t("home4.imageAlt")}
                className="w-full h-full object-cover"
              />

              {/* Play button */}
              <button
                aria-label={t("home4.playVideo")}
                className="
                  absolute
                  top-1/2
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-11
                  h-11
                  rounded-full
                  bg-rose-600
                  hover:bg-rose-500
                  text-white
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  cursor-pointer
                  transition
                "
              >
                <CaretRightFilled className="text-[16px]" />
              </button>
            </div>

            {/* Image Controls */}
            <div className="flex items-center justify-center gap-4 mt-4">

              <button
                onClick={previousImage}
                aria-label={t("home4.previous")}
                className="
                  text-gray-400
                  hover:text-white
                  cursor-pointer
                  transition
                "
              >
                <LeftOutlined className="text-[10px]" />
              </button>

              <div className="flex items-center gap-1.5">

                {images.map((_, index) => (
                  <button
                    key={index}
                    aria-label={t("home4.goToImage", {
                      number: index + 1,
                    })}
                    onClick={() => setCurrentImage(index)}
                    className={`
                      w-2
                      h-2
                      rounded-full
                      cursor-pointer
                      transition-colors
                      ${
                        currentImage === index
                          ? "bg-rose-600"
                          : "bg-gray-300"
                      }
                    `}
                  />
                ))}

              </div>

              <button
                onClick={nextImage}
                aria-label={t("home4.next")}
                className="
                  text-gray-400
                  hover:text-white
                  cursor-pointer
                  transition
                "
              >
                <RightOutlined className="text-[10px]" />
              </button>

            </div>
          </div>

          {/* Right Side: timeline */}
          <div className="flex flex-col gap-3">

            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="
                    relative
                    flex
                    items-center
                    gap-3
                    cursor-pointer
                  "
                >

                  {/* Connecting line */}
                  {!isLast && (
                    <span
                      className="
                        absolute
                        left-[13px]
                        top-1/2
                        w-px
                        h-[calc(100%+12px)]
                        bg-gray-500
                      "
                    />
                  )}

                  {/* Number circle */}
                  <div
                    className={`
                      relative
                      z-10
                      w-7
                      h-7
                      rounded-full
                      flex-shrink-0
                      flex
                      items-center
                      justify-center
                      text-[12px]
                      leading-[16px]
                      font-medium
                      transition-colors
                      ${
                        isActive
                          ? "bg-rose-600 text-white"
                          : "bg-[#2f4657] border border-gray-500 text-gray-300"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Card */}
                  <div
                    className={`
                      flex-1
                      rounded-md
                      px-4
                      py-3
                      transition-colors
                      ${
                        isActive
                          ? "bg-[#5a3545]"
                          : "bg-[#2b4252] hover:bg-[#30495a]"
                      }
                    `}
                  >

                    {/* Heading H6 */}
                    <h4
                      className="
                        text-[18px]
                        leading-[28px]
                        font-semibold
                        text-white
                      "
                    >
                      {t(`home4.${step.title}`)}
                    </h4>

                    {/* Body Small */}
                    <p
                      className="
                        text-[14px]
                        leading-[20px]
                        font-normal
                        text-gray-300
                        mt-1
                      "
                    >
                      {t(`home4.${step.description}`)}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}