manifest = [
    {
        src: 'pages/images/Topic01/T01P12/01.png',
        id: '1'
    },
    {
        src: 'pages/images/Topic01/T01P12/01_large.png',
        id: '2'
    }
];



glossaryFuncPageLevel();


var audioPath = "pages/audio/Topic01/T01P12/T01P12";
//var gItemAudioPath=["pages/audio/Topic01/T01P17/T01P17"
//];

var currCue = 0;
var idd = 0;

var updateContentArray = [{
        time: "0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "When an infant is in shock, the blood pressure may be normal or low. Treatment should be initiated if there are signs of shock, regardless of the blood pressure reading, since waiting for a low blood pressure to start treatment is waiting too long."
    }, {
        time: "0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist1",
            duration: "0.5",
            activity: {
                'display': 'list-item'
            }
        }]
    },
 {
        time: "4.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist2",
            duration: "0.5",
            activity: {
                'display': 'list-item'
            }
        }]
    }, {
        time: "7.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist3",
            duration: "0.5",
            activity: {
                'display': 'list-item'
            }
        }]
    }, {
        time: "7.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".warning",
            duration: "0.5",
            activity: {
                'display': 'block'
            }
        }]
    }, 
];

function fnAudioFinishItemComp() {
    fnAudioFinishPageComp();
    fnUpdatePageCompletionCounter(0);
    //fnUpdatePageCompletionCounter(7);
}
var __dataXml;
var __clickCount = 0;

$(document).ready(function() {
    disableNextBtn();
    var ele = document.getElementsByTagName('div');
    for (var i = 0; i < ele.length; i++) {
        ele[i].setAttribute("unselectable", "on");
    }


    var n = isInArray("M1L0T1P12", gCompPageArr);
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

/* function fnPlaySectionAudio(gCurrentIndex){
    indexAudio = (gCurrentIndex);
    audioId = "audio_"+gCurrentIndex;
    fnHideShowAudioPlayer( false );
    updateContentArray = eval("popupSectionArray"+(gCurrentIndex));
    initAudioPlayer(gItemAudioPath[gCurrentIndex])
} */

function fnCompletion() {
    console.log("end");

    enableNextBtn();
    $('.boxInst').show();
    fnAudioFinishItemComp();

}

$(".clsIconImg").on("click", function() {
    pauseAudio();
    $(".mainContainer").addClass("blur");
    $(".modalContent .modalTxtImg").attr("id", "imgPopup0");
    $(".modal").show();
});

$(".closepopup").on("click", function() {
    playAudio();
    $(".modal").hide()
    $(".mainContainer").removeClass("blur");
    $(".modal .modalTxtImg").removeAttr("id");
});

function audioStop() {
    var audio = document.getElementById("audioplayer");
    audio.pause();
    audio.currentTime = 0;
}


function fnOnAudioComplete() {
    if (gAudioId == "startAudio") {
        enableNextBtn();
        fnAudioFinishItemComp();
        $('.boxInst').show();
        $('#icon01').css('display', 'block').css('opacity', '1');
        $('.icon00').css('display', 'block').css('opacity', '1');
        gCompPageArr.push("M1L0T1P12");
        audioStop();
    } else {
        $("#idTick0" + selectedIndex).css({
            "opacity": "1"
        });
        $("#clsTabTxt" + selectedIndex).css({
            'color': '#80848b'
        });
        $(".ClsTab").removeClass("clsDisable");
        $("#TabImage" + selectedIndex).addClass("clsDisable");
        fnCompletion();
        if ($(".clsVisited").length === 2) {

        }
        audioStop();
    }
}

function audioStop() {
    var audio = document.getElementById("audioplayer");
    audio.pause();
    audio.currentTime = 0;
}

function pauseAudio() {

    if (!fnPauseAudio()) {

        console.log(true);

        fnPauseAudio()

    } else {

        playPauseAudio();

        console.log(false);

    }

}

function playAudio() {

    if (!fnPauseAudio()) {

        console.log(true);

        playPauseAudio();

    }

}