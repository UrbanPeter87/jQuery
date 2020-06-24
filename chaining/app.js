$(document).ready(function(){
    $("div").click(function(){
        $(this).animate({height: "50px"})
        .animate({width: "50px"})
        .animate({height: "150px"})
        .animate({width: "150px"});
    });
});