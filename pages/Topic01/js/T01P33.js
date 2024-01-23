manifest = [
    { src: 'pages/images/Topic01/T01P31/T01P31_1.png', id: '1' }
];
console.log("Labor" + gCompPageArr);
glossaryFuncPageLevel();
var audioPath = "pages/audio/Topic01/T01P31/T01P31";
var gItemAudioPath = ["pages/audio/Topic01/T01P31/T01P31_1",
    "pages/audio/Topic01/T01P31/T01P31_2"
];
var currCue = 0;
var idd = 0;
var __curState = 0;

var clickTabCount = 0;
var clickTabCount1 = 0;
var updateContentArray = [
    { time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "A chest x-ray is taken. Review the x-ray findings. Based on the x-ray and clinical history, what is the diagnosis? Select the correct option and click the Submit button.​" },
    { time: "10", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".small_expand", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "10", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".clickToEnlarge", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] }

];
var updateContentArray0 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "That is correct. Click Next to continue." }];
var updateContentArray1 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Here is some feedback on your response. Based on the x-ray and clinical history, Baby William has tracheoesophageal fistula with esophageal atresia. Click Next to continue." }];

function fnAudioFinishItemComp() {
    fnAudioFinishPageComp();
}
var __dataXml;
var audplayer = document.getElementById('audioplayer');
$(document).ready(function () {
    disableNextBtn();
    bindClickableHotspot()
    var ele = document.getElementsByTagName('div');
    for (var i = 0; i < ele.length; i++) {
        ele[i].setAttribute("unselectable", "on");
    }
    var n = isInArray("M1L0T1P31", gCompPageArr);
    if (n == true) {
        enableNextBtn();
        // fnGlowNextBtn();
        fnDesiableNext(false)
    }
    $('#pageClsResourcesPopup').hide();
});

function audioReset() {
    gAudioId = "";
    onTimelineEnd();
}

function isInArray(value, array) {
    return array.indexOf(value) > -1;
}
$("#_clickImg0pdf").on("click", function () {
    disabledAllButtons();
    $('#pageReftitleText_id').html('Therapeutic Hypothermia / Neurologic Exam Checklist');
    $("#pageClsResourcesPopup").show();
});
$("#id_glosCloseBtn").click(function () {
    enabledAllButtons();
    $("#pageClsResourcesPopup").hide();
    //$("#pageid_RefTitleBar").show()
});

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
        console.log("start audio");
        //   enableNextBtn();
        //  fnAudioFinishItemComp();
        // we need to replace this
        //fnClick();
        $('.boxInst').show()
        bindClickableHotspot();
        audplayer.pause();
        audplayer.currentTime = 0;
    } else {
        fnCompletion();
        enableNextBtn();
        $('.boxInst').show();
        gCompPageArr.push("M1L0T1P31");
        fnAudioFinishItemComp();
        audplayer.pause();
        audplayer.currentTime = 0;
    }
}
var correctOptions = [3];

function bindClickableHotspot() {
    $('.option').addClass('aactive'); //.css({ 'cursor': 'pointer' });
    $('.option').off().on('click', function () {
        $('.option').removeClass('clicked');
        $(this).addClass('clicked');
        if ($('.option.clicked').length >= 1) {
            $('.cSubmitBtn').addClass('active');
            $('.cSubmitBtn.active').off().on('click', function () {
                submitClick();
            });
        } else {
            $('.cSubmitBtn').removeClass('active');
        }
    });
}

function submitClick() {
    $('.cSubmitBtn.active').hide();
    var selected = $('.clicked').length;
    if ($(".cSubmitBtn").hasClass("active")) {
        enableNextBtn();
        // fnGlowNextBtn();
        fnDesiableNext(false)
        gCompPageArr.push("M1L0T1P31");
        var incorrectCount = 0,
            correctCount = 0;
        $('.option').each(function () {
            if ($(this).hasClass('clicked') && ($.inArray($(this).index(), correctOptions) == -1)) {
                $(this).addClass('wrong');
                incorrectCount++;
            } else if ($(this).hasClass('clicked') && ($.inArray($(this).index(), correctOptions) != -1)) {
                correctCount++;
            }
            $(this).off(); //.removeClass('clicked');
        });
        $(correctOptions).each(function (i, val) {
            $('.option').eq(val).addClass('correct');
        });
        // if (incorrectCount == 0 && correctCount== correctOptions.length) {
        //     fnPlaySectionAudio(1);
        // //    $('.downloadText').show();
        // } else {
        //     fnPlaySectionAudio(0);
        // }
        if (incorrectCount == 0) {
            fnPlaySectionAudio(0);
            // $('.downloadText').show();
        } else {
            fnPlaySectionAudio(1);
        }
        $('.option').off().removeClass('aactive'); //.css({ 'cursor': 'default' });
        $('.cSubmitBtn').removeClass('active');
    }
}
$(".small_expand").on("click", function () {
    pauseAudio();
    //audioReset();
    $("#TabPopup5 .CaseStudy").show();
    $("#TabPopup5 .sectionTop").addClass("blur");
    $("#TabPopup5 .sectionContent").addClass("blur");
    //$('.boxInst').addClass("blur");
    $(".ModalTxtImg").attr('id', 'imgPopup' + $(this).attr('click_id'));
    if ($(this).attr('click_id') == 2) {
        $('.ModalTextBottom').hide();
        $('.ModalTxtImg').css('height', '420px');
        $('.caseStudyContent').css('background', '#fff');
    } else {
        $('.ModalTextBottom').show();
        $('.ModalTxtImg').css('height', '420px');
    }
});

$(".closepopup").on("click", function () {
    playAudio();
    //audioReset();
    $("#TabPopup5 .CaseStudy").removeAttr("style");
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
