import { useState } from "react";

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

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-[#203847]">

      {/* HOME PAGE */}
      {page === "home" && (
        <>
          <Navbar />
          <Home setPage={setPage} />
          <Home2 />
          <Home3 />
          <Home4 />
          <Home5 />
          <Footer />
        </>
      )}

      {/* OTP PAGE */}
      {page === "home-otp" && (
        <Home
          setPage={setPage}
          startWithOTP={true}
        />
      )}

      {/* USER INFORMATION PAGE */}
      {page === "information" && (
        <UserInformation setPage={setPage} />
      )}

      {/* ADDRESS PAGE */}
      {page === "address" && (
        <AddressInformation setPage={setPage} />
      )}

      {page === "set-password" && (
      <SetPassword setPage={setPage} />
    )}
    </div>
  );
}

export default App;