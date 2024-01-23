manifest = [
    {
        src: 'pages/images/Topic01/T01P35/14_lg.png',
        id: '1'
    },
    {
        src: 'pages/images/Topic01/T01P35/14.png',
        id: '2'
    }
];

glossaryFuncPageLevel();


    var audioPath = "pages/audio/Topic01/T01P35/T01P35_2";
    var updateContentArray = [

        {
            time: "0.0",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "Cardiogenic or heart failure shock results when the heart muscle functions poorly. Cardiogenic shock may occur in infants with a history of intrapartum or postpartum asphyxia, hypoxia and/or metabolic acidosis, bacterial or viral infections, severe respiratory distress that requires assisted ventilation, severe hypoglycemia, severe metabolic and/or electrolyte disturbances, and arrhythmias."
        },
        {
            time: "0.5",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".clsSubImageThrd",
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
                target: ".showlist20",
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
                target: ".showlist21",
                duration: "0.5",
                activity: {
                    'display': 'list-item',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "9.5",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist22",
                duration: "0.5",
                activity: {
                    'display': 'list-item',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "12.5",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist23",
                duration: "0.5",
                activity: {
                    'display': 'list-item',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "15.5",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist24",
                duration: "0.5",
                activity: {
                    'display': 'list-item',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "18.5",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist25",
                duration: "0.5",
                activity: {
                    'display': 'list-item',
                    'opacity':'1'
                }
            }]
        },
        
    
        {
            time: "22.5",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist26",
                duration: "0.5",
                activity: {
                    'display': 'list-item',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "24.8",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist27",
                duration: "0.5",
                activity: {
                    'display': 'list-item',
                    'opacity':'1'
                }
            }]
        },
        {
            time: "28.5",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".showlist28",
                duration: "0.5",
                activity: {
                    'display': 'list-item',
                    'opacity':'1'
                }
            }]
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
    $("#section2").show();
    //$(".ClsTabItem").removeClass("clsActive");
    //$("#TabItem0").addClass("clsActive");

    $('.boxInst').hide();
    fnClick();
    $("#pageid_RefCloseBtn").click(function() {
        $("#pageClsResourcesPopup").hide();
    });

    var n = isInArray("M1L0T1P35_3", gCompPageArr);

    if (n == true) {

        enableNextBtn();

        // fnGlowNextBtn();;

        fnDesiableNext(false);

    }else{
        shock_four_main_case_MenuArr_length++;
    }

    gCompPageArr.push("M1L0T1P35_3");
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