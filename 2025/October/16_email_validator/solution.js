// Idea: split the email and perform a for loop and if checks for each condition

// if any of the condition returns false stop the program and return false

// This would be easy if I use regex but I like to challenge my self

// if no @ is found return false
// if more than 1 @ return false
// if local and domain have 2 '.' in a row return false
// if local part starts and ends with '.' return false
// if local part has characters not in 'a-z','A-Z','0-9','.','_', or '-' return false
// if domain has no '.' found return false
// if domain doesn't end with '.' followed by 2 letters return false


function isEmailFormatValid(str){
  // if no @ is found return false
  if (!str.includes('@')) return false


  // if more than 1 @ return false 
  let atLimit = 1
  let numAt = 0
  let i = 0
  while(i < str.length){
    // if found increment numAt
    if(str[i] === '@') numAt++ 
    // if found multiple '@'
    if(numAt > atLimit) return false
    i++
  }

  return true
}

function isEmailHasMultipleAt(str){
  let atLimit = 1
  let numAt = 0
  let i = 0
  while(i < str.length){
    if(numAt > atLimit) return true
    if(str[i] === '@') numAt++ 
    i++
  }
  return false
}

function isLocalValid(str){
  let validChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._-'
  const local = str.split('@')[0]

  // if local part starts or ends with '.' return false
  if (local[0] === '.' || local[local.length - 1]  === '.') return false

  // if local 2 '.' in a row return false
  for(let i = 0; i < local.length; i++){
    if (local[i] === '.'){
      // check is next char is '.'
      if(local[i] === local[i+1]){
        return false
      }
    }
      // if local part has characters not in 'a-z','A-Z','0-9','.','_', or '-' return false
    if (!validChar.includes(local[i])) return false
  }

  return true
}

function isDomainValid (str) {
  let validChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const domain = str.split('@')[1]

  // if domain has no '.' found return false
  if(!domain.includes('.')) return false

  // if domain has 2 '.' in a row return false
  for(let i = 0; i < domain.length; i++){
    if (domain[i] === '.'){
      // check if next char is a '.'
      if(domain[i] === domain[i+1]){
        return false
      }
    }
  }

  // if domain doesn't end with '.' followed by at least 2 letters return false
  for (let i = domain.length; i >= 0; i--){
    if(domain[i] === '.'){
      // check if next char is undefined
      if (domain[i+1]===undefined) return false

      // check if dot is followed by at least 2 letters
      let end = domain.split('').splice(i + 1, domain.length)
      if (end.length < 2) return false

      for (let j = 0; j < end.length; j++){
        if(!validChar.includes(end[j])) return false
      }
      break
    }
  }
  return true
}

function validate(email) {

  if (!isEmailFormatValid(email)) return false
  
  if (!isLocalValid(email)) return false

  if (!isDomainValid(email)) return false

  return true
}

console.log(validate("!hell.-w.rld@example.mc"))