import createEmployeesObject from "../11-createEmployeesObject";

test(` return an object `, ()=>{
    expect(createEmployeesObject("Software", [ "Bob", "Sylvie" ])).toEqual({ Software: [ 'Bob', 'Sylvie' ] });
})