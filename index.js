// add solution here
function theBeatlesPlay(musicians, instruments){
  //In order for this to work, we need two equal sized arrays.
  if(musicians.length != instruments.length){
    return null;
  }
  
  let result = [];
  
  for(var i = 0; i < musicians.length; i++){
    result.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return result
}