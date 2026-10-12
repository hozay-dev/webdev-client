export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      {/* My mixed-color sentence (On your own §2.1.7) */}
      <p className="wd-fg-color-green">
        This sentence starts green,{" "}
        <span className="wd-fg-color-blue">turns blue in the middle</span>, and{" "}
        <span className="wd-fg-color-red">ends red</span>
      </p>
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        Sample paragraph in blue with{" "}
        <span className="wd-fg-color-black">a nested span in black</span>
      </p>
    </div>
  );
}
