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

import Dashboard from "./components/Dashboard";
import InstantConsultation from "./components/Instantconsultation";

import "./i18n";

// =====================================================
// DASHBOARD SECTIONS
// =====================================================

const DASHBOARD_SECTIONS = [
  "dashboard",
  "home2",
  "home3",
  "home4",
  "home5",
  "footer",
];

// =====================================================
// HOME SECTIONS
// =====================================================

const HOME_SECTIONS = [
  "home",
  "home2",
  "home3",
  "home4",
  "home5",
  "footer",
];

// =====================================================
// REGISTRATION SECTIONS
// =====================================================

const REGISTRATION_SECTIONS = [
  "registration",
  "home2",
  "home3",
  "home4",
  "home5",
  "footer",
];

function App() {
  // =====================================================
  // PAGE
  // =====================================================

  const [page, setPage] = useState("dashboard");

  const [currentSection, setCurrentSection] = useState(0);

  // =====================================================
  // CURRENT USER
  // =====================================================

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");

    if (!savedUser) {
      return null;
    }

    try {
      return JSON.parse(savedUser);
    } catch (error) {
      console.error(
        "Invalid current user data:",
        error
      );

      localStorage.removeItem("currentUser");

      return null;
    }
  });

  // =====================================================
  // REGISTRATION DATA
  // =====================================================

  const [registrationData, setRegistrationData] =
    useState({
      firstName: "",
      lastName: "",
      age: "",
      dateOfBirth: null,
      mobile: "",
      gender: "",
      email: "",
      agreed: true,

      // Address
      province: "",
      district: "",
      municipality: "",
      ward: "",
      tole: "",

      // Password
      password: "",
      confirmPassword: "",
    });

  // =====================================================
  // UPDATE REGISTRATION DATA
  // =====================================================

  const updateRegistrationData = (data) => {
    setRegistrationData((previousData) => ({
      ...previousData,
      ...data,
    }));
  };

  // =====================================================
  // CURRENT SECTIONS
  // =====================================================

  const sections =
    page === "dashboard"
      ? DASHBOARD_SECTIONS
      : page === "home"
      ? HOME_SECTIONS
      : page === "information" ||
        page === "address" ||
        page === "set-password"
      ? REGISTRATION_SECTIONS
      : [];

  // =====================================================
  // SCROLL TRACKING
  // =====================================================

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    // Standalone pages do not need section tracking.
    if (
      page !== "dashboard" &&
      page !== "home" &&
      page !== "information" &&
      page !== "address" &&
      page !== "set-password"
    ) {
      setCurrentSection(0);
      return;
    }

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

  // =====================================================
  // GO TO NEXT SECTION
  // =====================================================

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

  // =====================================================
  // GO TO PREVIOUS SECTION
  // =====================================================

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

  // =====================================================
  // REGISTRATION CONTENT
  // =====================================================

  const renderRegistrationPage = () => {
    // ================= USER INFORMATION =================

    if (page === "information") {
      return (
        <UserInformation
          setPage={setPage}
          registrationData={registrationData}
          updateRegistrationData={
            updateRegistrationData
          }
        />
      );
    }

    // ================= ADDRESS =================

    if (page === "address") {
      return (
        <AddressInformation
          setPage={setPage}
          registrationData={registrationData}
          updateRegistrationData={
            updateRegistrationData
          }
        />
      );
    }

    // ================= SET PASSWORD =================

    if (page === "set-password") {
      return (
        <SetPassword
          setPage={setPage}
          registrationData={registrationData}
          updateRegistrationData={
            updateRegistrationData
          }
          setCurrentUser={setCurrentUser}
        />
      );
    }

    return null;
  };

  // =====================================================
  // MAIN
  // =====================================================

  return (
    <div className="min-h-screen bg-[#203847]">

      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      <Navbar
        setPage={setPage}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />

      {/* ================================================= */}
      {/* DASHBOARD */}
      {/* ================================================= */}

      {page === "dashboard" && (
        <>
          <Dashboard
            setPage={setPage}
          />

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
      {/* HOME / LOGIN PAGE */}
      {/* ================================================= */}

      {page === "home" && (
        <>
          <div id="home">
            <Home
              setPage={setPage}
              setCurrentUser={setCurrentUser}
            />
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
      {/* OTP PAGE */}
      {/* ================================================= */}

      {page === "home-otp" && (
        <Home
          setPage={setPage}
          setCurrentUser={setCurrentUser}
          startWithOTP={true}
        />
      )}

      {/* ================================================= */}
      {/* FIND DOCTOR PAGE */}
      {/* ================================================= */}

      {page === "find-doctor" && (
        <FindDoctor
          setPage={setPage}
        />
      )}

      {/* ================================================= */}
      {/* BOOK HOSPITAL PAGE */}
      {/* ================================================= */}

      {page === "book-hospital" && (
        <HospitalAppointments
          setPage={setPage}
        />
      )}

      {/* ================================================= */}
      {/* SPECIALIST VIDEO CONSULTATION */}
      {/* ================================================= */}

      {page === "specialist-video-consultation" && (
        <InstantConsultation
          setPage={setPage}
        />
      )}

      {/* ================================================= */}
      {/* INSTANT CONSULTATION PAGE */}
      {/* ================================================= */}

      {page === "instant-consultation" && (
        <InstantConsultation
          setPage={setPage}
        />
      )}

      {/* ================================================= */}
      {/* REGISTRATION PAGES */}
      {/* ================================================= */}

      {(
        page === "information" ||
        page === "address" ||
        page === "set-password"
      ) && (
        <>
          <div id="registration">
            {renderRegistrationPage()}
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
      {/* ================= UP ================= */}

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

      {/* ================= DOWN ================= */}

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