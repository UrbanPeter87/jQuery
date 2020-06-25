$(document).ready(function(){
    $("a").click(function(){
      alert("You are opening " + $("a").attr("href"));
    });
  });