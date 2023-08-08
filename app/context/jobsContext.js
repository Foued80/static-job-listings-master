"use client";
import { createContext, useContext, useState } from "react";

const JobContext = createContext({});

export const JobContextProvider = ({ children }) => {
  const [job, setJob] = useState([]);
  const [filterList, setFilterList] = useState([]);

  return (
    <JobContext.Provider value={{ job, setJob, filterList, setFilterList }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);
