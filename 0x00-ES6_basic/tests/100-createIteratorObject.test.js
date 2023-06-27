import createIteratorObject from "../100-createIteratorObject.js";

import createEmployeesObject from '../11-createEmployeesObject.js';
import createReportObject from '../12-createReportObject.js';

test(``, ()=>{
    const employees = {
        ...createEmployeesObject('engineering', ['Bob', 'Jane']),
        ...createEmployeesObject('marketing', ['Sylvie'])
    };
    
    const report = createReportObject(employees);
    let t = []
    
    const reportWithIterator = createIteratorObject(report);
    for (const item of reportWithIterator) {
        t.push(item);
    }

    expect(t).toEqual(['Bob', 'Jane', 'Sylvie']);
})


