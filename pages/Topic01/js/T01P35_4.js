manifest = [
    {
        src: 'pages/images/Topic01/T01P35/15_lg.png',
        id: '1'
    },
    {
        src: 'pages/images/Topic01/T01P35/15.png',
        id: '2'
    }
];

glossaryFuncPageLevel();

    var audioPath = "pages/audio/Topic01/T01P35/T01P35_3";
    var updateContentArray = [

        {
            time: "0.0",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "Severe infection may lead to a type of shock known as septic or distributive shock. In the presence of bacterial infection, a host of complicated systemic reactions occur that result in circulatory insufficiency.  A hallmark of this type of shock is hypotension that responds very poorly to fluid resuscitation.   Loss of vascular integrity allows fluid to leak out of the blood vessels and into the tissue spaces, which is also a cause of concurrent hypovolemic shock.   Poor heart contractility leads to poor tissue perfusion and oxygenation, and the risk for organ injury and death is very high. Often, these infants require blood pressure medication to treat the severe hypotension."
        },
        {
            time: "0.5",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".clsSubImageFour",
                duration: "0.5",
                activity: {
                    'display': 'block',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "0.5",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist29",
                duration: "0.5",
                activity: {
                    'display': 'list-item',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "5.5",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist30",
                duration: "0.5",
                activity: {
                    'display': 'list-item',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "14.5",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist31",
                duration: "0.5",
                activity: {
                    'display': 'list-item',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "20.5",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist32",
                duration: "0.5",
                activity: {
                    'display': 'list-item',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "30.5",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist33",
                duration: "0.5",
                activity: {
                    'display': 'list-item',
                    'opacity':'1'
                }
            }]
        }
        
    ];





var currCue = 0;

var idd = 0;

var popupContentArray0 = [];


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
    $("#section3").show();
    //$(".ClsTabItem").removeClass("clsActive");
    //$("#TabItem0").addClass("clsActive");

    $('.boxInst').hide();
    fnClick();
    $("#pageid_RefCloseBtn").click(function() {
        $("#pageClsResourcesPopup").hide();
    });

   

    var n = isInArray("M1L0T1P35_4", gCompPageArr);

    if (n == true) {

        enableNextBtn();

        // fnGlowNextBtn();;

        fnDesiableNext(false);

    }else{
        shock_four_main_case_MenuArr_length++;
    }

    gCompPageArr.push("M1L0T1P35_4");
    shockFourMainCases();

    $(".videolink").on("click", function() {

        if (!fnPauseAudio()) {

            fnPauseAudio()

        } else {

            playPauseAudio();

        }
        //console.log();
        if ($(this).attr("id") == "clickImg3") {
            $("#myVideo source").attr("src", "pages/video/Subgaleal_hemorrhage.mp4");

            // console.log(videoTranscript[0].trans +"-----------------------------------------")
            //$("#transcripttext").html(videoTranscript[0].trans);
            $(".popover").addClass("videoClose1");
        } 

        vid = document.getElementById("myVideo");
        vid.load()
        vid.play();
        $("#case_study_popup1").show();


    });


    $(document).on("click", '._clickLink', function() {

        var num = $(this).attr('id').slice(10)

        //console.log(referenceArr);

        $(this).addClass("_viewed");

        //$('.pdflink').attr('src', referenceArr[num])

        $("#pageid_RefTitleBar").hide();

        $("#pageRefTitleBar_id").show();

    });



    $("#id_glosCloseBtn").click(function() {
        enabledAllButtons();
        //$("#pageClsResourcesPopup").hide();
        $("#pageClsResourcesPopup").hide();

        //$("#pageid_RefTitleBar").show()

    });

    $("#_clickImg0pdf").on("click", function() {

        fnPauseAudio();


        disabledAllButtons();
        $(".pdflink").hide();
        $("#p82_1").show();
        //  $('#pageClsResourcesPopup .pdflink').attr('src', 'pages/Topic01/pdf/uvc_uac.pdf');

        $('#pageReftitleText_id').html('Scalp swellings: Caput succedaneum, Cephalohematoma, Subgaleal hemorrhage');

        $("#pageClsResourcesPopup").show();
        $("#p82_1").show();


    });


    // $("#RefTitleBar_id").click(function(){

    // 	$("#pageid_RefTitleBar").hide();

    // });



});



$('#pageClsResourcesPopup').hide();

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

$(".small_expand").on("click", function() {
    $(".modalTxtImg").hide();
    $(".modalTxtImg").attr("id", "imgPopup" + $(this).attr("ccid"));
    $(".modalContent").attr("id", "imgPopupCnt" + $(this).attr("ccid"));
    $("#imgPopup"+$(this).attr("ccid")).show();
    $("#case_study_popup").show();
    $(".mainContainer").addClass("blur");

    
});


$("#id_glosCloseBtn").click(function() {
    console.log("clicked close");

    fnPlayAudio()
    enabledAllButtons();
    //$("#pageClsResourcesPopup").hide();
    // $("#pageClsResourcesPopup").hide();
    $("#pageid_RefTitleBar").show()
});


$(".closepopup").on("click", function() {


    $(".modal").removeAttr("style");
    $(".mainContainer").removeClass("blur");

});

$(".closebutton").on("click", function() {

    $(".popover").removeClass("videoClose1");
    $(".popover").removeClass("videoClose2");

    if (!fnPauseAudio()) {

        console.log(true);

        playPauseAudio();

    }


    $("#section" + __aIndex + " .modal").removeAttr("style");

    $("#section" + __aIndex + " .sectionTop").removeClass("blur");

    $("#section" + __aIndex + " .sectionContent").removeClass("blur");

    $('#id_sliderContainer').show()

    // $('#clsAudioOffBtn').show()

    $('#clsAudioOnBtn').show()

    $("#clsPlayPauseBtn").show()

});





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
        console.log("start audio");
        console.log($("a.tabSection").hasClass("active"));
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