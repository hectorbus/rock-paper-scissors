var rock = document.getElementById("rock"); //0
var paper = document.getElementById("paper"); //1
var scissors = document.getElementById("scissors"); //2
var ganaste = document.getElementById("ganaste");
var perdiste = document.getElementById("perdiste");

var userChoose = [rock, paper, scissors];


function rps(cacas) {

  var selectedWeapon = userChoose[cacas];
  var enemyIndex = Math.floor(Math.random() * 3);


  if(paper == selectedWeapon){
    $('#paper').addClass('animated bounceInLeft left');
    rock.style.display = "none";
    scissors.style.display = "none";
    choose.style.display = "none";
    $("#paper").removeAttr("onclick");
    if(enemyIndex == 0){
      $("#rock").removeAttr("onclick");
      rock.style.display = "";
      $('#rock').addClass('animated bounceInRight right');
      $("#ganaste").addClass('animated bounceIn');
      ganaste.style.display = "";
      $("#btn").addClass('animated bounceInUp');
      btn.style.display = "";
    }else{
      $("#scissors").removeAttr("onclick");
      scissors.style.display = "";
      $('#scissors').addClass('animated bounceInRight right');
      $("#perdiste").addClass('animated bounceIn');
      perdiste.style.display = "";
      $("#btn").addClass('animated bounceInUp');
      btn.style.display = "";
    }
  }else if(rock == selectedWeapon){
    $('#rock').addClass('animated bounceInLeft left');
    paper.style.display = "none";
    scissors.style.display = "none";
    choose.style.display = "none";
    $("#rock").removeAttr("onclick");
    if(enemyIndex == 2){
      $("#scissors").removeAttr("onclick");
      scissors.style.display = "";
      $('#scissors').addClass('animated bounceInRight right');
      $("#ganaste").addClass('animated bounceIn');
      ganaste.style.display = "";
      $("#btn").addClass('animated bounceInUp');
      btn.style.display = "";
    }else{
      $("#paper").removeAttr("onclick");
      paper.style.display = "";
      $('#paper').addClass('animated bounceInRight right');
      $("#perdiste").addClass('animated bounceIn');
      perdiste.style.display = "";
      $("#btn").addClass('animated bounceInUp');
      btn.style.display = "";
    }
  }else if(scissors == selectedWeapon){
    $('#scissors').addClass('animated bounceInLeft left');
    paper.style.display = "none";
    rock.style.display = "none";
    choose.style.display = "none";
    $("#scissors").removeAttr("onclick");
    if(enemyIndex == 1){
      $("#paper").removeAttr("onclick");
      paper.style.display = "";
      $('#paper').addClass('animated bounceInRight right');
      $("#ganaste").addClass('animated bounceIn');
      ganaste.style.display = "";
      $("#btn").addClass('animated bounceInUp');
      btn.style.display = "";
    }else{
      $("#rock").removeAttr("onclick");
      rock.style.display = "";
      $('#rock').addClass('animated bounceInRight right');
      $("#perdiste").addClass('animated bounceIn');
      perdiste.style.display = "";
      $("#btn").addClass('animated bounceInUp');
      btn.style.display = "";
    }
  }else {

  }
}

function reload() {
  location.reload();
}
