function moonPhase(dateString) {
  // convert dates
  const reference = new Date("2000-01-06").getTime()
  const current = new Date(dateString).getTime()

  // get diffrence of dates in milliseconds
  const diff = (current - reference) / 86400000

  // find what day range it falls
  // use 28 for 28 day cycle
  // if result is 0 = current date so add + 1
  const day = (diff % 28) + 1


  if (day >= 1 && day <= 7) return "New"
  if (day >= 8 && day <= 14) return "Waxing"
  if (day >= 15 && day <= 21) return "Full"
  if (day >= 22 && day <= 28) return "Waning"
}

console.log(moonPhase("2000-01-13"))