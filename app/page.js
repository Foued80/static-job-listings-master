"use client";
import Image from "next/image";
import Job_card from "../components/job_card";
import { useJobContext } from "./context/jobsContext";
import JobFilter from "@/components/JobFilter";
import data from "./context/data.json";
import { useEffect } from "react";

export default function Home() {
  const { job, setJob, filterList, setFilterList } = useJobContext();

  // This useEffect runs when the component mounts and sets the initial job list
  useEffect(() => {
    setJob(data);
  }, []);

  // This useEffect runs whenever the filterList changes
  useEffect(() => {
    if (filterList.length !== 0) {
      const jobFilteredByCategory = data.filter((jobItem) => {
        const joblistarray = [
          jobItem.role,
          jobItem.level,
          ...jobItem.languages,
          ...jobItem.tools,
        ];

        // Check if any of the selected skills is NOT present in the job's languages or tools
        return filterList.every((item) => joblistarray.includes(item));
      });

      setJob(jobFilteredByCategory);
    } else {
      // If filterList is empty, reset the job list back to the original data
      setJob(data);
    }
  }, [filterList]);

  return (
    <div className="bg-[#faf4ef]">
      <header className="bg-[#5da5a4] w-full relative aspect-[375/156] md:h-[157px]">
        <Image
          className="bg-repeat  xl:hidden"
          src="/images/bg-header-mobile.svg"
          fill
          alt="header background"
          style={{ objectFit: "fill", objectPosition: "left" }}
        />
        <Image
          className="bg-repeat w-full hidden xl:block"
          src="/images/bg-header-desktop.svg"
          fill
          alt="header background"
          style={{ objectFit: "fill", objectPosition: "left" }}
        />
      </header>
      <main className="w-[87%] mx-auto   mt-[56px] xl:max-w-[1112px]  flex flex-col items-center justify-center ">
        {filterList.length > 0 && <JobFilter />}
        <div className="xl:w-full">
          {job && job.length > 0 ? (
            job.map((card) => <Job_card key={card.id} info={card} />)
          ) : (
            <p className="flex justify-center items-center min-h-screen">
              Loading...
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
