function hasExoplanet(readings) {
  const char_map = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let sum = 0

  for(let i = 0; i <= readings.length - 1; i++ ){
    sum += char_map.indexOf(readings[i])
  }
  let average_luminosity = sum / readings.length
  let threshold = average_luminosity * 0.8

  for(let j = 0; j<= readings.length -1; j++){
    if(char_map.indexOf(readings[j]) <= threshold) return true
  }

  return false
}

hasExoplanet('FGFFCFFGG')
