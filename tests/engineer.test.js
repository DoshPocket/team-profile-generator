const Engineer = require("../lib/engineer");

  test('Engineer class getGithub method returns github', () => {
    let engineer = new Engineer("Gob Bluth", "5", "gob@email.com", "forgetMeNow")
    expect(engineer.getGithub()).toBe("forgetMeNow");
  });