import Person from './person';

export default class Student extends Person {
  constructor(name, lastname, age, index) {
    super(name, lastname, age);
    this.index = index;
  }

  getFullNameWithTitle(title) {
    return `Student ${super.getFullNameWithTitle(title)}`;
  }
}
