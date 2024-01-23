manifest = [{ src: 'pages/images/Topic01/T01P07/Icon01.png', id: '1' }];

var audioPath = "pages/audio/Topic01/T01P49_1/T01P49_1";
var updateContentArray = [
    { time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Thank you for examining Baby Conrad. Let’s now return to the Blood Pressure module." }
];

function fnAudioFinishItemComp() {

}
//$("#id_sliderContainer, #clsPlayPauseBtn").hide();
//$("#clsAudioOnBtn, #clsAudioOffBtn, #clsAudioOffBtn").hide();
var __dataXml;
//$("#id_transcriptBox #transcripttext").html("");
$(document).ready(function(){
    var n = isInArray("M1L0T1P49_1", gCompPageArr);
            //  console.log(n);
            if (n == true) {
                enableNextBtn();
                // fnGlowNextBtn();
                fnDesiableNext(false);
            }
   // disableNextBtn();
    var ele = document.getElementsByTagName('div');
    for (var i = 0; i < ele.length; i++) {
        ele[i].setAttribute("unselectable", "on");
    }
    var __currentCase = '';
});
function isInArray(value, array) {
    return array.indexOf(value) > -1;
}
$('#pageClsResourcesPopup').hide();
$("#_clickImg0pdf").on("click", function (){
    disabledAllButtons();
    fnPauseAudio();
    //$('#pageClsResourcesPopup .pdflink').attr('src', 'pages/Topic01/pdf/sweden.pdf');
    $('.neonatal').html('Physical exam of the newborn');
    $("#pageClsResourcesPopup").show();
});
$("#id_glosCloseBtn").on("click", function (){
    $("#pageClsResourcesPopup").hide();
    enabledAllButtons();
    fnPlayAudio();
});


function checkEndTxt() {

    $("#TabPopup1 .feedbackFinal .return_case_button2_4").html("Return to the Blood Pressure module");

}

$(".return_case_button2_4").on("click", function () {
    
    fnJumpToPageByID("M1L0T1P50");
});

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
var gTotalPopups = 2;
var temp = "";

function fnClick() {

}


function fnCompletion() {
    console.log("end");
    gCompPageArr.push("M1L0T1P49_1");
    fnDesiableNext(false);
    var _getCount1 = clickTabCount + clickTabCount1;
    console.log("end" + _getCount1);
    if (_getCount1 >= 2) {
        console.log("start new");
        //enableNextBtn();
        fnAudioFinishItemComp();
    }
    //enableNextBtn();
    //fnAudioFinishItemComp();
    //}
}

function fnOnAudioComplete() {
    if (gAudioId == "startAudio") {
        //console.log("start audio");
        $(".ClsTab").removeClass("clsDisable");
        // we need to replace this
        //enableNextBtn();
        //fnAudioFinishItemComp();
        // we need to replace this
        $("#clsNxtBtn").removeClass("clsGlowNxtBtn").addClass("clsDisNxtBtn");
    } else {
        $("#idTick0" + selectedIndex).css({ "opacity": "1" });
        // $("#TabImage"+selectedIndex).css("backgroundImage","url('pages/images/Topic01/T01P02/EV01_0"+selectedIndex+"_"+selectedIndex+"_"+selectedIndex+".png"+"')");
        $("#clsTabTxt" + selectedIndex).css({ 'color': '#80848b' });
        $(".ClsTab").removeClass("clsDisable");
        //$("#TabImage"+selectedIndex).addClass("clsDisable");
        fnCompletion();
        if ($(".clsVisited").length === 2) {
            //$('.boxInst').css('opacity','1');
        }
    }
}

$('#pageClsResourcesPopup').hide();


$(".id_glosCloseBtn").click(function () {

    console.log("sdfsdfds");
    enabledAllButtons();

    //$("#pageClsResourcesPopup").hide();

    $("#pageClsResourcesPopup").hide();



    //$("#pageid_RefTitleBar").show()



});