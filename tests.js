var index_name = require('./index.js').name
var index_height= require('./index.js').height

if (index_name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "+ index_name)
}



if (index_height === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+ index_height)
}
