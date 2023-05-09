import { BiSearch, BiCycling,BiCalendar } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import FilterElement from "./filter";

export default function Filter() {
  return (
    <section className="flex bg-[#fff] gap-2  w-11/12 text-sm self-center mt-20 rounded-xl">
        <div className="flex gap-3">
        <FilterElement text="Activity" description="All activities" icon={BiCycling}/>
        <FilterElement text="When" description="Choose a Date" icon={BiCalendar}/>
        <FilterElement text="Guests" description="1 guest" icon={FiUsers}/>
        </div>
        <button className="bg-[#7B61FF] w-10 h-10 flex align-items justify-center bottom-0 top-0 m-auto">
          <BiSearch />
        </button>
    </section>
  );
}
