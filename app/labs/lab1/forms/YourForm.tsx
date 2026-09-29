export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <h5>Text fields</h5>
      <label htmlFor="wd-your-first-name">First name:</label>
      <input type="text" defaultValue="Jose" id="wd-your-first-name" />
      <br />
      <label htmlFor="wd-your-last-name">Last name:</label>
      <input type="text" defaultValue="Diaz" id="wd-your-last-name" />
      <br />
      <label htmlFor="wd-your-password">Password:</label>
      <input
        type="password"
        placeholder="Enter a password"
        id="wd-your-password"
      />
      <br />

      <h5>Text boxes</h5>
      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={5}
        defaultValue="I want to become a better web developer at my day job and get better with React and TypeScript."
      />

      <h5>Radio buttons</h5>
      <label>Class standing:</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-junior" />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-senior" />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="your-standing"
        id="wd-your-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />
      <label>Enrollment:</label>
      <br />
      <input
        type="radio"
        name="your-enrollment"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />
      <input type="radio" name="your-enrollment" id="wd-your-part-time" />
      <label htmlFor="wd-your-part-time">Part-time</label>

      <h5>Checkboxes</h5>
      <label>Interests:</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-fullstack"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-fullstack">
        Full-stack web development
      </label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-frontend"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-frontend">Frontend / UI</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-backend"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-backend">Backend / cloud</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-ai"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-ai">AI / ML</label>

      <h5>Dropdowns</h5>
      <label htmlFor="wd-your-major">Major:</label>
      <br />
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="IS">Information Systems</option>
        <option value="CYBER">Cybersecurity</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics to deepen this term:</label>
      <br />
      <select
        multiple
        id="wd-your-topics"
        defaultValue={["REACT", "TYPESCRIPT"]}
      >
        <option value="REACT">React</option>
        <option value="NEXTJS">Next.js</option>
        <option value="NODE">Node.js</option>
        <option value="MONGODB">MongoDB</option>
        <option value="TYPESCRIPT">TypeScript</option>
        <option value="CSS">CSS</option>
      </select>

      <h5>Other field types</h5>
      <label htmlFor="wd-your-email">School email: </label>
      <input
        type="email"
        placeholder="you@school.edu"
        defaultValue="diaz.jose1@northeastern.edu"
        id="wd-your-email"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
      <input
        type="number"
        defaultValue="2027"
        min={2026}
        max={2032}
        id="wd-your-grad-year"
      />
      <br />
      <label htmlFor="wd-your-birthday">Birthday: </label>
      <input
        type="date"
        defaultValue="1997-09-05"
        min="1900-01-01"
        max="2026-12-31"
        id="wd-your-birthday"
      />
      <br />
      <label htmlFor="wd-your-excitement">
        How excited I am about this course (0–10):{" "}
      </label>
      0
      <input
        type="range"
        defaultValue="8"
        min="0"
        max="10"
        id="wd-your-excitement"
      />
      10
      <br />

      <h5>Buttons</h5>
      <button id="wd-your-save" type="submit">
        Save
      </button>
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
