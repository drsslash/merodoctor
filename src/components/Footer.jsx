import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const columns = [
  {
    title: "Company",
    links: ["Home", "About us", "FAQs"],
  },
  {
    title: "Quick login",
    links: ["Patient", "Partners", "Doctors"],
  },
  {
    title: "Services",
    links: [
      "Find doctors",
      "Free instant consultation",
      "Video consultation",
      "Hospital appointments",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#203847] text-white !px-4 !py-12">

      <div className="max-w-5xl mx-auto !text-left">

        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-5 !gap-8 !pb-10">

          {/* Logo */}
          <div>
            <h2 className="text-lg font-bold !mb-3">
              <span className="text-rose-500">MERO</span> DOCTOR
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed">
              The quickest way to book an appointment and consult
              online with top doctors in Nepal.
            </p>
          </div>


          {/* Links */}
          {columns.map((column) => (
            <div key={column.title}>

              <h3 className="text-xs font-semibold text-gray-400 uppercase !mb-3">
                {column.title}
              </h3>

              <div className="flex flex-col !gap-2">
                {column.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </div>

            </div>
          ))}


          {/* Get in touch */}
          <div>

            <h3 className="text-xs font-semibold text-gray-400 uppercase !mb-3">
              Get in touch
            </h3>

            <div className="flex flex-col !gap-2 text-sm text-gray-300">

              <p>Pani Pokhari, Kathmandu, Nepal</p>

              <p>9801985751, 9801985745</p>

              <p>+977-1-5970604</p>

              <p>merodoctor.midas@gmail.com</p>

            </div>


            {/* Social icons */}
            <div className="flex gap-3 mt-4">

              <FacebookOutlined className="text-lg text-gray-300 hover:text-white" />

              <InstagramOutlined className="text-lg text-gray-300 hover:text-white" />

              <TwitterOutlined className="text-lg text-gray-300 hover:text-white" />

            </div>

          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between gap-3">

          <p className="text-xs text-gray-500">
            © 2026 Mero Doctor. All rights reserved.
          </p>

          <div className="flex gap-4">

            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300"
            >
              Terms & conditions
            </a>

            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300"
            >
              Privacy policy
            </a>
            
          </div>

        </div>

      </div>

    </footer>
  );
}
