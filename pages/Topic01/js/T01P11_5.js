manifest = [
    { src: 'pages/images/Topic01/T01P11/T01P11_05.png',  id: '1' },
    { src: 'pages/images/Topic01/T01P11/T01P11_05_large.png',  id: '2' }

];

var audioPath = "pages/audio/Topic01/T01P11/T01P11_5";

var currCue = 0;
var idd = 0;
var __aIndex = []

glossaryFuncPageLevel();

var updateContentArray = [
    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "Urine output indirectly reflects kidney perfusion.<br/> To maintain a normal urine output, the kidney must receive both adequate blood flow and hydration. <br/> In neonates, a urine output less than 1 milliliter per kilogram per hour or a declining urine output are cause for concern. <br/> A rising creatinine and blood urea nitrogen are also concerning signs of poor kidney function." },
    { time: "0", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".popup5 .rightContent ", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
        { target: ".popup5 .leftContent", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "2", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist27", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "5", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist28", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "11", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".popup5 .rightContent .tabHeading5_02", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "12", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist29", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "20", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist30", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]}
];

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


    audioReset();


    disableNextBtn();

    enableAudioPlayAndSlider();


    $('#bullText5').css({ "pointer-events": "none" });


        $(".popUp").css({ 'opacity': '1', 'display': 'block' });
        clearToNormal();
        enableAudioPlayAndSlider();
        $('.bottomText').hide();
        $(".popUp").css({ "display": "block", "opacity": "1" });
        
            $('.hideText1').hide();

            $('.hideText').css({ 'opacity': '0', 'display': 'none' });
            $('#bullText0').css({ 'top': '0' });
            $('.popup5 .triangle-down').css({ "display": "block" });
            

            $(".popup1").animate({ height: "40px", top: "35px", easing: 'swing', duration: 500 });
            $(".popup2").animate({ height: "40px", top: "80px", easing: 'swing', duration: 500 });
            $(".popup3").animate({ height: "40px", top: "125px", easing: 'swing', duration: 500 });
            $(".popup4").animate({ height: "40px", top: "170px", easing: 'swing', duration: 500 });
            $(".popup5").animate({ height: "315px", top: "215px", easing: 'swing', duration: 500 });

            $('.popup5 .leftContent').fadeIn();
            $('.popup5 .rightContent').fadeIn();

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

    physicalExamForSignsOfShock2();

    var n = isInArray("M1L0T1P11_5", gCompPageArr);
    if (n == true) {
        enableNextBtn();
        fnDesiableNext(false);
    }else{
        physical_exam_signs_shock2_MenuArr_length++;
    }

    gCompPageArr.push("M1L0T1P11_5");

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
