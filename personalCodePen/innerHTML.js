/*
<link rel="stylesheet" href="styles.css">
buttonToRender
buttonClearAreas
buttonClearOutput

onkeypress
*/

//import { saveAs } from 'file-saver';

var buttonToRender = document.getElementById("buttonToRender");
var buttonClearAreas = document.getElementById("buttonClearAreas");
var buttonClearOutput = document.getElementById("buttonClearOutput");
var buttonShowExample = document.getElementById("buttonShowExample");

var textAreaElementHTML = document.getElementById("textAreaElementHTML");
var textAreaElementCSS = document.getElementById("textAreaElementCSS");
var textAreaElementJS = document.getElementById("textAreaElementJS");

buttonToRender.onclick = renderHtml;
buttonClearAreas.onclick = clearAreas;
buttonClearOutput.onclick = clearOutput;
buttonShowExample.onclick = showExample;

textAreaElementHTML.onkeypress = renderHtml;
textAreaElementCSS.onkeypress = renderHtml;
textAreaElementJS.onkeypress = renderHtml;



document.addEventListener('click', function(event) {
    if (event.ctrlKey || event.metaKey) {
        switch (String.fromCharCode(event.which).toLowerCase()) {
        case 's':
            event.preventDefault();
            alert('ctrl-s');
            break;
        case 'f':
            event.preventDefault();
            alert('ctrl-f');
            break;
        case 'g':
            event.preventDefault();
            alert('ctrl-g');
            break;
        }
    }
});



function showExample() {
    textAreaElementHTML.value = "<!DOCTYPE html>\n<html>\n   <title>HTML Tutorial</title>\n   <body>\n      <h1 id='Header'>This is a heading</h1>\n      <p>This is a paragraph.</p> \n      <p>\n         <button onclick='myFunction()'>\n             Click Me!\n         </button>\n      </p>\n   </body>\n</html>\n";
    textAreaElementCSS.value = "body {\n  background-color: lightblue;  \n}\nh1 {\n   color: white;\n   text-align: center;\n}\np {\n   font-family: verdana;\n   font-size: 20px;\n}";
    textAreaElementJS.value = "function myFunction() {\n  var x = document.getElementById('Header');\n  if(x.style.color == 'red'){\n    x.style.fontSize = '20px';\n    x.style.color = 'white';\n    return;  \n  }\n  x.style.fontSize = '100px';\n  x.style.color = 'red';\n}\n";

    renderHtml();
  }


function renderHtml() {
  var htmlZone = document.getElementById("htmlZone");
  htmlZone = htmlZone.contentDocument;

  htmlZone.documentElement.innerHTML = textAreaElementHTML.value;

  if (textAreaElementCSS.value.length > 0){

    var styleElement = document.createElement("STYLE");
    styleElement.innerHTML = textAreaElementCSS.value;
    htmlZone.head.appendChild(styleElement);

  }

  if (textAreaElementJS.value.length > 0){

    var scriptElement = document.createElement("script");
    scriptElement.innerHTML = textAreaElementJS.value;
    htmlZone.head.appendChild(scriptElement);

  }

}

function clearAreas(){
  document.getElementById("textAreaElementHTML").value = "";
  document.getElementById("textAreaElementCSS").value = "";
  document.getElementById("textAreaElementJS").value = "";
}

function clearOutput(){
  var htmlZone = document.getElementById("htmlZone");
  htmlZone.contentDocument.body.innerHTML = "";
  htmlZone.contentDocument.head.innerHTML = "";

  htmlZone.contentDocument.location.reload(); //refresh iFrame
}
