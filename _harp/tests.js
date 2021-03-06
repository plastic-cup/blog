test('having a logo (something on page has id of logo)', function(){
	var iframe = document.getElementById('iframe');
	// var iframe = $('#iframe')
	var target = iframe.contentDocument || iframe.contentWindow.document;
	var initial = target.getElementById('logo');

	equal(!!initial,true);
	equal(true,false);

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
		var target = iframe.contentDocument || iframe.contentWindow.document;
		equal(target.title, 'Projects')
		done();
	},200)
})

test('menu blog link, links to blog page', function(assert){
	var iframe = document.getElementById('iframe');
	var target = iframe.contentDocument || iframe.contentWindow.document;
	target.getElementById('blog-link').click();
	var done = assert.async();
	setTimeout(function(){
		var target = iframe.contentDocument || iframe.contentWindow.document;
		equal(target.title, 'Blog')
		done();
	},2000)
})

test('if a carousel element exists ', function(){
	var iframe = document.getElementById('iframe');
	var target = iframe.contentDocument || iframe.contentWindow.document;
	var initial = target.getElementsByClassName('carousel');

	equal(!!initial,true)
});

test("If a carousel container exists", function (){
	var iframe = document.getElementById('iframe');
	var target = iframe.contentDocument || iframe.contentWindow.document;
	var initial=target.getElementById('carouselContainer');
	equal(!!initial,true);
})

test('If clicking the arrow will go to next post', function (){
	var iframe = document.getElementById('iframe');
	var target = iframe.contentDocument || iframe.contentWindow.document;
	var children = target.getElementById('carousel').children;
	for(var i = 0; i<children.length;i++){
		if(children[i].style.display !=='none') {
			var seen =children[i];
			target.getElementById('right-arrow').click();
			var done=assert.async();
			setTimeout(function(){
				equal(	seen.style.display, 'none');
				done();
			},200)
		}
	}
})
