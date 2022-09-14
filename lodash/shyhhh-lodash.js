var shyhhh = {
  chunk(arr, n = 1) {
    let arr = []
    for (let i = 0; i < arr.length; i++) {
      let group = []
      for (let j = 0; j < n; j++) {
        group.push(arr[i++])
        if (i === arr.length) {
          break
        }
      }
      arr.push(group)
    }
    return arr
  }
}
