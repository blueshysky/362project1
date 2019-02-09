"use strict",

document.addEventListener("DOMContentLoaded", function(){
  console.log("Dom is loaded");

  var headingtext = document.querySelector("#enter");
  headingtext.addEventListener("click", function(){
    console.log("you clicked on this button");
    window.open();
  })

}());
