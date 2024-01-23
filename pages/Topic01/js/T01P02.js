manifest = [
{
	src: 'pages/images/Topic01/T01P02/01.png',
	id: '1'
},
{
	src: 'pages/images/Topic01/T01P02/02.png',
	id: '2'
},
{
	src: 'pages/images/Topic01/T01P02/03.png',
	id: '3'
},
{
	src: 'pages/images/Topic01/T01P02/04.png',
	id: '4'
},
{
	src: 'pages/images/Topic01/T01P02/05.png',
	id: '5'
}
];
console.log("concord" + __curConCordVisit);
console.log("Mateo" + __curMateoVisit);
var audioPath = "pages/audio/Topic01/T01P02/T01P02";
var currCue = 0;
var idd = 0;
var __curState = 0;
var popupContentArray0 = [];
var popupContentArray1 = [];
var popupContentArray2 = [];
var popupContentArray3 = [];
var popupContentArray4 = [];
var clickTabCount = 0;
var clickTabCount1 = 0;
var updateContentArray = [
	{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Welcome back to The S.T.A.B.L.E. Hospital. Let’s review how Babies Mateo, Conrad, Lily and William are doing." }, //image animation first start
	{ time: "0", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#idCircle01", duration: "0.5", activity: { 'display': 'block' } }] }, //image animation first end//box animation start

	{ time: "0.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#idPatchMain", duration: "0.5", activity: { 'width': '725px', 'display': 'block' } }] },
	{ time: "1", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#idText1", duration: "0.5", activity: { 'opacity': '1' } }] },

	{ time: "3", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#TabImage5", duration: "0.5", activity: { "transform": "scale(1)", "left": "45px", "top": "65px", "width": "140px", "height": "140px", "-webkit-animation": "zoomin 0.5s ease-in", "animation": "zoomin 0.5s ease-in" } }] },
	{ time: "3.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#clsTabTxt5", duration: "0.5", activity: { 'top': '215px', 'opacity': '1' } }] },

	{ time: "4", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#TabImage1", duration: "0.5", activity: { "transform": "scale(1)", "left": "220px", "top": "65px", "width": "140px", "height": "140px", "-webkit-animation": "zoomin 0.5s ease-in", "animation": "zoomin 0.5s ease-in" } }] },
    { time: "4.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#clsTabTxt1", duration: "0.5", activity: { 'top': '215px', 'opacity': '1' } }] },

		
	{ time: "5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#TabImage3", duration: "0.5", activity: { "transform": "scale(1)", "left": "391px", "top": "65px", "width": "140px", "height": "140px", "-webkit-animation": "zoomin 0.5s ease-in", "animation": "zoomin 0.5s ease-in" } }] },
	{ time: "5.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#clsTabTxt3", duration: "0.5", activity: { 'top': '215px', 'opacity': '1', 'width': '165px' } }] },
	
	{ time: "6", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#TabImage4", duration: "0.5", activity: { "transform": "scale(1)", "left": "562px", "top": "65px", "width": "140px", "height": "140px", "-webkit-animation": "zoomin 0.5s ease-in", "animation": "zoomin 0.5s ease-in" } }] },
	{ time: "6.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#clsTabTxt4", duration: "0.5", activity: { 'top': '215px', 'opacity': '1' } }] },

];

function fnAudioFinishItemComp() {

}
var __dataXml;
$(document).ready(function () {
	//console.log("done");
	disableNextBtn();
	var ele = document.getElementsByTagName('div');
	for (var i = 0; i < ele.length; i++) {
		ele[i].setAttribute("unselectable", "on");
	}
	$("#idCircle01").show();
	var n = isInArray("M1L0T1P2", gCompPageArr);
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

function audioReset() {
	gAudioId = "";
	onTimelineEnd();
}

function fnPlaySectionAudio(gCurrentIndex) {
	indexAudio = (gCurrentIndex);
	audioId = "audio_" + gCurrentIndex;
	fnHideShowAudioPlayer(false);
	updateContentArray = eval("popupSectionArray" + (gCurrentIndex));
	initAudioPlayer(gItemAudioPath[gCurrentIndex])
}
var gTotalPopups = 2;
var temp = "";

function fnClick() {

}

function checkVisitedState() {
	//$(".ClsInsDiv").show();
	//var _getBab = __curConCordVisit + __curMateoVisit;
	if (__curConCordVisit == 1) {
		console.log("Visited Concord");
		$("#TabImage3").addClass("clsVisited");
		$("#TabImage3 .clsTick").addClass("end");
		$('#idTick03').show();
		$(".ClsInsDiv").hide();
	}

}

function fnCompletion() {
	console.log("end");

	console.log("start new");
	enableNextBtn();
	fnAudioFinishItemComp();

}

function fnOnAudioComplete() {
	if (gAudioId == "startAudio") {
		//console.log("start audio");
		$(".ClsTab").removeClass("clsDisable");
		// we need to replace this
		enableNextBtn();
		fnAudioFinishItemComp();
		gCompPageArr.push("M1L0T1P2");
		$(".boxInst").show();
		// we need to replace this
		fnClick();
	} else {
		
	}
}