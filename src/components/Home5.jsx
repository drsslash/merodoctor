const partners = [
  {
    tag: "For clinics & labs",
    title: "Become our health partner",
    description:
      "List your lab, polyclinic or pharmacy on Mero Doctor and receive bookings from patients across Nepal.",
  },
  {
    tag: "For doctors",
    title: "Become our doctor",
    description:
      "Join 200+ verified practitioners consulting online. Set your own hours and consultation fee.",
  },
];

export default function Home5() {
  return (
    <section className="w-full bg-gray-100 py-16 px-4">
      
      <div className="max-w-5xl mx-auto text-center">

        <p className="text-xs font-semibold text-rose-600 uppercase !mb-3">
          Join our network
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold !text-gray-900 !mb-2">
          Partner with us for a healthier Nepal
        </h2>

        <p className="text-sm text-gray-500 !mb-10">
          Together we can make quality healthcare more accessible.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">

          {partners.map((partner) => (
            <div
            key={partner.title}
            className="bg-white hover:bg-gray-300 border border-gray-200 rounded-xl p-6 transition-colors"
            >
            <p className="text-xs font-semibold text-gray-500 uppercase !mb-3">
                {partner.tag}
            </p>

            <h3 className="text-lg font-bold text-gray-900 !mb-2">
                {partner.title}
            </h3>

            <p className="text-sm text-gray-600 !mb-5 leading-relaxed">
                {partner.description}
            </p>

            <button className="px-5 py-2 rounded-full bg-rose-600 text-white text-sm font-semibold hover:bg-rose-700 cursor-pointer transition-colors">
                Apply now
            </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
