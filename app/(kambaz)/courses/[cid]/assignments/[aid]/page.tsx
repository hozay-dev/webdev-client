import Link from "next/link";
import * as db from "../../../../database";

// Shared Tailwind form utilities: labels above fields on small screens,
// right-aligned beside them from md up, and full-width bordered controls.
const FIELD =
  "w-full rounded border border-neutral-300 bg-white px-3 py-2 font-sans";
const ROW = "mb-4 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4";
const ROW_LABEL = "text-sm font-medium md:pt-2 md:text-right";
const ROW_FIELD = "md:col-span-2";
const STACKED_LABEL = "mb-1 block text-sm font-medium";
const CHECK_ROW = "mb-2 flex items-center gap-2 text-sm";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = db.assignments.find((a) => a._id === aid);
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className={STACKED_LABEL}>
        Assignment Name
      </label>
      <input
        id="wd-name"
        defaultValue={assignment?.title ?? ""}
        className={`${FIELD} mb-4`}
      />
      <p className="mb-4 text-sm text-neutral-600">Assignment id: {aid}</p>
      <label htmlFor="wd-description" className={STACKED_LABEL}>
        Description
      </label>
      <textarea
        id="wd-description"
        rows={5}
        className={`${FIELD} mb-6`}
        defaultValue={assignment?.description ?? ""}
      />
      <div className={ROW}>
        <label htmlFor="wd-points" className={ROW_LABEL}>
          Points
        </label>
        <div className={ROW_FIELD}>
          <input id="wd-points" defaultValue={assignment?.points ?? 100} className={FIELD} />
        </div>
      </div>
      <div className={ROW}>
        <label htmlFor="wd-group" className={ROW_LABEL}>
          Assignment Group
        </label>
        <div className={ROW_FIELD}>
          <select id="wd-group" defaultValue="ASSIGNMENTS" className={FIELD}>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
      </div>
      <div className={ROW}>
        <label htmlFor="wd-display-grade-as" className={ROW_LABEL}>
          Display Grade as
        </label>
        <div className={ROW_FIELD}>
          <select
            id="wd-display-grade-as"
            defaultValue="PERCENTAGE"
            className={FIELD}
          >
            <option value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Points</option>
            <option value="LETTER">Letter Grade</option>
          </select>
        </div>
      </div>
      <div className={ROW}>
        <label htmlFor="wd-submission-type" className={ROW_LABEL}>
          Submission Type
        </label>
        <div className={`${ROW_FIELD} rounded border border-neutral-300 p-4`}>
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className={`${FIELD} mb-4`}
          >
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
            <option value="NO_SUBMISSION">No Submission</option>
          </select>
          <div className="mb-2 text-sm font-semibold">Online Entry Options</div>
          <div className={CHECK_ROW}>
            <input type="checkbox" name="entry-options" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className={CHECK_ROW}>
            <input type="checkbox" name="entry-options" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className={CHECK_ROW}>
            <input
              type="checkbox"
              name="entry-options"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className={CHECK_ROW}>
            <input
              type="checkbox"
              name="entry-options"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className={CHECK_ROW}>
            <input type="checkbox" name="entry-options" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>
      </div>
      <div className={ROW}>
        <span className={ROW_LABEL}>Assign</span>
        <div className={`${ROW_FIELD} rounded border border-neutral-300 p-4`}>
          <label htmlFor="wd-assign-to" className={STACKED_LABEL}>
            Assign to
          </label>
          <input
            id="wd-assign-to"
            defaultValue="Everyone"
            className={`${FIELD} mb-4`}
          />
          <label htmlFor="wd-due-date" className={STACKED_LABEL}>
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            defaultValue={assignment?.due}
            className={`${FIELD} mb-4`}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="wd-available-from" className={STACKED_LABEL}>
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                defaultValue={assignment?.available}
                className={FIELD}
              />
            </div>
            <div>
              <label htmlFor="wd-available-until" className={STACKED_LABEL}>
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2026-05-20"
                className={FIELD}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded border border-red-600 bg-red-600 px-4 py-2 text-sm text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
