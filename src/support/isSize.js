export const isSize = (selectedSizes, dress) => {
  if (!selectedSizes.length) return true

  return selectedSizes.includes(dress.size)
}
