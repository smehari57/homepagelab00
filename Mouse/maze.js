
$(document).ready(function () {

  let flag = false;

  $("#start").click(function () {
    $("#status").text('Click the "S" to begin');

    if (!flag) {
      $("div .boundary").mouseenter(
        function(){
          lostAction();
          flag = true;
        });
      $("#maze").mouseleave(
        function(){
          lostAction();
          flag = true;
        });
        $("#end").mouseenter(function () {
          winAction();
          flag = false;
  
        });
    }
    else {
      $("div .boundary").removeClass("youlose");
      
    }

  })

});

function lostAction(){
  $("div .boundary").addClass("youlose");
  $("#status").text("You Lose! :(");
  $("#end").unbind("mouseenter");
}

function winAction(){
  $("#status").text("You Win! :)");
  $("div .boundary").unbind("mouseenter");
  $("#maze").unbind("mouseleave");
}