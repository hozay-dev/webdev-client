import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { BsRocketTakeoff } from "react-icons/bs";
import { TbBrandTailwind } from "react-icons/tb";
import { MdOutlineSchool } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi2";
export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        {/* My two icons (On your own §2.2): Bootstrap and Tabler families */}
        <BsRocketTakeoff className="text-4xl text-red-600" />
        <TbBrandTailwind className="text-5xl text-sky-500" />
        {/* Sample icons from the Material Design and Heroicons 2 families */}
        <MdOutlineSchool className="text-4xl text-blue-600" />
        <HiOutlineAcademicCap className="text-4xl text-blue-600" />
      </div>
    </div>
  );
}
