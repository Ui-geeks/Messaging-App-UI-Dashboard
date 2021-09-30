
$(function () {
    $(".sidebar-link").click(function () {
     $(".sidebar-link").removeClass("is-active");
     $(this).addClass("is-active");
    });

 
   });

   $(function() {
    $('.menu-icon').click(function() {
      $('.app-left-medium').toggle("slow");
    });
  });