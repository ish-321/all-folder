
var header = document.getElementById("header");
var inputCreat = document.createElement("input");

inputCreat.setAttribute("type","text");
inputCreat.setAttribute("id","id1");
header.appendChild(inputCreat);


var inputCreat1 = document.createElement("input");
var brCreat1 = document.createElement("br");
header.appendChild(brCreat1)

inputCreat1.setAttribute("type","button");
inputCreat1.setAttribute("id","id3");

inputCreat1.setAttribute("value","please Click Hear M Ishaque");
inputCreat1.setAttribute("onclick","myFun()");

header.appendChild(inputCreat1);
var peraCreat = document.createElement("p");

peraCreat.setAttribute("id","id2");

header.appendChild(peraCreat)

function myFun() {
var myValue = document.getElementById("id1").value;
document.getElementById("id2").innerHTML = myValue;

}