const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumb) {
    super(name, id, email, officeNumb)
    this.officeNumb
    }

  getOffice() {
    return this.officeNumb;
  }
  getRole() {
    return "manager"
  }
}

module.exports = Manager;