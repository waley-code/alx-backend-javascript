export default function getStudentsId(xyz) {
  if (!Array.isArray(xyz)) {
    return ([]);
  }
  const x = xyz.map((i) => i.id);
  return (x);
}
