import type { IconType } from "react-icons";
import { BiImport } from "react-icons/bi";
import { FaBell, FaBullhorn, FaChartLine, FaCheckCircle, FaHome } from "react-icons/fa";
import { FaChartSimple, FaWandMagicSparkles } from "react-icons/fa6";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdDoNotDisturbAlt } from "react-icons/md";

const ACTION_CLASSES =
  "mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm";

function StatusAction({
  icon: Icon,
  label,
  id,
}: {
  icon: IconType;
  label: string;
  id?: string;
}) {
  return (
    <button id={id} type="button" className={ACTION_CLASSES}>
      <Icon className="me-2 shrink-0 text-base" /> {label}
    </button>
  );
}

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-green-600 bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <StatusAction icon={BiImport} label="Import Existing Content" />
      {/* My remaining actions (On your own §2.4.5) */}
      <StatusAction icon={LiaFileImportSolid} label="Import from Commons" />
      <StatusAction icon={FaHome} label="Choose Home Page" />
      <StatusAction icon={FaChartSimple} label="View Course Stream" />
      <StatusAction icon={FaBullhorn} label="New Announcement" />
      <StatusAction icon={FaChartLine} label="New Analytics" />
      <StatusAction icon={FaBell} label="View Course Notifications" />
      <StatusAction
        id="wd-ai-status"
        icon={FaWandMagicSparkles}
        label="Sample action"
      />
    </div>
  );
}
