test('having a logo (something on page has id of logo)', function(){
	var iframe = document.getElementById('iframe');
	// var iframe = $('#iframe')
	var target = iframe.contentDocument || iframe.contentWindow.document;
	var initial = target.getElementById('logo');

	equal(!!initial,true)

	// function ok(argument){
	// 	if (argument === true) TEST PASS
	// 	else TEST FAIL
	// }
})

test('logo reads "Unnamed team"', function(){
	var iframe = document.getElementById('iframe');
	// var iframe = $('#iframe')
	var target = iframe.contentDocument || iframe.contentWindow.document;
	var initial = target.getElementById('logo-text').innerHTML.trim(); // trim removes whitespace at ends of a string

	equal(initial,'Unnamed team');

	// function ok(argument){
	// 	if (argument === true) TEST PASS
	// 	else TEST FAIL
	// }
})