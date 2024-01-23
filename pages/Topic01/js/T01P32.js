manifest = [
    { src: "pages/images/Topic01/T01P32/T01P32_1.png", id: "1" },

    { src: "pages/images/Topic01/T01P32/T01P32_2.png", id: "2" }
];

var audioPath = "pages/audio/Topic01/T01P32/T01P32";

var gItemAudioPath = [
    "pages/audio/Topic01/T01P32/T01P32_1",

    "pages/audio/Topic01/T01P32/T01P32_2",

    // "pages/audio/Topic01/T01P32/T01P32_3",

    // "pages/audio/Topic01/T01P32/T01P32_4"


];

var currCue = 0;

var idd = 0;

var __curState = 0;

var clickTabCount = 0;

var clickTabCount1 = 0;

var updateContentArray = [{
    time: "0.0",
    carry: "",
    event: "",
    show: "",
    hide: "",
    transcript: "A capillary blood gas is obtained. Interpret this blood gas. Select all that apply and click the Submit button."
}];

/* var updateContentArray0 = [{
    time: "0.0",
    carry: "",
    event: "",
    show: "",
    hide: "",
    transcript: "That is correct!, Click Next to continue."
}]; */

var updateContentArray0 = [{
    time: "0.0",
    carry: "",
    event: "",
    show: "",
    hide: "",
    transcript: "That is correct. For capillary or venous samples, the PO2 is not reflective of arterial PO2. Use pulse oximetry as an indirect measurement of arterial O2 saturation."
}];

var updateContentArray1 = [{
    time: "0.0",
    carry: "",
    event: "",
    show: "",
    hide: "",
    transcript: "Here is some feedback on your response. The blood gas values indicate respiratory acidosis. For capillary or venous samples, the PO2 is not reflective of arterial PO2. Use pulse oximetry as an indirect measurement of arterial O2 saturation."

    // transcript: "You’re almost right. For capillary or venous samples, the PO2 is not reflective of arterial PO2. Use pulse oximetry as an indirect measurement of arterial O2 saturation."

}];

// var updateContentArray1 = [{
//     time: "0.0",
//     carry: "",
//     event: "",
//     show: "",
//     hide: "",
//     transcript: "Here is some feedback on your response. The blood gas values indicate respiratory acidosis. For capillary or venous samples, the PO2 is not reflective of arterial PO2. Use pulse oximetry as an indirect measurement of arterial O2 saturation."
// }];

// var updateContentArray3 = [{
//     time: "0.0",
//     carry: "",
//     event: "",
//     show: "",
//     hide: "",
//     transcript: "Here is some feedback on your response. The blood gas values indicate respiratory acidosis. For capillary or venous samples, the PO2 is not reflective of arterial PO2. Use pulse oximetry as an indirect measurement of arterial O2 saturation."
// }];

function fnAudioFinishItemComp() {
    fnAudioFinishPageComp();
}

var __dataXml;

var audplayer = document.getElementById("audioplayer");

$(document).ready(function () {
    disableNextBtn();
    bindClickableHotspot()
    var ele = document.getElementsByTagName("div");

    for (var i = 0; i < ele.length; i++) {
        ele[i].setAttribute("unselectable", "on");
    }

    var n = isInArray("M1L0T1P32", gCompPageArr);

    if (n == true) {
        enableNextBtn();

        // fnGlowNextBtn();

        fnDesiableNext(false);
    }

    $('#pageClsResourcesPopup').hide();

    $("#_clickImg0pdf").on("click", function () {
        fnPauseAudio();
        disabledAllButtons();
        $('#pageClsResourcesPopup .pdflink').attr('src', 'pages/Topic01/pdf/Blood Gas Interpretation Using a Modified Acid-Base Alignment Nomogram.pdf');
        $('#pageReftitleText_id').html('Blood gas interpretation chart');
        $("#pageClsResourcesPopup").show();
    });

    $("#id_glosCloseBtn").on("click", function () {
        enabledAllButtons();
        fnPlayAudio();
        $("#pageClsResourcesPopup").hide();
    });
});

function audioReset() {
    gAudioId = "";

    //  onTimelineEnd();
}

function isInArray(value, array) {
    return array.indexOf(value) > -1;
}

function fnPlaySectionAudio(gCurrentIndex) {
    indexAudio = gCurrentIndex;

    audioId = "audio_" + gCurrentIndex;

    gAudioId = audioId;

    fnHideShowAudioPlayer(false);

    updateContentArray = eval("updateContentArray" + gCurrentIndex);

    initAudioPlayer(gItemAudioPath[gCurrentIndex]);
}

function fnCompletion() {
    console.log("end");

    var _getCount1 = clickTabCount + clickTabCount1;

    if (_getCount1 >= 2) {
        console.log("start new");

        enableNextBtn();

        $(".boxInst").show();

        fnAudioFinishItemComp();
    }
}

