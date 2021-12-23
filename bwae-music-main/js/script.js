// window.onload = function () {

//   var myAudio = document.getElementById('my-audio');
//   var play = document.getElementById('play');
//   var pause = document.getElementById('pause');

//   // associate functions with the 'onclick' events
//   play.onclick = playAudio;
//   pause.onclick = pauseAudio;

//   function playAudio() {
//     myAudio.play();
//   }

//   function pauseAudio() {
//     myAudio.pause();
//   }
// }
function showDialog1() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("dialog1").style.display = "block";
}
function hideDialog1() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("dialog1").style.display = "none";
}

function showDialog2() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("dialog2").style.display = "block";
}
function hideDialog2() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("dialog2").style.display = "none";
}
