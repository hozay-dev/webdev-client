import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <p>
        {/* Plain <a> on purpose: a full page load keeps the Tailwind lab's
            Preflight reset from leaking into other pages (§2.3) */}
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        The style attribute takes an object of CSS properties, so changing the
        colors only means changing the values in that object.
      </p>
      {/* My style-attribute paragraph (On your own §2.1.1) */}
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        {" "}
        You do not need the day to go your way to meet it well. Let others rush,
        judge, or misunderstand; your task is not to govern their minds but to
        act with care in your own. When something goes wrong, pause before
        turning an inconvenience into a verdict on your life. Do the next useful
        thing, speak honestly, and leave what you cannot control unfinished
        without letting it consume you. A good life is not built by winning
        every moment, but by choosing who you will be within it.
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>
        {/* My third id (On your own §2.1.3) */}
        <p id="wd-id-selector-3">
          My own paragraph with a third ID gets its own orange look without
          touching the other two
        </p>
        <p id="wd-ai-id-selector">
          Sample paragraph whose teal look comes only from the
          p#wd-ai-id-selector rule
        </p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        {/* My class on two different tags (On your own §2.1.4) */}
        <p className="wd-your-class">
          My own class makes this paragraph green on light green
        </p>
        <h4 className="wd-your-class">
          and this heading shares the exact same look
        </h4>
        <p className="wd-ai-class-selector">
          Sample paragraph styled by the wd-ai-class-selector class
        </p>
        <h4 className="wd-ai-class-selector">
          Sample heading sharing the wd-ai-class-selector look
        </h4>
      </div>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .wd-selector-1 .wd-selector-3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent{" "}
                {/* My extra nested node (On your own §2.1.5) */}
                <em className="wd-selector-mine">
                  and this em is a direct child of that span
                </em>
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
              <br />
              <span className="wd-ai-selector-5">
                Sample span matched by .wd-selector-1 .wd-ai-selector-5
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* My cascade experiment (On your own §2.1.6) */}
      <div id="wd-css-cascade">
        <h3>Cascade: specificity and source order</h3>
        <p
          id="wd-cascade-mine"
          className="wd-cascade-first wd-cascade-second"
        >
          A tag rule, two class rules, and an id rule all fight over this
          paragraph. The id wins the background (purple) and the later class
          wins the text color (white).
        </p>
      </div>
      <div id="wd-ai-cascade-demo">
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          Sample cascade conflict: the tag rule says green, the class rule says
          yellow, and the id rule says red. The id rule wins.
        </p>
      </div>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </div>
  );
}
