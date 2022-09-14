var shyhhh = {
  chunk: function (array, size = 1) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      let temp = []
      for (let j = size; j > 0; j--) {
        temp.push(array[i])
        if (j > size - 1) i++
        if (i == array.length) {
          break
        }
      }
      res.push(temp)
    }
    return res
  }
}
