class employee {
    constructor(name, id, email, git) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getGithub() {
    return this.github
  }
  getRole() {
    return "employee";
  }
}

module.exports = employee;