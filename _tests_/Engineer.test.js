const engineer = require("../lib/engineer");

test("this should get a github username", () => {
  const testValue = "testuser";
  const gitUser = new Engineer("Chucky", 3, "scarydoll@email.com", testValue);
  expect(gitUser.getGithub()).toBe(testValue);
});