/**
 * shortcutkey.js is the javascript code that handles all the keyboard shortcut
 * keys.
 */
var SHORTCUT_CLASS = "shortcutkey";

/**
 * Scan through all the hyperlinks in the document. Try to find a match for the
 * character passed into this function
 */
function openShortcut(characterPressed) {
  
  var i, j, hyperlinkChildren, documentCharacter;
  var documentHyperlinks = document.getElementsByTagName('a');
  
  //iterate through all the hyperlinks of the document
  for (i=0; i < documentHyperlinks.length; i++) {
  
    //iterate through the children of each hyperlink
    hyperlinkChildren = documentHyperlinks[i].childNodes;
    for (j=0; j < hyperlinkChildren.length; j++) {
    
      //if the class of the child is a shortcut key
      if (hyperlinkChildren[j].className === SHORTCUT_CLASS){
        
        //check if the shortcut is the same as the character passed in
        documentCharacter = hyperlinkChildren[j].innerHTML;
        documentCharacter = documentCharacter.toUpperCase();
        if (documentCharacter === characterPressed){


if (documentHyperlinks[i].getAttribute('onclick') == null) {
          if (documentHyperlinks[i].getAttribute('href')) document.location = documentHyperlinks[i].getAttribute('href');
     }
     else documentHyperlinks[i].onclick();

        }
      }
    }
  } 
}

/**
 * Set a document level onkeydown event that actions depending on the key 
 * pressed, but not when the currently focused element is a textbox
 */
document.onkeydown = function(event){
  
  if (!event) { event = window.event; } // IE hack

  var characterPressed = String.fromCharCode(event.keyCode);

  characterPressed = characterPressed.toUpperCase();
  openShortcut(characterPressed);
  return false;
     
}