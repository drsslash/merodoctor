import { useEffect, useState } from "react";
import {
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import Home4 from "./components/Home4";
import Home5 from "./components/Home5";
import Footer from "./components/Footer";

import UserInformation from "./components/UserInformation";
import AddressInformation from "./components/AddressInformation";
import SetPassword from "./components/SetPassword";
import FindDoctor from "./components/FindDoctor";
import HospitalAppointments from "./components/HospitalAppointments";

import "./i18n";

function App() {
  const [page, setPage] = useState("home");
  const [currentSection, setCurrentSection] = useState(0);

  // ================= HOME SECTIONS =================

  const homeSections = [
    "home",
    "home2",
    "home3",
    "home4",
    "home5",
    "footer",
  ];

  // ================= REGISTRATION SECTIONS =================

  const registrationSections = [
    "registration",
    "home2",
    "home3",
    "home4",
    "home5",
    "footer",
  ];

  // ================= CURRENT SECTIONS =================

  const sections =
    page === "home"
      ? homeSections
      : page === "information" ||
        page === "address" ||
        page === "set-password"
      ? registrationSections
      : [];

  // ================= SCROLL TRACKING =================

  useEffect(() => {
    if (
      page !== "home" &&
      page !== "information" &&
      page !== "address" &&
      page !== "set-password"
    ) {
      // Start new standalone pages from the top
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });

      return;
    }

    // Start at top whenever page changes
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    const handleScroll = () => {
      const scrollPosition =
        window.scrollY +
        window.innerHeight / 2;

      let activeSection = 0;

      sections.forEach((section, index) => {
        const element =
          document.getElementById(section);

        if (
          element &&
          element.offsetTop <= scrollPosition
        ) {
          activeSection = index;
        }
      });

      setCurrentSection(activeSection);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [page]);

  // ================= GO DOWN =================

  const scrollToNextSection = () => {
    if (
      currentSection <
      sections.length - 1
    ) {
      const nextSection =
        document.getElementById(
          sections[currentSection + 1]
        );

      nextSection?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // ================= GO UP =================

  const scrollToPreviousSection = () => {
    if (currentSection > 0) {
      const previousSection =
        document.getElementById(
          sections[currentSection - 1]
        );

      previousSection?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // ================= REGISTRATION CONTENT =================

  const renderRegistrationPage = () => {
    if (page === "information") {
      return (
        <UserInformation
          setPage={setPage}
        />
      );
    }

    if (page === "address") {
      return (
        <AddressInformation
          setPage={setPage}
        />
      );
    }

    if (page === "set-password") {
      return (
        <SetPassword
          setPage={setPage}
        />
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-[#203847]">

      {/* ================= NAVBAR ================= */}

      <Navbar setPage={setPage} />

      {/* ================================================= */}
      {/* HOME PAGE                                         */}
      {/* ================================================= */}

      {page === "home" && (
        <>
          <div id="home">
            <Home setPage={setPage} />
          </div>

          <div id="home2">
            <Home2 />
          </div>

          <div id="home3">
            <Home3 />
          </div>

          <div id="home4">
            <Home4 />
          </div>

          <div id="home5">
            <Home5 />
          </div>

          <div id="footer">
            <Footer />
          </div>

          <ScrollButtons
            currentSection={currentSection}
            sections={sections}
            scrollToNextSection={
              scrollToNextSection
            }
            scrollToPreviousSection={
              scrollToPreviousSection
            }
          />
        </>
      )}

      {/* ================================================= */}
      {/* OTP PAGE                                          */}
      {/* ================================================= */}

      {page === "home-otp" && (
        <Home
          setPage={setPage}
          startWithOTP={true}
        />
      )}

      {/* ================================================= */}
      {/* FIND DOCTOR PAGE                                  */}
      {/* ================================================= */}

      {page === "find-doctor" && (
        <FindDoctor
          setPage={setPage}
        />
      )}

      {/* ================================================= */}
      {/* BOOK HOSPITAL PAGE                                */}
      {/* ================================================= */}

      {page === "book-hospital" && (
        <HospitalAppointments
          setPage={setPage}
        />
      )}

      {/* ================================================= */}
      {/* REGISTRATION PAGES                                */}
      {/* ================================================= */}

      {(
        page === "information" ||
        page === "address" ||
        page === "set-password"
      ) && (
        <>
          {/* Current registration page */}
          <div id="registration">
            {renderRegistrationPage()}
          </div>

          {/* Home sections */}
          <div id="home2">
            <Home2 />
          </div>

          <div id="home3">
            <Home3 />
          </div>

          <div id="home4">
            <Home4 />
          </div>

          <div id="home5">
            <Home5 />
          </div>

          <div id="footer">
            <Footer />
          </div>

          {/* Scroll buttons */}
          <ScrollButtons
            currentSection={currentSection}
            sections={sections}
            scrollToNextSection={
              scrollToNextSection
            }
            scrollToPreviousSection={
              scrollToPreviousSection
            }
          />
        </>
      )}

    </div>
  );
}

/* ===================================================== */
/* SCROLL BUTTONS                                        */
/* ===================================================== */

function ScrollButtons({
  currentSection,
  sections,
  scrollToNextSection,
  scrollToPreviousSection,
}) {
  return (
    <div
      className="
        fixed
        bottom-4
        left-1/2
        -translate-x-1/2
        z-50
        flex
        flex-col
        items-center
        gap-0
        px-1
        py-1.5
        rounded-full
        border
        border-white/30
        bg-white/35
        backdrop-blur-xl
        shadow-lg
      "
    >

      {/* UP */}

      {currentSection > 0 && (
        <button
          onClick={scrollToPreviousSection}
          className="
            w-7
            h-7
            rounded-full
            bg-transparent
            flex
            items-center
            justify-center
            cursor-pointer
            text-[#263d4b]
            hover:bg-white/50
            hover:text-[#f5224b]
            transition-all
            duration-300
          "
        >
          <UpOutlined className="!text-[9px]" />
        </button>
      )}

      {/* DOWN */}

      {currentSection <
        sections.length - 1 && (
        <button
          onClick={scrollToNextSection}
          className="
            w-7
            h-7
            rounded-full
            bg-transparent
            flex
            items-center
            justify-center
            cursor-pointer
            text-[#263d4b]
            hover:bg-white/50
            hover:text-[#f5224b]
            transition-all
            duration-300
          "
        >
          <DownOutlined className="!text-[9px]" />
        </button>
      )}

    </div>
  );
}

export default App;