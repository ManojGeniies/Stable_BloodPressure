manifest = [

    { src: 'pages/images/Topic01/T01P24/01.png', id: '1' },

    { src: 'pages/images/Topic01/T01P24/01.png', id: '2' },

];



console.log("Labor" + gCompPageArr);

var audioPath = "pages/audio/Topic01/T01P29/T01P29";



clickViewMoreInfo();

var currCue = 0;

var idd = 0;





var __curState = 0;



var clickTabCount = 0;

var clickTabCount1 = 0;



var updateContentArray = [

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "Review the stabilization care provided over the next 20 to 30 minutes after admission, then click Next to continue." },

    {
        time: "0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".topImgCnt", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }]
    },

    {
        time: "0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".rightCnt", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }]
    }

];



function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

}

var __dataXml;

var audplayer = document.getElementById('audioplayer');

$(document).ready(function() {

    disableNextBtn();

    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }

    var n = isInArray("M1L0T1P24", gCompPageArr);

    if (n == true) {

        enableNextBtn();

        //fnGlowNextBtn();

        fnDesiableNext(false)

    }

});



function audioReset() {

    gAudioId = "";

   // onTimelineEnd();

}



function isInArray(value, array) {

    return array.indexOf(value) > -1;

}







function fnPlaySectionAudio(gCurrentIndex) {

    indexAudio = (gCurrentIndex);

    audioId = "audio_" + gCurrentIndex;

    gAudioId = audioId;

    fnHideShowAudioPlayer(false);

    updateContentArray = eval("updateContentArray" + (gCurrentIndex));

    initAudioPlayer(gItemAudioPath[gCurrentIndex])

}

function fnCompletion() {

    console.log("end");

    var _getCount1 = clickTabCount + clickTabCount1;
    if (_getCount1 >= 2) {
        console.log("start new");
        enableNextBtn();
        $('.boxInst').show()
        fnAudioFinishItemComp();
    }

}



function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {

        $('.small_expand').css('display', 'block').css('opacity', '1');
        $('.clickToEnlarge').css('display', 'block').css('opacity', '1');
        $('.small_expand1').css('display', 'block').css('opacity', '1');
        $('.boxInst').show()
        audplayer.pause();

        audplayer.currentTime = 0;

    } else {
        $('.#000000Inst').show();
        $('.small_expand').css('display', 'block').css('opacity', '1');
        $('.clickToEnlarge').css('display', 'block').css('opacity', '1');
        $('.small_expand1').css('display', 'block').css('opacity', '1');
        //fnGlowNextBtn();
        fnAudioFinishItemComp();

        audplayer.pause();

        audplayer.currentTime = 0;



    }

}



$(".small_expand").off().on("click", function() {

    fnPauseAudio();

    //audioReset();

    $("#TabPopup5 .modal").show();

    $("#TabPopup5 .sectionTop").addClass("blur");

    $("#TabPopup5 .sectionContent").addClass("blur");

    $(".modalTxtImg").attr('id', 'imgPopup' + $(this).attr('click_id'));

    $('.modalTextBottom').hide();

    $('#ModalTextBottom' + $(this).attr('click_id')).show();

    $('.modalContent').addClass('maxBot0');
    $('.modalContent').removeClass('maxBot');
});

$(".small_expand1").off().on("click", function() {

    fnPauseAudio();

    //audioReset();

    $("#TabPopup5 .modal").show();

    $("#TabPopup5 .sectionTop").addClass("blur");

    $("#TabPopup5 .sectionContent").addClass("blur");
  //  $('.boxInst').addClass("blur");

    $(".modalTxtImg").attr('id', 'imgPopup' + $(this).attr('click_id'));

    $('.modalTextBottom').hide();

    $('.modalContent').addClass('maxBot');
    $('.modalContent').removeClass('maxBot0');

});


$(".closepopup").off().on("click", function() {

    fnPlayAudio();

    //audioReset();

    $("#TabPopup5 .modal").removeAttr("style");

    $("#TabPopup5 .sectionTop").removeClass("blur");

    $("#TabPopup5 .sectionContent").removeClass("blur");
    $('.boxInst').removeClass("blur");

});


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