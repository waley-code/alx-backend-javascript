import createReportObject from '../12-createReportObject';
import createEmployeesObject from '../11-createEmployeesObject';

test('createReportObject whos', () => {
  const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie']),
  };

  const report = createReportObject(employees);
  expect(report.allEmployees).toStrictEqual({ engineering: ['Bob', 'Jane'], marketing: ['Sylvie'] });
  expect(report.getNumberOfDepartments(report.allEmployees)).toStrictEqual(2);
});
