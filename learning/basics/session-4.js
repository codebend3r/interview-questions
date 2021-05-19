const sayHello = () => {
  console.log('hello')
}

const abyss = () => {}

const somethingElse = null

const mystery = somethingElse

if (sayHello) {
  console.log('A')
  sayHello()
  console.log('B')
}

if (abyss) {
  console.log('C')
  abyss()
  console.log('D')
}

if (mystery) {
  console.log('E')
}

// Q1
// are functions truthy?
;('Functions are truthy')

// Q2
// looking at all the console logs, what will be the order of the output?
// EXAMPLE:
// A, B, C, D, E
;('A,B,C,D,E')
