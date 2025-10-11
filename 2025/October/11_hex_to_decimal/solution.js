
function hexToDecimal(hex) {
  // map all hex char
  const char = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  // save sum
  let sum = 0
  // set index
  let i = 0
  while (i < hex.length) {
    // get the power value of each index
    const power = Math.pow(16, (hex.length - 1) - i)
    // get the index of the character in the hex map
    const digit = char.indexOf(hex[i])
    // multiply
    const product = digit * power
    // store in sum
    sum += product
    i++
  }
  // return total sum
  return sum
}