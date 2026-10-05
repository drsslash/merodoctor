import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo 2.png";

const columns = [
  {
    title: "company",
    links: ["home", "aboutUs", "faqs"],
  },
  {
    title: "quickLogin",
    links: ["patient", "partners", "doctors"],
  },
  {
    title: "services",
    links: [
      "findDoctors",
      "freeInstantConsultation",
      "videoConsultation",
      "hospitalAppointments",
    ],
  },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#294050] text-white !px-4 !py-12">
      <div className="max-w-5xl mx-auto !text-left">

        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-5 !gap-8 !pb-10">

          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Mero Doctor"
              className="w-[115px] h-auto !mb-3"
            />

            {/* Body Small */}
            <p
              className="
                text-[14px]
                leading-[20px]
                font-normal
                text-gray-400
              "
            >
              {t("footer.description")}
            </p>
          </div>

          {/* Links */}
          {columns.map((column) => (
            <div key={column.title}>

              {/* Overline */}
              <h3
                className="
                  text-[12px]
                  leading-[16px]
                  font-semibold
                  text-gray-400
                  uppercase
                  !mb-3
                "
              >
                {t(`footer.${column.title}`)}
              </h3>

              <div className="flex flex-col !gap-2">
                {column.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="
                      text-[14px]
                      leading-[20px]
                      font-normal
                      text-gray-300
                      hover:text-white
                    "
                  >
                    {t(`footer.${link}`)}
                  </a>
                ))}
              </div>

            </div>
          ))}

          {/* Get in touch */}
          <div>

            {/* Overline */}
            <h3
              className="
                text-[12px]
                leading-[16px]
                font-semibold
                text-gray-400
                uppercase
                !mb-3
              "
            >
              {t("footer.getInTouch")}
            </h3>

            <div
              className="
                flex
                flex-col
                !gap-2
                text-[14px]
                leading-[20px]
                font-normal
                text-gray-300
              "
            >
              <p>{t("footer.address")}</p>

              <p>9801985751, 9801985745</p>

              <p>+977-1-5970604</p>

              <p>merodoctor.midas@gmail.com</p>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-4">

              <FacebookOutlined
                className="
                  text-[20px]
                  text-gray-300
                  hover:text-white
                "
              />

              <InstagramOutlined
                className="
                  text-[20px]
                  text-gray-300
                  hover:text-white
                "
              />

              <TwitterOutlined
                className="
                  text-[20px]
                  text-gray-300
                  hover:text-white
                "
              />

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div
          className="
            border-t
            border-white/10
            pt-5
            flex
            flex-col
            sm:flex-row
            justify-between
            gap-3
          "
        >

          {/* Caption */}
          <p
            className="
              text-[12px]
              leading-[16px]
              font-normal
              text-gray-500
            "
          >
            {t("footer.copyright")}
          </p>

          <div className="flex gap-4">

            <a
              href="#"
              className="
                text-[12px]
                leading-[16px]
                font-normal
                text-gray-500
                hover:text-gray-300
              "
            >
              {t("footer.terms")}
            </a>

            <a
              href="#"
              className="
                text-[12px]
                leading-[16px]
                font-normal
                text-gray-500
                hover:text-gray-300
              "
            >
              {t("footer.privacy")}
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}