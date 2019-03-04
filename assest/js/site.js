"use strict";

document.addEventListener("DOMContentLoaded", function()
{
  var password = document.querySelector("#newpassword");
  var username = document.querySelector("#username");
  var email = document.querySelector("#email");
  var headingtext = document.querySelector("#signinsubmit");
  var inner_text = document.querySelector("#two");
  inner_text.innerHTML += '<b id="contact-error"></b>';

  function eq(value, condition)
  {
    return value === condition;
  }

  function gt(value, condition)
  {
    return value > condition;
  }

  // function gte(value, condition)
  // {
  //   return value >= condition;
  // }

  function valid (value, check, condition){
    if (eq(typeof(check.test), 'function')) {
      // Handle a regular expression
      return check.test(value);
    } else if (eq(typeof(check), 'function')) {
      // Handle a comparison function
      return check(value, condition);
    } else {
      return false;
    }
  }

  password.addEventListener("focus", function()
  {
    console.log("focused");
    inner_text.innerText = "Need minimal length of 10.";

    password.addEventListener("keyup", function()
    {
      var passvalue = this.value;
      console.log(passvalue);

      if(valid(passvalue.length, gt, 10))
      {
        console.log("password length is bigger than 10");
        password.classList.remove("msg");
      }else {
        return;
      }

    });
  });

  username.addEventListener("keyup", function(){
    // there is something in this box
    var namevalue = this.value;

    if(valid(namevalue.length, gt, 0))
    {
      username.classList.remove("msg");
    }
  });


  email.addEventListener("keyup", function()
  {
    var evalue = this.value.replace(/\w/g, " ");

    console.log(evalue);

    if(valid(evalue, eq, /^[^@\s]+@[^@\s]+$/g))
    {
      email.classList.add("msg");
      console.log("hey it's true email valid");
    }
  });

  if(valid(email) && valid(password)){

    headingtext.addEventListener("click", function()
    {
      console.log("you clicked on this button");
      window.alert("You signed up signup! A notification has been sent out!");
    });
  }


});
