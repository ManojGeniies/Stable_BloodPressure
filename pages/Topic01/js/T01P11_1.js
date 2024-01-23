manifest = [
    {
        src: 'pages/images/Topic01/T01P11/T01P11.png',
        id: '1'
    },
    {
        src: 'pages/images/Topic01/T01P11/T01P11_01.png',
        id: '2'
    }
];

var audioPath = "pages/audio/Topic01/T01P11/T01P11_1";

var updateContentArray = [
    
    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "An infant in shock will have varying degrees of respiratory distress. Tachypnea may be a sign that the infant is trying to compensate for a metabolic or mixed acidosis. As shock worsens, work of breathing will increase.  In severe states of shock, the infant might have apneic episodes and if gasping is observed, this is an ominous sign of impending cardiorespiratory arrest." },

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup1 .leftContent", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup1 .rightContent", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },    
    { time: "5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist0", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "11", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "15", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist2", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "20", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#idPatchMain", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] }

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

function clearToNormal(){
    $(".popup3 #idPatchMain3").removeAttr("style");
    $(".popup1 #idPatchMain").removeAttr("style");
    $(".popup4 .firstSet, .popup4 .secondSet").removeAttr("style");
    $(".popup5 .rightContent .tabHeading5_02").removeAttr("style");
}


$(document).ready(function() {

    $(".popUp").css({ 'opacity': '1', 'display': 'block' });
    audioReset();
    disableNextBtn();
    enableAudioPlayAndSlider();
    $('#bullText1').css({ "pointer-events": "none" });

    $('.hideText1').hide();
    $('.hideText').css({ 'opacity': '0', 'display': 'none' });
    $('#bullText0').css({ 'top': '0' });

    $('.popup1 .triangle-down').css({ "display": "block" });

    $(".popup1").animate({ height: "315px", top: "35px", easing: 'swing', duration: 500 });
    $(".popup2").animate({ height: "40px", top: "350px", easing: 'swing', duration: 500 });
    $(".popup3").animate({ height: "40px", top: "395px", easing: 'swing', duration: 500 });
    $(".popup4").animate({ height: "40px", top: "440px", easing: 'swing', duration: 500 });
    $(".popup5").animate({ height: "40px", top: "485px", easing: 'swing', duration: 500 });

    $('.popup1 .leftContent').fadeIn();
    $('.popup1 .rightContent').fadeIn();


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
    
    var n = isInArray("M1L0T1P11_1", gCompPageArr);

    if (n == true) {
        enableNextBtn();
        // fnGlowNextBtn();
        fnDesiableNext(false);
    }else{
        physical_exam_signs_shock2_MenuArr_length++;
    }
    
    gCompPageArr.push("M1L0T1P11_1");

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
        $(".popup1 .clickToEnlarge, .popup1 .small_expand").css({ "display": "block","opacity":"1" });
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
