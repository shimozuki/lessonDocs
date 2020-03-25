const setTimeout = function(fun) {
  const newObject = {}
  newObject.fun = fun
  newObject.fun()

}

setTimeout(function() {
  console.log(this, '[Function: anonymous]')
})
