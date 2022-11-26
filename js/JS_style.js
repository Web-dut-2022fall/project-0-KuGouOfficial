$(function(){
    var btn =$('button')[0];
    btn.onclick = function(){
        if(btn.innerHTML=='开灯'){
            btn.innerHTML='关灯';
            $('body').css('backgroundColor',' white');
        }else{
            $('body').css('backgroundColor',' black');
            btn.innerHTML='开灯';
        }
    }

})