const mobx = require('mobx')

let todos = mobx.observable([
  { title: 'Spoil tea', completed: true },
  { title: 'Make coffee', completed: false }
])

// set some symbol-type keys on an array for some logics
let a = Symbol('a')

// next line will cause an error in mobx5 but won't in mobx4.
todos[a] = 'test'
