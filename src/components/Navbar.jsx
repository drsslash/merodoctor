import React from "react";
import { Button } from "antd";

function Navbar() {
  return (
    <nav className="fixed top-4 left-[100px] right-[100px] z-50">
      <div className="h-16 px-5 flex items-center rounded-3xl border border-white/80 bg-[#d4dade] shadow-lg">

        {/* Logo */}
        <div className="w-[220px]">
          <div className="text-2xl font-bold text-[#f5224b]">
            MERO+
          </div>

          <div className="text-xl font-bold text-[#243b49] -mt-1">
            DOCTOR
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">

          <div className="text-sm font-bold text-[#263d4b]">
            Find
            <br />
            Doctors
          </div>

          <div className="text-sm font-bold text-[#263d4b]">
            Free Instant
            <br />
            Consultation
          </div>

          <div className="text-sm font-bold text-[#263d4b]">
            Specialist Video
            <br />
            Consultation
          </div>

          <div className="text-sm font-bold text-[#263d4b]">
            Book Hospital
            <br />
            Appointment
          </div>

        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-5">

          {/* Language */}
          <div className="flex items-center bg-[#bfc8cd] rounded-full p-1">
            <span className="px-3 py-1 bg-white rounded-full text-xs font-bold">
              EN
            </span>

            <span className="px-2 text-xs text-gray-500">
              अ
            </span>
          </div>

          {/* Login */}
          <span className="text-sm font-semibold text-[#263d4b]">
            Log in
          </span>

          {/* Appointment */}
          <Button
            type="primary"
            className="
              !h-10
              !px-5
              !rounded-full
              !bg-[#f5224b]
              !border-[#f5224b]
              !font-bold
            "
          >
            Book appointment
          </Button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;