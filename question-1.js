const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

// เริ่มเขียนโค้ดตรงนี้
const allPeople = [...techupPeople, ...techcoolPeople];
console.log(allPeople);
/* Output: 
[
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 16 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 19 }
]
*/

const peopleLessthanTwenty = allPeople.filter((arr) => {
  return arr.age < 20
})
console.log(peopleLessthanTwenty);
/* Output:
[
  { name: 'Alice', age: 17 },
  { name: 'Charlie', age: 16 },
  { name: 'Eve', age: 19 }
]
*/