function fnCompletion() {
    console.log("end");

    var _getCount1 = clickTabCount + clickTabCount1;

    if (_getCount1 >= 2) {
        console.log("start new");

        enableNextBtn();

        $(".boxInst").show();

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

        bindClickableHotspot();

        audplayer.pause();

        audplayer.currentTime = 0;
        $(".small_expand").css({ "opacity": "1", "display": "block" })
        $(".clickToEnlarge").css({ "opacity": "1", "display": "block" })
    } else {
        fnCompletion();

        enableNextBtn();

        $(".boxInst").show();

        $(".pdfBottomLink").addClass("pdfBlock")
        $(".clickToEnlarge").css({ "opacity": "1", "display": "block" })
        $(".small_expand").css({ "opacity": "1", "display": "block" })
        gCompPageArr.push("M1L0T1P32");

        fnAudioFinishItemComp();

        audplayer.pause();

        audplayer.currentTime = 0;
    }
}

var correctOptions = [2, 5];

function bindClickableHotspot() {
    $(".option").addClass("aactive"); //.css({ 'cursor': 'pointer' });

    $(".option")
        .off()
        .on("click", function () {
            $(this).toggleClass("clicked");

            if ($(".option.clicked").length >= 1) {
                $(".cSubmitBtn").addClass("active");

                $(".cSubmitBtn.active")
                    .off()
                    .on("click", function () {
                        submitClick();
                    });
            } else {
                $(".cSubmitBtn").removeClass("active");
            }
        });
}

function submitClick() {
    $(".cSubmitBtn.active").hide();



    var selected = $(".clicked").length;

    if ($(".cSubmitBtn").hasClass("active")) {
        enableNextBtn();
        // fnGlowNextBtn();
        fnDesiableNext(false)
        gCompPageArr.push("M1L0T1P32");
        var incorrectCount = 0,
            correctCount = 0;

        $(".option").each(function () {
            if (
                $(this).hasClass("clicked") &&
                $.inArray($(this).index(), correctOptions) == -1
            ) {
                $(this).addClass("wrong");

                incorrectCount++;
            } else if (
                $(this).hasClass("clicked") &&
                $.inArray($(this).index(), correctOptions) != -1
            ) {
                correctCount++;
            }

            $(this).off(); //.removeClass('clicked');
        });

        $(correctOptions).each(function (i, val) {
            $(".option")
                .eq(val)
                .addClass("correct");
        });

        // if (incorrectCount == 0 && correctCount== correctOptions.length) {

        //     fnPlaySectionAudio(1);

        // //    $('.downloadText').show();

        // } else {

        //     fnPlaySectionAudio(0);

        // }
        audplayer.pause();
        audplayer.currentTime = 0;
        audioReset();
        updateContentArray = "";
        if (incorrectCount == 0 && correctCount == correctOptions.length) {
            fnPlaySectionAudio(0);
        } else if (
            incorrectCount != 0 && correctCount == correctOptions.length &&
            correctCount > 0
        ) {
            fnPlaySectionAudio(1);
        } else if (
            incorrectCount == 0 && correctCount < correctOptions.length &&
            correctCount > 0
        ) {
            fnPlaySectionAudio(1);
        } else if (
            incorrectCount != 0 && correctCount < correctOptions.length &&
            correctCount > 0
        ) {
            fnPlaySectionAudio(1);
        } else if (incorrectCount != 0 && correctCount == 0) {
            fnPlaySectionAudio(1);
        } else {
            fnPlaySectionAudio(1);
        }

        $(".option")
            .off()
            .removeClass("aactive"); //.css({'cursor':'default'});

        $(".cSubmitBtn").removeClass("active");
    }
}

$(".small_expand").on("click", function () {
    pauseAudio();

    //audioReset();

    $("#TabPopup5 .CaseStudy").show();

    $("#TabPopup5 .sectionTop").addClass("blur");

    $("#TabPopup5 .sectionContent").addClass("blur");

    $(".boxInst").addClass("blur");

    $(".ModalTxtImg").attr("id", "imgPopup" + $(this).attr("click_id"));

    if ($(this).attr("click_id") == 2) {
        $(".ModalTextBottom").hide();

        $(".ModalTxtImg").css("height", "420px");

        $(".caseStudyContent").css("background", "#fff");
    } else {
        $(".ModalTextBottom").show();

        $(".ModalTxtImg").css("height", "420px");

        //$('.caseStudyContent').css('background','rgba(91, 91, 91, 1)');
    }
});

$(".small_expand1").on("click", function () {
    pauseAudio();

    //audioReset();

    $("#TabPopup5 .CaseStudy").show();

    $("#TabPopup5 .sectionTop").addClass("blur");

    $("#TabPopup5 .sectionContent").addClass("blur");

    $(".boxInst").addClass("blur");

    $(".ModalTxtImg").attr("id", "imgPopup" + $(this).attr("click_id"));

    if ($(this).attr("click_id") == 2) {
        $(".ModalTextBottom").hide();

        $(".ModalTxtImg").css("height", "420px");

        $(".caseStudyContent").css("background", "#fff");
    } else {
        $(".ModalTextBottom").show();

        $(".ModalTxtImg").css("height", "385px");

        $(".caseStudyContent").css("background", "rgba(91, 91, 91, 1)");
    }
});

$(".closepopup").on("click", function () {
    playAudio();

    //audioReset();

    $("#TabPopup5 .CaseStudy").removeAttr("style");

    $("#TabPopup5 .sectionTop").removeClass("blur");

    $("#TabPopup5 .sectionContent").removeClass("blur");

    $(".boxInst").removeClass("blur");
});

function pauseAudio() {
    if (!fnPauseAudio()) {
        console.log(true);

        fnPauseAudio();
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