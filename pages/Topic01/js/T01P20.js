manifest = [{ src: 'pages/images/Topic01/T01P20/01.png', id: '1' }


];


var audioPath = "pages/audio/Topic01/T01P20/T01P20";






var currCue = 0;


var idd = 0;




var updateContentArray = [{ time: "0", carry: "", event: "", show: "", hide: "", transcript: "This is the Emergency Department calling to let you know that the paramedics are 10 minutes out with a premature baby that was just born at home. We are really busy, so we’d like to bring the baby directly to the special care nursery. Can you get set up for admission?",
}]


function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

    fnUpdatePageCompletionCounter(0);

    //fnUpdatePageCompletionCounter(7);

}

var __dataXml;

var __clickCount = 0;

var aud = document.getElementById("audioplayer");

$(document).ready(function() {

    disableNextBtn();

    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }





    var n = isInArray("M1L0T1P20", gCompPageArr);

    console.log(n);

    if (n == true) {

        enableNextBtn();

        // fnGlowNextBtn();

        fnDesiableNext(false);

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

        gCompPageArr.push("M1L0T1P20");
        $('.boxInst').show();
        aud.pause();

        aud.currentTime = 0;

    } else {

        $("#idTick0" + selectedIndex).css({ "opacity": "1" });

        $("#clsTabTxt" + selectedIndex).css({ 'color': '#80848b' });

        $(".ClsTab").removeClass("clsDisable");

        $("#TabImage" + selectedIndex).addClass("clsDisable");

        fnCompletion();

        if ($(".clsVisited").length === 2) {



        }

    }

}