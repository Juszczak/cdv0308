
// class Person {
//   static peopleCount = 0;

//   constructor(name, lastname, age) {
//     this.id = ++Person.peopleCount;
//     this.name = name;
//     this.lastname = lastname;
//     this.age = age;
//   }

//   get fullName() {
//     return this.name + ' ' + this.lastname;
//   }

//   set fullName(value) {
//     const values = value.split(' ');
//     this.name = values[0];
//     this.lastname = values[1];
//   }

//   getFullNameWithTitle(title) {
//     return `${title} ${this.name} ${this.lastname}`;
//   }
// }

// class Student extends Person {
//   constructor(name, lastname, age, index) {
//     super(name, lastname, age);
//     this.index = index;
//   }

//   getFullNameWithTitle(title) {
//     return `Student ${super.getFullNameWithTitle(title)}`;
//   }
// }

// async function main() {
//   const delay = 0;
//   const page = 1;
//   const url = `https://reqres.in/api/colors?page=${page}${delay > 0 ? `&delay=${delay}` : ''}`;
//   const response = await fetch(url);
//   const body = await response.json();
//   const {data: colors, ...metadata} = body;
//   const [first, second, third, ...rest] = colors;

//   const template = `
//   first:  ${first.color}
//   second: ${second.color}
//   third:  ${third.color}
//   `;
//   console.log(template);
// }

// main();
