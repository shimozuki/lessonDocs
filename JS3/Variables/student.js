const student = {
  first: "Harry",
  last: "Potter",
  age: 25
}

const firstName = student['first']

const student2 = student
student2['name'] = 'last'

console.log(student2, 'Same as student but name: "last"')
console.log(student, '{first: "Harry", ...}')

student2[student2.name] = "Weasley"
