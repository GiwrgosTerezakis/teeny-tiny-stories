$(document).ready(function () {
  $("#play-btn-story").on("click", () => {
    // $("#flipbook").turn({
    //   width: 600,
    //   height: 540,
    //   autoCenter: true,
    //   elevation: 400,
    // });

    $(".backdrop-image-down, .backdrop-image-top").hide("slow");
    $("#play-btn-story").hide();
    $(".book-wrapper")
      .animate({ opacity: 0.2 })
      .animate({ left: 0 })
      .animate({ opacity: 1 });

    $(".story-title").animate({
      opacity: 1,
    });
  });
  //   setTimeout(function () {

  //   }, 4000);
});
