const Employee = require("../lib/Employee");

test("checking for name", () => {
  const testValue = "Wednesday";
  const nameCheck = new Employee(testValue);
  expect(nameCheck.getName()).toBe(testValue);
});

test("checking for id", () => {
  const testValue = 5;
  const idCheck = new Employee("Wednesday",testValue);
  expect(idCheck.getId()).toBe(testValue);
});

test("checking for email", () => {
  const testValue = "addams@gmail.com";
  const emailCheck = new Employee("Wednesday", 5, testValue);
  expect(emailCheck.getEmail()).toBe(testValue);
});