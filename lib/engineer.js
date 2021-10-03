const employee = require("./employee");

class engineer extends employee {
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


module.exports = engineer;