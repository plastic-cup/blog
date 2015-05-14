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
