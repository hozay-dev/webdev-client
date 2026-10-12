import Link from "next/link";
import { FaPersonDigging } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";

// A placeholder week: the "plan" for building this page
const WEEK = [
  { day: "Sun", plan: "Rest" },
  { day: "Mon", plan: "Plan the calendar" },
  { day: "Tue", plan: "Plan harder" },
  { day: "Wed", plan: "Coffee" },
  { day: "Thu", plan: "Almost there" },
  { day: "Fri", plan: "Ship it?" },
  { day: "Sat", plan: "Fix what Friday broke" },
];

export default function Calendar() {
  return (
    <div id="wd-calendar" className="max-w-3xl">
      <h1 className="mb-1 flex items-center gap-3 text-3xl font-semibold">
        <IoCalendarOutline className="text-red-600" aria-hidden="true" />
        Calendar
      </h1>
      <p className="mb-6 text-sm tracking-wide text-neutral-500 uppercase">
        Work in progress
      </p>
      <div className="rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 p-8 text-center">
        <FaPersonDigging
          className="mx-auto mb-4 text-6xl text-red-600"
          aria-hidden="true"
        />
        <h2 className="mb-2 text-xl font-semibold">
          Our calendar is still figuring out what day it is.
        </h2>
        <p className="text-neutral-600">
          We&apos;d tell you when it will be ready, but we don&apos;t have a
          calendar to check.
        </p>
        <p className="mt-1 text-neutral-600">
          Estimated arrival: a future chapter. Probably a Tuesday.
        </p>
      </div>
      <h3 className="mt-8 mb-2 text-lg font-semibold">This week&apos;s plan</h3>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
        {WEEK.map(({ day, plan }) => (
          <div
            key={day}
            className="min-h-24 rounded border border-neutral-300 bg-white p-2"
          >
            <div className="text-xs font-semibold text-red-600 uppercase">
              {day}
            </div>
            <div className="mt-1 text-sm text-neutral-700">{plan}</div>
          </div>
        ))}
      </div>
      <Link
        href="/dashboard"
        id="wd-calendar-back"
        className="mt-6 inline-block rounded bg-red-600 px-4 py-2 text-sm text-white no-underline"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
