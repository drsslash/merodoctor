import { useState } from "react";
import { Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

function Navbar({ setPage }) {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const goToPage = (page) => {
    setPage(page);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-4 right-4 sm:left-6 sm:right-6 lg:left-[100px] lg:right-[100px] z-50">
      
      {/* GLASS NAVBAR */}
      <div
        className="
          min-h-16
          px-4
          sm:px-5
          flex
          items-center
          rounded-3xl
          border
          border-white/60
          bg-white/70
          backdrop-blur-xl
          shadow-lg
          relative
        "
      >

        {/* Logo */}
        <div
          onClick={() => goToPage("home")}
          className="
            w-[100px]
            sm:w-[120px]
            lg:w-[150px]
            cursor-pointer
            flex
            items-center
          "
        >
          <img
            src={logo}
            alt="Mero Doctor"
            className="w-[80px] sm:w-[95px] lg:w-[115px] h-auto"
          />
        </div>


        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3">

          <button
            onClick={() => goToPage("find-doctor")}
            className="
              px-3
              py-2
              rounded-full
              text-[14px]
              leading-[20px]
              font-medium
              text-[#263d4b]
              cursor-pointer
              bg-transparent
              border-none
              transition-all
              duration-300
              hover:bg-white/60
              hover:text-[#f5224b]
            "
          >
            {t("navbar.findDoctors")}
          </button>

          <button
            className="
              px-3
              py-2
              rounded-full
              text-[14px]
              leading-[20px]
              font-medium
              text-[#263d4b]
              bg-transparent
              border-none
              cursor-pointer
              transition-all
              duration-300
              hover:bg-white/60
              hover:text-[#f5224b]
            "
          >
            {t("navbar.instantConsultation")}
          </button>

          <button
            className="
              px-3
              py-2
              rounded-full
              text-[14px]
              leading-[20px]
              font-medium
              text-[#263d4b]
              bg-transparent
              border-none
              cursor-pointer
              transition-all
              duration-300
              hover:bg-white/60
              hover:text-[#f5224b]
            "
          >
            {t("navbar.specialistVideoConsultation")}
          </button>

          {/* Book Hospital */}
          <button
            onClick={() => goToPage("book-hospital")}
            className="
              px-3
              py-2
              rounded-full
              text-[14px]
              leading-[20px]
              font-medium
              text-[#263d4b]
              bg-transparent
              border-none
              cursor-pointer
              transition-all
              duration-300
              hover:bg-white/60
              hover:text-[#f5224b]
            "
          >
            {t("navbar.bookhospital")}
          </button>

        </div>


        {/* Desktop Right Side */}
        <div className="hidden lg:flex ml-auto items-center gap-3 xl:gap-4">

          {/* Language */}
          <div
            className="
              flex
              items-center
              bg-white/60
              backdrop-blur-md
              rounded-full
              p-1
              border
              border-white/60
            "
          >

            <button
              onClick={() => changeLanguage("en")}
              className={`
                px-3
                py-1
                rounded-full
                text-[12px]
                leading-[16px]
                font-medium
                cursor-pointer
                transition-all
                duration-300
                ${
                  i18n.language === "en"
                    ? "bg-white/90 text-[#263d4b]"
                    : "text-gray-600 hover:bg-white/50"
                }
              `}
            >
              EN
            </button>

            <button
              onClick={() => changeLanguage("ne")}
              className={`
                px-2
                py-1
                rounded-full
                text-[12px]
                leading-[16px]
                font-medium
                cursor-pointer
                transition-all
                duration-300
                ${
                  i18n.language === "ne"
                    ? "bg-white/90 text-[#263d4b]"
                    : "text-gray-600 hover:bg-white/50"
                }
              `}
            >
              ने
            </button>

          </div>


          {/* Appointment */}
          <Button
            type="primary"
            className="
              !h-10
              !px-5
              !rounded-full
              !bg-[#f5224b]
              !border-[#f5224b]
              !text-[14px]
              !leading-[20px]
              !font-semibold
              hover:!bg-[#d91d42]
              hover:!border-[#d91d42]
              transition-all
              duration-300
            "
          >
            {t("navbar.bookAppointment")}
          </Button>

        </div>


        {/* Mobile Right Side */}
        <div className="lg:hidden ml-auto flex items-center gap-2">

          {/* Language */}
          <div
            className="
              flex
              items-center
              bg-white/60
              backdrop-blur-md
              rounded-full
              p-1
              border
              border-white/60
            "
          >

            <button
              onClick={() => changeLanguage("en")}
              className={`
                px-2
                py-1
                rounded-full
                text-[12px]
                leading-[16px]
                font-medium
                cursor-pointer
                transition-all
                duration-300
                ${
                  i18n.language === "en"
                    ? "bg-white/90 text-[#263d4b]"
                    : "text-gray-600 hover:bg-white/50"
                }
              `}
            >
              EN
            </button>

            <button
              onClick={() => changeLanguage("ne")}
              className={`
                px-2
                py-1
                rounded-full
                text-[12px]
                leading-[16px]
                font-medium
                cursor-pointer
                transition-all
                duration-300
                ${
                  i18n.language === "ne"
                    ? "bg-white/90 text-[#263d4b]"
                    : "text-gray-600 hover:bg-white/50"
                }
              `}
            >
              ने
            </button>

          </div>


          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
              bg-white/60
              backdrop-blur-md
              border
              border-white/60
              text-[#263d4b]
              cursor-pointer
              transition-all
              duration-300
              hover:bg-white/80
              hover:text-[#f5224b]
            "
          >
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>

        </div>


        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="
              absolute
              top-[72px]
              left-0
              right-0
              bg-white/80
              backdrop-blur-xl
              rounded-3xl
              border
              border-white/60
              shadow-lg
              p-5
              lg:hidden
            "
          >

            <div className="flex flex-col gap-2">

              <button
                onClick={() => goToPage("find-doctor")}
                className="
                  text-left
                  text-[14px]
                  leading-[20px]
                  font-medium
                  text-[#263d4b]
                  bg-transparent
                  border-none
                  rounded-xl
                  px-3
                  py-3
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:bg-white/60
                  hover:text-[#f5224b]
                "
              >
                {t("navbar.findDoctors")}
              </button>

              <button
                className="
                  text-left
                  text-[14px]
                  leading-[20px]
                  font-medium
                  text-[#263d4b]
                  bg-transparent
                  border-none
                  rounded-xl
                  px-3
                  py-3
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:bg-white/60
                  hover:text-[#f5224b]
                "
              >
                {t("navbar.instantConsultation")}
              </button>

              <button
                className="
                  text-left
                  text-[14px]
                  leading-[20px]
                  font-medium
                  text-[#263d4b]
                  bg-transparent
                  border-none
                  rounded-xl
                  px-3
                  py-3
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:bg-white/60
                  hover:text-[#f5224b]
                "
              >
                {t("navbar.specialistVideoConsultation")}
              </button>

              {/* Book Hospital */}
              <button
                onClick={() => goToPage("book-hospital")}
                className="
                  text-left
                  text-[14px]
                  leading-[20px]
                  font-medium
                  text-[#263d4b]
                  bg-transparent
                  border-none
                  rounded-xl
                  px-3
                  py-3
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:bg-white/60
                  hover:text-[#f5224b]
                "
              >
                {t("navbar.bookhospital")}
              </button>

              <Button
                type="primary"
                className="
                  !h-10
                  !rounded-full
                  !bg-[#f5224b]
                  !border-[#f5224b]
                  !text-[14px]
                  !leading-[20px]
                  !font-semibold
                  !w-full
                  hover:!bg-[#d91d42]
                  hover:!border-[#d91d42]
                "
              >
                {t("navbar.bookAppointment")}
              </Button>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;