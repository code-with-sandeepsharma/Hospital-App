import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function Carousel() {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "carousel",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Carousel with indicators & controls inside --> */}
      <div className="glide-03 relative w-full bg-green-300">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="w-full whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <div className="bg-blue-400  flex items-center justify-center">
                <div className="max-w-4xl mx-auto p-8 bg-blue-500 rounded-lg flex items-center justify-between">
                  <div className="text-white max-w-lg">
                    <h1 className="text-4xl font-bold mb-4">
                      Book Your Doctor Appointment Online.
                    </h1>
                    <p className="text-lg mb-8">
                      A Healthier Tomorrow Starts Today: Schedule Your
                      Appointment! Your Wellness, Our Expertise: Set Up Your
                      Appointment Today.
                    </p>
                    <div>
                      <a href="/appointmentmessage">
                        <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold mr-4 hover:bg-gray-100">
                          Book An Appointment
                        </button>
                      </a>
                      <button className="bg-transparent border border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-500">
                        Call now
                      </button>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7OZWh5vkyU-CvaOieMnGfuTfpEVTmWf_k5AgwGMiIdIdCbzvnXp0nYpS8g&s"
                      alt="Doctor"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>{" "}
            </li>
            <li>
              <img
                src="https://cdn.apollohospitals.com/delhi/2023/09/web-banner-Size-1920-x-593-Pixels-1_5_11zon66-1-1.webp"
                alt
                className="w-full object-cover h-48 sm:h-64 md:h-80 lg:h-96"
              ></img>
            </li>
            <li className="hidden lg:block">
              <img
                src="https://cdn.apollohospitals.com/delhi/2023/09/web-banner-Size-1920-x-593-Pixels-1_5_11zon66-1-1.webp"
                alt
                className="w-full object-cover h-48 sm:h-64 md:h-80 lg:h-96"
              ></img>
            </li>
            <li>
              <img
                src="https://cdn.apollohospitals.com/delhi/2023/09/web-banner-Size-1920-x-593-Pixels-1_5_11zon66-1-1.webp"
                alt
                className="w-full object-cover h-48 sm:h-64 md:h-80 lg:h-96"
              ></img>
            </li>
            <li>
              <img
                src="https://cdn.apollohospitals.com/delhi/2023/09/web-banner-Size-1920-x-593-Pixels-1_5_11zon66-1-1.webp"
                alt
                className="w-full object-cover h-48 sm:h-64 md:h-80 lg:h-96"
              ></img>
            </li>
            <li>
              <img
                src="https://cdn.apollohospitals.com/delhi/2023/09/web-banner-Size-1920-x-593-Pixels-1_5_11zon66-1-1.webp"
                alt
                className="w-full object-cover h-48 sm:h-64 md:h-80 lg:h-96"
              ></img>
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        {/*    <!-- Indicators --> */}
      </div>
      {/*<!-- End Carousel with indicators & controls inside --> */}
    </>
  );
}
