const localStorage = require('./lib/localStorage')

console.log(`local storage length: ${localStorage.length}`);

const uid = localStorage.getItem("user_id");

console.log(`user_id: ${uid}`)

if (! uid) {
    console.log("User id is not found. Setting the user id and token...")
    localStorage.setItem("token", "TJVA950rmSDv1JSDoiU33")
    localStorage.setItem("user_id", "12345")
} else {
    console.log(`User id is not found ${user_id}`)
    console.log(`Cleaning the user id`)
    localStorage.clear()
}