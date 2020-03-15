import Person from './person';
import Student from './student';

async function main() {
  const delay = 0;
  const page = 1;
  const url = `https://reqres.in/api/colors?page=${page}${delay > 0 ? `&delay=${delay}` : ''}`;
  const response = await fetch(url);
  const body = await response.json();
  const { data: colors, ...metadata } = body;
  const [first, second, third, ...rest] = colors;

  console.log(metadata);
  console.log(rest);

  const template = `
  first:  ${first.color}
  second: ${second.color}
  third:  ${third.color}
  `;
  console.log(template);

  const person = new Person();
  const student = new Student();
  console.log(person, student);
}

main();
