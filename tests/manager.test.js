const Manager = require("../lib/manager");

  test('Manager class getOfficeNumber method returns office number', () => {
    let manager = new Manager("Gob Bluth", "5", "gob@email.com", "42")
    expect(manager.getOfficeNumber()).toBe("42");
  });