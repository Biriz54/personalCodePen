var textAreaElementHTML = document.getElementById("textAreaElementHTML");
var textAreaElementCSS = document.getElementById("textAreaElementCSS");
var textAreaElementJS = document.getElementById("textAreaElementJS");

var reserverdWords = [ "if" , "for" , "while" , "document.get"];
var reserverdExpressions = [ " (true) { \n \n}" ," (var i = 0; i < .length; i++) {\n\n} " , " () { \n \n}" , "ElementById('')"];
var positioOfCursor= [ 8 , 19 , 8 , 8 ];


textAreaElementHTML.onkeydown = function(event) {
  tab(event , textAreaElementHTML);
};
textAreaElementCSS.onkeydown = function(event) {
  tab(event , textAreaElementCSS);
};

textAreaElementJS.onkeydown = function(event){

   if (event.code == 'Tab'){

     event.preventDefault();
     var code = textAreaElementJS.value;
     var index = reserverdWords.indexOf(code.substring(code.lastIndexOf(" ")+1).toLowerCase());

     if ( index > -1){

       textAreaElementJS.value = textAreaElementJS.value + reserverdExpressions[index];
       moveCursor( -1 , index , textAreaElementJS);
       return;
     }

     moveCursor(0 , 4 , textAreaElementJS);
   }
}

function tab(event , textAreaElement ){

  if (event.code == 'Tab'){
    event.preventDefault();
    moveCursor(0 , 4 , textAreaElement);
    return;
  }
}



function shortCut(){

  if(event.code == ''){


  }
}



function moveCursor(direction , index , textAreaElement) {

  if (direction >= 0){
    textAreaElement.value = textAreaElement.value + "   ";
    var whereTomove = getCurrentPosition(textAreaElement) + 4;
  } else {
    var whereTomove = getCurrentPosition(textAreaElement) - positioOfCursor[index];
  }


  if (textAreaElement.setSelectionRange) {
    textAreaElement.focus();
    textAreaElement.setSelectionRange(whereTomove, whereTomove);
  }
}


function getCurrentPosition(textAreaElement) {

  if (textAreaElement.createTextRange) {
		var r = document.selection.createRange().duplicate();
    r.moveEnd('character', textAreaElement.value.length);

    if (r.text == ''){
      return textAreaElement.value.length
    }

    return textAreaElement.value.lastIndexOf(r.text);

  } else {
    return textAreaElement.selectionStart
  }
}











/*

console.log(event);
textAreaOutput.value = event.key + "\n" + textAreaOutput.value;

*/
