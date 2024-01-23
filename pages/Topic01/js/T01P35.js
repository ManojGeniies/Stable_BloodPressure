manifest = [
    {
        src: 'pages/images/Topic01/T01P35/01.png',
        id: '1'
    }
];


var audioPath = "pages/audio/Topic01/T01P35/T01P35";
var updateContentArray = [
    {
        time: "0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "Now that we reviewed concepts related to cardiac output and the physical exam for shock, let’s review the four main causes of shock: hypovolemic, obstructive, cardiogenic, and septic shock. <br/> Click each tab to learn more."
    },
];


var currCue = 0;

var idd = 0;

function fnAudioFinishItemComp() {

    console.log("end")

    fnAudioFinishPageComp();

    fnUpdatePageCompletionCounter(0);

    //fnUpdatePageCompletionCounter(7);

}

var __dataXml;

var __clickCount = 0;

var __aIndex = 0;

var vid;

var __player;

var referencesURL;

var referenceArr = []



$(document).ready(function() {

    disableNextBtn();
    var ele = document.getElementsByTagName('div');
    for (var i = 0; i < ele.length; i++) {
        ele[i].setAttribute("unselectable", "on");
    }
    $("section").hide();
    //$("#section0").show();
    $("#section0").show();
    //$(".ClsTabItem").removeClass("clsActive");
    //$("#TabItem0").addClass("clsActive");

    $('.boxInst').hide();
    fnClick();

    var n = isInArray("M1L0T1P35", gCompPageArr);

    if (n == true) {

        enableNextBtn();

        // fnGlowNextBtn();;

        fnDesiableNext(false);

    }else{
        shock_four_main_case_MenuArr_length++;
    }

    gCompPageArr.push("M1L0T1P35");
    shockFourMainCases();



});



// });

//function for call page by ID

function fnJumpToPage(url) {

    disableHelpPopup();

    fnJumpToPageByID(url);

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

function fnClick() {

    $(".ClsTabItem").off("click").on("click", function() {
        
        var _aIndex = $(this).attr('cid');

        if(_aIndex == 1){
            fnJumpToPageByID("M1L0T1P35_1");
        }else if(_aIndex == 2) {
            fnJumpToPageByID("M1L0T1P35_2");
        }else if (_aIndex == 3){
            fnJumpToPageByID("M1L0T1P35_3");
        }else if(_aIndex == 4) {
            fnJumpToPageByID("M1L0T1P35_4");
        }
    });
}


function fnCompletion() {

    console.log($(".viewed").length + ":::" + $(".ClsTabItem").length);

    if ($(".viewed").length == $(".ClsTabItem").length) {

        $('.boxInst').show();

        enableNextBtn();

        fnAudioFinishItemComp();

        gCompPageArr.push("M1L0T1P35");
    }

    // }

}


function audioStop() {
    var audio = document.getElementById("audioplayer");
    audio.pause();
    audio.currentTime = 0;
}

function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {
        audioStop();
        $(".small_expand").show();
        fnCompletion();
    } else {

        //console.log("start end");

        //console.log($(".viewed").length+":::"+$(".ClsTabItem").length);
        audioStop();
        fnCompletion();
        console.log("end");
        //$("#clsTir0 > .small_expand").show();
        $(".small_expand").show();
        $("#idTick0" + selectedIndex).css({
            "opacity": "1"
        });

        $("#clsTabTxt" + selectedIndex).css({
            'color': '#80848b'
        });

        $(".ClsTab").removeClass("clsDisable");

        $("#TabImage" + selectedIndex).addClass("clsDisable");
        $(".small_expand").show();

        //fnCompletion();

        //if($(".clsVisited").length === 2){

        //$('.boxInst').css('opacity','1');

        //}

    }

}

// function endModule(){

// 	var _getCount = clickTabCount;

// 	if(_getCount>=4){

// 		$('.boxInst').show();

// 		audioReset();

// 		fnPlayItemAudio(7);

// 	}

// }





function seek(e) {

    var percent = e.offsetX / this.offsetWidth;

    __player.currentTime = percent * __player.duration;

    __progressBar.value = percent / 100;

}





function seektimeupdate() {



    cursecs = Math.floor(vid.currentTime)

    try {

        UpdateTheVideoTime(vid.currentTime)

        //added for slider progress

        var value = (100 / vid.duration) * vid.currentTime;

        $("#slider, #slider .ui-slider-handle ui-state-default").slider("value", value);

    } catch (e) {}

}



$(".clickToPrev").on("click", function() {

    endModule();

    audioReset();

    vid.load();

    vid.pause();

    __player.currentTime = 0;

});