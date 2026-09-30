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

import "./i18n";

function App() {
  const [page, setPage] = useState("home");
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    "home",
    "home2",
    "home3",
    "home4",
    "home5",
    "footer",
  ];

  useEffect(() => {
    if (page !== "home") return;

    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight / 2;

      let activeSection = 0;

      sections.forEach((section, index) => {
        const element = document.getElementById(section);

        if (
          element &&
          element.offsetTop <= scrollPosition
        ) {
          activeSection = index;
        }
      });

      setCurrentSection(activeSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  // GO DOWN
  const scrollToNextSection = () => {
    if (currentSection < sections.length - 1) {
      const nextSection = document.getElementById(
        sections[currentSection + 1]
      );

      nextSection?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // GO UP
  const scrollToPreviousSection = () => {
    if (currentSection > 0) {
      const previousSection = document.getElementById(
        sections[currentSection - 1]
      );

      previousSection?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#203847]">

      {/* NAVBAR */}
      <Navbar setPage={setPage} />

      {/* HOME PAGE */}
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

          {/* SCROLL BUTTONS */}
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
              border-gray/30
              bg-white/15
              backdrop-blur-xl
              shadow-lg
            "
          >

            {/* UP BUTTON */}
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

            {/* DOWN BUTTON */}
            {currentSection < sections.length - 1 && (
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
        </>
      )}

      {/* OTP PAGE */}
      {page === "home-otp" && (
        <Home
          setPage={setPage}
          startWithOTP={true}
        />
      )}

      {/* FIND DOCTOR PAGE */}
      {page === "find-doctor" && (
        <FindDoctor setPage={setPage} />
      )}

      {/* USER INFORMATION PAGE */}
      {page === "information" && (
        <UserInformation setPage={setPage} />
      )}

      {/* ADDRESS PAGE */}
      {page === "address" && (
        <AddressInformation setPage={setPage} />
      )}

      {/* SET PASSWORD PAGE */}
      {page === "set-password" && (
        <SetPassword setPage={setPage} />
      )}

    </div>
  );
}

export default App;