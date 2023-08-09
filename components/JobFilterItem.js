import { useJobContext } from "../app/context/jobsContext";
import Image from "next/image";

function JobFilterItem({ job }) {
  const { filterList, setFilterList } = useJobContext();

  const handleRemoveJob = () => {
    // Filter the filterList array to remove the selected job
    const updatedFilterList = filterList.filter((item) => item !== job);

    // Update the state with the updatedFilterList
    setFilterList(updatedFilterList);
  };

  return (
    <div className="grow mx-auto flex flex-row gap-4 flex-wrap ">
      <div className="flex flex-row content-center items-center rounded-md bg-[#EEF6F6] overflow-hidden">
        <div className="px-2 text-[#5da5a4] font-bold">{job}</div>
        <div
          className="bg-[#5da5a4] w-[32px] h-[32px]  flex flex-row content-center items-center cursor-pointer"
          onClick={handleRemoveJob} // Add onClick event handler for removing the job
        >
          <div className="w-[16px] h-[16px]  relative  m-auto ">
            <Image
              src="./images/icon-remove.svg"
              fill
              alt="remove icon"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobFilterItem;
