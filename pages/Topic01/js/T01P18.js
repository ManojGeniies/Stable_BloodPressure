manifest = [{
        src: 'pages/images/Topic01/T01P13/small_expand.png',
        id: '1'
    }

];

glossaryFuncPageLevel();
var audioPath = "pages/audio/Topic01/T01P18/T01P18";

//var gItemAudioPath=["pages/audio/Topic01/T01P17/T01P17"

//];



var currCue = 0;

var idd = 0;



var updateContentArray = [

    {
        time: "0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "Determining the cause of shock and the degree of end-organ damage that has occurred are important goals of lab testing.<br A blood gas and lactate level will help assess the degree of shock an infant is experiencing. A complete blood count and blood culture will help investigate for infection, anemia, and thrombocytopenia.<br>Other important lab tests are listed on this screen. Click the PDF icons to learn more about lab testing."
    },
    {
        time: "0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".ClsImage1",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'none'
            }
        }]
    },

    
    {
        time: "5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist1",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "6.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist2",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "14",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist3",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "15.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist4",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "19.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist5",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    

    {
        time: "20",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist6",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "20.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist7",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "21.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist8",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "22",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist9",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    
    {
        time: "22.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist10",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "23",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist11",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "23.2",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist12",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    
    
    {
        time: "23.5",
        carry: "",
        event: "",
        show: "#_clickImg0pdf",
        hide: "",
        transcript: "",
        animation: [{
            target: "#_clickImg0pdf",
            duration: "0.5",
            activity: {
                'opacity': '1',
                'display': 'block'
            }
        }]
    },
    {
        time: "23.5",
        carry: "",
        event: "",
        show: "#_clickImg0pdf04",
        hide: "",
        transcript: "",
        animation: [{
            target: "#_clickImg0pdf04",
            duration: "0.5",
            activity: {
                'opacity': '1',
                'display': 'block'
            }
        }]
    }

];



		function fnAudioFinishItemComp() {

		    fnAudioFinishPageComp();

		    fnUpdatePageCompletionCounter(0);

		    //fnUpdatePageCompletionCounter(7);

		}

		var __dataXml;

		var __clickCount = 0;

		var aud = document.getElementById("audioplayer");

		$(document).ready(function() {

		    disableNextBtn();

		    var ele = document.getElementsByTagName('div');

		    for (var i = 0; i < ele.length; i++) {

		        ele[i].setAttribute("unselectable", "on");

		    }





		    var n = isInArray("M1L0T1P18", gCompPageArr);

		    console.log(n);

		    if (n == true) {

		        enableNextBtn();

		        // fnGlowNextBtn();

		        fnDesiableNext(false);

		    }

		    $('#pageClsResourcesPopup').hide();

		    $(document).on("click", '._clickLink', function() {



		        var num = $(this).attr('id').slice(10)



		        // console.log(referenceArr);



		        $(this).addClass("_viewed");



		        //$('.pdflink').attr('src', referenceArr[num])



		        $("#pageid_RefTitleBar").hide();



		        $("#pageRefTitleBar_id").show();



		    });
		    $("#id_glosCloseBtn").click(function() {
		        enabledAllButtons();
		        fnPlayAudio();
		        $("#pageClsResourcesPopup").hide();
		    });

		    $("#_clickImg0pdf").on("click", function() {

		        fnPauseAudio();


		        disabledAllButtons();
		        $(".pdflink").hide();
		        $("#p82_1").show();
		        //  $('#pageClsResourcesPopup .pdflink').attr('src', 'pages/Topic01/pdf/uvc_uac.pdf');

		        $('#pageReftitleText_id').html('Abnormal Anion Gap, Low Ionized Calcium, and Elevated Cardiac Enzymes');

		        $("#pageClsResourcesPopup").show();
		        $("#p82_1").show();


		    });

		    $("#_clickImg0pdf04").on("click", function() {
		        fnPauseAudio();
		        disabledAllButtons();
		        $(".pdflink").hide();

		        $("#p82_2").show();
		        //  $('#pageClsResourcesPopup .pdflink').attr('src', 'pages/Topic01/pdf/uvc_uac_insertion.pdf');

		        $('#pageReftitleText_id').html('Laboratory evaluation for shock');

		        $("#pageClsResourcesPopup").show();
		        $("#p82_2").show();


		    });


		});



		function isInArray(value, array) {

		    return array.indexOf(value) > -1;

		}



		function audioReset() {

		    gAudioId = "";

		    onTimelineEnd();

		}




		function fnCompletion() {



		}



		$(".small_expand").on("click", function() {





		   // $(".modalTxtImg").hide();



		    var i = $(this).attr("id").slice(8);

		    $("#case_study_popup" + i).show();

		    $("#imgPopup" + i).show();

		    $(".mainContainer").addClass("blur");
            $(".modal").show();


		});



		$(".closepopup").on("click", function() {

		    // audioReset();

		    var __aIndex = $(this).attr("id").slice(8);

		    $(".modal").removeAttr("style");

		    $(".mainContainer").removeClass("blur");



		});

		$(".closepopup1").on("click", function() {

		    // audioReset();

		    var __aIndex = $(this).attr("id").slice(8);



		    console.log(__aIndex);

		    $(".modal").removeAttr("style");

		    $(".mainContainer").removeClass("blur");

		});

		function fnOnAudioComplete() {

		    if (gAudioId == "startAudio") {

		        enableNextBtn();

		        fnAudioFinishItemComp();

		        $('.boxInst').show();
		        $('.small_expand').css('display', 'block').css('opacity', '1');
                $('.icon00').css('display', 'block').css('opacity', '1');
		        gCompPageArr.push("M1L0T1P18");

		        aud.pause();

		        aud.currentTime = 0;

		    } else {

		        $("#idTick0" + selectedIndex).css({ "opacity": "1" });

		        $("#clsTabTxt" + selectedIndex).css({ 'color': '#80848b' });

		        $(".ClsTab").removeClass("clsDisable");

		        $("#TabImage" + selectedIndex).addClass("clsDisable");

		        fnCompletion();

		        if ($(".clsVisited").length === 2) {



		        }

		    }

		}