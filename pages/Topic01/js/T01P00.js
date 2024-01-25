
manifest = [{
    src: 'pages/images/Topic01/T01P00/01.png',
    id: '1'
},

{
    src: 'pages/images/Topic01/T01P00/02.png',
    id: '2'
}
];

var audioPath = "pages/audio/Topic01/T01P00/T01P00";



var currCue = 0;

var idd = 0;



var updateContentArray = [

    {
        time: "0.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "The “B” in S.T.A.B.L.E. stands for Blood Pressure. This module reviews concepts related to shock and how to treat shock. When applicable, we'll use this caution symbol to draw attention to safety concerns and in particular, where errors can and do occur so that extra care may be taken.<br> ",
        animation: [{
            target: "#idCircle01",
            duration: "0.5",
            activity: {
                'transform': 'matrix(1,0,0,1,0,0)'
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
            target: "#idPatch1",
            duration: "0.5",
            activity: {
                'width': '715px',
                'display': 'block'
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
            target: "#idText1",
            duration: "0.5",
            activity: {
                'opacity': '1'
            }
        }]
    },

    {
        time: "9.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [

            {
                target: ".clsIcon",
                duration: "0.5",
                activity: {
                    'display': 'block',
                    'opacity': '1'
                }
            },

            {
                target: ".clsNextText",
                duration: "0.5",
                activity: {
                    'display': 'block',
                    'opacity': '1'
                }
            }

        ]
    },

    {
        time: "21",
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
    }

];

function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

    fnUpdatePageCompletionCounter(0);

}




$(document).ready(function () {

    // disableNextBtn();

    console.log(gCompPageArr);

    //var checkVal = isInArray("M1L0T1P1",gCompPageArr);

    //console.log(checkVal);			

    var n = isInArray("M1L0T1P0", gCompPageArr);

    if (n == true) {

        enableNextBtn();

        //fnGlowNextBtn();

        fnDesiableNext(false);

    }



    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }

    //setTimeout(function(){ fInitClickAndDisplay(); }, 300);

});

function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {

        enableNextBtn();

        $(".boxInst").show()
        fnAudioFinishItemComp();
        audioStop();

    }

}



function isInArray(value, array) {

    return array.indexOf(value) > -1;

}
