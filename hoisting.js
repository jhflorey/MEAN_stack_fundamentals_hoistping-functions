// let spend a bit time to considering how functions are treated in JavaScript


function awesome() {
	console.log("too good to be true");
}
awesome();
// too good to be true


var varFunction;
varFunction();
varFunction = function() {
	console.log("How will this get hoisted?")
}
// typeError: varFunction is not a function