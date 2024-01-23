manifest = [{
        src: 'pages/images/Topic01/T01P13/small_expand.png',
        id: '1'
    }

];

glossaryFuncPageLevel();
var audioPath = "pages/audio/Topic01/T01P13/T01P13";

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
        transcript: "Each component of the blood pressure measurement provides valuable information, therefore, evaluate systolic, diastolic, and mean blood pressure. If using an oscillometric cuff device, accuracy is improved if the infant is calm and not moving, the extremity is straight and at the level of the heart, and the arrow on the cuff overlies the artery beneath. Use the correct cuff size since a too-large cuff will underestimate the blood pressure, whereas a too-small cuff will overestimate the blood pressure.     Click the PDF icon to learn more about oscillometric blood pressure measurement."
    },
    {
        time: "1",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".ClsImage1",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'none'
            }
        }]
    },
    {
        time: "6.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist9",
            duration: "0.5",
            activity: {
                'display': 'inline-block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "7.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist10",
            duration: "0.5",
            activity: {
                'display': 'inline-block',
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
            target: ".showlist11",
            duration: "0.5",
            activity: {
                'display': 'inline-block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "9",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".clsPatch",
            duration: "0.5",
            activity: {
                'display': 'block',
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
            target: ".warning, .alertIconBox",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "11.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist1",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "15",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist2",
            duration: "0.5",
            activity: {
                'display': 'list-item',
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
            target: ".showlist3",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "19.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist4",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "24.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist5",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    

  

    {
        time: "26",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".ClsImage2",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "26",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist6",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "26.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist7",
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
            target: ".showlist8",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    
    
    {
        time: "33.5",
        carry: "",
        event: "",
        show: "#_clickImg0pdf",
        hide: "",
        transcript: "",
        animation: [{
            target: "#_clickImg0pdf",
            duration: "0.5",
            activity: {
                'opacity': '1',
                'display': 'block'
            }
        }]
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

$("#_clickImg0pdf").on("click", function() {
    fnPauseAudio();
    disabledAllButtons();
    $("#pageClsResourcesPopup").show();

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
