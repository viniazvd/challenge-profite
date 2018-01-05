export const isOfColors = (selectedColors, dress) => {
  if (!selectedColors.length) return true

  return selectedColors.includes(dress.color)
}
