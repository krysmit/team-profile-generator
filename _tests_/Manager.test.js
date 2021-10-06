const Manager = require("../lib/Manager");

  test("this should return an office number", () => {
      const testValue = 12;
      const officeNumb = new Manager("Dracula", 1, "vampire@gmail.com", testValue);
      expect(officeNumb.getOffice()).toBe(testValue);
  });
  