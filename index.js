$(".help").on("click",function(){
 $("body").fadeOut(1000).fadeIn(1000);
 location.href="help.html";
});
$(".next").on("click",function(){
nextdiv();
});
$(".prev").on("click",function(){
  var currentSlide= $(".slide.active");
  var prevSlide = currentSlide.prev();

  currentSlide.fadeOut(300).removeClass("active");
  prevSlide.fadeIn(300).addClass("active");
  if(prevSlide.length == 0){
    $(".slide").last().fadeIn(300).addClass("active");
  }
});
function nextdiv(){
  var currentSlide= $(".slide.active");
  var nextSlide = currentSlide.next();

  currentSlide.fadeOut(300).removeClass("active");
  nextSlide.fadeIn(300).addClass("active");
  if(nextSlide.length == 0){
    $(".slide").first().fadeIn(300).addClass("active");
  }
}
 setInterval(nextdiv,6000);
 // function autoslide(){
 // nextdiv();
 // setTimeout(autoslide,5000);
 // }
  //function(){
//   var currentSlide= $(".slide.active");
//   var nextSlide = currentSlide.next();
//
//   currentSlide.fadeOut(300).removeClass("active");
//   nextSlide.fadeIn(300).addClass("active");
//   if(nextSlide.length == 0){
//     $(".slide").first().fadeIn(300).addClass("active");
// },3000);
