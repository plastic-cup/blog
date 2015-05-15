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

var carouselShift = function(shiftAmount){
  var shift = shiftAmount || 1;
  var children = this.children;
  return function(){
    for(var i = 0; i < children.length; i+=1){
      if (children[i].style.display !== 'none') {
        children[i].style.display = 'none';
        children[i+shift].style.display = 'show';
        break;
      }
    }
  }
}

var start;
var stop;
var start = function(){
      this.startX = pageX
    }

var stop = function(){
  distX = this.pageX - startX;
  if (distX > 100){
    this.carouselShift(-1);
  }
  if (distX < -100){
    this.carouselShift(1);
  }
}

document.getElementsByClassName('carousel').children.filter(function(element){
  return element.class === 'rightArrow';
}).forEach(addEventListener("click",carouselShift(1)));

document.getElementsByClassName('carousel').children.filter(function(element){
  return element.class === 'rightArrow';
}).forEach(addEventListener("click",carouselShift(-1)));

document.getElementsByClassName('carousel').children.filter(function(element){
  return element.class === 'mini-blog' || element.class === 'mini-project';
}).forEach(addEventListener("touchstart",start));

document.getElementsByClassName('carousel').children.filter(function(element){
  return element.class === 'mini-blog' || element.class === 'mini-project';
}).forEach(addEventListener("touchend",stop));
