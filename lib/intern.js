const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, github, school) {
    super(name, id, email, github);
    this.school
    }
    
  getSchool() {
    return this.school;
  }
  getRole() {
    return "intern";
  }
}

module.exports = Intern;