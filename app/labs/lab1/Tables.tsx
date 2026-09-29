export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">React</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">Node.js</td>
            <td align="center">3/3/21</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">Express</td>
            <td align="center">3/10/21</td>
            <td align="right">80</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">MongoDB</td>
            <td align="center">3/17/21</td>
            <td align="right">87</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">Redux</td>
            <td align="center">3/24/21</td>
            <td align="right">93</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">REST APIs</td>
            <td align="center">3/31/21</td>
            <td align="right">91</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">Deployment</td>
            <td align="center">4/7/21</td>
            <td align="right">89</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">89</td>
          </tr>
        </tfoot>
      </table>
      <h5>Weekly workout schedule</h5>
      <table id="wd-your-table" border={1} width="100%">
        <thead>
          <tr>
            <th align="center">Day</th>
            <th align="center">Exercise Group</th>
            <th>Exercises</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">Monday</td>
            <td align="center">Push</td>
            <td>Bench press, overhead press, tricep dips</td>
          </tr>
          <tr>
            <td align="center">Tuesday</td>
            <td align="center">Pull</td>
            <td>Deadlifts, pull-ups, barbell rows, bicep curls</td>
          </tr>
          <tr>
            <td align="center">Wednesday</td>
            <td align="center">Legs</td>
            <td>Squats, lunges, leg press, calf raises</td>
          </tr>
          <tr>
            <td align="center">Thursday</td>
            <td align="center">Rest</td>
            <td>Recovery and stretching</td>
          </tr>
          <tr>
            <td align="center">Friday</td>
            <td align="center">Push</td>
            <td>Incline dumbbell press, lateral raises, push-ups</td>
          </tr>
          <tr>
            <td align="center">Saturday</td>
            <td align="center">Pull</td>
            <td>Lat pulldowns, seated cable rows, face pulls</td>
          </tr>
          <tr>
            <td align="center">Sunday</td>
            <td align="center">Legs</td>
            <td>Romanian deadlifts, leg curls, leg extensions</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
