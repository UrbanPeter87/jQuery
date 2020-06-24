$(document).ready(function(){
    $("ul").on("click", "li", function(){
      $(this).hide();
    });
    $("button").click(function(){
      $("li:last").after("<li>To do do do dooo</li>");
    });
  });