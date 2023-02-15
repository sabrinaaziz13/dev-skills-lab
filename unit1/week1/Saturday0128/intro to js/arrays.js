let students = ['Koby', 'Angelica', 'Sergii', 'Aaron']

console.log(students)

for (let i = 0; i < students.length; i = i + 1) {
  // console.log(i + ": " + students[i]);
  console.log(`${i}: $(students[i]}`)
}
students.push('Conliffe')
console.log(students)
students.push(['Larry', 'Eric'])
console.log(students)
students.pop()
console.log(students)

students.splice(3, 2, 'Eric', 'Chris')
console.log(students)

students.splice(3, 0, 43, 29)
console.log(students)

students.forEach((student, idx) => {
  // if(typeof student === "string") {
  if (student === 'Aaron') {
    students.splice(idx, 1, 'Eric')
  }
})
