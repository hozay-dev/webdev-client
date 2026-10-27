export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let favoriteGame = "Mario Kart";
  let hoursOfSleep = 5;
  let isString2 = typeof favoriteGame;
  let isNumber2 = typeof hoursOfSleep;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let sampleCountType = typeof sampleCount;
  let sampleLabelType = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}                     <br />
      favoriteGame = {favoriteGame}               <br />
      isString2 = {isString2}                     <br />
      hoursOfSleep = {hoursOfSleep}               <br />
      isNumber2 = {isNumber2}                     <br />
      sampleCount = {sampleCount}                 <br />
      sampleCountType = {sampleCountType}         <br />
      sampleLabel = {sampleLabel}                 <br />
      sampleLabelType = {sampleLabelType}
      <hr />
    </div>
  );
}
