manifest = [
    { src: 'pages/images/Topic01/T01P26/02.png', id: '1' }
];

var audioPath = "pages/audio/Topic01/T01P26/T01P26_first";


var gItemAudioPath = [
    "pages/audio/Topic01/T01P26/T01P26_wrong",
    "pages/audio/Topic01/T01P26/T01P26_correct"
];


clickViewMoreInfo();

var currCue = 0;

var idd = 0;

var __curState = 0;


var __clickValue = [];


//mateo maternal thank you

//var popupContentArray5 = [];

/* var popupContentArray2 = [];

var popupContentArray3 = [];

var popupContentArray4 = [];

var popupContentArray5 = [];

var popupContentArray6 = []; 

var popupContentArray7 = [];*/



var clickTabCount = 0;

var clickTabCount1 = 0;

var popupContentArray0 = [];
var popupContentArray1 = [];

var updateContentArray = [

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "Review Baby Girl Collins initial physical assessment. Click on the abnormal physical exam findings, then click Submit." }

];

var updateContentArray0 = [{
    time: "0",
    carry: "",
    event: "",
    show: "",
    hide: "",
    transcript: "Here is some feedback on your response: These are all of Baby Girl Collins abnormal physical exam findings, which are consistent with the effects of severe hypothermia and shock."
}];

var updateContentArray1 = [{
    time: "0",
    carry: "",
    event: "",
    show: "",
    hide: "",
    transcript: "That is correct. You have identified all of Baby Girl Collins abnormal physical exam findings, which are consistent with the effects of severe hypothermia and shock."
}];



function fnPlaySectionAudio(gCurrentIndex) {

    indexAudio = (gCurrentIndex);

    audioId = "audio_" + gCurrentIndex;

    fnHideShowAudioPlayer(false);

    updateContentArray = eval("popupSectionArray" + (gCurrentIndex));

    initAudioPlayer(gItemAudioPath[gCurrentIndex])

}



function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

}

var __dataXml;

var audplayer = document.getElementById('audioplayer');

$(document).ready(function() {

    disableNextBtn();
   bindClickableHotspot();

    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }

    var n = isInArray("M1L0T1P26", gCompPageArr);

    if (n == true) {

        enableNextBtn();

        //fnGlowNextBtn();

        fnDesiableNext(false)

    }

});



function audioReset() {

    gAudioId = "";

   // onTimelineEnd();

}



function isInArray(value, array) {

    return array.indexOf(value) > -1;

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

    console.log("end");

    var _getCount1 = clickTabCount + clickTabCount1;
    if (_getCount1 >= 2) {
        console.log("start new");
        enableNextBtn();
        $('.boxInst').show()
        fnAudioFinishItemComp();
    }

}



function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {

        $('.small_expand').css('display', 'block').css('opacity', '1');
        $('.clickToEnlarge').css('display', 'block').css('opacity', '1');
        $('.small_expand1').css('display', 'block').css('opacity', '1');

        audplayer.pause();

        audplayer.currentTime = 0;

    } else {
        $('.boxInst').show();
        $('.small_expand').css('display', 'block').css('opacity', '1');
        $('.clickToEnlarge').css('display', 'block').css('opacity', '1');
        $('.small_expand1').css('display', 'block').css('opacity', '1');
        //fnGlowNextBtn();
        fnAudioFinishItemComp();

        audplayer.pause();

        audplayer.currentTime = 0;



    }

}

var correctOptions = ["2","3","4","6","7"];



function bindClickableHotspot() {



    $('.box').addClass('aactive'); //.css({ 'cursor': 'pointer' });

    $('.box').off().on('click', function() {

        //$('.box').removeClass('clicked');
        if($(this).hasClass('clicked')){
            $(this).removeClass('clicked');    
            var _itemtoRemove1 = $(this).attr("cid");
             __clickValue.splice($.inArray(_itemtoRemove1, __clickValue), 1);
        }else{
            $(this).addClass('clicked');
            var _getCurId = $(this).attr("cid");
            __clickValue.push(_getCurId);
            __clickValue = $.unique(__clickValue.sort());
        }

        if ($('.box.clicked').length >= 1) {

            $('.cSubmitBtn').addClass('active');

            $('.cSubmitBtn.active').off().on('click', function() {

                submitClick($(".cSubmitBtn"));



            });

        } else {

            $('.cSubmitBtn').removeClass('active');

        }

    });

}


