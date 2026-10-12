export default function BoxModel() {
  return (
    <div id="wd-css-box-model">
      <h2>Box model</h2>
      <div className="wd-box-model-parent">
        <div>parent background (shows through the margin)</div>
        <div className="wd-box-model-box">
          <span className="wd-box-model-border-label">border (the red ring)</span>
          <span className="wd-box-model-padding-label">padding</span>
          <div className="wd-box-model-content">content</div>
          <span className="wd-box-model-margin-label">
            margin: the 20px gray gap (transparent)
          </span>
        </div>
      </div>
      <h3>box-sizing</h3>
      <div className="wd-box-sizing-demo">
        <div className="wd-box-sizing-content">
          content-box: width 200px plus padding and border
        </div>
        <div className="wd-box-sizing-border">
          border-box: width 200px includes padding and border
        </div>
        {/* My experiment (On your own §2.1.10): content-box at width 300px
            paints 360px wide (300 + 40 padding + 20 border), so it does not
            stay the declared width */}
        <div className="wd-box-sizing-content wd-box-sizing-wide">
          My content-box at width 300px: paints 360px wide
        </div>
        {/* Sample: border-box keeps the declared 200px width on screen;
            content-box would add padding and border and paint 260px */}
        <div id="wd-ai-box-sizing" className="wd-box-sizing-border">
          Sample border-box: stays the declared 200px wide
        </div>
      </div>
    </div>
  );
}
