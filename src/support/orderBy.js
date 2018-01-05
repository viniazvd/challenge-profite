export const orderBy = (dresses, orderSelected) => {
  if (orderSelected === 'asc') {
    return dresses.sort((a, b) => Number(b.price) - Number(a.price))
  }

  return dresses.sort((a, b) => Number(a.price) - Number(b.price))
}
