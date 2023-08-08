import { useJobContext } from "../app/context/jobsContext";
import JobFilterItem from "./JobFilterItem";
function JobFilter() {
  const { filterList, setFilterList } = useJobContext();
  const handelclick = () => {
    setFilterList([]);
  };
  return (
    <div
      className={
        " -mt-[92px] w-full flex flex-row content-center items-center grow border-2 rounded-md py-[18px] px-[24px] shadow-[0_8px_20px_2px_rgba(0,0,0,0.15)] relative z-300 bg-white xl:w-full xl:px-[32px] xl:justify-between   "
      }
    >
      <div className="grow mx-auto flex flex-row gap-4 flex-wrap xl:items-start xl:mx-0   xl:grow-0 ">
        {filterList.map((job, index) => {
          return <JobFilterItem job={job} key={index} />;
        })}
      </div>
      <div
        className="px-[6px] grow-0 text-slate-500 cursor-pointer"
        onClick={handelclick}
      >
        Clear
      </div>
    </div>
  );
}

export default JobFilter;
