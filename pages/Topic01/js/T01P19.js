manifest = [{ src: 'pages/images/Topic01/T01P19/phone.png', id: '1' }


];


var audioPath = "pages/audio/Topic01/T01P19/T01P19";





var currCue = 0;


var idd = 0;





var updateContentArray = [


	{ time: "0", carry: "", event: "", show: "", hide: "", transcript: "You are getting an incoming call. Click on the phone icon to answer the call." },





	{ time: "0.2", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".ringingPhone", duration: "0.3", activity: { 'opacity': '1', 'display': 'block' } }] },


	{ time: "0.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".ringIcon", duration: "0.1", activity: { 'opacity': '1', 'display': 'block' } }] },

	{ time: "4.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".clicktoanswer", duration: "0.3", activity: { 'display': 'block' } }] }



];



function fnAudioFinishItemComp() {


	// fnAudioFinishPageComp();


	fnUpdatePageCompletionCounter(0);


	//fnUpdatePageCompletionCounter(7);


}

function audioStop() {
	var audplayer = document.getElementById('audioplayer');
	audplayer.pause();
	audplayer.currentTime = 0;
}

var __dataXml;


var __clickCount = 0;


var aud = document.getElementById("audioplayer");


$(document).ready(function () {


	disableNextBtn();


	var ele = document.getElementsByTagName('div');


	for (var i = 0; i < ele.length; i++) {


		ele[i].setAttribute("unselectable", "on");


	}








	var n = isInArray("M1L0T1P19", gCompPageArr);





	if (n == true) {


		enableNextBtn();


		// fnGlowNextBtn();


		fnDesiableNext(false);


	}

	// $('.ringingPhone')
	// 	.on("click", function () {

	// 		$('#section1').fadeOut();

	// 		$('#section0').fadeIn();

	// 		fnPlaySectionAudio(0);

    //     });
        
        $(".ringingPhone").on("click", function () {

            //gCompPageArr.splice($.inArray("M1L0T1P13", gCompPageArr), 1);
            gCompPageArr.push("M1L0T1P19");
            //   gCompPageArr.push("M1L0T1P2");
        
            fnJumpToPageByID("M1L0T1P20");
        
            __curConCordVisit = 1;
        
        });



});





function isInArray(value, array) {


	return array.indexOf(value) > -1;


}





function audioReset() {


	gAudioId = "";


	onTimelineEnd();


}





function fnPlaySectionAudio(gCurrentIndex) {

	indexAudio = (gCurrentIndex);

	audioId = "audio_" + gCurrentIndex;

	gAudioId = audioId;



	fnHideShowAudioPlayer(false);

	updateContentArray = eval("updateContentArray" + (gCurrentIndex));

	initAudioPlayer(gItemAudioPath[gCurrentIndex])

}





function fnCompletion() {


	// console.log("end");


	//if($(".clsVisited").length==gTotalPopups){


	//enableNextBtn();


	//fnAudioFinishItemComp();


	//}


}






function fnOnAudioComplete() {


	if (gAudioId == "startAudio") {

		audioStop()



		aud.pause();


		aud.currentTime = 0;

		$('.blocker')
			.hide();



	} else {

		audioStop()

		enableNextBtn();

		fnAudioFinishItemComp();

		$('.boxInst').show();

		fnCompletion();


		aud.pause();

		aud.currentTime = 0;


	}


}

