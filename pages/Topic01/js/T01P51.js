
    manifest = [{
        src: 'pages/images/Topic01/T01P46/01.png',
        id: '1'
    },

    {
        src: 'pages/images/Topic01/T01P82/assessment.png',
        id: '2'
    }

];

var audioPath = "pages/audio/Topic01/T01P51/T01P51";



var currCue = 0;

var idd = 0;

var audplayer = document.getElementById('audioplayer');

var updateContentArray = [

    {
        time: "0.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "You will now be presented with 7 questions to test what you have learned in this module. You will be required to obtain an 80% or higher in order to receive completion for this module. Click Next to continue to the assessment section.",
        animation: [{
            target: "#idCircle100",
            duration: "0.5",
            activity: {
                'transform': 'matrix(1,0,0,1,0,0)'
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
            target: "#idPatch1",
            duration: "0.5",
            activity: {
                'width': '725px',
                'display': 'block'
            }
        }]
    },

    {
        time: "1.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#idCircle02",
            duration: "0.5",
            activity: {
                'display': 'block'
            }
        }]
    }, {
        time: "1.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".assessmentImage",
            duration: "0.5",
            activity: {
                'opacity': '1'
            }
        }]
    },

    {
        time: "1.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#idText1",
            duration: "0.5",
            activity: {
                'opacity': '1'
            }
        }]
    }
];

function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

    fnUpdatePageCompletionCounter(0);

    //fnUpdatePageCompletionCounter(7);

}

var __dataXml;

var __clickCount = 0;



$(document).ready(function() {

    $('#clsMnuBtn, #clsReplay, #clsBackBtn, #ToolBtn').css({
        "pointer-events": "all"
    });

    disableNextBtn();

    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }





    var n = isInArray("M1L0T1P82_1", gCompPageArr);

    console.log(n);

    if (n == true) {

        enableNextBtn();

        //fnGlowNextBtn();

        fnDesiableNext(false);

    }



    $('#pageClsResourcesPopup').hide();

    $(document).on("click", '._clickLink', function() {



        var num = $(this).attr('id').slice(10)



        console.log(referenceArr);



        $(this).addClass("_viewed");



        $('.pdflink').attr('src', referenceArr[num])



        $("#pageid_RefTitleBar").hide();



        $("#pageRefTitleBar_id").show();



    });

    $("#pageRefCloseBtn_id").click(function() {

        console.log("sdfsdfds");
        fnPlayAudio();
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

    $("#pageClsResourcesPopup").show();



});

$("#_clickImg0pdf1").on("click", function() {

    fnPauseAudio();

    $("#pageClsResourcesPopup").show();



});

function audioReset() {

    gAudioId = "";

    onTimelineEnd();

}







function fnCompletion() {



}









function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {

        enableNextBtn();

        fnAudioFinishItemComp();

        $('.boxInst').show();

        gCompPageArr.push("M1L0T1P51");

        audplayer.pause();

        audplayer.currentTime = 0;

    } else {



        fnCompletion();



    }

}
