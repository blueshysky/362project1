"use strict",
function(){
document.addEventListener("DOMContentLoaded", function(){
  console.log("Dom is loaded");

  var headingtext = document.querySelector("#signinsubmit");
  headingtext.addEventListener("click", function(){
  console.log("you clicked on this button");
  window.alert("You signed up signup! A notification has been sent out!");
});
});
}();
