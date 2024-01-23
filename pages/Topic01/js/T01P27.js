manifest = [{
    src: 'pages/images/Topic01/T01P49/small_expand.png',
    id: '1'
},
{
    src: 'pages/images/Topic01/T01P49/small_expand_hover.png',
    id: '2'
},
{
    src: 'pages/images/Topic01/T01P49/T01P49_01.png',
    id: '3'
},
{
    src: 'pages/images/Topic01/T01P49/T01P49_01_01.png',
    id: '4'
},
{
    src: 'pages/images/Topic01/T01P49/T01P49_02.png',
    id: '5'
},
{
    src: 'pages/images/Topic01/T01P49/T01P49_02_01.png',
    id: '6'
},
{
    src: 'pages/images/Topic01/T01P49/T01P49_03.png',
    id: '7'
},
{
    src: 'pages/images/Topic01/T01P49/T01P49_03_01.png',
    id: '8'
},
{
    src: 'pages/images/Topic01/T01P49/close_expand.png',
    id: '9'
},
{
    src: 'pages/images/Topic01/T01P49/close_expand_hover.png',
    id: '10'
}
];
        glossaryFuncPageLevel();
        var audioPath = "pages/audio/Topic01/T01P31/T01P31";
        var gItemAudioPath = ["pages/audio/Topic01/T01P31/T01P31_tryagain", "pages/audio/Topic01/T01P31/T01P31_incorrect",
            "pages/audio/Topic01/T01P31/T01P31_correct"
        ];
        var currCue = 0;
        var idd = 0;
        var updateContentArray = [{
            time: "0",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "Now that you have examined Baby Jazmine, identify the appropriate stabilization activities that are indicated. Drag the correct stabilization activities to the column on the right, then click Submit."
        }
        ];
        var updateContentArray0 = [{
            time: "0",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "Please try again."
        }];
        var updateContentArray1 = [{
            time: "0",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "Here is some feedback on your response, click Next to continue."
        }, {
            time: "8.0",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".boxInst",
                duration: "0.5",
                activity: {
                    'display': 'block'
                }
            }]
        }];
        var updateContentArray2 = [{
            time: "0.0",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "That is correct. </br>Click Next to continue."
            // transcript: "Thank you for stabilizing Baby Jazmine. You will be providing care for her later in this module. Let’s now return to the Lab Work module."
        }, {
            time: "3.0",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "",
            animation: [{
                target: ".boxInst",
                duration: "0.5",
                activity: {
                    'display': 'block'
                }
            }]
        }];
        function fnAudioFinishItemComp() {
            fnAudioFinishPageComp();
            fnUpdatePageCompletionCounter(0);
            //fnUpdatePageCompletionCounter(7);
        }
        var __dataXml;
        var __clickCount = 0;
        var aud = document.getElementById("audioplayer");
        var __answers = 4;
        $(document).ready(function () {
            disableNextBtn();
            initDragDrop();
           // $(".clickToEnlarge").show();
            //$(".small_expand").show();
            var ele = document.getElementsByTagName('div');
            for (var i = 0; i < ele.length; i++) {
                ele[i].setAttribute("unselectable", "on");
            }
            var n = isInArray("M1L0T1P31", gCompPageArr);
            //  console.log(n);
            if (n == true) {
                enableNextBtn();
                // fnGlowNextBtn();
                fnDesiableNext(false);
            }
        });
        function isInArray(value, array) {
            return array.indexOf(value) > -1;
        }
        $(".small_expand").off().on("click", function () {
            pauseAudio();
            $("#TabPopup5 #case_study_popup.modal").show();
            $("#TabPopup5 .sectionTop").addClass("blur");
            $("#TabPopup5 .sectionContent").addClass("blur");
            $(".modalTxtImg").attr('id', 'imgPopup' + $(this).attr('click_id'));
            // $('.modalTextBottom').hide();
            $('#ModalTextBottom' + $(this).attr('click_id')).show();
            $('.modalContent').addClass('maxBot0');
            $('.modalContent').removeClass('maxBot');
        });
        $(".closepopup, .modalclose").off().on("click", function () {
            playAudio();
            $("#TabPopup5 .modal").removeAttr("style");
            $("#TabPopup5 .sectionTop").removeClass("blur");
            $("#TabPopup5 .sectionContent").removeClass("blur");
            $('.boxInst').removeClass("blur");
        });
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
        function audioStop() {
            var audio = document.getElementById("audioplayer");
            audio.pause();
            audio.currentTime = 0;
        }
        function fnCompletion() {
            //	console.log("end audio"+gAudioId);
            //if (gAudioId == 'audio_2' || gAudioId == 'audio_1') {
            enableNextBtn();
            // $('.boxInst').css('display', 'block');
            gCompPageArr.push("M1L0T1P31");
            fnDesiableNext(false);
            //}
            // console.log("end");
            //if($(".clsVisited").length==gTotalPopups){
            //enableNextBtn();
            //fnAudioFinishItemComp();
            //}
        }
        function fnOnAudioComplete() {
            if (gAudioId == "startAudio") {
                				
            } else {
                /*  $("#idTick0" + selectedIndex).css({
                     "opacity": "1"
                 });
                 $("#clsTabTxt" + selectedIndex).css({
                     'color': '#80848b'
                 });
                 $(".ClsTab").removeClass("clsDisable");
                 $("#TabImage" + selectedIndex).addClass("clsDisable"); */
                //fnCompletion();
                aud.pause();
                aud.currentTime = 0;
                if ($(".clsVisited").length === 2) { }
                if (isFinal) {
                    // enableNextBtn();
                    fnAudioFinishItemComp();
                    //fnGlowNextBtn();
                    $('.boxInst').css('display', 'block');
                }
            }
        }
        var dropSequence = [0, 6, 7, 3],
            attemptCount = 0;
        isFinal = false;
        function initDragDrop() {
            $(".drag").each(function () {
                $(this).attr('old_left', $(this).position().left).attr('old_top', $(this).position().top);
            });
            var containmentArea = $('.mainContainer');
            $(".drag").draggable({
                //     containment: '.pg-pageContent',
                containment: [containmentArea.offset().left, containmentArea.offset().top, ((containmentArea.offset().left + (containmentArea.width() * scalePercent)) - ($(".drag").width() * scalePercent)), ((containmentArea.offset().top + (containmentArea.height() * scalePercent)) - ($(".drag").height() * scalePercent))],
                revertDuration: 0,
                revert: function (dropped) {
                    //console.log(dropped);
                    //var dropped = dropped && dropped[0].id == "droppable";
                    //   if(!dropped) alert("I'm reverting!");
                    if ($(this).hasClass('dropped') && dropped == false) {
                        //console.log(1);
                        $(this).appendTo($('.dragHolder').eq($(this).attr('data-id')))
                        //.css({'z-index':999,'left':$(this).position().left,'top':$(this).position().top})
                        //.animate({
                        //	'left':0,
                        //	'top':0
                        //},1,function(){
                        $(this).css({
                            'z-index': 10
                        }).removeClass('dropped');
                        //});
                    } else {
                        //console.log(2);
                    }
                    return !dropped;
                },
                zIndex: 999,
                refreshPositions: true,
                scroll: true,
                cursor: 'move',
                start: startFix,
                drag: dragFix,
                // start: function (event, ui) {
                // 	if (ui.helper.attr('dropped-on')) {
                // 		dnd_text.fromDragLocation = ui.helper.attr('dropped-on');
                // 	}
                // },
                stop: function (event, ui) {
                    $(this).attr('started', 'no');
                    if (!$(this).hasClass('dropped')) {
                        //							('old_left',$(this).position().left).attr('old_top',$(this).position().top);
                    }
                }
            });
            $(".drop").droppable({
                accept: '.drag',
                hoverClass: 'dropHover',
                drop: function (event, ui) {
                    // console.log(1);
                    if ($(this).find('.drag').length != 0) {
                        $oldDrag = $(this).find('.drag');
                        $oldDrag.removeClass('dropped');
                        $oldDrag //.css({'z-index':1000,'left':$($oldDrag).attr('new_left')+'px','top':$($oldDrag).attr('new_top')+'px'})
                            .appendTo($('.dragHolder').eq($($oldDrag).attr('data-id')))
                            //.css({'z-index':999,'left':$(this).position().left,'top':$(this).position().top})
                            .animate({
                                'left': 0,
                                'top': 0
                            }, 400, function () {
                                $(this).css({
                                    'z-index': 10
                                });
                            });;
                    }
                    $(ui.draggable).appendTo($(this));
                    $(ui.draggable).css({
                        'left': 0,
                        'top': 0,
                        'z-index': 10
                    })
                    $(ui.draggable).addClass('dropped');
                    setTimeout(function () {
                        removeDisabledDrag();
                    }, 100);
                    // }
                    if (__answers == $('.drag.dropped').length) {
                        $(".cSubmitBtn").addClass('active');
                        $(".cSubmitBtn").off().on('click', function () {
                            submitClick();
                        });
                    } else {
                        $(".cSubmitBtn").removeClass('active');
                        $(".cSubmitBtn").off();
                    }
                }
            });
        }
        function removeDisabledDrag() {
            $(".dragHolder .drag").each(function () {
                $(this).draggable("enable").removeClass("ui-draggable-disabled").removeClass("ui-state-disabled");
            });
        }
        function startFix(event, ui) {
            $(ui.draggable).attr('started', 'yes');
            $(ui.draggable).removeClass('dropped');
            ui.position.left = 0;
            ui.position.top = 0;
        }
        var containmentArea = $(".mainContainer");
        function dragFix1(event, ui) {
            var contWidth = containmentArea.width(),
                contHeight = containmentArea.height();
            ui.position.left = Math.max(0, Math.min(ui.position.left / scalePercent, contWidth - ui.helper.width()));
            ui.position.top = Math.max(0, Math.min(ui.position.top / scalePercent, contHeight - ui.helper.height()));
        }
        function dragFix(event, ui) {
            var changeLeft = ui.position.left - ui.originalPosition.left; // find change in left
            var newLeft = ui.originalPosition.left + changeLeft / scalePercent; // adjust new left by our zoomScale
            var changeTop = ui.position.top - ui.originalPosition.top; // find change in top
            var newTop = ui.originalPosition.top + changeTop / scalePercent; // adjust new top by our zoomScale
            ui.position.left = newLeft;
            ui.position.top = newTop;
        }
        function submitClick() {
            $(".disableArea").show();
            //$( ".drag" ).on( "dragstop", function( event, ui ) {} );
            //$( ".drag" ).draggable({ cancel: "p.ui-widget-header" });
            //$( "div, p" ).disableSelection();
            var droppedSequence = [],
                correctCount = 0;
            attemptCount++;
            $(".drop").each(function () {
                droppedSequence.push($(this).find('.drag').attr('data-id'));
            });
            $.each(droppedSequence, function (i, val) {
                var found = false;
                $.each(dropSequence, function(x, v){
                    if( v == val ){
                        found = true;
                    }
                })    
                if (found  == true) {
                    correctCount++;
                    console.log(i, val, dropSequence[i]);
                    $(".drop").eq(i).parents('.dropHolder').append("<div class='tick'></div>");
                    $(".drop").eq(i).addClass("correctAnswer");
                } else {
                    $(".drop").eq(i).addClass('incorrect');
                }
            });
            if (correctCount == __answers) {
                // $('.dropImage,.drop,.draggableContainer').fadeOut();
                $(".cSubmitBtn").removeClass('active').off().hide();
                $('.dropFeedback').fadeIn();
                // $('.dropText').hide();
                // $('.dropTextMiddle').hide();
                // $('.dropTextLast').hide();
                fnCompletion();
                isFinal = true;
                fnPlaySectionAudio(2);
                tinCanWrapper.sendStatementData("answered", "Review:-Risk-Factors-for-Hypoglycemia-Let's-review-the-primary-factor-for-why-some-infants-are-at-an-increased-risk-for-becoming-hypoglycemic.", "Let's review the primary factor for why some infants are at an increased risk for becoming hypoglycemic.");
            } else {
                $(".cSubmitBtn").removeClass('active').off().hide();
                if (attemptCount == 2) {
                    fnCompletion();
                    // $('.dropImage,.drop,.draggableContainer').fadeOut();
                    $('.dropFeedback').fadeIn();
                    // $('.dropText').hide();
                    // $('.dropTextMiddle').hide();
                    // $('.dropTextLast').hide();
                    // $.each(dropSequence, function (i, val) {
                    //     $(".drag[data-id=" + i + "]").addClass("actualAnswer");
                    // });
                    $(".dropHolder .drop").each(function () {
                        if ($(this).hasClass('incorrect')) {
                            $(this).removeClass('incorrect');
                            $(this).find('.drag').removeClass('dropped');
                            $(this).find('.drag').appendTo($('.dragHolder').eq($(this).find('.drag').attr('data-id')));
                        } else {
                            $(this).parents('.dropHolder').find('.tick').remove();
                            $(this).removeClass('correctAnswer');
                            $(this).find('.drag').removeClass('dropped');
                            $(this).find('.drag').appendTo($('.dragHolder').eq($(this).find('.drag').attr('data-id')));
                        }
                    });
                    $.each(dropSequence, function (i, val) {
                        // $(".drag[data-id=" + val + "]").addClass("actualAnswer").addClass('dropped');
                        $(".drag[data-id=" + val + "]").appendTo($('.drop').eq(i));
                        $('.drop').eq(i).parents('.dropHolder').append("<div class='tick'></div>");
                    });
                    isFinal = true;
                    fnPlaySectionAudio(1);
                    tinCanWrapper.sendStatementData("answered", "Review:-Risk-Factors-for-Hypoglycemia-Let's-review-the-primary-factor-for-why-some-infants-are-at-an-increased-risk-for-becoming-hypoglycemic.", "Let's review the primary factor for why some infants are at an increased risk for becoming hypoglycemic.");
                } else {
                    fnPlaySectionAudio(0);
                    $('.cTryAgainBtn').addClass('active').show();
                    $(".cTryAgainBtn").off().on('click', function () {
                        tryAgain();
                    });
                }
                $(".disableArea").show();
            }
        }
        function tryAgain() {
            $('.cTryAgainBtn').removeClass('active').hide();
            $(".disableArea").hide();
            $(".dropHolder .drop").each(function () {
                if ($(this).hasClass('incorrect')) {
                    $(this).removeClass('incorrect');
                    $(this).find('.drag').removeClass('dropped');
                    $(this).find('.drag').appendTo($('.dragHolder').eq($(this).find('.drag').attr('data-id')));
                } else {
                    $(this).find('.drag').draggable('disable');
                }
            });
            $(".cSubmitBtn").removeClass('active').off().show();
        }