function checkCondition(aCurValue, aCorrectAnswer) {
    var _totCount = 0;
    var _submitEnabale = false;
    var _curValue = interSect(aCurValue, aCorrectAnswer);
    $(".box").removeAttr("style").removeClass("clicked");
    for (var i = 0; i < aCurValue.length; i++) {
        $(".box[cid='" + aCurValue[i] + "']").removeClass("correctAnswer").addClass("wrongAnswer");
    }

    for (var i = 0; i < _curValue.length; i++) {
        _totCount++;
        $(".box[cid='" + _curValue[i] + "']").removeClass("wrongAnswer").addClass("correctAnswer");
    }

    if (aCurValue.length == aCorrectAnswer.length) {
        if (aCurValue.length == _totCount) {
            _submitEnabale = true;
        } else {
            _submitEnabale = false;
        }
    } else {
        _submitEnabale = false;
    }
    return _submitEnabale;
}


function correctAnwerShow(aCorrectAnswer) {
    for (var i = 0; i < aCorrectAnswer.length; i++) {
        $(".box[cid='" + aCorrectAnswer[i] + "']").addClass("correctAnswer");
    }

}

function correctAnswerNotClicked(aCorrectAnswerVal) {
    for (var i = 0; i < aCorrectAnswerVal.length; i++) {
        $(".box[cid='" + aCorrectAnswerVal[i] + "']").addClass("cborder");
    }
}
function interSect(a, b) {
    return $.grep(a, function(i) {
        return $.inArray(i, b) > -1;
    });
}
function areDifferentByIds(clickVal, correctVal) {

    var newArr = correctVal.slice();

    for (var i = 0; i < clickVal.length; i++) {


        var index = newArr.indexOf(clickVal[i]);
        if (index !== -1) {
            newArr.splice(index, 1);
        }

    }

    return newArr;


}

function submitClick(aThis) {
    if(aThis.hasClass("active")){
        $('.cSubmitBtn.active').hide();
        var _getCheckMateo = '';
        _getCheckMateo = checkCondition(__clickValue, correctOptions);
        correctAnwerShow( correctOptions);
        var _checkN = areDifferentByIds(__clickValue, correctOptions);
        correctAnswerNotClicked(_checkN);

        console.log(_checkN,__clickValue,correctOptions);
        if (_getCheckMateo == true){
            console.log("all correct");
            fnPlaySectionAudio(1);
        }else{
            console.log("all wrong");
            fnPlaySectionAudio(0);
        }


        $('.box').off().addClass("disabled").removeClass('aactive');

        $('.cSubmitBtn').removeClass('active');
        enableNextBtn();
        fnDesiableNext(false);
        gCompPageArr.push("M1L0T1P26");
    }else{
    
    }
    //tinCanWrapper.sendStatementData("answered", "Let's-check-on-Baby-Conrad.He-is-with-his-mother-in-the-labor-recovery-room.Jennifer-tells...", "Let's check on Baby Conrad. He is with his mother in the labor recovery room. Jennifer tells you that he has been sleepy and not been interested in breastfeeding. When you unwrap him so that you can check his blood sugar, you notice that he is hypotonic. His color is pink. You take a full set of vital signs.");


}



$(".small_expand").off().on("click", function() {

    fnPauseAudio();

    //audioReset();

    $("#TabPopup5 .modal").show();

    $("#TabPopup5 .sectionTop").addClass("blur");

    $("#TabPopup5 .sectionContent").addClass("blur");

    $(".modalTxtImg").attr('id', 'imgPopup' + $(this).attr('click_id'));

    $('.modalTextBottom').hide();

    $('#ModalTextBottom' + $(this).attr('click_id')).show();

    $('.modalContent').addClass('maxBot0');

    $('.modalContent').removeClass('maxBot');





});

$(".small_expand1").off().on("click", function() {

    fnPauseAudio();

    //audioReset();

    $("#TabPopup5 .modal").show();

    $("#TabPopup5 .sectionTop").addClass("blur");

    $("#TabPopup5 .sectionContent").addClass("blur");
    $('.boxInst').addClass("blur");

    $(".modalTxtImg").attr('id', 'imgPopup' + $(this).attr('click_id'));

    $('.modalTextBottom').hide();

    $('#ModalTextBottom' + $(this).attr('click_id')).show();



    $('.modalContent').addClass('maxBot');

    $('.modalContent').removeClass('maxBot0');



});

$(".closepopup").off().on("click", function() {

    fnPlayAudio();

    //audioReset();

    $("#TabPopup5 .modal").removeAttr("style");

    $("#TabPopup5 .sectionTop").removeClass("blur");

    $("#TabPopup5 .sectionContent").removeClass("blur");
    $('.boxInst').removeClass("blur");

});


function pauseAudio() {

    if (!fnPauseAudio()) {

        console.log(true);

        fnPauseAudio()

    } else {

        playPauseAudio();

        console.log(false);

    }

}

function playAudio() {

    if (!fnPauseAudio()) {

        console.log(true);

        playPauseAudio();

    }

}