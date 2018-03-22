$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    var flower = parseInt($("#flower").val());
    var movie = parseInt($("#movie").val());
    var animal = parseInt($("input:radio[name=cat]:checked").val());
    var score = flower + movie + animal;

    console.log("hello");

    $("#answer").show();
    if (score <=3) {
      console.log("streep should show");
      $("#streep").show();
    } else if (score <=5) {
      console.log("gadot should show");
      $("#gadot").show();
    } else {
      $("#clooney").show();
    }

    $("form#celebrity").hide();
    event.preventDefault();

  });
});
