// Idea: 
// change pair into socks so it is easier to manage when adding or subtracting 
// if cycles are divisible by a number perform its operations
// but if a cycle is divisible by many (i.e 10 is divisible by 5 and 2) perform both operations 
// if socks turns negative return 0

export function sockPairs(pairs, cycles) {
  let socks = pairs * 2

  for (let i = 1; i <= cycles; i++) {

    if (i % 10 == 0) {
      socks += 2;
    }
    if (i % 5 == 0) { 
      socks -= 1
    }
    if (i % 3 == 0) {
      socks += 1      
    }
    if (i % 2 == 0) {
      socks -= 1      
    }
    if (socks < 0) { 
      socks = 0
    }
  }
  return Math.floor(socks / 2);
}