import React from "react";

function Specialist() {
  const components = [
    {
      name: "Heart Care",
      href: "/cardilogistcard",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/heart.webp",
    },
    {
      name: "Orthopedics",
      href: "/orthopedics",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/orthopaedic.webp",
    },
    {
      name: "Neurosciences",
      href: "Neurosciences",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/neurology.webp",
    },
    {
      name: "Cancer",
      href: "cancer",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/Cancer-Care-2.webp",
    },
    {
      name: "Pulmonology",
      href: "pulmonology",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/pulmonology.webp",
    },
    {
      name: "Transplants",
      href: "transplants",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/Transplant.webp",
    },
    {
      name: "Rheumatology",
      href: "rheumatology",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/rheumatology.webp",
    },
    {
      name: "Radio Oncology",
      href: "radiooncology",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/radiology.webp",
    },
    {
      name: "Gastroenterology",
      href: "gastroenterology",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/gastroenterology.webp",
    },
    {
      name: "Bariatric Surgery",
      href: "bariatricsurgery",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/Bariatric-Surgery.webp",
    },
    {
      name: "Nephrology",
      href: "nephorology",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/nephrology-1.webp",
    },
    {
      name: "Urology",
      href: "urology",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/urology.webp",
    },
    {
      name: "Dermatology",
      href: "",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/dermatology.webp",
    },
    {
      name: "Endocrinology",
      href: "",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/endocrinology.webp",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-green-300 to-blue-500 p-4">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-100 mb-2">
          Center Of Excellence
        </h1>
        <p className="text-lg text-slate-100">
          Combining the best specialists and equipment to provide you nothing
          short of the best in healthcare
        </p>
      </div>
      <div className="flex flex-wrap md:flex-nowrap">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-4">
          <img
            src="https://cdn.apollohospitals.com/delhi/2023/09/speciality_ah_11zon.webp"
            alt="Advised a procedure or surgery?"
            className="img-fluid rounded-4 w-full "
          />
        </div>
        {/* Right Side - Components */}
        <div className="w-full md:w-1/2 flex flex-wrap justify-center items-center p-2">
          {components.map((component, index) => (
            <a key={index} href={component.href} className="m-2">
              <div className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-32 lg:h-32 m-1 p-2 border-2 border-slate-50 bg-pink-700 flex flex-col items-center justify-center hover:border-2 hover:border-blue-700 hover:bg-green-500 rounded-lg">
                <img
                  loading="lazy"
                  src={component.imgSrc}
                  alt={component.name}
                  className="w-5 h-4 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 overflow-hidden"
                />
                <p className="text-xs sm:text-sm md:text-base text-slate-200 text-center font-semibold ">
                  {component.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Specialist;
