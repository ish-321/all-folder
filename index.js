var num = "Muhammad Ishaque"
for (var i = 0; i < num.length; i++) {
 if (num.slice(i, i + 16) === "Muhammad Ishaque") {
 num = num.slice(0, i) + "Muhammad Umar" + num.slice(i + 16);
}
 }
alert(num);

var text = "World War ii"
for (var i = 0; i < text.length; i++) {
if (text.slice(i, i + 12) === "World War ii") {
text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
  }
  }
alert(text);




var changeCase = "Muhammad Ishaque I M from TharParkar"
for (var i = 0; i < changeCase.length; i++) {
 if (changeCase.slice(i, i + 16) === "Muhammad Ishaque") {
    changeCase = changeCase.slice(0, i) + "Muhammad Yasser" + changeCase.slice(i + 16);
}
 }
alert(changeCase);



var name = "My Name is Ishaque I M  From Thar Parkar"
for (var i = 0; i <name.length; i++) {
if (name.slice(i, i + 11) === "Ishaque I M") {
    name = name.slice(0, i) + "Darpan Puri" + name.slice(i + 11);
  }
  }
alert(name);


var name = "He is The Best Player of Pakistan  Shaid Afradi Play Important Role Of Pakistan Sport"
for (var i = 0; i <name.length; i++) {
if (name.slice(i, i +13) ==="Shaid Afradi");{
    name = name.slice(0, i) + "Darpan Puri" + name.slice(i + 13)
}
}
alert(name); 
