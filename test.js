let arr = [1, 1]
function fib(a) {
  if (a <= 0) return 
  if (a === 1 || a === 2) return 1
  let result = fib(a-1) + fib(a-2)
  arr.push(result)

}
fib(5)
console.log(arr)