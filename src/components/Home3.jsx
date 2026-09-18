import {
  UserOutlined,
  MobileOutlined,
  SafetyOutlined,
  HomeOutlined,
  ReadOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const benefits = [
  {
    icon: <UserOutlined />,
    title: "Consult top doctors 24x7",
    description:
      "Connect instantly with a specialist or choose a doctor for a video visit.",
  },
  {
    icon: <MobileOutlined />,
    title: "Convenient and easy",
    description:
      "Start a consultation within two minutes or book a video call.",
  },
  {
    icon: <SafetyOutlined />,
    title: "100% safe consultations",
    description:
      "Your consultation is private, secure and protected.",
  },
  {
    icon: <HomeOutlined />,
    title: "Similar clinic experience",
    description:
      "Have a face-to-face video call with the doctor from home.",
  },
  {
    icon: <ReadOutlined />,
    title: "Free follow-up",
    description:
      "Get seven days of free follow-up after your consultation.",
  },
  {
    icon: <FileTextOutlined />,
    title: "Easy digital prescription",
    description:
      "Receive your prescription digitally without visiting a doctor.",
  },
];

export default function Home3() {
  return (
    <section className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">

        <p className="text-xs font-semibold text-rose-600 uppercase mb-3">
          Why Mero Doctor
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold !text-gray-900 !mb-2">
          Benefits of online consultation
        </h2>

        <p className="text-sm text-gray-500 !mb-10">
          Hassle-free healthcare from the comfort of your home.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">

          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white border rounded-xl p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 text-blue-600 text-xl">
                {benefit.icon}
              </div>

              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>

              <p className="text-xs text-gray-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}