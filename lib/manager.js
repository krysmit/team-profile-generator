const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumb) {
    super(name, id, email)
    this.officeNumb = officeNumb;
    }

  getOffice() {
    return this.officeNumb;
  }
  getRole() {
    return "Manager"
  }
}

module.exports = Manager;