// Idea:
// convert the strings into number
// use number to compute for the tip of the meal

export function calculateTips(mealPrice, customTip) {
  mealPrice = Number(mealPrice.replace("$", ""))
  customTip = Number(customTip.replace("%",""))
  let tipArray = []

  let tip1 = mealPrice * 0.15
  let tip2 = mealPrice * 0.2
  let custom = mealPrice * (customTip / 100)
  
  tipArray = [`$${tip1.toFixed(2)}`,`$${tip2.toFixed(2)}`,`$${custom.toFixed(2)}`]
  return tipArray;
}