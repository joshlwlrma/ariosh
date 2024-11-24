function startTransition() {
    document.getElementById("splash-screen").style.opacity = 0;
    setTimeout(() => {
        document.getElementById("splash-screen").style.display = "none";
    }, 500); //  duration
}

setTimeout(() => {
    startTransition();
}, 2000); // delay before transition

/*/ vids js /*/

function displayVideo(videoId) {
    var videoContainer = document.getElementById("videoContainer");
    var embedCode = '';

    if (videoId === 'VIDEO_ID_1') {
      embedCode = '<iframe width="912" height="513" src="https://www.youtube.com/embed/MDLn5-zSQQI?si=LUMJwa61IYrpNWyV" title="HTML" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    } else if (videoId === 'VIDEO_ID_2') {
      embedCode = '<iframe width="912" height="513" src="https://www.youtube.com/embed/LO5eTH4Pe8E?si=cYyHXteQ2OzF13BO" title="JavaScript" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    } else if (videoId === 'VIDEO_ID_3') {
      embedCode = '<iframe width="912" height="513" src="https://www.youtube.com/embed/1PnVor36_40?si=Z_hTXPAuRj-uoruY" title="CSS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    } else if (videoId === 'VIDEO_ID_4') {
      embedCode = '<iframe width="912" height="513" src="https://www.youtube.com/embed/McojvctVsUs?si=B29gqSH_o_PSny3g" title="C++" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    }

    videoContainer.innerHTML = embedCode;
  }
    
/*/ link js /*/


document.getElementById('openFacebook').addEventListener('click', function(event) {

    var link = document.createElement('a');
    link.href = 'https://www.facebook.com/ariana.velarde.90260';
    link.target = '_blank';

    link.click();

  }, false);
