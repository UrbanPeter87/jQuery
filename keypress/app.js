$(document).ready(function(){
    $("input").keyup(function(){
      $("span").text($("input").val());
    });
  });