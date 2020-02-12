//Get form by name
const el = document.forms["query-form"];
el.onsubmit = function () {
var emailCookie = document.getElementById("field4").value;
document.cookie = `email=${emailCookie}`; //set client cookie
}

//Setting Cookies
 document.cookie = `email=${emailCookie}`; //set client cookie
