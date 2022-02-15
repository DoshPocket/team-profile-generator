const Employee = require("../lib/employee");

test('employee class getName method returns name', () => {
    let employee = new Employee("Gob Bluth")
    expect(employee.getName()).toBe("Gob Bluth");
  });
  test('employee class getId method returns ID', () => {
    let employee = new Employee("Gob Bluth", "5")
    expect(employee.getId()).toBe("5");
  });
  test('employee class getEmail method returns email', () => {
    let employee = new Employee("Gob Bluth", "5", "gob@email.com")
    expect(employee.getEmail()).toBe("gob@email.com");
  });