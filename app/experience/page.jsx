"use client";

import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Experience() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentContactData, setCurrentContactData] = useState(null);

  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });

    const fetchData = async () => {
      try {
        const accessToken = await getAccessToken();
        await getCurrentContactsData(accessToken);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getAccessToken = async () => {
    const data = `grant_type=password&username=${process.env.NEXT_PUBLIC_USERNAME}&password=${process.env.NEXT_PUBLIC_PASSWORD}&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}`;
    try {
      setIsLoading(true);
      const result = await fetch(process.env.NEXT_PUBLIC_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
      });
      const responseBody = await result.json();
      setIsLoading(false);
      return responseBody.access_token;
    } catch (error) {
      console.log("There is an error::: ", error);
      setIsLoading(false);
    }
  };

  const getCurrentContactsData = async (accessToken) => {
    try {
      const data = await fetch(process.env.NEXT_PUBLIC_SALESFORCE_ENDPOINT, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });
      const response = await data.json();
      if (Array.isArray(response)) {
        setCurrentContactData(response[0]); // Assuming you only want the first contact
      } else {
        console.error("Response is not an array:", response);
      }
    } catch (error) {
      console.log("There was an error calling Salesforce API::: ", error);
    }
  };

  const getSortedJobExperiences = (jobExperiences) => {
    return jobExperiences.sort((a, b) => {
      if (a.Is_Current_Job__c && !b.Is_Current_Job__c) {
        return -1;
      }
      if (!a.Is_Current_Job__c && b.Is_Current_Job__c) {
        return 1;
      }
      return 0;
    });
  };

  return (
    <main>
      <section className="min-h-[25dvh] md:min-h-[45dvh] flex items-center">
        <h1 className="text-3xl font-black max-w-80 pl-8">
          Experience, Education, & Certifications
        </h1>
      </section>

      <section className="flex flex-col md:flex-row min-h-fit">
        <div className="bg-white z-10 md:z-0 flex-1 flex items-center justify-center md:min-h-fit sticky top-0 min-h-[8dvh]">
          <h1 className="text-2xl font-black ">Technical Experience</h1>
        </div>
        <div className="flex-1">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            currentContactData?.Job_Experiences__r?.records &&
            getSortedJobExperiences(
              currentContactData.Job_Experiences__r.records
            ).map((jobData, index) => (
              <div
                key={index}
                className="ml-2 md:ml-0 border-l-2 border-l-black job"
              >
                <div
                  data-aos="fade-up"
                  className="flex items-center justify-between max-w-[80%] font-bold pl-6"
                >
                  <div>
                    <h1 className="uppercase text-sm">
                      {jobData.Company_Name__c}
                    </h1>
                    <p className="text-gray-400 uppercase text-xs">
                      {jobData.Is_Current_Job__c
                        ? "Present"
                        : new Date(jobData.End_Date__c).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">
                      {new Date(jobData.Joining_Date__c).toLocaleDateString()} -{" "}
                      {jobData.End_Date__c
                        ? new Date(jobData.End_Date__c).toLocaleDateString()
                        : "Present"}
                    </p>
                  </div>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="pl-6 max-w-[70%] mt-6 text-sm"
                >
                  <p>
                    {jobData.Job_Description__c || "No description provided."}
                  </p>
                </div>
                <div className="py-7"></div>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="flex min-h-fit flex-col md:flex-row">
        <div className="md:hidden z-10 bg-white flex-1 flex items-center justify-center min-h-fit sticky top-0 py-6 md:py-0">
          <h1 className="text-2xl font-black">Certifications</h1>
        </div>
        <div className="flex-1">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            currentContactData?.Certifications__r?.records.map(
              (certData, index) => (
                <div
                  key={index}
                  className="border-r-2 border-r-black certification"
                >
                  <div
                    data-aos="fade-up"
                    className="flex items-center justify-between max-w-[80%] font-bold pl-6"
                  >
                    <div>
                      <h1 className="uppercase">
                        {certData.Certification_Name__c}
                      </h1>
                      <p className="text-gray-400 uppercase text-xs">
                        {certData.Issuing_Organization__c}
                      </p>
                    </div>
                    <div>
                      <a
                        href={certData.Certification_URL__c}
                        className="text-blue-500"
                      >
                        {certData.Certification_URL__c}
                      </a>
                    </div>
                  </div>
                  <div className="py-7"></div>
                </div>
              )
            )
          )}
        </div>
        <div className="hidden flex-1 md:flex items-center justify-center min-h-fit sticky top-0">
          <h1 className="text-2xl font-black">Certifications</h1>
        </div>
      </section>

      <section className="flex min-h-fit flex-col md:flex-row">
        <div className="z-10 bg-white flex-1 flex items-center justify-center min-h-fit sticky top-0 py-6 md:py-0">
          <h1 className="text-2xl font-black">Qualifications</h1>
        </div>
        <div className="flex-1">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            currentContactData?.Qualifications__r?.records.map(
              (qualData, index) => (
                <div
                  key={index}
                  className="border-l-2 border-r-black qualification"
                >
                  <div
                    data-aos="fade-up"
                    className="flex items-center justify-between max-w-[80%] font-bold pl-6"
                  >
                    <div>
                      <h1 className="uppercase">
                        {qualData.University_Name__c}
                      </h1>
                      <p className="text-gray-400 text-xs md:text-sm">
                        Graduated:{" "}
                        {new Date(
                          qualData.Graduation_Date__c
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="py-7"></div>
                </div>
              )
            )
          )}
        </div>
        {/* <div className="hidden flex-1 md:flex items-center justify-center min-h-fit sticky top-0">
          <h1 className="text-2xl font-black">Qualifications</h1>
        </div> */}
      </section>
    </main>
  );
}
