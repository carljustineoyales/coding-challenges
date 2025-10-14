// First idea is to split the string using the pattern and using the length of the array created that will be the number of pattern in the string. However the idea fell apart when running count('101010101010101010101', '101') which should return 10 but my code returns 6

// Second idea is to use a pointer logic where i match the pattern to the text using the index base on the pattern lenght. so if the pattern length is 3 the range i should compare is from index 0 to index 2

//  text = [abc]def
//  pattern = [def] 
//  not match move the pointer to the next index

//  text = a[bcd]ef
// pattern = [def] 
// move the pointer until you get a pattern. repeat until end of string

// text = abc[def]
//  pattern = [def]
// if match add +1 to the counter

function count(text, pattern) {
  // split the text into array
  let text_array = text.split('')
  // get the pattern length
  let pattern_length = pattern.length
  // set the counter
  let ctr = 0

  // loop through the text array
  for (let i = 0; i < text_array.length; i++){
    // move the pointer per loop
    let pointer = text_array.slice(i, pattern_length + i)

    // if pointer matches the pattern
    if (pointer.join('') === pattern) {
      // increment ctr
      ctr++
    }
  }

  return ctr
}

count('101010101010101010101', '101') // returns 10
