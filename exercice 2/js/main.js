$(document).ready(function(){
    $(".buttonEx2").click(function(){
      $(".divEx2_1").toggleClass("main");
      $(".divEx2_1").slideToggle(2000);
      $(".divEx2_2").toggleClass("main");
      $(".divEx2_2").slideToggle(2000);
    });
  });