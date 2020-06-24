$(document).ready(function(){
    $("button").click(function(){
        $(this).fadeOut("slow", function(){
            alert("Mission completed!");
        });
    });
});