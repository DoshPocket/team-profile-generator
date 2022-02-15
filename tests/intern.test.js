const Intern = require("../lib/intern");

  test('Intern class getSchool method returns school', () => {
    let intern = new Intern("Gob Bluth", "5", "gob@email.com", "School of Illusion")
    expect(intern.getSchool()).toBe("School of Illusion");
  });