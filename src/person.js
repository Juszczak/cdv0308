export default class Person {
  constructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  get fullName() {
    return `${this.name} ${this.lastname}`;
  }

  set fullName(value) {
    const [name, lastname] = value.split(' ');
    this.name = name;
    this.lastname = lastname;
  }

  getFullNameWithTitle(title) {
    return `${title} ${this.name} ${this.lastname}`;
  }
}
