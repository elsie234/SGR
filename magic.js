$(document).ready(function(){

    //variavles
    $surface= $('.surface');
    $newSurface= $('.new-surface');
    $trainBody= $('.trainBody');
    $wheels= $('.wheels');
    $voi= $('.voi');
    $mtito= $('.mtito-andei');
    $nairobi= $('.nairobi');

   // $(document).on('keypress',function(e){
      //  if(e.which== 13){
            $($surface).toggleClass('moveRight');
            $($newSurface).toggleClass('moveRight');
            $($trainBody).toggleClass('suspension');
            $($wheels).toggleClass('suspension');

            setTimeout(voiSign, 5000);
           
            setTimeout(end, 20000);
       // }
    //})
})

function voiSign(){
    $($voi).toggleClass('signPost');
    setTimeout(stop,500);
    console.log('good');
   
}

function stop(){
    $($surface).removeClass('moveRight');
    $($newSurface).removeClass('moveRight');
    $($trainBody).removeClass('suspension');
    $($wheels).removeClass('suspension');
    setTimeout(start,7000);
}
function start(){
    $($surface).toggleClass('moveRight');
    $($newSurface).toggleClass('moveRight');
    $($trainBody).toggleClass('suspension');
    $($wheels).toggleClass('suspension');
}


function mtitoSign(){
    $($mtito).toggleClass('signPost');
   setTimeout(stop,500);
    console.log('good');
}

function end(){
    $($surface).removeClass('moveRight');
    $($newSurface).removeClass('moveRight');
    $($trainBody).removeClass('suspension');
    $($wheels).removeClass('suspension');
    $($nairobi).toggleClass('nairobiStation');
    console.log('goodbye');
}
