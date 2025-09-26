const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user - ების მასივს და დააბრუნებს
// ყველაზე პატარა ასაკის მქონე ადამიანის
// სახელს

function minAge(usersArr) {
  const ages = usersArr.map((user) => user.age);
  const minAge = Math.min(...ages);
  const person = usersArr.find((user) => user.age === minAge);
  return person.name;
}

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს
// იგივე მნიშვნელობების მქონე ახალ
// (განსხვავებულ) ობიექტს

function copyObj(usersArr) {
  const copy = [...usersArr];
  return copy;
}

// დაწერე პროგრამა, სადაც ორი a და b
// მომხმარებლები აგორებენ კამათელს
// მანამ, სანამ არ გაგორდება, რომელიც
// უფრო ნაკლებ ცდაში გააგორებს სამიანს ის
// არის გამარჯვებული

let countA = 0;
let countB = 0;

let randomA;
do {
  randomA = Math.floor(Math.random() * 8) + 1;
  countA++;
} while (randomA !== 3);

let randomB;
do {
  randomB = Math.floor(Math.random() * 8) + 1;
  countB++;
} while (randomB !== 3);

if (countA > countB) {
  console.log("Wins first user");
} else if (countA < countB) {
  console.log("Wins second user");
} else {
  console.log("Both used equal attempts");
}
