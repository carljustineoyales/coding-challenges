// Idea:
// convert Celsius Values to Fahrenheit
// compute the difference in temp in Fahrenheit

// Bonus (Improvement):
// - add error handling or fallback or default return

export function adjustThermostat(currentF, targetC) {
  // convert C degrees to F degress
  const Fdeg = (targetC * 1.8) + 32
  if(currentF === Fdeg) return 'Hold'
 
  if (currentF < Fdeg) {
    const deltaT = Fdeg - currentF 
    return `Heat: ${deltaT.toFixed(1)} degrees Fahrenheit`
  }

  if (currentF > Fdeg) { 
    const deltaT = currentF - Fdeg
    return `Cool: ${deltaT.toFixed(1)} degrees Fahrenheit`
  }
}