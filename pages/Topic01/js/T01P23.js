
manifest = [

    {
        src: 'pages/images/Topic01/T01P22/01.png',
        id: '1'
    },

    {
        src: 'pages/images/Topic01/T01P22/01_lg.png',
        id: '2'
    },

    {
        src: 'pages/images/Topic01/T01P22/02.png',
        id: '3'
    }

];



//var fruits = ["Banana", "Orange", "Apple", "Mango"];


//disableBackBtn();

var audioPath = "pages/audio/Topic01/T01P23/T01P23";

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
        transcript: "Now review Anya’s labor and delivery history, then click Next to continue."
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

	var n = isInArray("M1L0T1P23", gCompPageArr);
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
        gCompPageArr.push("M1L0T1P23");
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