$(document).ready(function(){
    $("button").click(function(){
      $.get( "https://orange.codeberryschool.com/content/classroom-api/jquery-assignment", function(data){
      alert("Password: " + data.password);
      });
    });
  });