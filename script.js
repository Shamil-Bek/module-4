var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (  var i = 0;  i < names.length; i++){
var n = names[i].charAt(0);
if (n === "J") {
  console.log("Good bue " + names[i]);
} else {
  console.log("Hello " + names[i])
};
};
