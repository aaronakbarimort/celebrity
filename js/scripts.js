$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    var flower = parseInt($("select#flower").val());
    var movie = parseInt($("select#movie").val());
    var animal = parseInt($("input:radio[name=cat]:checked").val());
    var score = flower + movie + animal;

    console.log("hello");

    $(".answer").show();
    if (answer <=5) {
      console.log("streep should show");
      $("")
    }
  });
});
