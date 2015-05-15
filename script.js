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

var carouselShift = function(shiftAmount, newThis){
  return function(){
  var children = newThis.parentNode.children;
  children = filterMethod.call(children, function(elem){
    return elem.className === 'mini-blog';
  })
    console.log(children);
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

console.log(document.getElementById('blog-carousel'));

filterMethod.call(document.getElementById('blog-carousel').children, function(element){
  console.log(element);
  return element.className === 'right-arrow';
}).forEach(function(element){
  element.addEventListener("click",carouselShift(1, element))
})

// var start;
// var stop;
// var variables = {
//   startX: 0,
//   ev: undefined
// }
// var start = function(ev,elem){
//   return function(){
//     variables.startX = ev.pageX;
//     variables.ev = ev;
//   }
// }

// var stop = function(ev,elem){
//   var distX = ev.pageX - variables.startX;
//   console.log(distX);
//   if (distX > 100){
//     this.carouselShift(-1);
//   }
//   if (distX < -100){
//     this.carouselShift(1);
//   }
// }

// filterMethod.call(document.getElementsByClassName('carousel')[0].children, function(element){
//   return element.className === 'mini-blog' || element.class === 'projects';
// }).forEach(function(element){element.addEventListener("touchstart",function(ev){
//   start(ev,element);
// })});

// filterMethod.call(document.getElementsByClassName('carousel')[0].children, function(element){
//   return element.className === 'mini-blog' || element.class === 'projects';
// }).forEach(function(element){element.addEventListener("touchend",function(ev){
//   stop(ev,element);
// })});
