var shyhhh = {
  chunk: function (array, size = 1) {
   return Array.from({
        length: Math.ceil(array.length / size)
      }, (v, i) =>
      array.slice(i * size, i * size + size)
    )
  },
  compact: function (array) {
    return arr.filter(Boolean)
  },
  concat: function (array, ...value) {
    return array.concat(...value)
  }
}
