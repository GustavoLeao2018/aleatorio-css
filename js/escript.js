$(document).ready(function(){
    var  cor = $("nav").css("color");

    if($("nav").css("color") == "rgb(255, 255, 255)"){
        $("nav ul li a").mouseenter(function(){ $(this).css("color", "#fff"); })
                        .mouseleave(function(){ $(this).css("color", "#000"); })
                        .css("color", "#000");
    }
});