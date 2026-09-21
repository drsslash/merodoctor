import {
  HomeOutlined,
  SafetyOutlined,
  ClockCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";


const steps = [
  {
    number: "01",
    title: "Find your doctor",
    description:
      "Search by specialty, hospital or symptom, and see who is available now.",
  },
  {
    number: "02",
    title: "Book an appointment",
    description:
      "Pick a slot from the doctor's availability and confirm in seconds.",
  },
  {
    number: "03",
    title: "Pay securely",
    description:
      "Pay the fee with eSewa, Khalti, or Connect IPS.",
  },
  {
    number: "04",
    title: "Consult and get your report",
    description:
      "Join the video call and get your prescription digitally.",
  },
];

export default function Home4() {
  return (
    <section className="w-full bg-[#203847] py-16 px-4">
      
      <div className="max-w-5xl mx-auto !text-left">

        {/* Heading */}
        <p className="text-xs font-semibold text-rose-500 uppercase !mb-2">
          Experience Mero Doctor
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-white !mb-2">
          From finding a doctor to getting your prescription
        </h2>

        <p className="text-sm text-gray-300 !mb-8">
          Easy healthcare, easy consultation, easy interaction.
        </p>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left side */}
          <div className="bg-gray-800 rounded-xl p-8 flex items-center justify-center">

            
            
          </div>


          {/* Right side */}
          <div>
            {/* Steps */}
            <div className="space-y-4">

              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex gap-4"
                >

                  <div className="w-7 h-7 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {step.number}
                  </div>

                  <div className="inline-block border border-gray-600 rounded-lg px-6 py-3 bg-gray-700">
                    <h4 className="text-sm font-semibold text-white">
                      {step.title}
                    </h4>

                    <p className="text-xs text-gray-400 !mt-1">
                      {step.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>


        {/* Bottom buttons */}
        <div className="flex gap-3 !mt-8 !px-45">

          <button className="w-8 h-8 rounded-full border border-gray-500 text-gray-300 cursor-pointer">
            <LeftOutlined />
          </button>
              <div className="w-8 h-8 rounded-full border border-gray-500 text-gray-300 flex items-center justify-center">
              </div>
          <button className="w-8 h-8 rounded-full border border-gray-500 text-gray-300 cursor-pointer">
            <RightOutlined />
          </button>

        </div>

      </div>
    </section>
  );
}
