$('.face').click(function(){
  var profileToShow = '#'+$(this).attr('id')+'Profile';
  $('.profile').addClass('hidden');
  $(profileToShow).toggleClass('hidden');
  console.log($(profileToShow));
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

var rightArrows = [];
var leftArrows = [];

carousels.forEach(function(carousel){
  arrayify(carousel.children).forEach(function(element){
    if (element.className === 'right-arrow') rightArrows.push(element);
    if (element.className === 'left-arrow') leftArrows.push(element);
  })
});

rightArrows.forEach(function(arrow){
  arrow.addEventListener('click',carouselShift(1,arrow));
});

leftArrows.forEach(function(arrow){
  arrow.addEventListener('click',carouselShift(-1,arrow));
});
