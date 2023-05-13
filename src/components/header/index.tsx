import Avatar from "../avatar";
import { BiMenuAltRight } from "react-icons/bi";

export default function Header() {
  return (
    <header className="flex align-center bg-[#161414] py-1 px-4 w-full justify-between z-20 lg:max-w-[1360px] lg:m-auto">
      <img
        src="/logo.svg"
        alt=""
        className="flex w-14 h-14 object-contain align-center"
      />
        <ul className=" align-center gap-5 hidden lg:flex justify-center text-white">
          <li className="bottom-0 top-0 m-auto">home</li>
          <li className="bottom-0 top-0 m-auto">hotels</li>
          <li className="bottom-0 top-0 m-auto">hotels</li>
          <li className="bottom-0 top-0 m-auto">restaurants</li>
          <li className="bottom-0 top-0 m-auto">tours</li>
          <li className="bottom-0 top-0 m-auto">destinations</li>
          <li className="bottom-0 top-0 m-auto">activities</li>
          <li className="bottom-0 top-0 m-auto">contact</li>
        </ul>
      <button className="flex align-center justify-center text-4xl relative lg:hidden">
        <BiMenuAltRight className="flex align-middle bottom-0 top-0 m-auto" />
      </button>

      <Avatar />
    </header>
  );
}
