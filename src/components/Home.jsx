import React from "react";
import { Button, Card, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";

function Home() {
  return (
    <div className="min-h-screen bg-[#294454] flex items-center px-20">

      {/* Left side */}
      <div className="w-1/2 !text-left">

        <h1 className="text-white text-4xl font-bold leading-tight ">
          See a doctor
          <br />
          without leaving home
        </h1>

        <p className="text-gray-300 text-sm w-[450px] mt-4">
          Video consultations with 200+ verified doctors across
          15+ specialties. Book in under two minutes, pay with
          eSewa, Khalti or Connect IPS, and get your prescription
          digitally.
        </p>

        {/* Stats */}
        <div className="flex gap-10 mt-6">

          <div>
            <h3 className="text-white font-bold">200+</h3>
            <p className="text-gray-400 text-xs">Verified doctors</p>
          </div>

          <div>
            <h3 className="text-white font-bold">15+</h3>
            <p className="text-gray-400 text-xs">Specialties</p>
          </div>

          <div>
            <h3 className="text-white font-bold">Online</h3>
            <p className="text-gray-400 text-xs">Consult from home</p>
          </div>

        </div>

        <Button
          className="
            !mt-6
            !rounded-full
            !bg-[#17d69a]
            !border-none
            !text-[#06483c]
            !font-bold
          "
        >
          DOCTORS ONLINE NOW
        </Button>

      </div>


      {/* Right side */}
      <div className="w-1/2 flex justify-center">

        <Card
          className="!w-[600px] !h-[400px] !rounded-2xl !text-left"
          bordered={false}
        >

          <h2 className="text-xl font-bold !text-black">
            Welcome Back
          </h2>

          <p className="text-gray-500 text-xs !mt-2">
            Log in to manage your appointments and consultations.
          </p>

          <p className="text-gray-600 text-xs font-semibold !mt-6 !mb-2">
            Mobile number
          </p>

          <div className="flex border border-red-500 rounded-lg overflow-hidden">

            <div className="px-4 flex items-center bg-gray-100 text-xs">
              +977
            </div>

            <Input
              bordered={false}
              placeholder="98XXXXXXXX"
            />

          </div>

          <p className="text-gray-600 text-xs font-semibold !mt-2 !mb-2">
            Password
          </p>

          <div className="flex border border-red-500 rounded-lg overflow-hidden">

            

            <Input.Password
              bordered={false}
              placeholder="Enter your password"
            />

          </div>

          <p className="flex justify-between text-gray-400 text-xs !mt-2 ">
            Forget Your Password?{" "} 
            <span className="text-red-500 font-semibold cursor-pointer">
              Login with OTP instead.
            </span>
          </p>

          <Button
            type="primary"
            block
            className="
              !mt-5
              !h-10
              !rounded-lg
              !bg-[#f5224b]
              !border-none
            "
          >
            Login
          </Button>

          

          <p className="text-gray-400 text-xs !mt-2 !text-center">
            Don't have an account?{" "}
            <span className="text-red-500 font-semibold">
              Sign up
            </span>
          </p>

        </Card>

      </div>


      {/* Scroll */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center cursor-pointer"
        onClick={() => {
        const target = document.getElementById("home2");
        const start = window.scrollY;
        const end = target.offsetTop;
        const duration = 400;
        const startTime = performance.now();

        function scrollAnimation(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);

          window.scrollTo(0, start + (end - start) * ease);

          if (progress < 1) {
            requestAnimationFrame(scrollAnimation);
          }
        }

        requestAnimationFrame(scrollAnimation);
      }}>

        <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center mx-auto">
          <DownOutlined className="!text-white !text-xs" />
        </div>

        <p className="text-gray-300 text-xs mt-2">
          Scroll to see more
        </p>

      </div>

    </div>
  );
}

export default Home;