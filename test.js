const add = (a, b, cb) => {
  let sum = a + b
  cb(sum)
}

setTimeout(() => {
  add(1, 2, sum => console.log(sum))
}, 2000)
