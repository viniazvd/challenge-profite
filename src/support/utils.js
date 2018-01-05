export const isEmpty = array => array.length > 0
export const isNull = str => !str

export const toString = String
export const toNumber = Number
export const allToNumber = list => list.map(toNumber)
export const getValue = (list, type = 'min') => {
  return {
    min: Math.min(...list),
    max: Math.max(...list)
  }[type]
}
export const split = (string, term = '-') => toString(string).split(term)
