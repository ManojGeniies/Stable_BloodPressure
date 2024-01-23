    manifest = [
        {
            src: 'pages/images/Topic01/T01P43/07.png',
            id: '1'
        }
    ];

    glossaryFuncPageLevel();

    var audioPath = "pages/audio/Topic01/T01P43/T01P43_2";
    var updateContentArray = [
        {
            time: "0.0",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "Treatment of cardiogenic shock is aimed at correcting the underlying problems that negatively affect heart function.<br/>These include hypoxia, acidosis, hypotension, arrhythmias, infection, electrolyte and/or mineral imbalances, hypoglycemia, and hypothermia."
        },
        {
            time: "0.0",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [
                {
                    target: ".showlist25",
                    duration: "0.5",
                    activity: {
                    'display': 'block',
                    'opacity':'1'
                    }
                },
                {
                    target: "#clsSubImage7",
                    duration: "0.5",
                    activity: {
                    'display': 'block',
                    'opacity':'1'
                    }
                }
            ]
        },
        {
            time: "6.5",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist26",
                duration: "0.5",
                activity: {
                    'display': 'block',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "7.3",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist27",
                duration: "0.5",
                activity: {
                    'display': 'block',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "8.5",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist28",
                duration: "0.5",
                activity: {
                    'display': 'block',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "10",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist29",
                duration: "0.5",
                activity: {
                    'display': 'block',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "11",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist30",
                duration: "0.5",
                activity: {
                    'display': 'block',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "12",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist31",
                duration: "0.5",
                activity: {
                    'display': 'block',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "13.5",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist32",
                duration: "0.5",
                activity: {
                    'display': 'block',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "17",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist33",
                duration: "0.5",
                activity: {
                    'display': 'block',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "18",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist34",
                duration: "0.5",
                activity: {
                    'display': 'block',
                    'opacity':'1'
                }
            }]
        }  
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

$(document).ready(function(){

    disableNextBtn();
    var ele = document.getElementsByTagName('div');
    for (var i = 0; i < ele.length; i++) {
        ele[i].setAttribute("unselectable", "on");
    }
    $("section").hide();
    $("#section2").show();
    $('.boxInst').hide();
    fnClick();
    $("#pageid_RefCloseBtn").click(function() {
        $("#pageClsResourcesPopup").hide();
    });

    shockTreatment();
    
    var n = isInArray("M1L0T1P43_3", gCompPageArr);

    if (n == true){
        enableNextBtn();
        fnDesiableNext(false);
    }else{
        shock_treatment_MenuArr_length++;
    }

    gCompPageArr.push("M1L0T1P43_3");

    $(".videolink").on("click", function() {

        if (!fnPauseAudio()) {
            fnPauseAudio()
        } else {
            playPauseAudio();
        }

        if ($(this).attr("id") == "clickImg3") {
            $("#myVideo source").attr("src", "pages/video/Subgaleal_hemorrhage.mp4");
            $(".popover").addClass("videoClose1");
        } 

        vid = document.getElementById("myVideo");
        vid.load()
        vid.play()

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

        $('#pageReftitleText_id').show();
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
            fnJumpToPageByID("M1L0T1P43_1");
        }else if(_aIndex == 2) {
            fnJumpToPageByID("M1L0T1P43_2");
        }else if (_aIndex == 3){
            fnJumpToPageByID("M1L0T1P43_3");
        }else if(_aIndex == 4) {
            fnJumpToPageByID("M1L0T1P43_4");
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

    console.log($(".viewedClick").length + ":::" + $(".ClsTabItem").length);

    if ($(".viewedClick").length == $(".ClsTabItem").length) {

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