manifest = [{
        src: 'pages/images/Topic01/T01P09/small_expand.png',
        id: '1'
    },

    {
        src: 'pages/images/Topic01/T01P09/small_expand_hover.png',
        id: '2'
    },

    {
        src: 'pages/images/Topic01/T01P09/img_02_small.png',
        id: '3'
    },

    {
        src: 'pages/images/Topic01/T01P09/01.png',
        id: '4'
    }

];

var audioPath = "pages/audio/Topic01/T01P09/T01P09";

//var gItemAudioPath=["pages/audio/Topic01/T01P17/T01P17"

//];



var currCue = 0;

var idd = 0;



var updateContentArray = [

    {
        time: "0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "Let’s review a few key points from the video that  you just watched.  The first is that hypotension is a late and dangerous sign of cardiac decompensation. The goal of treatment is to treat shock before the infant progresses to a hypotensive state. The second is that the infant is unable to increase the amount of blood pumped with each heart contraction. Instead, the infant will increase heart rate to increase cardiac output. The third is that the heart muscle weakens from lack of oxygen and the negative effects of acidosis. The fourth is that heart contractility is impaired if there is insufficient preload or excessive afterload. Preload refers to the amount of blood in the heart just before ventricular contraction. Afterload refers to the pressure that the heart has to pump against in order to propel blood forward through the aorta and pulmonary artery. And finally, the heart cells function best when the blood gas is normal and when there are normal amounts of glucose, sodium, potassium, chloride, calcium, and magnesium in the blood."
    },

    {
        time: "6",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#showList_0",
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
            target: "#showList_1",
            duration: "0.5",
            activity: {
                'display': 'block',
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
            target: "#showList_2",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },

    {
        time: "29.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#showList_3",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },

    {
        time: "36",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#showList_4",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    
    {
        time: "41",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#showList_5",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    
    {
        time: "42",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#showList_6",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    
    {
        time: "57.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#showList_7",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },

];

glossaryFuncPageLevel();

function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

    fnUpdatePageCompletionCounter(0);

    //fnUpdatePageCompletionCounter(7);

}

var __dataXml;

var __clickCount = 0;



$(document).ready(function() {

    disableNextBtn();

    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }



    /* 	$(".clsEnaBackBtn").on("click", function () {

            console.log('clicked');

            fnJumpToPageByID("M1L0T1P17");

        }); */

    var n = isInArray("M1L0T1P09", gCompPageArr);

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





function fnCompletion() {

}



$(".small_expand").on("click", function() {
    pauseAudio()

    $(".modalTxtImg").hide();

    var i = $(this).attr("id").slice(8);

    $("#case_study_popup" + i).show();

    $("#imgPopup" + i).show();

    $(".mainContainer").addClass("blur");

    //$(".sectionContent").addClass("blur");

});



$(".closepopup").on("click", function() {
    playAudio()
        // audioReset();

    var __aIndex = $(this).attr("id").slice(8);

    $(".modal").removeAttr("style");

    $(".mainContainer").removeClass("blur");

    //$(".sectionContent").removeClass("blur");

});

function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {

        enableNextBtn();

        fnAudioFinishItemComp();
        $('.boxInst').css('display', 'block');

        $('.small_expand').css('display', 'block');

        gCompPageArr.push("M1L0T1P16_16");

    } else {

        $("#idTick0" + selectedIndex).css({
            "opacity": "1"
        });

        $("#clsTabTxt" + selectedIndex).css({
            'color': '#80848b'
        });

        $(".ClsTab").removeClass("clsDisable");

        $("#TabImage" + selectedIndex).addClass("clsDisable");

        fnCompletion();

        if ($(".clsVisited").length === 2) {



        }

    }

}

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
