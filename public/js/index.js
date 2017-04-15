$('document').ready(function(){

// $(".go-to-gallery").click(function () {
//   window.location = "/gallery";
//   console.log("you clicked!");
// });

  $(".try-to-leave").click(function () {
      window.location = "/leave";
  });
  $(".go-to-gallery").on('click', function(){
       window.location = "/gallery";
  });

});
