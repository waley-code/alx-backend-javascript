export default function getStudentIdsSum(studentsList) {
  const sum = studentsList.reduce((accumulator, current) => accumulator + current.id, 0);
  return (sum);
}
