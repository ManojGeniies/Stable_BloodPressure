manifest = [{
        src: 'pages/images/Topic01/T01P15/small_expand.png',
        id: '1'
    }

];

glossaryFuncPageLevel();
var audioPath = "pages/audio/Topic01/T01P15/T01P15";

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
        transcript: "A narrow or low pulse pressure may be observed when cardiac output is low because of tamponade from air or pericardial fluid, lung hyperinflation that compresses the heart, tension pneumothorax, and heart failure with low systemic output."
    },
    

    {
        time: "0",
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
        time: "0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist0",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "0",
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
        time: "5",
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
        time: "7",
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
        time: "7.5",
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
        time: "7.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#clsSub0",
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
            target: ".showlist4",
            duration: "0.5",
            activity: {
                'display': 'list-item',
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
            target: "#clsSub1",
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
            target: ".showlist5",
            duration: "0.5",
            activity: {
                'display': 'list-item',
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
            target: "#clsSub2",
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
            target: ".showlist6",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
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

    var n = isInArray("M1L0T1P15", gCompPageArr);

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




function fnCompletion() {



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
        gCompPageArr.push("M1L0T1P15");
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
