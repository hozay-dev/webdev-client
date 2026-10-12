export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      {/* Sample row 1: three columns in a row */}
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white">Column 3</div>
      </div>
      {/* Sample row 2: Column 3 grows */}
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      {/* Sample row 3: Column 1 pinned at 110px, Column 3 grows */}
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      {/* My fourth row (On your own §2.1.19): first column grows, last pinned */}
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">
          My growing column
        </div>
        <div className="wd-bg-color-gray">Middle</div>
        <div className="wd-bg-color-yellow wd-width-110px">Pinned</div>
      </div>
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Sample fixed</div>
        <div className="wd-bg-color-gray">Sample middle</div>
        <div className="wd-bg-color-blue wd-fg-color-white wd-flex-grow-1">
          Sample grows
        </div>
      </div>
    </div>
  );
}
