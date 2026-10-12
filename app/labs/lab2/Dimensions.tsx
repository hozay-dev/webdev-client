export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        {/* My banner box (On your own §2.1.12): stays 250x40 whatever the text */}
        <div className="wd-dimension-banner wd-bg-color-green wd-fg-color-white">
          Banner
        </div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          Sample box with a long sentence that scrolls inside the box, because the
          box keeps its declared 120 by 60 pixel size no matter how much text it
          has
        </div>
      </div>
    </div>
  );
}
