import Image from "next/image";
import Link from "next/link";
import { IoCalendarOutline } from "react-icons/io5";

// The cat's plan for building this page
const WEEK = [
  { day: "Sun", plan: "Nap" },
  { day: "Mon", plan: "Stare at the calendar code" },
  { day: "Tue", plan: "Knock the calendar off the desk" },
  { day: "Wed", plan: "Nap (important)" },
  { day: "Thu", plan: "Sit on the keyboard" },
  { day: "Fri", plan: "Ship it? After a nap" },
  { day: "Sat", plan: "Nap" },
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
      <div
        id="wd-calendar-meme"
        className="relative mx-auto max-w-md overflow-hidden rounded-lg shadow-md"
      >
        <Image
          src="/images/calendar-cat.jpg"
          width={720}
          height={720}
          alt="A tabby cat lounging on a couch, giving the camera a smug side-eye"
          className="h-auto w-full"
          priority
        />
        <div className="wd-meme-caption absolute inset-x-0 top-3 px-4 text-center text-3xl leading-tight sm:text-4xl">
          You want a calendar?
        </div>
        <div className="wd-meme-caption absolute inset-x-0 bottom-3 px-4 text-center text-3xl leading-tight sm:text-4xl">
          I don&apos;t even know what day it is
        </div>
      </div>
      <p className="mt-2 text-center text-xs text-neutral-500">
        Photo: Tigger the cat, public domain (CC0), via Wikimedia Commons
      </p>
      <h3 className="mt-8 mb-2 text-lg font-semibold">
        The cat&apos;s plan for this week
      </h3>
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
