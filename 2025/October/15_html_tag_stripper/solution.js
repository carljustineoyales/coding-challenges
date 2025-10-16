// Idea: Look for < and > then remove everything in between including the < and > 

// loop into an array of characters
// when < is found loop to find >
// then when > is found delete everything in between including < and >

// ['<','a',' ','h','r','e','f','=','"','#','"','>','C','l','i','c','k',' ','h','e','r','e','<','/','a','>']
// look for the start tag symbol save the index  
// [['<'],'a',...] start index = 0
// then search for the end tag
// [...'"',['>'],'C'...] end index = 11
// then change all contents beween 0 to 11 to an empty string
// reset the indexes
// repeat until it reaches the end
// after loop is done join the remaining content

function stripTags(html) {
  let split_string = html.split('')
  let startTag = '<'
  let endTag = '>'
  let startIndex, endIndex

  // loop into split_string
  for(let i = 0; i < split_string.length; i++){
    // split_string[i] value = startTag set the startIndex value
    if(split_string[i] === startTag) startIndex = i
    // split_string[i] value = endTag set the endIndex value
    if(split_string[i] === endTag) endIndex = i

    // check if startIndex and endIndex exists
    // this will not start if either values doesnt exists
    if(startIndex !== undefined && endIndex !== undefined){
      // loop into split_string again but start at startIndex and end with endIndex
      for(let j = startIndex; j <= endIndex; j++){
        // change all content to empty string
        split_string[j] = ''
      }

      // when loop ends reset the index values
      startIndex = undefined
      endIndex = undefined
    }
  }
  return split_string.join('')
}

