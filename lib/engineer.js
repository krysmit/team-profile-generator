const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github, school) {
    super(name, id, email, github);
    this.school
    }

getSchool() {
  return this.school;
}
getRole() {
  return "engineer";
}
}


module.exports = Engineer;