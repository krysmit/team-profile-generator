class manager {
    constructor(github, officeNumb) {
    this.github
    this.officeNumb
    }

  getGithub() {
    return this.github;
  }
  getOffice() {
    return this.officeNumb;
  }
}

module.exports = manager;