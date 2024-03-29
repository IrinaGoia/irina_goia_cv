
$(function(){
    var altpr='p0';
    for(var i=1;i<101;i++){
      $('#stl').append('.progress-circle.p'+i+' .value-bar {transform:rotate('+Math.round(360*i/100)+'deg)}');
    }
  
    var prc=60;
    $('#prg1').html(prc+'%');
    if(prc>=50) $('#kr1').addClass('over50');
    else $('#kr1').removeClass('over50');
    $('#kr1').addClass('p'+prc).removeClass(altpr);
    altpr='p0';

    var prc=35;
    $('#prg2').html(prc+'%');
    if(prc>=50) $('#kr2').addClass('over50');
    else $('#kr2').removeClass('over50');
    $('#kr2').addClass('p'+prc).removeClass(altpr);
    altpr='p0';

    var prc=90;
    $('#prg3').html(prc+'%');
    if(prc>=50) $('#kr3').addClass('over50');
    else $('#kr3').removeClass('over50');
    $('#kr3').addClass('p'+prc).removeClass(altpr);
    altpr='p0';

    var prc=100;
    $('#prg4').html(prc+'%');
    if(prc>=50) $('#kr4').addClass('over50');
    else $('#kr4').removeClass('over50');
    $('#kr4').addClass('p'+prc).removeClass(altpr);
    altpr='p0';

  });