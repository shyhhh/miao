var shyhhh = {
  chunk: function (array, size = 1) {
    return Array.from({
        length: Math.ceil(array.length / size)
      }, (v, i) =>
      array.slice(i * size, i * size + size)
    )
  },
  compact: function (array) {
    return array.filter(Boolean)
  },
  concat: function (array, ...value) {
    return array.concat(...value)
  },
  difference: function (array, ...value) {
    const s = new Set(...value)
    return array.filter(x => !s.has(x))
  },
  differenceBy: function (array, [values], [iteratee = _.identity]) {

  },
  differenceWith: function (array, val, comp) {
   return array.filter(a => val.findIndex(b => comp(a, b)) === -1)
  },
  drop: function (array, n = 1) {
    return array.splice(n)
  }
}
