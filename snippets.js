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



//Toggle and Close Menu

function toggleHeaderMenu() {
	if (0 == document.getElementsByClassName("ss-inner-contents-active").length) {
		document.getElementById("ssMenu").classList.toggle("ss-menu-wrapper-active");
		for (var e = document.getElementsByClassName("ss-inner-contents"), t = 0; t < e.length; t++) setTimeout(function (e) {
			e.classList.add("ss-inner-contents-active")
		}, 325, e[t])
	} else {
		for (e = document.getElementsByClassName("ss-inner-contents"), t = 0; t < e.length; t++) e[t].classList.remove("ss-inner-contents-active");
		setTimeout(function () {
			document.getElementById("ssMenu").classList.toggle("ss-menu-wrapper-active")
		}, 325)
	}
}