export default function hasValuesFromArray(setObj, arrray) {
  const v = arrray.every((x) => setObj.has(x));
  return (v);
}
