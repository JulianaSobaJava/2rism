import { BiSearch, BiCycling,BiCalendar } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import FilterElement from "./filter";

export default function Filter() {
  return (
    <div className=" bg-[#fff] pl-2 w-4/5 h-14 text-sm self-center mt-20 rounded-xl hidden justify-between md:flex  ">
        <div className="flex gap-10">
        <FilterElement text="Activity" description="All activities" icon={BiCycling}/>
        <FilterElement text="Activity" description="All activities" icon={BiCycling}/>
        <FilterElement text="When" description="Choose a Date" icon={BiCalendar}/>
        <FilterElement text="Guests" description="1 guest" icon={FiUsers}/>
        </div>
        <button className="bg-[#7B61FF] w-10 h-10  rounded-xl bottom-0 top-0 m-auto">
          <BiSearch className="bottom-0 top-0 m-auto"/>
        </button>
    </div>
  );
}
