export default function BackgroundColors() {
  return (
    <div id="wd-css-background-colors">
      <h2 className="wd-bg-color-blue wd-fg-color-white">Background color</h2>
      <p className="wd-bg-color-red wd-fg-color-black">
        This background of this paragraph is red but{" "}
        <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
        </span>
      </p>
      {/* My stacked background/foreground block (On your own §2.1.8) */}
      <p className="wd-bg-color-gray wd-fg-color-black">
        This paragraph has a light gray background with black text, and{" "}
        <span className="wd-bg-color-blue wd-fg-color-white">
          this span is white on blue
        </span>
      </p>
      <div id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">
        Sample block with a yellow background and black text
      </div>
    </div>
  );
}
