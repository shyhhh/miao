var shyhhh = {
  chunk: function (array, size = 1) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      let group = []
      for (let j = 0; j < size; j++) {
        group.push(array[i++])
        if (i === array.length) {
          break
        }
      }
      res.push(group)
    }
    return res
  }
}
