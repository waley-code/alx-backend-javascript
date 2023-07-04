export default function updateStudentGradeByCity(studentList, city, grade) {
  const studentsToBeUpdated = studentList.filter((x) => x.location === city);
  const updatedList = (studentsToBeUpdated).map((s) => {
    const gradeToUpdate = grade.filter((z) => z.studentId === s.id);
    const gradeNumber = parseInt((gradeToUpdate.map((x) => x.grade)).toString(), 10);

    const updatedStudent = { ...s }; // Create a new object or clone 's'
    updatedStudent.grade = gradeToUpdate.map((x) => x.grade).toString() === '' ? 'N/A' : gradeNumber;
    return updatedStudent;
  });
  return (updatedList);
}
