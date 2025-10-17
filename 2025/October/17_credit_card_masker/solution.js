export function mask(card) {
  // check if card has valid separator
  if (!/^[0-9\s-]+$/.test(card)) return "Invalid seperator"
  console.log(card)
  // check if card has 4 sets
  if (card.split(/\s|-/).length < 4) return "Invalid number of sets"
  // check if format for each set is correct
  for (let i = 0; i < card.split(/\s|-/).length; i++){
    if (card.split(/\s|-/)[i].length < 4) return "Invalid number of digits";
  }
  
  // loop through string exlude last 4 digit
  for (let i = 0; i < card.length - 4; i++) {

    // check if current index + 1 is a separator
    if ((i + 1) % 5 !== 0) {
      card = card.replace(card[i], "*")
    }
  }

  return card;
}
