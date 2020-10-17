// https://stackoverflow.com/questions/5235145/changing-source-on-html5-video-tag   

function PlayVideo(curr_video_id) {
    console.log("curr video id=", curr_video_id);
    var vid = document.getElementById(curr_video_id); 
    vid.style.visibility = 'visible';

    // debugger;
    console.log(vid);
    vid.play(); 
}


function getSelectVideo() {
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
  
  getSelectVideo();