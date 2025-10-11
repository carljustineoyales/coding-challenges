function launchFuel(payload) {
  let fuel_required = payload / 5
  let fuel_diff = 0
  let fuel_current = fuel_required - fuel_diff

  // if current fuel needed is >1
  while(fuel_current > 1){
    // save the previous fuel_required value
    fuel_diff = fuel_required

    // compute for total mass
    let total_mass = fuel_required + payload

    // recompute fuel needed
    fuel_required = total_mass / 5

    // recompute fuel difference
    fuel_current = fuel_required - fuel_diff
  }

  // return 1 decimal place 
  return fuel_required.toFixed(1)
}