export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  const pizza = { size: "large", slices: 8, topping: "pepperoni" };
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)} <br />
      pizza = {JSON.stringify(pizza)} <br />
      sampleCourse = {JSON.stringify({ course: "RS102", modules: 3 })}
      <hr />
    </div>
  );
}
