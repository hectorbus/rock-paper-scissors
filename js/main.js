var rock = document.getElementById("rock"); //0
var paper = document.getElementById("paper"); //1
var scissors = document.getElementById("scissors"); //2


var userChoose = [rock, paper, scissors];


function rps(cacas) {

  var selectedWeapon = userChoose[cacas];
  var enemyChoose = Math.floor(Math.random() * 3);
  console.log(enemyChoose);


  if(paper == selectedWeapon){
    $('#paper').addClass("animated zoomInLeft left imagesContainerBig").removeClass("pulse-grow").html("<p>You</p>").removeAttr("onclick");
    $("#rock, #scissors, #choose").css("display", "none");
    if(enemyChoose == 0){
      $("#rock").removeAttr("onclick").html("<p>Computer</p>").addClass("animated zoomInRight right imagesContainerBig").removeClass("pulse-grow");
      $("#ganaste").addClass("animated bounceIn");
      $("#btn").addClass("animated bounceInUp").css("display", "inherit");
      setTimeout(function(){
         jQuery("#btn").css("display", "inherit").removeClass("bounceInUp").addClass("wobble infinite");
      }, 1750);
      $("#rock, #ganaste").css("display", "inherit");
    }else if(enemyChoose == 2){
      $("#scissors").removeAttr("onclick").html("<p>Computer</p>").addClass("animated zoomInRight right bgsize imagesContainerBig").removeClass("pulse-grow");
      $("#perdiste").addClass("animated bounceIn");
      $("#btn").addClass("animated bounceInUp").css("display", "inherit");
      setTimeout(function(){
         jQuery("#btn").css("display", "inherit").removeClass("bounceInUp").addClass("wobble infinite");
      }, 1750);
      $("#scissors, #perdiste").css("display", "inherit");
    }else {
      $("#paperTie").removeAttr("onclick").html("<p>Computer</p>").addClass("animated zoomInRight right imagesContainerBig").removeClass("pulse-grow");
      $("#empate").addClass("animated bounceIn");
      $("#btn").addClass("animated bounceInUp").css("display", "inherit");
      setTimeout(function(){
         jQuery("#btn").css("display", "inherit").removeClass("bounceInUp").addClass("wobble infinite");
      }, 1750);
      $("#paperTie, #empate").css("display", "inherit");
    }
  }else if(rock == selectedWeapon){
    $('#rock').addClass("animated zoomInLeft left imagesContainerBig").removeClass("pulse-grow").html("<p>You</p>").removeAttr("onclick");
    $("#paper, #scissors, #choose").css("display", "none");
    if(enemyChoose == 2){
      $("#scissors").removeAttr("onclick").html("<p>Computer</p>").addClass("animated zoomInRight right bgsize imagesContainerBig").removeClass("pulse-grow");
      $("#ganaste").addClass("animated bounceIn");
      $("#btn").addClass("animated bounceInUp").css("display", "inherit");
      setTimeout(function(){
         jQuery("#btn").css("display", "inherit").removeClass("bounceInUp").addClass("wobble infinite");
      }, 1750);
      $("#scissors, #ganaste").css("display", "inherit");
    }else if(enemyChoose == 1){
      $("#paper").removeAttr("onclick").html("<p>Computer</p>").addClass("animated zoomInRight right imagesContainerBig").removeClass("pulse-grow");
      $("#perdiste").addClass("animated bounceIn");
      $("#btn").addClass("animated bounceInUp").css("display", "inherit");
      setTimeout(function(){
         jQuery("#btn").css("display", "inherit").removeClass("bounceInUp").addClass("wobble infinite");
      }, 1750);
      $("#paper, #perdiste").css("display", "inherit");
    }else {
      $("#rockTie").removeAttr("onclick").html("<p>Computer</p>").addClass("animated zoomInRight right imagesContainerBig").removeClass("pulse-grow");
      $("#empate").addClass("animated bounceIn");
      $("#btn").addClass("animated bounceInUp").css("display", "inherit");
      setTimeout(function(){
         jQuery("#btn").css("display", "inherit").removeClass("bounceInUp").addClass("wobble infinite");
      }, 1750);
      $("#rockTie, #empate").css("display", "inherit");
    }
  }else if(scissors == selectedWeapon){
    $('#scissors').addClass("animated zoomInLeft left bgsize imagesContainerBig").removeClass("pulse-grow").html("<p>You</p>").removeAttr("onclick");
    $("#paper, #rock, #choose").css("display", "none");
    if(enemyChoose == 1){
      $("#paper").removeAttr("onclick").html("<p>Computer</p>").addClass("animated zoomInRight right imagesContainerBig").removeClass("pulse-grow");
      $("#ganaste").addClass("animated bounceIn");
      $("#btn").addClass("animated bounceInUp").css("display", "inherit");
      setTimeout(function(){
         jQuery("#btn").css("display", "inherit").removeClass("bounceInUp").addClass("wobble infinite");
      }, 1750);
      $("#paper, #ganaste").css("display", "inherit");
    }else if(enemyChoose == 0){
      $("#rock").removeAttr("onclick").html("<p>Computer</p>").addClass("animated zoomInRight right imagesContainerBig").removeClass("pulse-grow");
      $("#perdiste").addClass("animated bounceIn");
      $("#btn").addClass("animated bounceInUp").css("display", "inherit");
      setTimeout(function(){
         jQuery("#btn").css("display", "inherit").removeClass("bounceInUp").addClass("wobble infinite");
      }, 1750);
      $("#rock, #perdiste").css("display", "inherit");
    }else {
      $("#scissorsTie").removeAttr("onclick").html("<p>Computer</p>").addClass("animated zoomInRight right bgsize imagesContainerBig").removeClass("pulse-grow");
      $("#empate").addClass("animated bounceIn");
      $("#btn").addClass("animated bounceInUp").css("display", "inherit");
      setTimeout(function(){
         jQuery("#btn").css("display", "inherit").removeClass("bounceInUp").addClass("wobble infinite");
      }, 1750);
      $("#scissorsTie, #empate").css("display", "inherit");
    }
  }else {

  }
}

function reload() { //reload de actual page
  location.reload();
}
