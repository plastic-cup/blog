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
});

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
});

//test default menu invisible

test('check clicking the hamburger toggles the menu', function(assert){
	var iframe = document.getElementById('iframe');
	var target = iframe.contentDocument || iframe.contentWindow.document;
	target.getElementById('hamburger').click();
	var done = assert.async();
	setTimeout(function(){
		var element = target.getElementById('navigation')
		var displayValue = element.style.display;
		notEqual(displayValue, 'none');
		done();
	},1000)
})

test('menu project link, links to project page', function(assert){
	var iframe = document.getElementById('iframe');
	var target = iframe.contentDocument || iframe.contentWindow.document;
	target.getElementById('project-link').click();
	var done = assert.async();
	setTimeout(function(){
		equal(target.title, 'Projects')
		done();
	},200)
})


// #navContainer
	//#hamburger
	//div#navigation
		// ul