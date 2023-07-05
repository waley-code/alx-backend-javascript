
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

// Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'London',
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render the table
const renderTable = (students: Student[]): void => {
  const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
  const table = document.createElement('table');

  // Create table header
  const headerRow = document.createElement('tr');
  const headerFirstName = document.createElement('th');
  headerFirstName.textContent = 'First Name';
  const headerLocation = document.createElement('th');
  headerLocation.textContent = 'Location';
  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  table.appendChild(headerRow);

  // Create table rows for each student
  students.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });
 console.log(table);
 
  // Append the table to the document body
  body.appendChild(table);
};

// Call the renderTable function with the studentsList
renderTable(studentsList);
