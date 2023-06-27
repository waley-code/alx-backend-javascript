export default function appendToEachArrayValue(array, appendString) {
    const x = [];
  for (let idx of array) {
   x.push(appendString + array[array.indexOf(idx)]);
  }

  return x;
}
