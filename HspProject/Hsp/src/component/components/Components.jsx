import React from "react";

function Components() {
  const components = [
    {
      name: "Book Appointment",
      href: "/appointmentmessage",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/bookappt_icon.webp",
    },
    {
      name: "Book Health Check-Up",
      href: "/bookhealthcheckup",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/bookhelathcheck_icon.webp",
    },
    {
      name: "Consult Online",
      href: "/consultdoctors",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/consultonline_icon.webp",
    },
    {
      name: "Buy Medicine",
      href: "/buymedicine",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/buymedicines_icon.webp",
    },
    {
      name: "Find Hospital",
      href: "/findhospital",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/findhsptl_icon.webp",
    },
    {
      name: "View Health Record",
      href: "",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/finddoctor_icon.webp",
    },
    {
      name: "Health And Wellness",
      href: "/healthandwellness",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/Health-and-Wellness.webp",
    },
    {
      name: "Book Second Option",
      href: "/booksecondoption",
      imgSrc: "https://cdn.apollohospitals.com/delhistorage/2023/09/Book-Lab-Tests.webp",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center mx-auto w-full p-2 bg-gradient-to-r from-green-300 to-blue-500">
      {components.map((component, index) => (
        <a key={index} href={component.href} className="m-2">
          <div className="w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 lg:w-28 lg:h-32 m-1 p-1 text-xs sm:text-sm md:text-base font-semibold bg-teal-500 flex flex-col items-center justify-center hover:cursor-pointer hover:bg-blue-500 rounded-lg">
            {/* Image for the component */}
            <img
              loading="lazy"
              src={component.imgSrc}
              alt={component.name}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-1"
            />
            {/* Text for the component */}
            <p className="text-slate-200 text-center">{component.name}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Components;
