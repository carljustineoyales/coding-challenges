// Scope: 
// - You will only be given one element.

// Idea:
// - locate the "<" and ">" of the html tag
// - temp store the values between the "<" and ">" in a variable
// - find the "="
// - get the values from the left and right of the "="
// - add the values into seperate var 1 for the attributes and 1 for the values
// - combine the attributes and values in an array with this format: ["attribute1, value1", "attribute2, value2"]

// Bonus(Improvements):
// - detect if html tag is valid or not
// - nested html tag

export function extractAttributes(element) {
  
  let temp = []
  let output = []
  let tempValues = []
  let tempAttr = []

  for (let i = 0; i < element.length; i++) { 
    if (element[i] === '<') {
      for (let j = i; j < element.length; j++){
        temp.push(element[j])

        if(element[j] === '>') break
      }
    }
  }

  // console.log(temp.join(''))

  for (let i = 0; i < temp.join('').length; i++) { 
    if (temp[i] === '=') {
      // values
      let valArray = []
      let quoteCtr = 0
      for (let j = i+1; j < temp.length; j++) { 
        valArray.push(temp[j])
        if (temp[j] === '"') quoteCtr++
        if (quoteCtr >= 2) break
      }
      tempValues.push(valArray.join("").replace(/"/g,""))

      // attributes
      let charArray = []
      for (let j = i-1; j > 0; j--) { 
        // detect space separator
        if (temp[j] === " ") break
        charArray.push(temp[j])
      }
      tempAttr.push(charArray.reverse().join(""))
    }
  }

  // get min lenght of both arrays
  let len = Math.min(tempAttr.length, tempValues.length)
  for (let i = 0; i < len; i++) { 
    output.push(`${tempAttr[i]}, ${tempValues[i]}`)
  }

  return output;
}