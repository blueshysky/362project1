"use strict";

document.addEventListener("DOMContentLoaded", function()
{
  var password = document.querySelector("#newpassword");
  var username = document.querySelector("#username");
  var email = document.querySelector("#email");
  var submit = document.querySelector("#signinsubmit");

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

    password.addEventListener("keyup", function()
    {
      var passvalue = this.value;
      console.log(passvalue);

      if(eq(passvalue.length, 10))
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
    var evalue = this.value;

    console.log(evalue);

    if(valid(evalue, eq, /^[^@\s]+@[^@\s]+$/g))
    {
      email.classList.remove("msg");
      console.log("hey it's true email valid");
    }
  });

  // if(valid(namevalue.length, gt, 0) && eq(passvalue.length, 10)){
  //   submit.removeAttribute("disabled");
  //   console.log("condition made");
  // }

  submit.addEventListener("click", function()
  {
    window.open("www.youtube.com/watch?v=dQw4w9WgXcQ", "target", "resizable,scrollbars,status");
  });


});
