import React from "react";
import { Rate } from "antd";
import { DownOutlined } from "@ant-design/icons";

const reviews = [
  {
    category: "Dermatology",
    quote:
      "Booked a dermatologist at 9pm and had the video call the same night. The prescription arrived before I went to bed.",
    name: "Sabita KC",
    location: "Kathmandu",
  },
  {
    category: "Pediatric follow-up",
    quote:
      "My father lives in Itahari and I am in Kathmandu. We did his follow-up together on one call — no travel, no queue.",
    name: "Nikesh Rai",
    location: "Itahari",
  },
  {
    category: "Instant consultation",
    quote:
      "I used the free instant consultation to check whether my son needed to be seen in person. It took four minutes.",
    name: "Upa Devi",
    location: "Pokhara",
  },
];

function Home2() {
  return (
    <section id="home2" className="relative min-h-screen bg-white px-20 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Top heading */}
        <div className="text-center mb-10">

          <p className="text-xs font-semibold text-rose-600 uppercase mb-3">
            Happy patients
          </p>

          <h2 className="text-4xl font-bold !text-black mb-3">
            What our patients are saying
          </h2>

          <p className="text-sm text-gray-500">
            Real consultations from patients across Nepal
          </p>

        </div>

        {/* Rating */}
        <div className="flex items-center justify-center gap-4 mb-12">

          <span className="text-3xl font-bold text-black">
            4.4
          </span>

          <Rate
            disabled
            defaultValue={4.5}
            allowHalf
          />

          <span className="text-sm text-gray-400 border-l pl-4">
            ⭐ 1,200+ reviews
          </span>

        </div>

        {/* Reviews */}
        <div className="grid grid-cols-3 gap-6">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-gray-50 border border-gray-600 rounded-2xl p-6"
            >

              <div className="flex items-center justify-between mb-5">

                <Rate
                  disabled
                  defaultValue={5}
                />

                <span className="text-[10px] font-semibold text-gray-400 uppercase">
                  {review.category}
                </span>

              </div>

              <p className="text-sm text-gray-600 leading-7 mb-6">
                "{review.quote}"
              </p>

              <div className="border-t border-gray-200 pt-4">

                <p className="text-sm font-semibold text-black">
                  {review.name}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  {review.location}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Google Play */}
        <div className="text-center mt-8">
          <div className="inline-block border border-gray-600 rounded-lg px-6 py-3 bg-white">
          <p className="text-sm text-gray-600">
            Read all reviews on Google Play ↗
          </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Home2;