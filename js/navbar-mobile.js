$("[data-trigger]").on("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  var offcanvas_id = $(this).attr("data-trigger");
  $(offcanvas_id).toggleClass("show");
  $("body").toggleClass("offcanvas-active");
  $(".screen-overlay").toggleClass("show");
});

$(".btn-close, .screen-overlay").click(function (e) {
  $(".screen-overlay").removeClass("show");
  $(".mobile-offcanvas-left").removeClass("show");
  $(".mobile-offcanvas-right").removeClass("show");
  $(".mobile-offcanvas-top").removeClass("show");
  $("body").removeClass("offcanvas-active");
});
