manifest = [
    {
        src: 'pages/images/Topic01/T01P11/T01P11_02_01.png',
        id: '1'
    },
    {
        src: 'pages/images/Topic01/T01P11/T01P11_02_01_large.png',
        id: '2'
    },
    {
        src: 'pages/images/Topic01/T01P11/T01P11_02_02.png',
        id: '3'
    },
    {
        src: 'pages/images/Topic01/T01P11/T01P11_02_02_large.png',
        id: '4'
    }
];

    var audioPath = "pages/audio/Topic01/T01P11/T01P11_2";

    var updateContentArray = [
        { time: "0", carry: "", event: "", show: "", hide: "", transcript: "Evaluate O2 saturation and a blood gas to determine oxygenation and acid-base status. Severe hypoxemia will worsen anaerobic metabolism, which will cause increased production of lactic acid. <br/> If the infant’s color is pale or white, this may indicate a very low hemoglobin secondary to hemorrhage. With severe anemia, the oxygen content of the blood will be very low and therefore will be an additional cause of tissue hypoxia." },
        { time: "0", carry: "", event: "", show: "", hide: "", transcript: "", animation: [
            { target: ".popup2 .leftContent", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
            { target: ".popup2 .rightContent", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
        ] },
        { time: "0", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup2 .showlist3", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
        { time: "7", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup2 .showlist4", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
        { time: "15", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup2 .showlist5", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
        { time: "22", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup2 .showlist6", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] }
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


var __clickCount = 0;


function clearToNormal(){
    $(".popup3 #idPatchMain3").removeAttr("style");
    $(".popup1 #idPatchMain").removeAttr("style");
    $(".popup4 .firstSet, .popup4 .secondSet").removeAttr("style");
    $(".popup5 .rightContent .tabHeading5_02").removeAttr("style");
}


$(document).ready(function() {
    audioReset();
    disableNextBtn();
    enableAudioPlayAndSlider();
    $('#bullText2').css({ "pointer-events": "none" });
    $(".popUp").css({ 'opacity': '1', 'display': 'block' });

    $('.hideText1').hide();

    $('.hideText').css({ 'opacity': '0', 'display': 'none' });
    $('#bullText0').css({ 'top': '0' });

    $('.popup2 .triangle-down').css({ "display": "block" });

    $(".popup1").animate({ height: "40px", top: "35px", easing: 'swing', duration: 500 });
    $(".popup2").animate({ height: "315px", top: "80px", easing: 'swing', duration: 500 });
    $(".popup3").animate({ height: "40px", top: "395px", easing: 'swing', duration: 500 });
    $(".popup4").animate({ height: "40px", top: "440px", easing: 'swing', duration: 500 });
    $(".popup5").animate({ height: "40px", top: "485px", easing: 'swing', duration: 500 });

    $('.popup2 .leftContent').fadeIn();
    $('.popup2 .rightContent').fadeIn();


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

    var n = isInArray("M1L0T1P11_2", gCompPageArr);

    if (n == true) {
        enableNextBtn();
        // fnGlowNextBtn();
        fnDesiableNext(false);
    }else{
        physical_exam_signs_shock2_MenuArr_length++;
    }
    
    gCompPageArr.push("M1L0T1P11_2");

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
        $(".popup2 .small_expand").css({ "display": "block","opacity":"1" });
        $('.boxInst').show();

    } else {
        if(gAudioId=="audio_0"){
            $(".popup1 .clickToEnlarge, .popup1 .small_expand").css({ "display": "block","opacity":"1" });
        }else if(gAudioId=="audio_1"){
            
        }else if(gAudioId=="audio_2"){
            $(".popup3 .small_expand").css({ "display": "block","opacity":"1" });
        }else if(gAudioId=="audio_3"){
            $(".popup4 .small_expand").css({ "display": "block","opacity":"1" });
        }else if(gAudioId=="audio_4"){
            $(".popup5 .leftContent .small_expand").css({ "display": "block","opacity":"1" });
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
