var exports = module.exports = {};

var name = "Susan";
var height = "70";
exports.sendName = function() {
  return name;
};
exports.sendHeight = function() {
  return height;
};
console.log(name);
/*if (name === "Susan") {
    console.log("The name is correct");
} else {
    console.log("Expected the name to be Susan");
}*/


// Don't worry about this
//module.exports = { name, height
//}

