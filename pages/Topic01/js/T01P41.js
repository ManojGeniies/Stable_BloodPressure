
manifest = [{
	src: 'pages/images/Topic01/T01P41/Mask_Group_11.png',
	id: '1'
}, ];
glossaryFuncPageLevel();

var audioPath = "pages/audio/Topic01/T01P41/undefined";
var gItemAudioPath = ["pages/audio/Topic01/T01P41/T01P41_1", "pages/audio/Topic01/T01P41/T01P41_2"];

$("#id_transcriptBox #transcripttext").html("");

var currCue = 0;
var idd = 0;
var popupContentArray0 = [];
var __aIndex = []
var correctAns = 1;
var correctOptions = [1];
var updateContentArray = [{
	time: "0",
	carry: "",
	event: "",
	show: "",
	hide: "",
	transcript: ""
}];

var popupSectionArray0 = [{
	time: "0",
	carry: "",
	event: "",
	show: "",
	hide: "",
    transcript: "Here is some feedback on your response: The infant is most likely experiencing obstructive shock secondary to ductal-dependent left outflow tract congenital heart disease."
}, {
	time: "0",
	carry: "",
	event: "",
	show: ".feedbackText",
	hide: "",
	transcript: "",
	animation: [{
		target: ".feedbackText",
		duration: "0.5",
		activity: {
			'display': 'block'
		}
	}]
}];
var popupSectionArray1 = [
	
	{
		time: "0",
		carry: "",
		event: "",
		show: "",
		hide: "",
        transcript: "That is correct. The infant is most likely experiencing obstructive shock secondary to ductal-dependent left-outflow tract congenital heart disease."
	}, {
		time: "0",
		carry: "",
		event: "",
		show: ".feedbackText",
		hide: "",
		transcript: "",
		animation: [{
			target: ".feedbackText",
			duration: "0.5",
			activity: {
				'display': 'block'
			}
		}]
	}
];
/* var popupSectionArray1 = [
	{time:"0", carry:"", event:"", show:"", hide:"", transcript:"The fetus regulates blood glucose levels by secreting insulin. This will become an important point when we discuss maternal diabetes and the effect of maternal hyperglycemia on fetal glucose values and insulin production and secretion."},
	
]; */

function fnAudioFinishItemComp() {
	console.log("end")
	fnAudioFinishPageComp();
	fnUpdatePageCompletionCounter(0);
	//fnUpdatePageCompletionCounter(7);
}
var __dataXml;
var __clickCount = 0;

$(document).ready(function() {
	// $("#id_sliderContainer, #clsPlayPauseBtn").hide();
	// $("#clsAudioOnBtn, #clsAudioOffBtn").hide();
	disableNextBtn();
	bindClickableHotspot();
	var ele = document.getElementsByTagName('div');
	for (var i = 0; i < ele.length; i++) {
		ele[i].setAttribute("unselectable", "on");
	}
	$("select._options").css("pointer-events", "none");
	$("#ClsbackImg2").hide()
	$("#subTxt3").hide();
	var n = isInArray("M1L0T1P41", gCompPageArr);
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

function fnPlaySectionAudio(gCurrentIndex) {
	indexAudio = (gCurrentIndex);
	audioId = "audio_" + gCurrentIndex;
	gAudioId = audioId;
	fnHideShowAudioPlayer(false);
	updateContentArray = eval("popupSectionArray" + (gCurrentIndex));
	console.log(updateContentArray);
	initAudioPlayer(gItemAudioPath[gCurrentIndex])
	console.log(gItemAudioPath[gCurrentIndex]);
	if (correctAns == 2) {
		enableNextBtn();
		$(".boxInst").show();
		//fnGlowNextBtn();
		gCompPageArr.push("M1L0T1P41");

	}
}


function fnCompletion() {
	console.log("end");
	//$("select").css("pointer-events", "")

	// if (correctAns==1)
	// {    
	enableNextBtn();
	//fnGlowNextBtn();
	$(".boxInst").show();
	fnAudioFinishItemComp();
	//}
}

function fnOnAudioComplete() {
	if (gAudioId == "startAudio") {
		console.log("start audio");
		//fnClick();
		audioStop();

		//bindClickableHotspot();
		//    fnAudioFinishItemComp();
	} else {

		fnCompletion();
		audioStop();

	}
}


function bindClickableHotspot() {

	$('.option').addClass('aactive'); //.css({ 'cursor': 'pointer' });
	$('.option').off().on('click', function() {
		$('.option').removeClass('clicked');
		$(this).addClass('clicked');
		if ($('.option.clicked').length >= 1) {
			$('.cSubmitBtn').addClass('active');
			$('.cSubmitBtn.active').off().on('click', function() {
				submitClick();
			});
		} else {
			$('.cSubmitBtn').removeClass('active');
		}
	});

}

function submitClick() {
	// $("#id_sliderContainer, #clsPlayPauseBtn").show();
	// $("#clsAudioOnBtn, #clsAudioOffBtn").show();
	tinCanWrapper.sendStatementData("answered", "types-of-diabetes-large-for-gestational-age-infants", "Now, let's discuss large for gestational age (LGA) infants.");
	$('.cSubmitBtn.active').hide();
	var incorrectCount = 0;
	$('.option').each(function() {
		if ($(this).hasClass('clicked') && ($.inArray($(this).index(), correctOptions) == -1)) {
			$(this).addClass('wrong');
			incorrectCount++;
		}
		//    $(this).off().removeClass('clicked');
	});
	$(correctOptions).each(function(i, val) {
		$('.option').eq(val).addClass('correct');
	});
	//console.log(incorrectCount);
	if (incorrectCount == 0) {

		fnPlaySectionAudio(1);


	} else {

		fnPlaySectionAudio(0);
	}
	$('.downloadText').show();
	$("#_clickImg0pdf").show();
	$('.option').off().removeClass('aactive'); //.css({'cursor':'default'});
	$('.cSubmitBtn').removeClass('active');
	setTimeout(function() {
		$("#para3").show();
	}, 1000);


	enableNextBtn();
	gCompPageArr.push("M1L0T1P41");
	fnDesiableNext(false);

}

function audioStop() {
	var audio = document.getElementById("audioplayer");
	audio.pause();
	audio.currentTime = 0;
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

