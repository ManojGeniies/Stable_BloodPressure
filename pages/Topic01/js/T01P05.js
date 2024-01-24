
manifest = [

    {
        src: 'pages/images/Topic01/T01P05/img1.png',
        id: '1'
    },

    {
        src: 'pages/images/Topic01/T01P05/image_01_small.png',
        id: '2'
    },

    {
        src: 'pages/images/Topic01/T01P05/small_expand.png',
        id: '3'
    },

    {
        src: 'pages/images/Topic01/T01P05/small_expand_hover.png',
        id: '4'
    }

];



//var fruits = ["Banana", "Orange", "Apple", "Mango"];


//disableBackBtn();

var audioPath = "pages/audio/Topic01/T01P05/T01P05";

var __questionArray = [];



var currCue = 0;

var idd = 0;



var updateContentArray = [

    {
        time: "0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "After reviewing Baby Lily’s case, click Next to review Baby William’s progress since he was transported to a tertiary hospital for surgical consultation."
    },


];





function fnAudioFinishItemComp() {

    //console.log("end")

    fnAudioFinishPageComp();

    fnUpdatePageCompletionCounter(0);

    //fnUpdatePageCompletionCounter(0);

    //fnUpdatePageCompletionCounter(7);

}
var __dataXml;
$(document).ready(function () {
	//console.log("done");
	disableNextBtn();
	var ele = document.getElementsByTagName('div');
	for (var i = 0; i < ele.length; i++) {
		ele[i].setAttribute("unselectable", "on");
	}

	var n = isInArray("M1L0T1P5", gCompPageArr);
	if (n == true) {
		enableNextBtn();
		// fnGlowNextBtn();
		fnDesiableNext(false)




	}
	setTimeout(function () {
		//$("#clsNxtBtn").removeClass("clsGlowNxtBtn").addClass("clsDisNxtBtn");
	}, 500);
	var __currentCase = '';
});


function isInArray(value, array) {

    return array.indexOf(value) > -1;

}



function audioReset() {

    gAudioId = "";

    onTimelineEnd();

}




/*--------------------------- load screen content -------------------------------*/



function fnCompletion() {
	console.log("end");
	console.log("start new");
	enableNextBtn();
	fnAudioFinishItemComp();

}


function fnOnAudioComplete() {
	if (gAudioId == "startAudio") {
        enableNextBtn();
        fnAudioFinishItemComp();
        gCompPageArr.push("M1L0T1P5");
        expandIconAndClose();
        $(".boxInst").show();
        var aud = document.getElementById("audioplayer");
        aud.pause();
        aud.currentTime = 0;

		fnClick();
	} else {
		
	}
}

function expandIconAndClose() {
    $(".clickToEnlarge").show();
    $(".small_expand").show();
    $(".small_expand").on("click", function() {
        fnPauseAudio();
        //pauseAudio();

        $("#TabPopup5 .modal").show();

        $("#TabPopup5 .sectionTop").addClass("blur");

        $("#TabPopup5 .sectionContent").addClass("blur");


    });

    $(".closepopup").on("click", function() {
        fnPlayAudio();
        //playAudio();

        $("#TabPopup5 .modal").removeAttr("style");

        $("#TabPopup5 .sectionTop").removeClass("blur");

        $("#TabPopup5 .sectionContent").removeClass("blur");

    });

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