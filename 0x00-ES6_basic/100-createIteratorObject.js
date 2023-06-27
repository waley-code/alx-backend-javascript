export default function createIteratorObject(report) {
  const x = Object.values(report);
  const y = [];
  const re = [];
  x.map((c) => y.push(...(Object.values(c))));
  for (const s of y) {
    re.push(...s);
  }
  return re;
}
