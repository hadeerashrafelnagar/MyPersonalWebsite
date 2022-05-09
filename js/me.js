$(document).ready(() => {
  setTimeout(() => {
    $("#loader").html(`
    <div class="loader .loader-animate loader-4"></div>
      `);
  }, 1000);
  setTimeout(() => {
    $("#loader").remove();
    $("#hello").html(`
        <div class="container loader-animate">
        <div class="row image">
        </div>
        <div class="row welcome">
            <h3>Feel free to browse through my website.
                Have Fun<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-emoji-smile" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path
                        d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                </svg></h3>
        </div>
        `);
  }, 4000);
  setTimeout(() => {
    $("section#loader").remove();
    $("section#hello").remove();
    $(".navbar").addClass("navanimate");
    $("#myCarousel .carousel-item h1").addClass("fadeInLeft");
    $("#myCarousel .carousel-item p").addClass("slideInRight");
    $("#myCarousel .carousel-item .mask img").addClass("slideInRight");

    function IsOnViewPort() {
      var window_height = $(window).height();
      var window_top_position = $(window).scrollTop();
      var window_bottom_position = window_top_position + window_height;

      $.each($(".lefthideme"), function () {
        var element_height = $(this).outerHeight();
        var element_top_position = $(this).offset().top;
        var element_bottom_position = element_top_position + element_height;
        //check to see if this current container is within viewport
        var elem = $(this).parents()[1];
        if (
          element_bottom_position >= window_top_position &&
          element_top_position <= window_bottom_position
        ) {
          // Add class 'active' to nav when it's section appears
          $.each($(".nav-item"), function () {
            $(elem).attr("id") === $(this).children().attr("id")
              ? $(this).children().addClass("active")
              : $(this).children().removeClass("active");
            $(this).click(() => {});
          });
          $(this).addClass("leftanimate");
        } else {
          $(this).removeClass("leftanimate");
        }
      });
    }
    $(window).on("scroll resize", IsOnViewPort);
    $(window).trigger("scroll");
  }, 8500);
});
