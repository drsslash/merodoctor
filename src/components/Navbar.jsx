import { useState } from "react";
import { Button, Dropdown } from "antd";
import {
  MenuOutlined,
  CloseOutlined,
  UserOutlined,
  DownOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

function Navbar({
  setPage,
  currentUser,
  setCurrentUser,
}) {
  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  // =====================================================
  // LANGUAGE
  // =====================================================

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  // =====================================================
  // PAGE NAVIGATION
  // =====================================================

  const goToPage = (page) => {
    setPage(page);
    setMenuOpen(false);
  };

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
    localStorage.removeItem("currentUser");

    setCurrentUser(null);
    setMenuOpen(false);

    setPage("dashboard");
  };

  // =====================================================
  // PROFILE DROPDOWN
  // =====================================================

  const profileItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Profile",
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: "Logout",
      danger: true,
    },
  ];

  const handleProfileMenuClick = ({ key }) => {
    if (key === "profile") {
      setPage("profile");
    }

    if (key === "logout") {
      handleLogout();
    }
  };

  // =====================================================
  // USER NAME
  // =====================================================

  const getUserName = () => {
    if (!currentUser) {
      return "Profile";
    }

    if (currentUser.firstName) {
      return currentUser.firstName;
    }

    if (currentUser.username) {
      return currentUser.username;
    }

    return "Profile";
  };

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <nav
      className="
        fixed
        top-4
        left-4
        right-4
        sm:left-6
        sm:right-6
        lg:left-[100px]
        lg:right-[100px]
        z-50
      "
    >
      {/* ================================================= */}
      {/* GLASS NAVBAR */}
      {/* ================================================= */}

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
        {/* ================================================= */}
        {/* LOGO */}
        {/* ================================================= */}

        <div
          onClick={() => goToPage("dashboard")}
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
            className="
              w-[80px]
              sm:w-[95px]
              lg:w-[115px]
              h-auto
            "
          />
        </div>

        {/* ================================================= */}
        {/* DESKTOP NAVIGATION */}
        {/* ================================================= */}

        <div className="hidden lg:flex items-center gap-2 xl:gap-3">

          {/* FIND DOCTORS */}

          <button
            onClick={() =>
              goToPage("find-doctor")
            }
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

          {/* INSTANT CONSULTATION */}

          <button
            onClick={() =>
              goToPage("instant-consultation")
            }
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

          {/* SPECIALIST VIDEO CONSULTATION */}

          <button
            onClick={() =>
              goToPage(
                "specialist-video-consultation"
              )
            }
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
            {t(
              "navbar.specialistVideoConsultation"
            )}
          </button>

          {/* BOOK HOSPITAL */}

          <button
            onClick={() =>
              goToPage("book-hospital")
            }
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

        {/* ================================================= */}
        {/* DESKTOP RIGHT SIDE */}
        {/* ================================================= */}

        <div
          className="
            hidden
            lg:flex
            ml-auto
            items-center
            gap-3
            xl:gap-4
          "
        >
          {/* LANGUAGE */}

          <div
            className="
              flex
              items-center
              bg-gray-400
              backdrop-blur-md
              rounded-full
              p-1
              border
              border-white/60
            "
          >
            <button
              onClick={() =>
                changeLanguage("en")
              }
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
                    ? "bg-white text-[#263d4b]"
                    : "text-white hover:bg-gray-500"
                }
              `}
            >
              EN
            </button>

            <button
              onClick={() =>
                changeLanguage("ne")
              }
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
                    ? "bg-white text-[#263d4b]"
                    : "text-white hover:bg-gray-500"
                }
              `}
            >
              ने
            </button>
          </div>

          {/* ================================================= */}
          {/* LOGGED IN */}
          {/* ================================================= */}

          {currentUser ? (
            <>
              {/* NOTIFICATION */}

              <button
                onClick={() =>
                  console.log(
                    "Notifications clicked"
                  )
                }
                className="
                  !w-9
                  !h-9
                  !flex
                  !items-center
                  !justify-center
                  !rounded-full
                  !bg-white/30
                  !backdrop-blur-xl
                  !border
                  !border-white/40
                  !text-[#263d4b]
                  !cursor-pointer
                  !transition-all
                  !duration-300
                  !hover:bg-white/50
                  !hover:text-[#f5224b]
                "
              >
                <BellOutlined className="text-[15px]" />
              </button>

              {/* PROFILE */}

              <Dropdown
                menu={{
                  items: profileItems,
                  onClick:
                    handleProfileMenuClick,
                }}
                trigger={["click"]}
                placement="bottomRight"
              >
                <button
                  className="
                    flex
                    items-center
                    gap-1.5
                    h-9
                    px-3
                    rounded-full
                    bg-white/30
                    backdrop-blur-xl
                    border
                    border-white/40
                    text-[#263d4b]
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:bg-white/50
                    hover:text-[#f5224b]
                  "
                >
                  <div
                    className="
                      w-6
                      h-6
                      rounded-full
                      bg-[#294454]
                      flex
                      items-center
                      justify-center
                      text-white
                    "
                  >
                    <UserOutlined className="text-[11px]" />
                  </div>

                  <span
                    className="
                      text-[13px]
                      leading-[20px]
                      font-medium
                    "
                  >
                    {getUserName()}
                  </span>

                  <DownOutlined className="text-[8px]" />
                </button>
              </Dropdown>
            </>
          ) : (
            /* ================================================= */
            /* LOGGED OUT */
            /* ================================================= */

            <Button
              type="primary"
              onClick={() =>
                goToPage("home")
              }
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
              Login
            </Button>
          )}
        </div>

        {/* ================================================= */}
        {/* MOBILE RIGHT SIDE */}
        {/* ================================================= */}

        <div
          className="
            lg:hidden
            ml-auto
            flex
            items-center
            gap-2
          "
        >
          {/* LANGUAGE */}

          <div
            className="
              flex
              items-center
              bg-gray-400
              backdrop-blur-md
              rounded-full
              p-1
              border
              border-white/60
            "
          >
            <button
              onClick={() =>
                changeLanguage("en")
              }
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
                    ? "bg-white text-[#263d4b]"
                    : "text-white hover:bg-gray-500"
                }
              `}
            >
              EN
            </button>

            <button
              onClick={() =>
                changeLanguage("ne")
              }
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
                    ? "bg-white text-[#263d4b]"
                    : "text-white hover:bg-gray-500"
                }
              `}
            >
              ने
            </button>
          </div>

          {/* ================================================= */}
          {/* MOBILE LOGGED IN */}
          {/* ================================================= */}

          {currentUser ? (
            <>
              {/* NOTIFICATION */}

              <button
                onClick={() =>
                  console.log(
                    "Notifications clicked"
                  )
                }
                className="
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-white/30
                  backdrop-blur-xl
                  border
                  border-white/40
                  text-[#263d4b]
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:bg-white/50
                  hover:text-[#f5224b]
                "
              >
                <BellOutlined className="text-[14px]" />
              </button>

              {/* PROFILE */}

              <Dropdown
                menu={{
                  items: profileItems,
                  onClick:
                    handleProfileMenuClick,
                }}
                trigger={["click"]}
                placement="bottomRight"
              >
                <button
                  className="
                    w-9
                    h-9
                    flex
                    items-center
                    justify-center
                    gap-1
                    rounded-full
                    bg-white/30
                    backdrop-blur-xl
                    border
                    border-white/40
                    text-[#263d4b]
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:bg-white/50
                    hover:text-[#f5224b]
                  "
                >
                  <UserOutlined className="text-[12px]" />
                  <DownOutlined className="text-[7px]" />
                </button>
              </Dropdown>
            </>
          ) : (
            /* ================================================= */
            /* MOBILE LOGGED OUT */
            /* ================================================= */

            <button
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
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
              {menuOpen ? (
                <CloseOutlined />
              ) : (
                <MenuOutlined />
              )}
            </button>
          )}
        </div>

        {/* ================================================= */}
        {/* MOBILE MENU */}
        {/* ================================================= */}

        {menuOpen && !currentUser && (
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

              {/* FIND DOCTORS */}

              <button
                onClick={() =>
                  goToPage("find-doctor")
                }
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

              {/* INSTANT CONSULTATION */}

              <button
                onClick={() =>
                  goToPage(
                    "instant-consultation"
                  )
                }
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

              {/* SPECIALIST VIDEO CONSULTATION */}

              <button
                onClick={() =>
                  goToPage(
                    "specialist-video-consultation"
                  )
                }
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
                {t(
                  "navbar.specialistVideoConsultation"
                )}
              </button>

              {/* BOOK HOSPITAL */}

              <button
                onClick={() =>
                  goToPage("book-hospital")
                }
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

              {/* LOGIN */}

              <Button
                type="primary"
                onClick={() =>
                  goToPage("home")
                }
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
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;