const student = {
  first: "Harry",
  last: "Potter",
  age: 25
}

const firstName = student['first']

const student2 = student
student2['name'] = 'last'

student2[student2.name] = "Weasley"
