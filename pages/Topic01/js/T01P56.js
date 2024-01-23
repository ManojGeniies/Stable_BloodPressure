manifest = [{
        src: 'pages/images/Topic01/T01P47/T01P90_01.png',
        id: '1'
    }


];

//var audioPath = "pages/audio/Topic01/T01P47/T01P47";



$("#id_sliderContainer").hide();

var currCue = 0;



var idd = 0;

function fnAudioFinishItemComp() {


    fnAudioFinishPageComp();


    fnUpdatePageCompletionCounter(0);


    //fnUpdatePageCompletionCounter(7);


}


var __dataXml;


var __clickCount = 0;


$("#clsAudioOnBtn, #clsAudioOffBtn, #clsPlayPauseBtn").hide();

$(document).ready(function() {


    $('#clsMnuBtn, #clsReplay, #clsBackBtn, #ToolBtn').css({
        "pointer-events": "all"
    });

    disableNextBtn();

    fnAudioFinishItemComp();
    fnCompletion()

    gCompPageArr.push("M1L0T1P54");


    var ele = document.getElementsByTagName('div');


    for (var i = 0; i < ele.length; i++) {


        ele[i].setAttribute("unselectable", "on");


    }





});





function isInArray(value, array) {


    return array.indexOf(value) > -1;


}




function audioReset() {


    gAudioId = "";


    onTimelineEnd();


}











function fnCompletion() {





}














function fnOnAudioComplete() {



    if (gAudioId == "startAudio") {


        enableNextBtn();


        fnAudioFinishItemComp();


        $('.boxInst').show();


        gCompPageArr.push("M1L0T1P54");


        audplayer.pause();


        audplayer.currentTime = 0;


    } else {

        fnAudioFinishItemComp()

        fnCompletion();





    }


}
