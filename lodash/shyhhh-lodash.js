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
    const s = new Set([].concat(...value))
    return array.filter(x => !s.has(x))
  },
  differenceWith: function (array, val, comp) {
    return array.filter(a => val.findIndex(b => comp(a, b)) === -1)
  },
  drop: function (array, n = 1) {
    return array.splice(n)
  },
  dropRight: function (array, n = 1) {
    return array.slice(0, -n || undefined)
  },
  fill: function (array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

}
