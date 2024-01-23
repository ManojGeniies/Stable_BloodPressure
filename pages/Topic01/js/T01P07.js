manifest = [{ src: 'pages/images/Topic01/T01P07/Icon01.png', id: '1' }];

var audioPath = "pages/audio/Topic01/T01P07/T01P07";
var updateContentArray = [
    { time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Thank you for reviewing the case information for each baby. You will be caring for several of them later in the module. Click the PDF icon to review a complete Neonatal History and Physical Exam worksheet." }
];

function fnAudioFinishItemComp() {

}
var __dataXml;
$(document).ready(function () {
    //console.log("done");

    //disableNextBtn();
    var ele = document.getElementsByTagName('div');
    for (var i = 0; i < ele.length; i++) {
        ele[i].setAttribute("unselectable", "on");
    }


    checkEndTxt();
    var __currentCase = '';
});

$('#pageClsResourcesPopup').hide();
$("#_clickImg0pdf").on("click", function () {
    disabledAllButtons();
    fnPauseAudio();
    //$('#pageClsResourcesPopup .pdflink').attr('src', 'pages/Topic01/pdf/sweden.pdf');
    $('.neonatal').html('Physical exam of the newborn');
    $("#pageClsResourcesPopup").show();
});
$("#id_glosCloseBtn").on("click", function () {
    $("#pageClsResourcesPopup").hide();
    enabledAllButtons();
    fnPlayAudio();
});


// $("#_clickImg0pdf").on("click", function() {
//     console.log("hello")
//         // $('#pageClsResourcesPopup .pdflink').attr('src', 'pages/Topic01/pdf/Page17.pdf');

//     // $('#pageReftitleText_id').html('Case Presentation - Neonatologist from Sweden');
//      disabledAllButtons();
//     $("#pageClsResourcesPopup").show();

// });


function checkEndTxt() {

    $("#TabPopup1 .feedbackFinal .return_case_button2_4").html("Return to the Blood Pressure module");

}

$(".return_case_button2_4").on("click", function () {

    //gCompPageArr.splice($.inArray("M1L0T1P13", gCompPageArr), 1);
    gCompPageArr.push("M1L0T1P7");
    //   gCompPageArr.push("M1L0T1P2");

    fnJumpToPageByID("M1L0T1P8");

    __curConCordVisit = 1;

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
    //audioReset();
    //console.log("end");
    //if($(".clsVisited").length==gTotalPopups){
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