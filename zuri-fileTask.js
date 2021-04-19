// Get request
const fetch = require("node-fetch")
const fs = require("fs")

var data;    // create a variable to be used later

fetch("https://jsonplaceholder.typicode.com/posts")

// handle success
.then(res => res.json()) //convert to json
.then((mike) => {
    data = mike})
.then(() =>  (fs.writeFile("./result/posts.json", JSON.stringify(data, null, 2),(err) => {
    // if there is an error let it throw error
    if (err) throw err;
    console.log("file created successfully")
})))