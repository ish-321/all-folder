//chapter No 31 //
var rightNow = new Date(); 
var dateString = rightNow.toString(); 
alert(dateString);

var rightNow = new Date();
var theDay = rightNow.getDay();
alert(theDay);

 
 var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
 var now = new Date(); 
 var theDay = now.getDay(); 
 var nameOfToday = dayNames[theDay];
 alert(nameOfToday);
//CH No 32 //
  var d = new Date();
  var currentMonth = d.getMonth()
  alert(currentMonth);


  var dayOfMonth = d.getDate();
  alert(dayOfMonth);


  var currYr = d.getFullYear();
  alert(currYr);

  var currentHrs = d.getHours();
  alert(currentHrs);
  
  var currMins = d.getMinutes();
  alert(currMins);

  var currSecs = d.getSeconds();
  alert(currSecs);

  var currMills = d.getMilliseconds();
  alert(currMills);

  var millsSince = d.getTime();
  alert(millsSince);
//CH No 33 //
  var today = new Date();
  var doomsday = new Date("June 30, 2035");
alert(doomsday);

var msToday = today.getTime();
alert(msToday);


var msDoomsday = doomsday.getTime();
alert(msDoomsday);

var msDiff = msDoomsday - msToday; 
alert(msDiff);

var dDiff = Math.floor(dDiff);
alert(dDiff);


var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime(); 
var daysTillDoom = Math.floor(msDiff / (1000 * 60  * 60 * 24)); 
alert(daysTillDoom);
//Ch No 34 //
var d = new Date();
alert(d);
var num = d.setFullYear(2001);
alert(num);

var d1 = new Date();
alert(d1);
var num1 = d1.setMonth(11);
alert(num1);

 var d2 = new Date();
 alert(d2);
 var num2 = d2.setMilliseconds(867);
alert(num2);



//CH No 35 //
var now = new Date();
 var theHr = now.getHours();
 var theMin = now.getMinutes();
 alert("time: " + theHr + ":" + theMin);

  function tellTime() {
   var now = new Date();
   var theHr = now.getHours();
   var theMin = now.getMinutes();
   alert("Current time: "+ theHr + ":" + theMin);
   }

//ch 36 ///////////////////////

    function greetUser(greeting) {
     alert(greeting);
     }



//ch 37//

function calcTot(merchTot) {
  var orderTot;
  var merchTot =prompt("enter you value for merchTot; 100,50.01")
  if (merchTot >= 100) {
  orderTot = merchTot;
  }
  else if (merchTot < 50.01) {
  orderTot = merchTot + 5;
  }
  else {
  orderTot = merchTot + 5 + (.03 * (merchTot - 50));
  }
  return orderTot;
  }
  var orderTot = calcTot();
alert(orderTot);



// Chapter 45 Events  //


function myFunc(x,y){
  alert("Hi Pakistan");
  var x = "Ishaque";
  alert(x);
  var y = prompt("What is your name?");
  var list = ["Ishaque","Ishaque", "Amar", "Kamal","Teerath"];
  for(var i=0; i<list.length; i++){
      if(y === list[i]){
          alert("You found it");
          break;
          
      }
    
     else{
          alert("Sorry no name found");
      }

  }
 
}


// Chapter 46 Events Button //

function Muhammad(){
  alert("Ishaque");
}

function btn(){
  document.getElementById('of').src="pic4.j"
}
function btn1(){
  document.getElementById('of').src='blubof.jpeg'
}

// Chapter 47 Events Mouse//
function makeFieldYellow(){
  document.getElementById('input').style.backgroundColor='green';
}
function makeFieldWhite(){
  document.getElementById('input').style.backgroundColor='blue';  
}

// Chapter 49 Events //
// Chapter 50 Events //
function fillCity() {
  var cityName;
  var zipEntered = document.getElementById("zip").value;
  switch (zipEntered) {
  case "60608" :
  cityName = "Chicago";
  break;
  case "68114" :
  cityName = "Omaha";
      break;
      case "53212" :
      cityName = "Milwaukee";
  }
      document.getElementById("city").value = cityName;
  }

// Chapter 51 Reading more//
function read(){
  var more = 'Hello Every one my name is My Name Is Muhammad Ishaque and i am from  Thatrparkar. now i am in saylani welfare mass IT training.Pakistan is the larget country and karachi is also called the City of Light'
  document.getElementById('para1').innerHTML=more
}