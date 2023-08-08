import Image from "next/image";
import Skills from "../components/Skills";

function Job_card(props) {
  const { info } = props; // Access the card object through props.data

  return (
    <div
      className={`mt-10  w-full  rounded-md shadow-lg py-6 xl:flex-row xl:flex xl:justify-between xl:items-center xl:mt-5 xl:px-8    ${
        info.featured ? "border-l-[#5CA5A5] border-l-[6px]" : ""
      }`}
    >
      <div className="info flex flex-col gap-2 xl:flex-row xl:gap-4 ">
        <div className="info-logo w-[48px] h-[48px] -mt-12 xl:mt-0 relative xl:w-[90px] xl:h-[90px]">
          <Image
            src={info.logo} // Use the logo from the card object
            fill
            alt="company logo"
          ></Image>
        </div>
        <div className="info flex flex-col gap-4 xl:gap-1 xl:items-start ">
          <div className="flex flex-row  items-center gap-4 xl:gap-2">
            <div className="compagny-name  text-[#5CA5A5] px-2 py-1 font-bold xl:text-xl xl:tracking-xs xl:px-0">
              {info.company}
            </div>
            {info.new && (
              <div className="flex items-center justify-center  text-white bg-[#5CA5A5]  px-2 py-1 font-bold uppercase rounded-xl text-xs  ">
                new!
              </div>
            )}
            {info.featured && (
              <div className="flex items-center justify-center  text-white bg-[#000000] px-2 py-1 font-bold uppercase rounded-xl text-xs  ">
                featured
              </div>
            )}
          </div>
          <div className="position font-bold text-[#2C3A3A] xl:text-xl">
            {info.position}
          </div>
          <div className="details flex flex-row gap-4 justify-start items-center text-[#7B8E8E] xl:text-[18px]  ">
            <div className="postedAt ">{info.postedAt}</div>
            <div className="bullet">&bull;</div>
            <div className="contract">{info.contract}</div>
            <div className="bullet">&bull;</div>
            <div className="location">{info.location}</div>
          </div>
        </div>
      </div>
      <hr className="h-px my-5 bg-[#7B8E8E] border-0 xl:hidden" />
      <Skills info={info} />
    </div>
  );
}

export default Job_card;
