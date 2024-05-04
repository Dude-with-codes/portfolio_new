"use client";

import "./style.css";

import jobsData from "../local database/jobData";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Experience() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  });
  return (
    <main>
      <section className="min-h-[25dvh] md:min-h-[45dvh] flex items-center">
        <h1 className="text-3xl font-black max-w-80 pl-8">
          Experience, Education, & Certifications
        </h1>
      </section>
      <section className="flex flex-col md:flex-row min-h-[90dvh]">
        <div className="bg-white z-10 md:z-0 flex-1 flex items-center justify-center md:h-[100dvh] sticky top-0 min-h-[8dvh]">
          <h1 className="text-2xl font-black">Technical Experience</h1>
        </div>
        <div className="flex-1">
          {/* first job */}
          {jobsData.map((jobData, index) => {
            return (
              <div
                key={index}
                className="ml-2 md:ml-0 border-l-2 border-l-black job"
              >
                <div
                  data-aos="fade-up"
                  className="flex items-center justify-between max-w-[80%] font-bold pl-6"
                >
                  <div>
                    <h1 className="uppercase text-sm">{jobData.Role}</h1>
                    <p className="text-gray-400 uppercase text-xs">
                      {jobData["Company Name"]}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">
                      {jobData["Start Month"]} {jobData["Start Year"]} -{" "}
                      {jobData["End Month"]} {jobData["End Year"]}
                    </p>
                  </div>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="pl-6 max-w-[70%] mt-6 text-sm"
                >
                  <p>{jobData["Job Description"]}</p>
                </div>
                <div className="py-7"></div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="flex min-h-[90dvh] flex-col md:flex-row">
        <div className="md:hidden z-10 bg-white flex-1 flex items-center justify-center h-[100dvh] sticky top-0 py-6 md:py-0">
          <h1 className="text-2xl font-black">Certifications</h1>
        </div>
        <div className="flex-1">
          {/* first job */}
          {jobsData.map((jobData, index) => {
            return (
              <div
                key={index}
                className="border-r-2 border-r-black certification"
              >
                <div
                  data-aos="fade-up"
                  className="flex items-center justify-between max-w-[80%] font-bold pl-6"
                >
                  <div>
                    <h1 className="uppercase">{jobData.Role}</h1>
                    <p className="text-gray-400 uppercase text-xs">
                      {jobData["Company Name"]}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      {jobData["Start Month"]} {jobData["Start Year"]} -{" "}
                      {jobData["End Month"]} {jobData["End Year"]}
                    </p>
                  </div>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="pl-6 max-w-[70%] mt-6 text-sm"
                >
                  <p>{jobData["Job Description"]}</p>
                </div>
                <div className="py-7"></div>
              </div>
            );
          })}
        </div>
        <div className=" hidden flex-1 md:flex items-center justify-center h-[100dvh] sticky top-0">
          <h1 className="text-2xl font-black">Certifications</h1>
        </div>
      </section>
    </main>
  );
}
