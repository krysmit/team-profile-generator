const employee = require("./employee");

class intern extends employee {
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

module.exports = intern;