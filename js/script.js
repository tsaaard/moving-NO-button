function thanks (){
    location.href = "thanks.html";
}

function buttonMove(x){
    var left = (Math.random() * 1800) + "px";
    var top = (Math.random() * 900) + "px";

    x.style.top = top;
    x.style.left = left;
}

window.onload=function(){
    document.getElementById("audio").play();
  }