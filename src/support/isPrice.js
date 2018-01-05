import { toNumber, allToNumber, getValue, split } from './utils'

const filterType = (min, max) => dress => {
  return min !== max
    ? toNumber(dress.price) >= min && dress.price <= max
    : toNumber(dress.price) >= min
}

export const isPrice = (prices, dress) => {
  if (!prices) return true

  const price = allToNumber(split(prices))
  const [min, max] = [getValue(price, 'min'), getValue(price, 'max')]

  return filterType(min, max)(dress)
}
