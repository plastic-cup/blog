$('.face').click(function(){
  var profileToShow = '#'+$(this).attr('id')+'Profile';
  var startsHidden = !$(profileToShow).hasClass('hidden');
  $('.profile').addClass('hidden');
  $(profileToShow).toggleClass('hidden', startsHidden);
})

$('#hamburger').click(function(){
  $('#navigation').toggleClass('hidden');
});

//This could be written more succinctly with nextSibling / previousSibling.
//That method would make jumps harder to write, so I'm sticking with this for now.

var carouselShift = function(shiftAmount, newThis){
  return function(){
    var children = arrayify(newThis.parentNode.children);
    children = children.filter(function(elem){
      return elem.className === 'mini-project' || elem.className === 'mini-blog';
    })
    var shift = shiftAmount || 1;
    for(var i = 0; i < children.length; i+=1){
      if(children[i].nodeType == 1){
        if (children[i].style.display !== 'none') {
          children[i].style.display = 'none';
          children[i+shift] ? children[i+shift].style.display = 'block' : children[0].style.display = 'block';
          break;
        }
      }
    }
  }
};


var arrayify = function(enumerable){
  return [].slice.call(enumerable);
}

var carousels = arrayify(document.getElementsByClassName('carousel'));

var T ={};

var start = function(event){
  T.start = event.targetTouches[0].pageX;
}

var end = function(event){
  var distance = T.start - event.changedTouches[0].pageX;
  if (distance > 150) carouselShift(1, event.target.parentNode.parentNode)();
  if (distance < -150) carouselShift(-1, event.target.parentNode.parentNode)();

}

carousels.forEach(function(carousel){
  arrayify(carousel.children).forEach(function(element){
    if (element.className === 'right-arrow') element.addEventListener('click',carouselShift(1,element));
    if (element.className === 'left-arrow') element.addEventListener('click',carouselShift(-1,element));
    if (element.className === 'mini-blog' || element.className === 'mini-project'){
      element.addEventListener('touchstart', start);
      element.addEventListener('touchend', end);
    }
  })
});
