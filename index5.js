// var nam = "To Do app";
// function how(){
//     document.getElementsByClassName(dive);
//  console.log();

// }

function butFun(){
var img1 = document.getElementsByTagName("img");
var newAttributes = ["pic3.JPEG","pic4.JPEG","pic2.JPEG"];
for (var i = 0; i < img1.length; i++){
    img1[i].attributes[0].value = newAttributes[i];
}
}