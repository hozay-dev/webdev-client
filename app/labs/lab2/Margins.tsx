export default function Margins() {
  return (
    <div id="wd-css-margins">
      <h2>Margins</h2>
      <div className="wd-margin-bottom wd-padded-top-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
        Margin bottom
      </div>
      <div className="wd-margin-right-left wd-padded-bottom-right wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
        Margin left right
      </div>
      <div className="wd-margin-all-around wd-padding-fat wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
        Margin all around
      </div>
      {/* My per-side margin box (On your own §2.1.10) */}
      <div className="wd-margin-left-only wd-padding-fat wd-border-fat wd-border-red wd-border-solid wd-bg-color-gray">
        Margin left only
      </div>
    </div>
  );
}
