manifest = [{
        src: 'pages/images/Topic01/T01P13/small_expand.png',
        id: '1'
    }

];

glossaryFuncPageLevel();
var audioPath = "pages/audio/Topic01/T01P44/T01P44";

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
        transcript: "At times, an infusion of dopamine hydrochloride may be necessary to treat poor cardiac contractility and hypotension. <br/> Dopamine is a potent inotrope that must be given by continuous infusion. The usual starting dose is between 5 and 10 micrograms per kilogram per minute, with a dose range between 5 and 20 micrograms per kilogram per minute. <br/> Never give dopamine in an umbilical artery catheter or any other arterial site. Whenever possible, infuse dopamine through a central line and monitor the blood pressure and heart rate closely. <br/> Click on the links below to learn more about dopamine administration and the rules for dopamine infusion."
    },
    {
        time: "5.0",
        carry: "",
        event: "",
        show: "#boxC1",
        hide: "",
        transcript: "",
        animation: [{
            target: "#boxC1",
            duration: "0.5",
            activity: {
                'opacity': '1',
                'display': 'block'
            }
        }]
    },
    {
        time: "11.0",
        carry: "",
        event: "",
        show: "#boxC2",
        hide: "",
        transcript: "",
        animation: [{
            target: "#boxC2",
            duration: "0.5",
            activity: {
                'opacity': '1',
                'display': 'block'
            }
        }]
    },
    {
        time: "13.0",
        carry: "",
        event: "",
        show: "#boxC3",
        hide: "",
        transcript: "",
        animation: [{
            target: "#boxC3",
            duration: "0.5",
            activity: {
                'opacity': '1',
                'display': 'block'
            }
        }]
    },
    {
        time: "23.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [
            {
                target: "#idPatchMain",
                duration: "0.5",
                activity: {
                    'opacity': '1',
                    'display': 'block'
                }
            },
            {
                target: ".warning",
                duration: "0.5",
                activity: {
                    'opacity': '1',
                    'display': 'block'
                }   
            },
            {
                target: ".showlist1",
                duration: "0.5",
                activity: {
                    'opacity': '1',
                    'display': 'block'
                }   
            },
            {
                target: ".showlist2",
                duration: "0.5",
                activity: {
                    'opacity': '1',
                    'display': 'block'
                }   
            }
        ]
    },
    {
        time: "28.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [
            {
                target: ".showlist3",
                duration: "0.5",
                activity: {
                    'opacity': '1',
                    'display': 'block'
                }   
            }
        ]
    },
    {
        time: "32.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [
            {
                target: ".showlist4",
                duration: "0.5",
                activity: {
                    'opacity': '1',
                    'display': 'block'
                }   
            }
        ]
    },
    {
        time: "35.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [
            {
                target: "#_clickImg0pdf",
                duration: "0.5",
                activity: {
                    'opacity': '1',
                    'display': 'block'
                }   
            }
        ]
    },
    {
        time: "35.3",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [
            {
                target: "#_clickImg0pdf1",
                duration: "0.5",
                activity: {
                    'opacity': '1',
                    'display': 'block'
                }   
            }
        ]
    }

];



function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

    fnUpdatePageCompletionCounter(0);

    //fnUpdatePageCompletionCounter(7);

}

function audioStop() {
    var audio = document.getElementById("audioplayer");
    audio.pause();
    audio.currentTime = 0;
}

var __dataXml;

var __clickCount = 0;



$(document).ready(function() {

    disableNextBtn();

    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }

    var n = isInArray("M1L0T1P13", gCompPageArr);

    console.log(n);

    if (n == true) {

        enableNextBtn();

        // fnGlowNextBtn();

        fnDesiableNext(false);

    }



    $('#pageClsResourcesPopup').hide();

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

});



function isInArray(value, array) {

    return array.indexOf(value) > -1;

}

$("#_clickImg0pdf, #_clickImg0pdf1").on("click", function() {
    var _getCurId = $(this).attr("aCur")
    fnPauseAudio();
    disabledAllButtons();
    $("#pageClsResourcesPopup").show();
    $(".pageReftitleText_id").hide();
    $("#pageReftitleText_id"+_getCurId).show();
    $(".pdflink").hide();
    $("#pdflink_"+_getCurId).show();
});
$("#id_glosCloseBtn").click(function() {
    enabledAllButtons();
    fnPlayAudio();
    //$("#pageClsResourcesPopup").hide();
    $("#pageClsResourcesPopup").hide();
    //$("#pageid_RefTitleBar").show()
});

function audioReset() {

    gAudioId = "";

    onTimelineEnd();

}



/* function fnPlaySectionAudio(gCurrentIndex){

    indexAudio = (gCurrentIndex);

    audioId = "audio_"+gCurrentIndex;

    fnHideShowAudioPlayer( false );

    updateContentArray = eval("popupSectionArray"+(gCurrentIndex));

    initAudioPlayer(gItemAudioPath[gCurrentIndex])

} */



function fnCompletion() {

    // console.log("end");

    //if($(".clsVisited").length==gTotalPopups){

    //enableNextBtn();

    //fnAudioFinishItemComp();

    //}

}



$(".small_expand").on("click", function() {



    if (!fnPauseAudio()) {

        console.log(true);

        fnPauseAudio()

    } else {

        playPauseAudio();

        console.log(false);

    }


    var i = $(this).attr("id").slice(8);

    $("#case_study_popup" + i).show();

    $("#imgPopup" + i).show();

    $(".mainContainer").addClass("blur");

    //$(".sectionContent").addClass("blur");

});



$(".closepopup").on("click", function() {

    // audioReset();

    var __aIndex = $(this).attr("id").slice(8);

    if (!fnPauseAudio()) {

        console.log(true);

        playPauseAudio();

    }



    $(".modal").removeAttr("style");

    $(".mainContainer").removeClass("blur");

    //$(".sectionContent").removeClass("blur");

});

function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {
        enableNextBtn();
        fnAudioFinishItemComp();
        $('.boxInst').css('display', 'block');
        $('.small_expand').css('display', 'block').css('opacity', '1');
        $('.clickToEnlarge').css('display', 'block').css('opacity', '1');
        gCompPageArr.push("M1L0T1P13");
        audioStop();

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
