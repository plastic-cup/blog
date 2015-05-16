$('#Anni').click(function(){
  $('#DanielProfile').addClass('hidden');
  $('#MinaProfile').addClass('hidden');
  $('#RafeProfile').addClass('hidden');
  $('#AnniProfile').toggleClass('hidden');
});

$('#Daniel').click(function(){
  $('#DanielProfile').toggleClass('hidden');
  $('#MinaProfile').addClass('hidden');
  $('#RafeProfile').addClass('hidden');
  $('#AnniProfile').addClass('hidden');
});

$('#Mina').click(function(){
  $('#DanielProfile').addClass('hidden');
  $('#MinaProfile').toggleClass('hidden');
  $('#RafeProfile').addClass('hidden');
  $('#AnniProfile').addClass('hidden');
});

$('#Rafe').click(function(){
  $('#DanielProfile').addClass('hidden');
  $('#MinaProfile').addClass('hidden');
  $('#RafeProfile').toggleClass('hidden');
  $('#AnniProfile').addClass('hidden');
});

$('#hamburger').click(function(){
  $('#navigation').toggleClass('hidden');
});

//This could be written more succinctly with nextSibling / previousSibling.
//That method would make jumps harder to write, so I'm sticking with this for now.

var carouselShift = function(shiftAmount, newThis){
  return function(){
    var children = arrayMethods.call(newThis.parentNode.children);
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


var arrayMethods = [].slice;

var carousels = arrayMethods.call(document.getElementsByClassName('carousel'));

var rightArrows = [];
var leftArrows = [];

carousels.forEach(function(carousel){
  arrayMethods.call(carousel.children).forEach(function(element){
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