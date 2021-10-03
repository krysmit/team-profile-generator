const employee = require("./employee");

class manager extends employee {
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

module.exports = manager;