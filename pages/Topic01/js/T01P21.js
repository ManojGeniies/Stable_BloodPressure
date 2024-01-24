manifest = [{
    src: 'pages/images/Topic01/T01P13/small_expand.png',
    id: '1'
}

];

glossaryFuncPageLevel();
var audioPath = "pages/audio/Topic01/T01P21/T01P21";

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
    transcript: "Ten minutes later, the paramedics arrive with a premature female infant. The infant is being given bag and mask positive pressure ventilation (PPV) with 100% oxygen. She appears limp and cyanotic. The infant is weighed and then transferred to the radiant warmer."
},
{
    time: "0",
    carry: "",
    event: "",
    show: "",
    hide: "",
    transcript: "",
    animation: [{
        target: ".ClsImage1, .ClsImage2",
        duration: "0.5",
        activity: {
            'display': 'block',
            'opacity':'none'
        }
    }]
},


{
    time: "0",
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
    time: "0.5",
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
    time: "3.5",
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
    time: "10.5",
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
    time: "12.5",
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
    time: "16.5",
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
    time: "16.5",
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





        var n = isInArray("M1L0T1P21", gCompPageArr);

        console.log(n);

        if (n == true) {

            enableNextBtn();

            // fnGlowNextBtn();

            fnDesiableNext(false);

        }


        $(document).on("click", '._clickLink', function() {



            var num = $(this).attr('id').slice(10)



            // console.log(referenceArr);



            $(this).addClass("_viewed");



            //$('.pdflink').attr('src', referenceArr[num])



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
            gCompPageArr.push("M1L0T1P21");

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