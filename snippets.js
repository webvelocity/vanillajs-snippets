//Get form by name
const el = document.forms["query-form"];
el.onsubmit = function () {
var emailCookie = document.getElementById("field4").value;
document.cookie = `email=${emailCookie}`; //set client cookie
}

//Setting Cookies
 document.cookie = `email=${emailCookie}`; //set client cookie



//Get absolute URL
var getAbsoluteUrl = (function() {
	var a;

	return function(url) {
		if(!a) a = document.createElement('a');
		a.href = url;

		return a.href;
	};
})();

// Usage
getAbsoluteUrl('/something'); // https://davidwalsh.name/something
