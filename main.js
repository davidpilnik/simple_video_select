// https://stackoverflow.com/questions/5235145/changing-source-on-html5-video-tag   
function myFunction() { 
    document.getElementById("mp4_src").src = "movie.mp4";
    document.getElementById("ogg_src").src = "movie.ogg";
    document.getElementById("myVideo").load();
  } 

function PlayVideo(curr_video) {
    curr_video_id = curr_video;
    console.log("curr video src=", curr_video_id);
    document.getElementById(curr_video_id).style.visibility = 'visible'

    // var v = document.getElementsByTagName("video");  
    var vid = document.getElementById(curr_video_id);  

    debugger;
    console.log(vid);
    // v.myVideo.play();
    // var v = document.getElementById(curr_video_src);  
    vid.play(); 
}


function getSelectExerciseValue() {
    let curr_video;
    var list_video_id = document.getElementById('select_video');

    list_video_id.onchange = function (){
      curr_video = list_video_id.value;
      console.log(curr_video);
      PlayVideo(curr_video);
    }
  }
  document.getElementById('shoulder_press').style.visibility = 'hidden'
  document.getElementById('squat_front').style.visibility = 'hidden'

  getSelectExerciseValue();