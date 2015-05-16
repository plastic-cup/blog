$('.face').click(function(){
  var profileToShow = '#'+$(this).attr('id')+'Profile';
  $('.profile').addClass('hidden');
  $(profileToShow).removeClass('hidden');
})

$('#hamburger').click(function(){
  $('#navigation').toggleClass('hidden');
});

var carouselShift = function(shiftAmount, newThis){
  return function(){
  var children = newThis.parentNode.children;
  children = filterMethod.call(children, function(elem){
    return elem.className === 'mini-blog';
  })
    var shift = shiftAmount || 1;
    for(var i = 0; i < children.length; i+=1){
      if(children[i].nodeType == 1){
        console.log(children[i]);
        if (children[i].style.display !== 'none') {
          children[i].style.display = 'none';
          children[i+shift] ? children[i+shift].style.display = 'block' : children[0].style.display = 'block';
          break;
        }
      }
    }
  }
};


var filterMethod = Array.prototype.filter;

filterMethod.call(filterMethod.call(document.getElementById('blog-carousel').children, function(element){
  return element.className === 'carousel';
}).children , function(element){
  return element.className === 'right-arrow';
}).forEach(function(element){
  element.addEventListener("click",carouselShift(1, element));
});
