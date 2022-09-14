var shyhhh = {
  chunk: function chunk(array, size = 1) {
    let res = []
    for (let i = 0; i < array.length;) {
      let temp = []
      for (let j = size; j > 0; j--) {
        temp.push(array[i])
        i++
        if (i == array.length) {
          break
        }
      }
      res.push(temp)
    }
    return res
  }
}
