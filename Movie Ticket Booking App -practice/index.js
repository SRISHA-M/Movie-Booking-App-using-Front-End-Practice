// card script
  
 function az(){
var play1= document.getElementById("play1");
var popupWindow = document.getElementById("window1");
var closeButton = document.getElementById("button1");
  event.preventDefault();
  popupWindow.style.display = "block";
}
function ax(){
  var play1= document.getElementById("play1");
var popupWindow = document.getElementById("window1");
var closeButton = document.getElementById("button1");
  popupWindow.style.display = "none";
}



function bz(){
var play2= document.getElementById("play2");
var popupwindow = document.getElementById("win2");
var closeButton = document.getElementById("button2");
  event.preventDefault();
  popupwindow.style.display = "block";
}
function bx(){
  var play2= document.getElementById("play2");
var popupwindow = document.getElementById("win2");
var closeButton = document.getElementById("button2");
  popupwindow.style.display = "none";
}
function cz(){
var play3= document.getElementById("play3");
var popupwindow = document.getElementById("win3");
var closeButton = document.getElementById("button3");
  event.preventDefault();
  popupwindow.style.display = "block";
}
function cx(){
  var play3= document.getElementById("play3");
var popupwindow = document.getElementById("win3");
var closeButton = document.getElementById("button3");
  popupwindow.style.display = "none";
}


function dz(){
var play4= document.getElementById("play4");
var popupwindow = document.getElementById("win4");
var closeButton = document.getElementById("button4");
  event.preventDefault();
  popupwindow.style.display = "block";
}
function dx(){
  var play4= document.getElementById("play4");
var popupwindow = document.getElementById("win4");
var closeButton = document.getElementById("button4");
  popupwindow.style.display = "none";
}
function ez(){
var play5= document.getElementById("play5");
var popupwindow = document.getElementById("win5");
var closeButton = document.getElementById("button5");
  event.preventDefault();
  popupwindow.style.display = "block";
}
function ex(){
  var play5= document.getElementById("play5");
var popupwindow = document.getElementById("win5");
var closeButton = document.getElementById("button5");
  popupwindow.style.display = "none";
}
function fz(){
var play6= document.getElementById("play6");
var popupwindow = document.getElementById("window6");
var closeButton = document.getElementById("button6");
  event.preventDefault();
  popupwindow.style.display = "block";
}
function fx(){
  var play6= document.getElementById("play6");
var popupwindow = document.getElementById("window6");
var closeButton = document.getElementById("button6");
  popupwindow.style.display = "none";
}



// booknow

function aa(){
  var book1= document.getElementById("book1");
var popupwindow = document.getElementById("booknow1");
var closeButton = document.getElementById("close1");
  event.preventDefault();
  popupwindow.style.display = "block";
}
  function ba(){
    var book1= document.getElementById("book1");
var popupwindow = document.getElementById("booknow1");
var closeButton = document.getElementById("close1");
popupwindow.style.display = "none";
  }
function ab(){
  var book2= document.getElementById("book2");
var popupwindow = document.getElementById("booknow2");
var closeButton = document.getElementById("close2");
  event.preventDefault();
  popupwindow.style.display = "block";
}
  function bb(){
    var book2= document.getElementById("book2");
var popupwindow = document.getElementById("booknow2");
var closeButton = document.getElementById("close2");
popupwindow.style.display = "none";
  }
function ac(){
  var book3= document.getElementById("book3");
var popupwindow = document.getElementById("booknow3");
var closeButton = document.getElementById("close3");
  event.preventDefault();
  popupwindow.style.display = "block";
}
  function bc(){
    var book3= document.getElementById("book3");
var popupwindow = document.getElementById("booknow3");
var closeButton = document.getElementById("close3");
popupwindow.style.display = "none";
  }
function ad(){
  var book4= document.getElementById("book4");
var popupwindow = document.getElementById("booknow4");
var closeButton = document.getElementById("close4");
  event.preventDefault();
  popupwindow.style.display = "block";
}
  function bd(){
    var book4= document.getElementById("book4");
var popupwindow = document.getElementById("booknow4");
var closeButton = document.getElementById("close4");
popupwindow.style.display = "none";
  }
function ae(){
  var book5= document.getElementById("book5");
var popupwindow = document.getElementById("booknow5");
var closeButton = document.getElementById("close5");
  event.preventDefault();
  popupwindow.style.display = "block";
}
  function be(){
    var book5= document.getElementById("book5");
var popupwindow = document.getElementById("booknow5");
var closeButton = document.getElementById("close5");
popupwindow.style.display = "none";
  }
function af(){
  var book6= document.getElementById("book6");
var popupwindow = document.getElementById("booknow6");
var closeButton = document.getElementById("close6");
  event.preventDefault();
  popupwindow.style.display = "block";
}
  function bf(){
    var book6= document.getElementById("book6");
var popupwindow = document.getElementById("booknow6");
var closeButton = document.getElementById("close6");
popupwindow.style.display = "none";
  }
  function cc(){
    var apply=document.getElementById("apply")
    var popupwindow = document.getElementById("filter");
var closeButton = document.getElementById("cl");
  event.preventDefault();
  popupwindow.style.display = "block";

  }
  function cd(){
    var apply= document.getElementById("apply");
    var popupwindow = document.getElementById("filter");
    var closeButton = document.getElementById("cl");
    popupwindow.style.display = "none";
  }
  // login
  function togglePopup() { 
    $(".content").toggle(); 
} 
// apply filter
  function Popup() { 
    $(".content1").toggle(); 
} 
$(document).ready(function () { 
  $("#on1").click(function () { 
      alert("your logged in successfully!"); 
  }); 
}); 
$(document).ready(function () { 
  $(".get").click(function () { 
      alert("congrats you get a movie ticket successfully!"); 
  }); 
}); 
// // nav

//   $("li:#home").click(function(){
//     $("sec2").show()
//   })


//   $("li:#movie").click(function(){
//     $("sec4").show()
// })


//   $("li:#cinemas").click(function(){
//     $("sec6").show()
//   })


//   $("li:#order").click(function(){
//     $("sec3").show()
//   })


//   $("li:#about").click(function(){
//     $("sec8").show()
//   })
// Emailjs



function signin() { 
  $("#contact-form").toggle(); 
} 


(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init('32Ru9hVeOf5IGkKKA');
})();
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_iwir01d', 'template_uopat6e', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}

// validation
function upload(){
  $(document).ready(function () { 
    $("#signup").click(function () { 
        alert("signed in successfully!"); 
    }); 
  }); 
  var name=document.getElementById("name22").value
  var password=document.getElementById("email22").value
    
  if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
  }else if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    }  
  }  