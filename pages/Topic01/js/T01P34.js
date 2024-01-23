

var audioPath = "pages/audio/Topic01/T01P34/T01P34";
var gItemAudioPath = ["pages/audio/Topic01/T01P34/T01P34_1"
];
var qAttempts = 0, isCorrect = false;
var currCue = 0;
var idd = 0;
var __curState = 0;
var updateContentArray = [{
    time: "0.0",
    carry: "",
    event: "",
    show: "",
    hide: "",
    transcript: "Airway obstruction may occur anywhere along the respiratory tract, from the nose, mouth and jaw, to the larynx, trachea, or bronchi. <br>If the upper airway is narrowed or partially obstructed, you may hear a high-pitched sound called stridor. Depending on the level of obstruction, stridor may be heard on inspiration or expiration. Sometimes stridor is more audible with crying or agitation."
},

{ time: "0.1", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".heartimg", duration: "0.5", activity: { 'display': 'block' } }] },

{ time: "5.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".line3", duration: "0.5", activity: { 'height': '113px' } }] },
{ time: "5.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".txtbox4", duration: "0.5", activity: { 'display': 'block' } }] },


{ time: "5.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".line2", duration: "0.5", activity: { 'height': '113px' } }] },
{ time: "5.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".txtbox3", duration: "0.5", activity: { 'display': 'block' } }] },
{ time: "5.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".txtbox10", duration: "0.5", activity: { 'display': 'block' } }] },

{ time: "7.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".line1", duration: "0.5", activity: { 'height': '119px' } }] },
{ time: "7.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".line5", duration: "0.5", activity: { 'width': '194px' } }] },
{ time: "7.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".txtbox1", duration: "0.5", activity: { 'display': 'block' } }] },

{ time: "8.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".line4", duration: "0.5", activity: { 'width': '113px' } }] },
{ time: "8.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".txtbox2", duration: "0.5", activity: { 'display': 'block' } }] },

{ time: "10.8", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".mainContainer", duration: "0.5", activity: { 'left': '-82px' } }] },
{ time: "11.3", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".txtbox5", duration: "0.5", activity: { 'display': 'block' } }] }




];

var popupSectionArray0 = [{
    time: "0.0",
    carry: "",
    event: "",
    show: "",
    hide: "",
    transcript: ""
}
];




function fnAudioFinishItemComp() {
    fnAudioFinishPageComp();
    fnUpdatePageCompletionCounter(0);
    //fnUpdatePageCompletionCounter(7);
}
var __dataXml;
var __clickCount = 0;
var audio = document.getElementById("audioplayer");
$(document).ready(function () {
    disableNextBtn();
    var ele = document.getElementsByTagName('div');
    for (var i = 0; i < ele.length; i++) {
        ele[i].setAttribute("unselectable", "on");
    }

    // $(".clsEnaBackBtn").on("click",function(){
    // 			console.log('clicked');
    // 			fnJumpToPageByID("M1L0T1P16_10");
    // 		});
    var n = isInArray("M1L0T1P34", gCompPageArr);
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

function fnPlaySectionAudio(gCurrentIndex) {
    indexAudio = (gCurrentIndex);
    audioId = "audio_" + gCurrentIndex;
    fnHideShowAudioPlayer(false);
    updateContentArray = eval("popupSectionArray" + (gCurrentIndex));
    initAudioPlayer(gItemAudioPath[gCurrentIndex])
}

function fnCompletion() {
    // console.log("end");
    //if($(".clsVisited").length==gTotalPopups){
    //enableNextBtn();
    //fnAudioFinishItemComp();
    //}
}

$(".small_expand").on("click", function () {

    if (!fnPauseAudio()) {
        console.log(true);
        fnPauseAudio()
    } else {
        playPauseAudio();
        console.log(false);
    }
    $(".ModalTxtImg").hide();

    var i = $(this).attr("id").slice(8);
    $("#case_study_popup" + i).show();
    $("#imgPopup" + i).show();
    $(".sectionTop").addClass("blur");
    $(".sectionContent").addClass("blur");
});

$(".closepopup").on("click", function () {
    // audioReset();
    var __aIndex = $(this).attr("id").slice(8);
    if (!fnPauseAudio()) {
        console.log(true);
        playPauseAudio();
    }

    $(".CaseStudy").removeAttr("style");
    $(".sectionTop").removeClass("blur");
    $(".sectionContent").removeClass("blur");
});

function fnOnAudioComplete() {
    if (gAudioId == "startAudio") {
        enableNextBtn();
        fnAudioFinishItemComp();
        $('.boxInst').css('display', 'block');
        gCompPageArr.push("M1L0T1P34");
        audioStop();
    } else {

        enableNextBtn();
        fnAudioFinishItemComp();
        $('.boxInst').css('display', 'block');
        gCompPageArr.push("M1L0T1P34");
        audioStop();

    }
}
$(document).on("click", ".EarClickImg", function () {
    fnPlaySectionAudio(0);
});
function audioStop() {

    audio.pause();
    audio.currentTime = 0;
}