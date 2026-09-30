import {
  UserOutlined,
  MobileOutlined,
  SafetyOutlined,
  HomeOutlined,
  ReadOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const benefits = [
  {
    icon: <UserOutlined />,
    key: "consultTopDoctors",
  },
  {
    icon: <MobileOutlined />,
    key: "convenientEasy",
  },
  {
    icon: <SafetyOutlined />,
    key: "safeConsultations",
  },
  {
    icon: <HomeOutlined />,
    key: "similarClinic",
  },
  {
    icon: <ReadOutlined />,
    key: "freeFollowUp",
  },
  {
    icon: <FileTextOutlined />,
    key: "digitalPrescription",
  },
];

export default function Home3() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#F2F4F5] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">

        {/* Overline */}
        <p
          className="
            text-[12px]
            leading-[16px]
            font-semibold
            text-rose-600
            uppercase
            mb-3
          "
        >
          {t("home3.whyMeroDoctor")}
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
          {t("home3.title")}
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
          {t("home3.description")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">

          {benefits.map((benefit) => (
            <div
              key={benefit.key}
              className="bg-white border rounded-xl p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 text-blue-600 text-xl">
                {benefit.icon}
              </div>

              {/* Heading H6 */}
              <h3
                className="
                  text-[18px]
                  leading-[28px]
                  font-semibold
                  text-gray-900
                  mb-2
                "
              >
                {t(`home3.${benefit.key}.title`)}
              </h3>

              {/* Body Small */}
              <p
                className="
                  text-[14px]
                  leading-[20px]
                  font-normal
                  text-gray-500
                "
              >
                {t(`home3.${benefit.key}.description`)}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}