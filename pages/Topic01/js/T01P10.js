manifest = [
    {
        src: 'pages/images/Topic01/T01P10/image_01_01.png',
        id: '1'
    },
    {
        src: 'pages/images/Topic01/T01P10/image_01_01_large.png',
        id: '2'
    },
    {
        src: 'pages/images/Topic01/T01P10/image_01_02.png',
        id: '3'
    },
    {
        src: 'pages/images/Topic01/T01P10/image_01_02_large.png',
        id: '4'
    },
    {
        src: 'pages/images/Topic01/T01P10/image_01_03.png',
        id: '5'
    },
    {
        src: 'pages/images/Topic01/T01P10/image_01_03_large.png',
        id: '6'
    },
    {
        src: 'pages/images/Topic01/T01P10/image_01_04.png',
        id: '7'
    },
    {
        src: 'pages/images/Topic01/T01P10/image_01_04_large.png',
        id: '8'
    },
    {
        src: 'pages/images/Topic01/T01P10/image_01_05.png',
        id: '9'
    },
    {
        src: 'pages/images/Topic01/T01P10/image_01_05_large.png',
        id: '10'
    }
];


var audioPath = "pages/audio/Topic01/T01P10/T01P10_0";


var currCue = 0;

var idd = 0;

var popupContentArray0 = [];


var updateContentArray = [

    {
        time: "0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "Now let’s review how to perform a physical exam to evaluate an infant for signs of shock.<br/> To evaluate capillary refill time, press firmly for at least a few seconds over the upper chest and count how long it takes for the skin to refill with blood.<br/> Normal capillary refill times in infants are less than or equal to 3 seconds and in older children, less than or equal to 2 seconds. Compare this finding by pressing over the knee area.<br/> It can be normal for the lower extremity capillary refill time to be 1 second longer than the upper body. <br/> Click each tab to learn more."
    },
    {
        time: "9",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#clsSubImage0",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "11.8",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#clsSubImage1",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "13",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#clsSubImage3",
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
            target: "#clsBox1",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "28",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#clsSubImage4",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "29",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#clsSubImage5",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "31",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#clsBox2",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    }
];

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
    $(".ClsTabItem").removeClass("clsActive");
    $("#TabItem0").addClass("clsActive");

    $('.boxInst').hide();
    fnClick();
    $("#pageid_RefCloseBtn").click(function() {
        $("#pageClsResourcesPopup").hide();
    });
    

    var n = isInArray("M1L0T1P10", gCompPageArr);
    if (n == true) {
        enableNextBtn();
        // fnGlowNextBtn();;
        fnDesiableNext(false);
    }else{
        physical_exam_signs_shock_MenuArr_length++;
    }
    gCompPageArr.push("M1L0T1P10");

    physicalExamForSignsOfShock();

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
        $(".ClsTabItem").removeClass("clsActive");
        __aIndex = $(this).attr('id').slice(7);

        if(__aIndex == 0){
            fnJumpToPageByID("M1L0T1P10");
        }else if(__aIndex == 1) {
            fnJumpToPageByID("M1L0T1P10_1");
        }else if (__aIndex == 2){
            fnJumpToPageByID("M1L0T1P10_2");
        }else if(__aIndex == 3) {
            fnJumpToPageByID("M1L0T1P10_3");
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





// $("#myVideo" ).click(function() {

// 	__videoPlayingCustom = true;

// 	//console.log($("#myvideo").get(0));

// 	audioReset();

// 	vid = document.getElementById("myVideo");

// 	$('#myVideo').attr('controls',false);

// 	//console.log(vid.get(0).pause());

// 	// 	vid.load();

// 	// 	vid.play();

// 	// 	vid.addEventListener('ended', function(e){

// 	// 		videoPlaying = false;

// 	// 		videoEnd = true;

// 	// 		fnAudioFinishPageComp();

// 	// 	});

// 	// 	vid.addEventListener("timeupdate",seektimeupdate,false);

// 	// 	__player = document.querySelector("video");

// 	// 	__progressBar = document.querySelector("#slider");

// 	// 	__progressBar.addEventListener("click", seek);

// 	// 	$('#clsPlayPauseBtn').removeClass("clsPlayDisable").addClass("clsPause");

// 	// 	$("#clsPlayPauseBtn").click(function() {

// 	// 	if(__videoPlayingCustom==true){

// 	// 		if($(this).hasClass("clsPlay")){

// 	// 			console.log("pause");

// 	// 			vid.play();

// 	// 			$('#clsPlayPauseBtn').removeClass("clsPlay").addClass("clsPause").attr("title","Pause");

// 	// 		}else{

// 	// 			$('#clsPlayPauseBtn').removeClass("clsPause").addClass("clsPlay").attr("title","Play");;

// 	// 			console.log("play");

// 	// 			vid.pause();

// 	// 		}

// 	// 	}

// 	// });

// 	playPauseAudio();

//

// });

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

    //console.log($(".viewedClick").length + ":::" + $(".ClsTabItem").length);

   /*  if ($(".viewedClick").length == $(".ClsTabItem").length) {

        $('.boxInst').show();

        enableNextBtn();

        fnAudioFinishItemComp();

        gCompPageArr.push("M1L0T1P10");
    }
    */
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