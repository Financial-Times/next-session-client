'use strict';

var session = require('../../main');

function handleClick(e){
	var target = e.target;
	var method = target.getAttribute('data-method');
	console.log('Call method ' + method);
	session[method]().then(function(response){
		console.log(response);
	});
}

function addClick(el){
	console.log('add click to', el);
	el.addEventListener('click', handleClick);
}

[].slice.call(document.querySelectorAll('.buttons button'), 0).forEach(addClick);


