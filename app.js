$(document).ready(function() {
  $("#change-red").on("click", function() {
    $("#to-red").css("background-color", "red");
  });
  $("#change-green").on("click", function() {
    $("#to-green").css("background-color", "green");
  });
  $("#change-blue").on("click", function() {
    $("#to-blue").css("background-color", "blue");
  });


  $("#make-big").on("click", function() {
    $("#big").addClass("make-big");
  });

  $("#make-small").on("click", function() {
    $("#small").addClass("make-small");
  });

  $("#animate-div").on("click", function() {
    $("#animated-div").addClass("animate");
  });

  $("#create-overlay").on("click", function() {
    $("#new-overlay").addClass("show-overlay");
  });

});
