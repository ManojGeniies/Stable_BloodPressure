manifest = [
    { src: 'pages/images/Topic01/T01P11/T01P11_03.png',  id: '1' },
    { src: 'pages/images/Topic01/T01P11/T01P11_03_large.png', id: '2' }
];
    var audioPath = "pages/audio/Topic01/T01P11/T01P11_3";
    var updateContentArray = [
        { time: "0", carry: "", event: "", show: "", hide: "", transcript: "Poor delivery of oxygen to the brain and accumulation of lactic acid will cause neurologic depression. Neurologic signs include irritability initially, followed by a decreased level of consciousness, hypotonia and lethargy. In advanced states of shock, brain injury may lead to seizures." },

        { time: "0", carry: "", event: "", show: "", hide: "", animation: [
            { target: ".popup3 .leftContent", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
            { target: ".popup3 .rightContent", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
            { target: ".showlist7", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
        ]},
        { time: "7", carry: "", event: "", show: "", hide: "", animation: [
            { target: ".showlist8", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
        ]},
        { time: "9", carry: "", event: "", show: "", hide: "", animation: [
            { target: ".showlist9", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
        ]},
        { time: "12", carry: "", event: "", show: "", hide: "", animation: [
            { target: ".showlist10", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
        ]},
        { time: "14", carry: "", event: "", show: "", hide: "", animation: [
            { target: ".showlist11", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
        ]},
        { time: "15", carry: "", event: "", show: "", hide: "", animation: [
            { target: ".showlist12", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
        ]},
        { time: "16.3", carry: "", event: "", show: "", hide: "", animation: [
            { target: "#idPatchMain3", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
        ]},
    ]; 

var currCue = 0;
var idd = 0;
var __aIndex = []

glossaryFuncPageLevel();

var audplayer = document.getElementById('audioplayer');
function fnAudioFinishItemComp() {
    console.log("end")
    // fnAudioFinishPageComp();
    fnUpdatePageCompletionCounter(0);
}

var __transcriptPageTxt = '';
var __dataXml;


$(document).ready(function() {

    audioReset();
    disableNextBtn();
    enableAudioPlayAndSlider();
    $('#bullText3').css({ "pointer-events": "none" });
    $(".popUp").css({ 'opacity': '1', 'display': 'block' });

    $('.hideText1').hide();

    $('.hideText').css({ 'opacity': '0', 'display': 'none' });
    $('#bullText0').css({ 'top': '0' });
    //$('#bullText0').hide();

    $('.popup3 .triangle-down').css({ "display": "block" });

    $(".popup1").animate({ height: "40px", top: "35px", easing: 'swing', duration: 500 });
    $(".popup2").animate({ height: "40px", top: "80px", easing: 'swing', duration: 500 });
    $(".popup3").animate({ height: "315px", top: "125px", easing: 'swing', duration: 500 });
    $(".popup4").animate({ height: "40px", top: "440px", easing: 'swing', duration: 500 });
    $(".popup5").animate({ height: "40px", top: "485px", easing: 'swing', duration: 500 });

    $('.popup3 .leftContent').fadeIn();
    $('.popup3 .rightContent').fadeIn();

    $(".bullet_Text").on("click", function() {
        var _aIndex = $(this).attr('cid');

        if(_aIndex == 1){
            fnJumpToPageByID("M1L0T1P11_1");
        }else if(_aIndex == 2) {
            fnJumpToPageByID("M1L0T1P11_2");
        }else if (_aIndex == 3){
            fnJumpToPageByID("M1L0T1P11_3");
        }else if(_aIndex == 4) {
            fnJumpToPageByID("M1L0T1P11_4");
        }else if(_aIndex == 5) {
            fnJumpToPageByID("M1L0T1P11_5");
        }

    });


    var ele = document.getElementsByTagName('div');


    for (var i = 0; i < ele.length; i++) {
        ele[i].setAttribute("unselectable", "on");
    }

    

    var n = isInArray("M1L0T1P11_3", gCompPageArr);


    if (n == true) {
        enableNextBtn();
        fnDesiableNext(false);
    }else{
        physical_exam_signs_shock2_MenuArr_length++;
    }

    gCompPageArr.push("M1L0T1P11_3");

    physicalExamForSignsOfShock2();

});





function isInArray(value, array) {


    return array.indexOf(value) > -1;


}





function audioReset() {


    gAudioId = "";


    onTimelineEnd();


}





function fnPlaySectionAudio(gCurrentIndex) {


    indexAudio = (gCurrentIndex);


    audioId = "audio_" + gCurrentIndex;


    gAudioId = audioId;


    fnHideShowAudioPlayer(false);


    updateContentArray = eval("popupSectionArray" + (gCurrentIndex));


    initAudioPlayer(gItemAudioPath[gCurrentIndex]);


}





function fnCompletion() {


    console.log("end");


    gCompPageArr.push("M1L0T1P11");


    enableNextBtn();


    $(".boxInst").show();


    fnAudioFinishItemComp();


}





function fnOnAudioComplete() {
    //console.log("Start " +gAudioId);
    if (gAudioId == "startAudio") {
        $('.bullet_Text').css({ "pointer-events": "all" });
        audplayer.pause();
        audplayer.currentTime = 0;
        $(".popup3 .small_expand").css({ "display": "block","opacity":"1" });
        $('.boxInst').show();
    } else {
        audplayer.pause();
        audplayer.currentTime = 0;
    }
}

$(".small_expand").on("click", function() {
    pauseAudio();
    $(".modalTxtImg").hide();
    $(".modalTxtImg").attr("id", "imgPopup" + $(this).attr("ccid"));
    $(".modalContent").attr("id", "imgPopupCnt" + $(this).attr("ccid"));
    $("#imgPopup"+$(this).attr("ccid")).show();
    $("#case_study_popup").show();
    $(".mainContainer").addClass("blur");
});

$(".closepopup").on("click", function() {
    playAudio();
    $(".modal").removeAttr("style");
    $(".mainContainer").removeClass("blur");

});

function pauseAudio() {
    if (!fnPauseAudio()) {
        fnPauseAudio()
    } else {
        playPauseAudio();
    }
}

function playAudio() {
    if (!fnPauseAudio()) {
        playPauseAudio();
    }
}

function disableAudioPlayAndSlider() {
    $('#clsPlayPauseBtn, #id_sliderContainer').css({
        "pointer-events": "none"
    });
}

function enableAudioPlayAndSlider() {
    $('#clsPlayPauseBtn, #id_sliderContainer').css({
        "pointer-events": "auto"
    });
}
