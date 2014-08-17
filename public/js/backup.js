var rock = document.getElementById("rock"); //0
var paper = document.getElementById("paper"); //1
var scissors = document.getElementById("scissors"); //2
var ganaste = document.getElementById("ganaste");
var perdiste = document.getElementById("perdiste");

var userChoose = [rock, paper, scissors];


function rps(cacas) {

  var selectedWeapon = userChoose[cacas];
  var enemyChoose = Math.floor(Math.random() * 3);


  if(paper == selectedWeapon){                   //if userChoose == paper, then >
    $('#paper').addClass("animated bounceInLeft left");  //add class "animated bounceInLeft left" to #paper
    rock.style.display = "none";                         //add "display:none;" to #rock
    scissors.style.display = "none";                     //add "display:none;" to #scissors
    choose.style.display = "none";                       //add "display:none;" to #choose
    $("#paper").removeAttr("onclick");                   //remove onclick to #paper
    if(enemyChoose == 0){                           //if enemy choose rock, then >
      $("#rock").removeAttr("onclick");                  //remove onclick to #rock
      $('#rock').addClass("animated bounceInRight right");  //add class "animated bounceInRight right" to #rock
      rock.style.display = "";                           //add "display:"";" to #rock
      $("#ganaste").addClass("animated bounceIn");       //add class "animated bounceIn" to #ganaste
      ganaste.style.display = "";                        //add "display:"";" to #ganaste
      $("#btn").addClass("animated bounceInUp");         //add class "animated bounceInUp" tp #btn
      btn.style.display = "";                            //add "display:"";" to #btn
    }else{                                          //else enemy choose scissors, then >
      $("#scissors").removeAttr("onclick");              //remove onclick to #scissors
      scissors.style.display = "";                       //add "display:""; to #scissors
      $('#scissors').addClass("animated bounceInRight right");  //add class "animated bounceInRight right" to #scissors
      $("#perdiste").addClass("animated bounceIn");      //add class "animated bounceIn" to #perdiste
      perdiste.style.display = "";                       //add "display:"";" to #perdiste
      $("#btn").addClass("animated bounceInUp");         //add class "animated bounceInUp" tp #btn
      btn.style.display = "";                            //add "display:"";" to #btn
    }    //-----------------------------------------------------------------------------------------------------------------
  }else if(rock == selectedWeapon){              //if userChoose == rock, then >
    $('#rock').addClass("animated bounceInLeft left");   //add class "animated bounceInLeft left" to #rock
    paper.style.display = "none";                        //add "display:none;" to #paper
    scissors.style.display = "none";                     //add "display:none;" to #scissors
    choose.style.display = "none";                       //add "display:none;" to #choose
    $("#rock").removeAttr("onclick");                    //remove onclick to #rock
    if(enemyChoose == 2){                           //if enemy choose scissors, then >
      $("#scissors").removeAttr("onclick");              //remove onclick to #scissors
      scissors.style.display = "";                       //add "display:"";" to #scissors
      $('#scissors').addClass("animated bounceInRight right");  //add class "animated bounceInRight right" to #scissors
      $("#ganaste").addClass("animated bounceIn");       // add class "animated bounceIn" to #ganaste
      ganaste.style.display = "";                        //add "display:"";" to #ganaste
      $("#btn").addClass("animated bounceInUp");         //add class "animated bounceInUp" tp #btn
      btn.style.display = "";                            //add "display:"";" to #btn
    }else{                                           //else enemy choose paper, then >
      $("#paper").removeAttr("onclick");                 //remove onclick to #paper
      paper.style.display = "";                          //add "display:"";" to #paper
      $('#paper').addClass("animated bounceInRight right");  //add class "animated bounceInRight right" to #paper
      $("#perdiste").addClass("animated bounceIn");      // add class "animated bounceIn" to #perdiste
      perdiste.style.display = "";                       //add "display:"";" to #perdiste
      $("#btn").addClass("animated bounceInUp");         //add class "animated bounceInUp" tp #btn
      btn.style.display = "";                            //add "display:"";" to #btn
    }    //----------------------------------------------------------------------------------------------------------------
  }else if(scissors == selectedWeapon){          //if userChoose == scissors, then >
    $('#scissors').addClass("animated bounceInLeft left"); //add class "animated bounceInLeft left" to #scissors
    paper.style.display = "none";                        //add "display:none;" to #paper
    rock.style.display = "none";                         //add "display:none;" to #rock
    choose.style.display = "none";                       //add "display:none;" to #choose
    $("#scissors").removeAttr("onclick");                //remove onclick to #scissors
    if(enemyChoose == 1){                           //if enemy choose paper, then >
      $("#paper").removeAttr("onclick");                 //remove onclick to #paper
      paper.style.display = "";                          //add "display:"";" to #paper
      $('#paper').addClass("animated bounceInRight right");  //add class "animated bounceInRight right" to #paper
      $("#ganaste").addClass("animated bounceIn");       // add class "animated bounceIn" to #ganaste
      ganaste.style.display = "";                        //add "display:"";" to #ganaste
      $("#btn").addClass("animated bounceInUp");         //add class "animated bounceInUp" tp #btn
      btn.style.display = "";                            //add "display:"";" to #btn
    }else{                                           //else enemy choose rock, then >
      $("#rock").removeAttr("onclick");                  //remove onclick to #rock
      rock.style.display = "";                           //add "display:"";" to #rock
      $('#rock').addClass("animated bounceInRight right");  //add class "animated bounceInRight right" to #rock
      $("#perdiste").addClass("animated bounceIn");      // add class "animated bounceIn" to #perdiste
      perdiste.style.display = "";                       //add "display:"";" to #perdiste
      $("#btn").addClass("animated bounceInUp");         //add class "animated bounceInUp" tp #btn
      btn.style.display = "";                            //add "display:"";" to #btn
    }
  }else {

  }
}

function reload() { //reload de actual page
  location.reload();
}
