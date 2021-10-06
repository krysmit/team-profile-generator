const Employee = require("../lib/Employee");

test("checking for name", () => {
  const testValue = "Wednesday";
  const nameCheck = new Employee(testValue);
  expect(nameCheck.getName()).toBe(testValue);
});

test("checking for id", () => {
  const testValue = 5;
  const idCheck = new Employee(testValue);
  expect(idCheck.getID()).toBe(testValue);
});