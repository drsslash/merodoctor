import { useTranslation } from "react-i18next";

const partners = [
  {
    tag: "clinicsLabs",
    title: "healthPartner",
    description: "healthPartnerDescription",
  },
  {
    tag: "doctors",
    title: "doctorPartner",
    description: "doctorPartnerDescription",
  },
];

export default function Home5() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-gray-100 py-16 px-4">
      
      <div className="max-w-5xl mx-auto text-center">

        {/* Overline */}
        <p
          className="
            text-[12px]
            leading-[16px]
            font-semibold
            text-rose-600
            uppercase
            !mb-3
          "
        >
          {t("home5.joinNetwork")}
        </p>

        {/* Heading H2 */}
        <h2
          className="
            text-[32px]
            leading-[40px]
            font-semibold
            !text-gray-900
            !mb-2
          "
        >
          {t("home5.title")}
        </h2>

        {/* Body Medium */}
        <p
          className="
            text-[16px]
            leading-[24px]
            font-normal
            text-gray-500
            !mb-10
          "
        >
          {t("home5.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">

          {partners.map((partner) => (
            <div
              key={partner.title}
              className="
                bg-white
                hover:bg-gray-300
                border
                border-gray-200
                rounded-xl
                p-6
                transition-colors
              "
            >

              {/* Overline */}
              <p
                className="
                  text-[12px]
                  leading-[16px]
                  font-semibold
                  text-gray-500
                  uppercase
                  !mb-3
                "
              >
                {t(`home5.${partner.tag}`)}
              </p>

              {/* Heading H6 */}
              <h3
                className="
                  text-[18px]
                  leading-[28px]
                  font-semibold
                  text-gray-900
                  !mb-2
                "
              >
                {t(`home5.${partner.title}`)}
              </h3>

              {/* Body Small */}
              <p
                className="
                  text-[14px]
                  leading-[20px]
                  font-normal
                  text-gray-600
                  !mb-5
                "
              >
                {t(`home5.${partner.description}`)}
              </p>

              {/* Button Medium */}
              <button
                className="
                  px-5
                  py-2
                  rounded-full
                  bg-rose-600
                  text-white
                  text-[14px]
                  leading-[20px]
                  font-semibold
                  hover:bg-rose-700
                  cursor-pointer
                  transition-colors
                "
              >
                {t("home5.applyNow")}
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}