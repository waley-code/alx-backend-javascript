import createReportObject from "../12-createReportObject";
import createEmployeesObject from "../11-createEmployeesObject";

test(``, ()=>{
    const employees = {
        ...createEmployeesObject('engineering', ['Bob', 'Jane']),
        ...createEmployeesObject('marketing', ['Sylvie'])
    };      
    
    const report = createReportObject(employees);
    expect(report.allEmployees).toEqual({ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] });
    expect(report.getNumberOfDepartments(report.allEmployees)).toEqual(2);
})