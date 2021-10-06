const Intern = require("../lib/Intern");

  test("this should return a school name", () => {
      const testValue = "Ghoul University";
      const school = new Intern("Casper", 2, "ghost@gmail.com", testValue);
      expect(school.getSchool()).toBe(testValue);
  });