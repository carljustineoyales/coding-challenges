function to12(time) {
  // split the string
  let array_time = time.split('')
  // get the first 2 digits
  let hour = array_time.slice(0, 2).join('')
  // get the last 2 digits
  let minute = array_time.slice(2, 4).join('')
  let period = ''

  // if hour = '24' or '00'
  if (hour === '24' || hour === '00') {
    // set hour to '12' and period to 'AM'
    hour = '12'
    period = "AM"

    // if hour is less than '12'
  } else if (hour < '12') {
    // if hour is less than '10'
    if (hour < '10') {
      // remove the leading digit
      hour = hour.slice(1)
    }
    // set period to 'AM'
    period = "AM"

    // if hour is greater than 12
  } else if (hour > '12') {
    // deduct '12' from hour
    hour = Number(hour) - 12
    // set period to 'PM'
    period = "PM"
  }

  return `${hour}:${minute} ${period}`
}

to12("0900")