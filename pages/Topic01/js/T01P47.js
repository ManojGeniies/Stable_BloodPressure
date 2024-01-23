manifest = [
    { src: 'pages/images/Topic01/T01P47/01.png', id: '1' },
    { src: 'pages/images/Topic01/T01P47/02.png', id: '2' },
    { src: 'pages/images/Topic01/T01P47/03.png', id: '3' },
    { src: 'pages/images/Topic01/T01P47/01_hand.png', id: '4' },
    { src: 'pages/images/Topic01/T01P47/02_hammer.png', id: '5' },
    { src: 'pages/images/Topic01/T01P47/hammer.png', id: '6' },
    { src: 'pages/images/Topic01/T01P47/hammer_hover.png', id: '6' },
    { src: 'pages/images/Topic01/T01P47/hand.png', id: '7' },
    { src: 'pages/images/Topic01/T01P47/hand_hover.png', id: '8' },
    { src: 'pages/images/Topic01/T01P47/normal.png', id: '9' },
    { src: 'pages/images/Topic01/T01P47/stethoscope.png', id: '10' },
    { src: 'pages/images/Topic01/T01P47/stethoscope_hover.png', id: '11' }
];

var audioPath = "pages/audio/Topic01/T01P47/T01P47";

var currCue = 0;
var idd = 0;

var updateContentArray = [

{ time: "0", carry: "", event: "", show: "", hide: "", transcript: "Now, let’s examine Baby Conrad using your hand, a reflex hammer, and a stethoscope. Select a tool from the left to see the clickable hotspots. " },

];

function fnAudioFinishItemComp() {

fnAudioFinishPageComp();

fnUpdatePageCompletionCounter(0);

}

var __dataXml;

var __clickCount = 0;



$(document).ready(function() {

disableNextBtn();

var ele = document.getElementsByTagName('div');

for (var i = 0; i < ele.length; i++) {

    ele[i].setAttribute("unselectable", "on");

}

var n = isInArray("M1L0T1P47", gCompPageArr);

console.log(n);

if (n == true) {

    enableNextBtn();

    //fnGlowNextBtn();

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

// console.log("end");

//if($(".clsVisited").length==gTotalPopups){

//enableNextBtn();

//fnAudioFinishItemComp();

//}

}

var _maniJSON = [
    "<span class='indicateStyle'>Click each hotspot to evaluate Baby Conrad.</span>",
    "<span class='indicateStyle'>Click on Baby Conrad to evaluate.</span>",
    "<span class='indicateStyle'>Click on the chest area to evaluate Baby Conrad.</span>"
];

var _hotSpotJSON = [
    "Anterior fontanelle is soft and flat.",
    "Scalp is edematous and a fluid wave can be palpated on the posterior, dependent part of the scalp. There is some bruising apparent in the region of the prior vacuum application. Head circumference increased 2 centimeters from birth.",
    "Extremities feel cool to touch.",
    "Pulses feel weak 1+/4+, but pulses are equal in the brachial and femoral areas.",
    "Pale skin color. Capillary refill time 5 seconds on chest and 6 seconds over the right knee.",
    "Pulses feel weak 1+/4+, but pulses are equal in the brachial and femoral areas.",
    "Pale skin color. Capillary refill time 5 seconds on chest and 6 seconds over the right knee.",
    "Extremities feel cool to touch.",
    "Minimal spontaneous movement, but does respond to noxious stimuli; partial Moro,<br> weak hand grasp bilaterally, weak suck, decreased deep tendon reflexes (knees).",
    "Heart sounds are normal, without murmur. Lungs are clear and there is equal air entry.<br>Tachypneic but without retractions, grunting, or nasal flaring."
];

$(".tablink").click(function() {
    var _getId = $(this).attr("cid");
    //console.log("hotspot "+_getId);
    if(_getId==0){
        $("#sectionRow0 .clickedHotSPot").show();
    }else{
        $("#sectionRow0 .clickedHotSPot").removeAttr("style");
    }
    //console.log(_maniJSON[_getId]);
    $(".sectionRow").hide();
    $("#sectionRow"+_getId).show();
    $(".tablink").removeClass("active");
    $("#contentDesc .contentTxt").html(_maniJSON[_getId]);
    $("#contentDesc").addClass("currentTab_"+_getId);
    $("#contentDesc").fadeIn();
    
    $(".tablink").removeClass("active");    
    $(this).addClass("active");    
    /* if($(this).hasClass("visited")){
        $(this).removeClass("visited").addClass("active");       
    } */
    //$(this).addClass("visitedTool").addClass("active");    
    //enableNextBtnFuncClick();   
});

$(".clickedHotSPot").click(function() {
    var _getCId = $(this).attr("ccid");
    console.log("hotspot "+_getCId);
    if(_getCId==8){
        $("#sectionRow1 .hammer_img").show();
    }else if(_getCId==9){
        $("#sectionRow2 .stethoscope_img").show();
    }
    $(".contentDesc").fadeIn();
    $("#contentDesc .contentTxt").html(_hotSpotJSON[_getCId]);
    $("#contentDesc").addClass("current_"+_getCId);
    /* if($(this).hasClass("visited")){
        $(this).removeClass("visited").addClass("active");       
    } */
    $(".clickedHotSPot").removeClass("active");
    $(this).addClass("visitedTool");   
    $(this).addClass("active");
    enableNextBtnFuncClick();   
});

$(".clickedHotSPotThird").click(function(){
    $("#sectionRow2 .stethoscope_img").show();
    $("#sectionRow2 .stethoscope_img").addClass("visitedTool");
    $("#contentDesc .contentTxt").html(_hotSpotJSON[9]);
    enableNextBtnFuncClick();   
});
$(".cls-2, .cls-3").click(function(){
    $("#sectionRow1 .hammer_img").show()
    $("#sectionRow1 .hammer_img").addClass("visitedTool");
    $("#contentDesc .contentTxt").html(_hotSpotJSON[8]);
    enableNextBtnFuncClick();   
});


function enableNextBtnFuncClick(){
    console.log($(".visitedTool").length,$(".clickedHotSPot").length);
    if($(".visitedTool").length == 10){
        enableNextBtn();
        gCompPageArr.push("M1L0T1P47");
        fnDesiableNext(false);
        $('.boxInst').css('display', 'block');
    }else{
        console.log("not completed")
    }
}


$(".small_expand").on("click", function() {



if (!fnPauseAudio()) {

    fnPauseAudio()

} else {

    playPauseAudio();

}

$(".modalTxtImg").hide();

var i = $(this).attr("id").slice(8);

$("#case_study_popup" + i).show();

$("#imgPopup" + i).show();

$(".sectionTop").addClass("blur");

$(".sectionContent").addClass("blur");

});



$(".closepopup").on("click", function() {

var __aIndex = $(this).attr("id").slice(8);

if (!fnPauseAudio()) {

    console.log(true);

    playPauseAudio();

}
$(".modal").removeAttr("style");

$(".sectionTop").removeClass("blur");

$(".sectionContent").removeClass("blur");

});

function fnOnAudioComplete() {

if (gAudioId == "startAudio") {

    //enableNextBtn();

    //fnAudioFinishItemComp();

   // $('.boxInst').css('display', 'block');

    //gCompPageArr.push("M1L0T1P81");
    var aud = document.getElementById("audioplayer");
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