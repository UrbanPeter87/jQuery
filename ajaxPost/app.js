$(document).ready(function(){
    $("button").click(function(){
      $.post("https://orange.codeberryschool.com/content/classroom-api/jquery-assignment", {number: $("input").val()}, function(data){
        console.log(data);
        alert(data["twice-your-value"]);
      });
    });
  });