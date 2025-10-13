function battle(ourTeam, opponent) {
  // array of characters
  const characters ='abcdefghijklmnopqrstuvwxyz'
  // points
  let team_points = 0
  let opponent_points = 0

  // split words
  let team_words = ourTeam.split(' ')
  let opponent_words = opponent.split(' ')

  // get smallest length to prevent undefined valeus
  let total_len = Math.min(team_words.length, opponent_words.length)

  // loop through words
  for (let i = 0; i < total_len; i++){
    
    // track score per word
    let team_score = 0
    let opponent_score = 0

    // loop through characters
    for(let j = 0; j < team_words[i].length; j++){
      // check if character is uppercase
      if(/[A-Z]/.test(team_words[i][j])){
        team_score += characters.indexOf(team_words[i][j].toLowerCase()) + 1 * 2
      }
      team_score += characters.indexOf(team_words[i][j].toLowerCase()) + 1
    }

    // loop through characters
    for (let k = 0; k < opponent_words[i].length; k++){
      // check if character is uppercase
      if(/[A-Z]/.test(opponent_words[i][k])){
        opponent_score += characters.indexOf(opponent_words[i][k].toLowerCase()) + 1 * 2
      }

      opponent_score += characters.indexOf(opponent_words[i][k].toLowerCase()) + 1
    }

    // update points
    if(team_score > opponent_score) team_points++
    if(team_score < opponent_score) opponent_points++
  }

  // Final score
  if (team_points > opponent_points) return "We win"
  if (team_points < opponent_points) return "We lose"
  return "Draw"
}

battle("We must never surrender", "Our team must win")