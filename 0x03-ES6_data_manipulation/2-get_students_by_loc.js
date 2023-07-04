export default function getStudentsByLocation(studentArray, city) {
  if (!Array.isArray(studentArray) && !(typeof city === 'string')) {
    return ('arguments1 = [], argument2 = ""');
  }

  const x = studentArray.filter((y) => y.location === city);
  return (x);
}
