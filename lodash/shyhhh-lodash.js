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
  head: function (array) {
    return array[0]
  },
  flatten: function (array) {
    return [].concat(...array)
  },
  flattenDeep: function (array) {
    return [].concat(...array.map(v => (Array.isArray(v) ? flattenDeep(v) : v)))
  },
  flattenDepth: function (array, depth = 1) {
    return depth != 1 ?
      array.reduce((a, v) => a.concat(Array.isArray(v) ? flattenDepth(v, depth - 1) : v), []) :
      array.reduce((a, v) => a.concat(v), [])
  },
  fromPairs: function (pairs) {
    let obj = {}
    for (let i = 0; i < pairs.length; i++) {
      obj[pairs[i][0]] = pairs[i][1]
    }
    return obj
  }
}
