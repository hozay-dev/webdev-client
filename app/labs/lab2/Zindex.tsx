export default function Zindex() {
  return (
    <div id="wd-z-index">
      <h2>Z index</h2>
      <div className="wd-pos-relative" style={{ height: 150 }}>
        <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
          Portrait
        </div>
        <div className="wd-zindex-bring-to-front wd-pos-absolute-50-50 wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
          Square
        </div>
        {/* My fourth box (On your own §2.1.16): z-index 5 puts it above the
            square but below the landscape (z-index 10) */}
        <div className="wd-zindex-middle wd-pos-absolute-30-90 wd-dimension-landscape wd-bg-color-green wd-fg-color-white">
          Mine
        </div>
        <div
          id="wd-ai-zindex"
          className="wd-ai-zindex-top wd-dimension-square wd-bg-color-gray"
        >
          Sample
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}
