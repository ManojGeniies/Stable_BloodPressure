manifest = [{
	src: 'pages/images/Topic01/T01P08/video.png',
	id: '1'
}];
$("#id_sliderContainer, #clsPlayPauseBtn").hide();
$("#clsAudioOnBtn, #clsAudioOffBtn, #clsAudioOffBtn").hide();

var audioPath = "pages/audio/Topic01/T01P08/T01P08";
//var gItemAudioPath=["pages/audio/Topic01/T01P16/T01P16_8"];
var currCue = 0;
var idd = 0;
var __questionArray = [];
var __videoPlayingCustom = false;
var __videoTxt = 'Let’s start our discussion about shock by watching a video.<br>Shock is a life-threatening condition that requires prompt recognition and treatment. The primary issue that leads to shock is inadequate delivery of oxygen to the tissues. And when this happens, anaerobic metabolism leads to increased lactic acid production - which lowers the pH in the blood.<br>This is a vicious cycle of energy failure where the heart muscle weakens from lack of oxygen and the negative effects of acidosis.<br>In the early stages of shock, the infant will activate a complex series of responses for the purpose of maintaining normal blood pressure and preserving blood flow to the heart, brain and adrenal glands. This response is not without consequence however, because blood is diverted away from what the body considers non-vital organs, that is, the liver, kidneys, gastrointestinal tract, muscles, and skin.<br>Let’s next review the following concepts: cardiac output, heart rate, stroke volume, preload, afterload, and contractility.<br>Cardiac output is the volume of blood ejected by the heart each minute, so the formula for cardiac output is heart rate multiplied by stroke volume.<br>Heart rate is measured by the number of beats per minute and stroke volume is the amount of blood that is ejected with each heartbeat or contraction of the ventricles.<br>Stroke volume is influenced by 3 factors: preload, afterload and contractility.<br>Preload is the amount of blood in the heart at the end of diastole, just before ventricular contraction. The amount of preload, or filling volume, is determined by the amount of blood returning to the heart from the body and lungs.<br>Afterload is the pressure that the heart must generate to send blood forward into the aorta and pulmonary artery. Afterload is increased when an infant has severe systemic or pulmonary hypertension.<br>Another cause of increased afterload is the infant with critical coarctation of the aorta. When the ductus arteriosus closes, the aorta will narrow and increase pressure all the way backwards from the coarctation to the left ventricle.  The left ventricle will try to propel blood through the aorta, but because of increased afterload secondary to resistance at the coarctation, the left ventricle will eventually weaken and fail.  Treatment in this scenario is directed at opening the ductus arteriosus with a Prostaglandin E1 infusion.<br>Contractility is a measure of how well the heart squeezes with each beat. Factors that can impair contractility include inadequate preload, presence of infection, heart immaturity, and hypoxic insults. The metabolic environment is also important because the heart muscle and conduction system cells require glucose, sodium, potassium, chloride, calcium and magnesium for proper function.<br>Returning to our discussion about cardiac output, under normal circumstances, the neonatal heart contracts and ejects the same volume of blood with each beat. However, like every other aspect of the neonate, the heart muscle is immature. Therefore, when the infant is in shock, and the tissues demand more oxygen, the heart muscle is unable to squeeze any stronger to meet that demand.<br>Remembering that the formula for cardiac output is heart rate multiplied by stroke volume, that leaves increasing heart rate as the mechanism to increase the amount of blood being pumped by the heart each minute.<br>Tachycardia, or a sustained heart rate greater than 180 beats per minute may be a sign that the infant is trying to compensate for a low cardiac output by increasing heart rate. If tachycardia is observed, then evaluate for other signs of shock, which include the following: A prolonged capillary refill time greater than 4 seconds, pale color, weak pulses, mottled skin, cool hands and/or feet, a declining level of consciousness, hypotension, decreased urine output, and metabolic acidosis with elevated levels of lactate.<br>Respiratory distress may present initially as tachypnea, which is a compensatory mechanism to blow off acidic CO2 to help correct a metabolic acidosis. As shock worsens, so does respiratory distress. The infant may be grunting and retracting, become apneic and in severe cases, start to gasp. Since the conduction system is sensitive to hypoxemia and acidosis, development of bradycardia, or a heart rate less than 100 beats per minute, is also an ominous sign.<br>The treatment of shock centers around identifying and treating the underlying problem, and understanding how to support and improve heart function. So that concludes our discussion of shock and factors that impact cardiac output. Remember that prompt recognition and treatment of shock has the potential to prevent serious organ damage, including to the vulnerable immature brain.';
//var __screenIntroTxt ="Video Text";
var updateContentArray = [{
	time: "0.0",
	carry: "",
	event: "",
	show: "",
	hide: "",
	transcript: __videoTxt
}];

function fnAudioFinishItemComp() {
	console.log("end")
	fnAudioFinishPageComp();
	fnUpdatePageCompletionCounter(0);
	//fnUpdatePageCompletionCounter(7);
}
var __dataXml;
$(document).ready(function() {

	disableNextBtn();
	var ele = document.getElementsByTagName('div');
	for (var i = 0; i < ele.length; i++) {
		ele[i].setAttribute("unselectable", "on");
	}
	// fStartPage();
	
	$('#clsPlayPauseBtn').removeClass("clsPlay");
	$('#clsPlayPauseBtn').removeClass("clsPlayDisable").addClass("clsPause");
	$('#clsPlayPauseBtn').css("cursor", "pointer");
	/*below code for mute video on Audio on/Off button*/
	$('#clsAudioOffBtn,#clsAudioOnBtn').on("click", function() {
		if ($("video").prop('muted')) {
			$("video").prop('muted', false);
		} else {
			$("video").prop('muted', true);
		}
	});
	$("#transcripttext").html(__videoTxt);
	//audioObjRef = document.getElementById("myVideo");
	// __player = document.querySelector("video");
	// __progressBar = document.querySelector("#slider");
	// __progressBar.addEventListener("click", seek);
	var n = isInArray("M1L0T1P8", gCompPageArr);
	
	if (n == true) {
		enableNextBtn();
		//fnGlowNextBtn();
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

function seektimeupdate() {

    gCompPageArr.push("M1L0T1P8");
	enableNextBtn();
	fnAudioFinishItemComp();
	$('.boxInst').show();
}

function fnOnAudioComplete() {
	if (gAudioId == "startAudio") {
		vid = document.getElementById("myVideo");
		vid.play();
		vid.addEventListener("ended", seektimeupdate, false)
		bAudioPlaying = true;
		videoPlaying = true;
		setVideoObjectSimulation("myVideo");
		//videoObjectId = document.getElementById("myVideo");
		vid = document.getElementById("myVideo");
		vid.load();
		vid.play();
		console.log("working");
		$("#clsAudioOnBtn").hide();
		// fnClick();
		/// fnGlowNextBtn();
		//  enableNextBtn();
		//fnAudioFinishItemComp();
	} else {
		$("#idTick0" + selectedIndex).css({
			"opacity": "1"
		});
		$("#clsTabTxt" + selectedIndex).css({
			'color': '#80848b'
		});
		$(".ClsTab").removeClass("clsDisable");
		$("#TabImage" + selectedIndex).addClass("clsDisable");
		// fnCompletion();
		if ($(".clsVisited").length === 2) {
			//$('.boxInst').css('opacity','1');
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