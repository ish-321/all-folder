
// var discount1 = prompt ("what is your total shopping");
 

// function shopping(discount1){
//     var buy;
//     if(discount1 === "100"){
//         buy = discount1 + 50+"% dicount";
//     }
//     else if(discount1 === "50"){
//         buy = discount1 + 10 +"% dicount";
//     }
//     else{
//         alert("Sorry you are not effort to get discount")
//     }
//     return buy;
// }


// var getdis = shopping(discount1);
// alert(getdis);


//chapter 58 to 68//



var liElements = document.getElementsByTagName("li");
var eventLength = liElements.length;
for (var i = 0; i < eventLength; i++) {
    if (liElements[i].innerHTML === "") {
    liElements[i].innerHTML = "coming soon";
    }
    }


    var myImage = document.getElementById("image");
    myImage.setAttribute("src","download.jpg");




    
    var myImage2 = document.getElementById("image").attributes;
    console.log(myImage2);
    var myImage3 = document.getElementById("image").attributes.length;
    console.log(myImage3);


var pera = document.createElement("p");
var text = document.createTextNode("Pakistan");
var result =  pera.appendChild(text);
console.log(result)


var parentDiv = document.getElementById("div1");
 var newParagraph = document.createElement("li");
 var t = document.createTextNode("Hello world!");
 newParagraph.appendChild(t);
 paragraph1 = parentDiv.firstChild;
var result2 =  parentDiv.insertBefore(newParagraph, paragraph1);
console.log(result2);


