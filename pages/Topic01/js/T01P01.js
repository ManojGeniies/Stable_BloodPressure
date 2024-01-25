
manifest = [{
    src: 'pages/images/Topic01/T01P01/01.png',
    id: '1'
},

{
    src: 'pages/images/Topic01/T01P01/02.png',
    id: '2'
},

{
    src: 'pages/images/Topic01/T01P01/03.png',
    id: '3'
},


{
    src: 'pages/images/Topic01/T01P01/module_objective_banner.png',
    id: '6'
}
];

var audioPath = "pages/audio/Topic01/T01P01/T01P01";



var currCue = 0;

var idd = 0;



var updateContentArray = [

    {
        time: "0.1",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "By the end of this module, you will be able to:<ul class='transcript'><li>Explain factors that influence cardiac output,</li><li>Describe physical exam findings to assess infants for shock,</li><li>Identify changes in vital signs that are observed when an infant is in shock, and</li><li>Explain the causes and initial treatment of the four major types of shock: hypovolemic, obstructive, cardiogenic, and septic/distributive shock.</li></ul>",
        animation: [{
            target: ".clsBG",
            duration: "3.0",
            activity: {
                'width': '1086px',
                'left': '0px'
            }
        }]
    },

    {
        time: "3.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#box1",
            duration: "0.5",
            activity: {
                'opacity': '1'
            }
        }, {
            target: "#idIcon01",
            duration: "0.5",
            activity: {
                'opacity': '1'
            }
        }, {
            target: "#idText1",
            duration: "0.5",
            activity: {
                'opacity': '1'
            }
        }]
    },

    {
        time: "7",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#box2",
            duration: "0.5",
            activity: {
                'opacity': '1'
            }
        }, {
            target: "#idIcon02",
            duration: "0.5",
            activity: {
                'opacity': '1'
            }
        }, {
            target: "#idText2",
            duration: "0.5",
            activity: {
                'opacity': '1'
            }
        }]
    },



    {
        time: "11.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#box3",
            duration: "0.5",
            activity: {
                'opacity': '1'
            }
        }, {
            target: "#idIcon03",
            duration: "0.5",
            activity: {
                'opacity': '1'
            }
        }, {
            target: "#idText3",
            duration: "0.5",
            activity: {
                'opacity': '1'
            }
        }]
    },



    {
        time: "16.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#box4",
            duration: "0.5",
            activity: {
                'opacity': '1'
            }
        }, {
            target: "#idIcon04",
            duration: "0.5",
            activity: {
                'opacity': '1'
            }
        }, {
            target: "#idText4",
            duration: "0.5",
            activity: {
                'opacity': '1'
            }
        }]
    },



    {
        time: "25",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#box5",
            duration: "0.5",
            activity: {
                'opacity': '1'
            }
        }, {
            target: "#idIcon05",
            duration: "0.5",
            activity: {
                'opacity': '1'
            }
        }, {
            target: "#idText5",
            duration: "0.5",
            activity: {
                'opacity': '1'
            }
        }]
    }

];
glossaryFuncPageLevel();
function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

    fnUpdatePageCompletionCounter(0);

}



$(document).ready(function () {

    disableNextBtn();

    console.log(gCompPageArr);


    var n = isInArray("M1L0T1P1", gCompPageArr);

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
