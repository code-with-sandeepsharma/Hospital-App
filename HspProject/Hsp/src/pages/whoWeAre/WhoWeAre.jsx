import React from "react";

function WhoWeAre() {
  const components = [
    {
      name: "Largest private healthcare network of Hospitals",
      number: "45+",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/01-Counters-Hospitals-1.webp",
      href: "",
    },
    {
      name: "Largest private healthcare network of Hospital",
      number: "200+",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/02-Counters-Clinics.webp",
      href: "",
    },
    {
      name: "Diagnostic centres across India",
      number: "1200+",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/03-Diagnostic-centres.webp",
      href: "",
    },
    {
      name: "Pharmacies",
      number: "4000+",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/04-Pharmacies.webp",
      href: "",
    },
    {
      name: "Pin codes Served across India",
      number: "10000+",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/05-Pin-codes-Served.webp",
      href: "",
    },
    {
      name: "Doctors",
      number: "12000+",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/06-Doctors.webp",
      href: "",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-green-300 to-blue-500 p-4">
      <div className="text-center mb-6">
        <p className="text-lg text-slate-100">Who We Are</p>
        <h1 className="text-4xl font-bold text-gray-100 mb-2">
          Why Choose SanShri Healthcare
        </h1>
        <p className="text-lg text-slate-100">
          Established by Sangam Kumar Jha, Ajeet Kumar Rajpoot a in
          2024, SanShri Healthcare has a robust presence across the healthcare
          ecosystem. From routine wellness & preventive health care to
          innovative life-saving treatments and diagnostic services, SanShri
          Hospitals has touched more than 120 million lives from over 120
          countries, offering the best clinical outcomes.
        </p>
      </div>
      <div className="flex flex-wrap md:flex-nowrap m-2">
        {/* Left Side - Components */}
        <div className="w-full md:w-1/2 flex flex-wrap justify-center items-center p-2">
          {components.map((component, index) => (
            <a key={index} href={component.href} className="m-2 w-full sm:w-1/2 lg:w-1/3 p-2">
              <div className="flex items-center bg-gray-700 overflow-hidden rounded-lg shadow-lg hover:bg-gray-600 transition">
                <img
                  loading="lazy"
                  src={component.imgSrc}
                  alt={component.name}
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mr-4 border-2 bg-slate-50 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-gray-100">{component.number}</p>
                  <p className="text-sm md:text-base text-gray-100">{component.name}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:ml-4">
          <img
            src="https://cdn.apollohospitals.com/delhi/2023/09/whychoseapollo_ah-1-1-1.webp"
            alt="Advised a procedure or surgery?"
            className="img-fluid rounded-4 w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
