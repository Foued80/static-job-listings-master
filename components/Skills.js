import { useJobContext } from "./../app/context/jobsContext";
function Skills(props) {
  const { info } = props;
  const { filterList, setFilterList, job, setJob } = useJobContext();

  const handelclick = (name) => {
    if (filterList.indexOf(name) == -1) {
      setFilterList((oldlist) => [...oldlist, name]);
    }
  };

  return (
    <div className="skills flex flex-wrap gap-6 xl:gap-[17px] xl:text-[16px]">
      <div
        className="px-2 py-0.5 bg-[#faf4ef] text-[#5CA5A5] font-bold rounded-sm cursor-pointer"
        onClick={() => handelclick(info.role)}
      >
        {info.role}
      </div>
      <div
        className="px-2 py-0.5 bg-[#faf4ef] text-[#5CA5A5] font-bold rounded-sm cursor-pointer"
        onClick={() => handelclick(info.level)}
      >
        {info.level}
      </div>

      {info.languages.map((lang) => {
        return (
          <div
            key={lang}
            className="px-2 py-0.5 bg-[#faf4ef] text-[#5CA5A5] font-bold rounded-sm cursor-pointer "
            onClick={() => handelclick(lang)}
          >
            {lang}
          </div>
        );
      })}
      {info.tools.map((tool) => {
        return (
          <div
            key={tool}
            className="px-2 py-0.5 bg-[#faf4ef] text-[#5CA5A5] font-bold rounded-sm cursor-pointer"
            onClick={() => handelclick(tool)}
          >
            {tool}
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
