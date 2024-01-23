manifest = [
    {
        src: 'pages/images/Topic01/T01P11/T01P11.png',
        id: '1'
    },
];

    var audioPath = "pages/audio/Topic01/T01P11/T01P11";
    var updateContentArray = [
        { time: "0", carry: "", event: "", show: "", hide: "", transcript: "Click each tab to learn more about how to assess the infant for signs of shock." },
        { time: "1", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
        { time: "1.2", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup2", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
        { time: "1.4", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup3", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
        { time: "1.6", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup4", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
        { time: "1.8", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup5", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
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


    $('.bullet_Text').css({ "pointer-events": "all" });



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


    var n = isInArray("M1L0T1P11", gCompPageArr);


    if (n == true) {


        enableNextBtn();


        // fnGlowNextBtn();


        fnDesiableNext(false);


    }else{
        physical_exam_signs_shock2_MenuArr_length++;
    }
    gCompPageArr.push("M1L0T1P11");

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

    } else {
        if(gAudioId=="audio_0"){
            $(".popup1 .clickToEnlarge, .popup1 .small_expand").css({ "display": "block","opacity":"1" });
        }else if(gAudioId=="audio_1"){
            $(".popup2 .small_expand").css({ "display": "block","opacity":"1" });
        }else if(gAudioId=="audio_2"){
            $(".popup3 .small_expand").css({ "display": "block","opacity":"1" });
        }else if(gAudioId=="audio_3"){
            $(".popup4 .small_expand").css({ "display": "block","opacity":"1" });
        }else if(gAudioId=="audio_4"){
            $(".popup5 .leftContent .small_expand").css({ "display": "block","opacity":"1" });
        }
        
        if (pop3 == 1 && pop2 == 1 && pop1 == 1 && pop4 == 1 && pop5 == 1) {
            // fnGlowNextBtn();
            enableNextBtn();
            fnAudioFinishItemComp();
            $('.boxInst').show();
            gCompPageArr.push("M1L0T1P11");
        }
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
