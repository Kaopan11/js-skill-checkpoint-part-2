const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
// ข้อนี้ใช้ Built-in Array Function ประกอบก้วย 
// 1. .filter() , 2. .map() 3. .reduce()

function newStudents(student) {

  const filterScoreMorethanfifty = student.filter((arr) => {
    return arr.score > 50
  })

  const addTenPercent = filterScoreMorethanfifty.map((arr) => {
    return arr.score + (arr.score * 0.1)
  })

  const totalScore = addTenPercent.reduce((acc, curr) => {
    return acc + curr
  }, 0)

  console.log(`Total score is ${totalScore}`)
};

newStudents(students); // Total score is 235.4

