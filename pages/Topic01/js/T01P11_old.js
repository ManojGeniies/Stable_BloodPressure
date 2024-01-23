manifest = [
    {
        src: 'pages/images/Topic01/T01P11/T01P11.png',
        id: '1'
    },
    {
        src: 'pages/images/Topic01/T01P11/T01P11_01.png',
        id: '2'
    },
    {
        src: 'pages/images/Topic01/T01P11/T01P11_02_01.png',
        id: '3'
    },
    {
        src: 'pages/images/Topic01/T01P11/T01P11_02_01_large.png',
        id: '4'
    },
    {
        src: 'pages/images/Topic01/T01P11/T01P11_02_02.png',
        id: '5'
    },
    {
        src: 'pages/images/Topic01/T01P11/T01P11_02_02_large.png',
        id: '6'
    },
    {
        src: 'pages/images/Topic01/T01P11/T01P11_03.png',
        id: '7'
    },
    { src: 'pages/images/Topic01/T01P11/T01P11_03_large.png', id: '8' },
    { src: 'pages/images/Topic01/T01P11/T01P11_03_large.png',  id: '8' },
    { src: 'pages/images/Topic01/T01P11/T01P11_04_01_01.png',  id: '9' },
    { src: 'pages/images/Topic01/T01P11/T01P11_04_01_01_large.png',  id: '10' },
    { src: 'pages/images/Topic01/T01P11/T01P11_04_01_02.png',  id: '11' },
    { src: 'pages/images/Topic01/T01P11/T01P11_04_01_02_large.png',  id: '12' },
    { src: 'pages/images/Topic01/T01P11/T01P11_04_01_03.png',  id: '13' },
    { src: 'pages/images/Topic01/T01P11/T01P11_04_01_03_large.png',  id: '14' },
    { src: 'pages/images/Topic01/T01P11/T01P11_04_02_01.png',  id: '15' },
    { src: 'pages/images/Topic01/T01P11/T01P11_04_02_01_large.png',  id: '16' },
    { src: 'pages/images/Topic01/T01P11/T01P11_04_02_02.png',  id: '17' },
    { src: 'pages/images/Topic01/T01P11/T01P11_04_02_02_large.png',  id: '18' },
    { src: 'pages/images/Topic01/T01P11/T01P11_04_02_03.png',  id: '19' },
    { src: 'pages/images/Topic01/T01P11/T01P11_04_02_03_large.png',  id: '20' },
    { src: 'pages/images/Topic01/T01P11/T01P11_04_02_04.png',  id: '21' },
    { src: 'pages/images/Topic01/T01P11/T01P11_04_02_04_large.png',  id: '22' },
    { src: 'pages/images/Topic01/T01P11/T01P11_04_02_05.png',  id: '23' },
    { src: 'pages/images/Topic01/T01P11/T01P11_04_02_05_large.png',  id: '24' },
    { src: 'pages/images/Topic01/T01P11/T01P11_04_02_06.png',  id: '25' },
    { src: 'pages/images/Topic01/T01P11/T01P11_04_02_06_large.png',  id: '26' },
    { src: 'pages/images/Topic01/T01P11/T01P11_05.png',  id: '27' },
    { src: 'pages/images/Topic01/T01P11/T01P11_05_large.png',  id: '28' },
    { src: 'pages/images/Topic01/T01P11/T01P11_large.png',  id: '29' }

];



var gItemAudioPath = [
    "pages/audio/Topic01/T01P11/T01P11_1",
    "pages/audio/Topic01/T01P11/T01P11_2",
    "pages/audio/Topic01/T01P11/T01P11_3",
    "pages/audio/Topic01/T01P11/T01P11_4",
    "pages/audio/Topic01/T01P11/T01P11_5"
];

var _getPreviousBookMarkPage = assessmentObj.getBookmarkPage();
var _getCurrentScreenId = assessmentObj.getRedirectPage();
if (_getPreviousBookMarkPage != "") {
    if(_getPreviousBookMarkPage=="M1L0T1P58"){
        var audioPath = "pages/audio/Topic01/T01P11/T01P11_4";
        var updateContentArray = [
            { time: "0", carry: "", event: "", show: "", hide: "", transcript: "<b>Heart:</b><br/>  Heart murmurs are commonly heard in neonatal patients with and without congenital heart disease, so the presence of a murmur can be nonspecific.<br/> If congenital heart disease is suspected, then obtain an echocardiogram as soon as possible. <br/>An echocardiogram is also useful to evaluate heart function. <br/> If the heart rhythm is abnormal, then obtain an electrocardiogram, or ECG, to assess for an arrhythmia.<br/><br/> <b>Chest X-Ray:</b><br/> A chest x-ray is helpful to evaluate heart size, shape, and location, as well as to assess for treatable causes of shock, such as a pneumothorax. <br/> An enlarged heart size on chest x-ray correlates with myocardial dysfunction, congestive heart failure, and/or congenital heart disease.<br/> A smaller than normal heart size may reflect poor filling of the heart, or compression of the heart secondary to hyperexpanded lungs." },
            { time: "0", carry: "", event: "", show: "", hide: "", animation: [
                { target: ".popup4 .firstSet .fLeftSet ", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
                { target: ".popup4 .firstSet .fRightSet", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
                { target: ".showlist13", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
            ]},
            { time: "9", carry: "", event: "", show: "", hide: "", animation: [
                { target: ".showlist14", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
            ]},
            { time: "15", carry: "", event: "", show: "", hide: "", animation: [
                { target: ".showlist15", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
            ]},
            { time: "20", carry: "", event: "", show: "", hide: "", animation: [
                { target: ".showlist16", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
            ]},
            { time: "28", carry: "", event: "", show: "", hide: "", animation: [
                { target: ".popup4 .firstSet", duration: "0.5", activity: { 'opacity': '0', 'display': 'none' } }
            ]},
            { time: "28.2", carry: "", event: "", show: "", hide: "", animation: [
                { target: ".popup4 .secondSet", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
                { target: ".showlist17", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
            ]},
            { time: "30.4", carry: "", event: "", show: "", hide: "", animation: [
                { target: ".showlist18", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
            ]},
            { time: "34", carry: "", event: "", show: "", hide: "", animation: [
                { target: ".showlist19", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
            ]},
            { time: "38", carry: "", event: "", show: "", hide: "", animation: [
                { target: ".showlist20", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
            ]},
            { time: "42", carry: "", event: "", show: "", hide: "", animation: [
                { target: ".showlist21", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
            ]},
            { time: "43.3", carry: "", event: "", show: "", hide: "", animation: [
                { target: ".showlist22", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
            ]},
            { time: "45.3", carry: "", event: "", show: "", hide: "", animation: [
                { target: ".showlist23", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
            ]},
            { time: "48", carry: "", event: "", show: "", hide: "", animation: [
                { target: ".showlist24", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
            ]},
            { time: "51", carry: "", event: "", show: "", hide: "", animation: [
                { target: ".showlist25", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
            ]},
            { time: "55", carry: "", event: "", show: "", hide: "", animation: [
                { target: ".showlist26", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
            ]}
        ];
    }

}else{

    var updateContentArray = [
        { time: "0", carry: "", event: "", show: "", hide: "", transcript: "Click each tab to learn more about how to assess the infant for signs of shock." },
        { time: "1", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
        { time: "1.2", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup2", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
        { time: "1.4", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup3", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
        { time: "1.6", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup4", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
        { time: "1.8", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup5", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    ];    
    var audioPath = "pages/audio/Topic01/T01P11/T01P11";
}

var currCue = 0;
var idd = 0;
var __aIndex = []

glossaryFuncPageLevel();





var popupSectionArray0 = [
    
    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "An infant in shock will have varying degrees of respiratory distress. Tachypnea may be a sign that the infant is trying to compensate for a metabolic or mixed acidosis. As shock worsens, work of breathing will increase.  In severe states of shock, the infant might have apneic episodes and if gasping is observed, this is an ominous sign of impending cardiorespiratory arrest." },

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup1 .leftContent", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup1 .rightContent", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },    
    { time: "5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist0", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "11", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "15", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist2", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "20", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#idPatchMain", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] }

];

var popupSectionArray1 = [
    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "Evaluate O2 saturation and a blood gas to determine oxygenation and acid-base status. Severe hypoxemia will worsen anaerobic metabolism, which will cause increased production of lactic acid. <br/> If the infant’s color is pale or white, this may indicate a very low hemoglobin secondary to hemorrhage. With severe anemia, the oxygen content of the blood will be very low and therefore will be an additional cause of tissue hypoxia." },

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup2 .leftContent", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup2 .showlist3", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "7", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup2 .showlist4", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "15", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup2 .showlist5", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "22", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".popup2 .showlist6", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
];

var popupSectionArray2 = [{ time: "0", carry: "", event: "", show: "", hide: "", transcript: "Poor delivery of oxygen to the brain and accumulation of lactic acid will cause neurologic depression. Neurologic signs include irritability initially, followed by a decreased level of consciousness, hypotonia and lethargy. In advanced states of shock, brain injury may lead to seizures." },

    { time: "0", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".popup3 .leftContent", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
        { target: ".showlist7", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
    ]},
    { time: "7", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist8", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
    ]},
    { time: "9", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist9", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
    ]},
    { time: "12", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist10", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
    ]},
    { time: "14", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist11", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
    ]},
    { time: "15", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist12", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
    ]},
    { time: "16.3", carry: "", event: "", show: "", hide: "", animation: [
        { target: "#idPatchMain3", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
    ]},
];

var popupSectionArray3 = [
    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "<b>Heart:</b><br/>  Heart murmurs are commonly heard in neonatal patients with and without congenital heart disease, so the presence of a murmur can be nonspecific.<br/> If congenital heart disease is suspected, then obtain an echocardiogram as soon as possible. <br/>An echocardiogram is also useful to evaluate heart function. <br/> If the heart rhythm is abnormal, then obtain an electrocardiogram, or ECG, to assess for an arrhythmia.<br/><br/> <b>Chest X-Ray:</b><br/> A chest x-ray is helpful to evaluate heart size, shape, and location, as well as to assess for treatable causes of shock, such as a pneumothorax. <br/> An enlarged heart size on chest x-ray correlates with myocardial dysfunction, congestive heart failure, and/or congenital heart disease.<br/> A smaller than normal heart size may reflect poor filling of the heart, or compression of the heart secondary to hyperexpanded lungs." },
    { time: "0", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".popup4 .firstSet .fLeftSet ", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
        { target: ".popup4 .firstSet .fRightSet", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
        { target: ".showlist13", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "9", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist14", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "15", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist15", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "20", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist16", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "28", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".popup4 .firstSet", duration: "0.5", activity: { 'opacity': '0', 'display': 'none' } }
    ]},
    { time: "28.2", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".popup4 .secondSet", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } },
        { target: ".showlist17", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "30.4", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist18", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "34", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist19", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "38", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist20", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "42", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist21", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "43.3", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist22", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "45.3", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist23", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "48", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist24", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "51", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist25", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "55", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist26", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]}
];

var popupSectionArray4 = [
    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "Urine output indirectly reflects kidney perfusion.<br/> To maintain a normal urine output, the kidney must receive both adequate blood flow and hydration. <br/> In neonates, a urine output less than 1 milliliter per kilogram per hour or a declining urine output are cause for concern. <br/> A rising creatinine and blood urea nitrogen are also concerning signs of poor kidney function." },
    { time: "2", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist27", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "5", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist28", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "11", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".popup5 .rightContent .tabHeading5_02", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "12", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist29", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]},
    { time: "20", carry: "", event: "", show: "", hide: "", animation: [
        { target: ".showlist30", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }
    ]}
];

var audplayer = document.getElementById('audioplayer');


function fnAudioFinishItemComp() {


    console.log("end")


    // fnAudioFinishPageComp();


    fnUpdatePageCompletionCounter(0);


}

var __transcriptPageTxt = '';


var __dataXml;


var __clickCount = 0;


var popup1 = 0;


var popup2 = 0;


var popup3 = 0;
var popup4 = 0;
var popup5 = 0;


var pop1 = 0;
var pop2 = 0;
var pop3 = 0;
var pop4 = 0;
var pop5 = 0;

function clearToNormal(){
    $(".popup3 #idPatchMain3").removeAttr("style");
    $(".popup1 #idPatchMain").removeAttr("style");
    $(".popup4 .firstSet, .popup4 .secondSet").removeAttr("style");
    $(".popup5 .rightContent .tabHeading5_02").removeAttr("style");
}


$(document).ready(function() {


    audioReset();


    disableNextBtn();

    enableAudioPlayAndSlider();


    $('.bullet_Text').css({ "pointer-events": "all" });





    $("#bullText1").on("click", function() {
        clearToNormal();
        enableAudioPlayAndSlider();
        $('.bottomText').hide();
        $(".popUp").css({ "display": "block", "opacity": "1" });
        console.log(popup1);
        if (popup1 == 1) {
            fnPauseAudio();
            popup1 = 0;
            $('.popup1 .triangle-down').css({ "display": "none" });
            $("#bullText0").css({ "top": "45px","display": "block"});
            //$("#bullText1").css({ "background-color": "#D1D1D1", "color": "#3A5569" });

            $("#bullText1").removeClass("active");

            $(".popup1").animate({ top: "110px", easing: 'swing', duration: 500 });
            $(".popup2").animate({ top: "180px", easing: 'swing', duration: 500 });
            $(".popup3").animate({ top: "250px", easing: 'swing', duration: 500 });
            $(".popup4").animate({ top: "320px", easing: 'swing', duration: 500 });
            $(".popup5").animate({ top: "390px", easing: 'swing', duration: 500 });

            $('.popup1 .leftContent').fadeOut();
            $('.popup1 .rightContent').fadeOut();
            $('.hideText1').hide();
            $('.hideText').css({ 'opacity': '0', 'display': 'none' });

        } else if (popup1 == 0) {

            popup1 = 1;
            popup2 = 0;
            popup3 = 0;
            popup4 = 0;
            popup5 = 0;
            pop1 = 1;

            $('.hideText1').hide();
            $('.hideText').css({ 'opacity': '0', 'display': 'none' });
            $('#bullText0').css({ 'top': '0' });

            /* $("#bullText1").css({ "background-color": "#3A5569", "color": "#ffffff" });
            $("#bullText2").css({ "background-color": "#D1D1D1", "color": "#3A5569" });
            $("#bullText3").css({ "background-color": "#D1D1D1", "color": "#3A5569" });
            $("#bullText4").css({ "background-color": "#D1D1D1", "color": "#3A5569" });
            $("#bullText5").css({ "background-color": "#D1D1D1", "color": "#3A5569" }); */

            $("#bullText1").addClass("visited").addClass("active");
            $("#bullText2").removeClass("active");
            $("#bullText3").removeClass("active");
            $("#bullText4").removeClass("active");
            $("#bullText5").removeClass("active");

            $('.popup1 .triangle-down').css({ "display": "block" });

            $('.popup2 .triangle-down').css({ "display": "none" });

            $('.popup3 .triangle-down').css({ "display": "none" });

            $('.popup4 .triangle-down').css({ "display": "none" });

            $('.popup5 .triangle-down').css({ "display": "none" });

            $(".popup1").animate({ height: "315px", top: "35px", easing: 'swing', duration: 500 });
            $(".popup2").animate({ height: "40px", top: "350px", easing: 'swing', duration: 500 });
            $(".popup3").animate({ height: "40px", top: "395px", easing: 'swing', duration: 500 });
            $(".popup4").animate({ height: "40px", top: "440px", easing: 'swing', duration: 500 });
            $(".popup5").animate({ height: "40px", top: "485px", easing: 'swing', duration: 500 });

            $('.popup1 .leftContent').fadeIn();
            $('.popup1 .rightContent').fadeIn();

            $('.popup2 .leftContent').fadeOut();
            $('.popup2 .rightContent').fadeOut();

            $('.popup3 .leftContent').fadeOut();
            $('.popup3 .rightContent').fadeOut();

            $('.popup4 .leftContent').fadeOut();
            $('.popup4 .rightContent').fadeOut();

            $('.popup5 .leftContent').fadeOut();
            $('.popup5 .rightContent').fadeOut();

            fnPlaySectionAudio(0);

        }

        enabledNextBtn();

    });



    $("#bullText2").on("click", function() {
        clearToNormal();
        enableAudioPlayAndSlider();
        $('.bottomText').hide();
        $(".popUp").css({ "display": "block", "opacity": "1" });
        console.log("click brown fat" + popup2);
        if (popup2 == 1) {
            fnPauseAudio();
            popup2 = 0;

            $('.popup2 .triangle-down').css({ "display": "none" });
            $("#bullText0").css({ "top": "45px","display": "block"});
           // $("#bullText2").css({ "background-color": "#D1D1D1", "color": "#3A5569" });

           $("#bullText2").removeClass("active");

            $(".popup1").animate({ top: "110px", easing: 'swing', duration: 500 });
            $(".popup2").animate({ top: "180px", easing: 'swing', duration: 500 });
            $(".popup3").animate({ top: "250px", easing: 'swing', duration: 500 });
            $(".popup4").animate({ top: "320px", easing: 'swing', duration: 500 });
            $(".popup5").animate({ top: "390px", easing: 'swing', duration: 500 });

            $('.popup2 .leftContent').fadeOut();
            $('.popup2 .rightContent').fadeOut();
            $('.hideText1').hide();
            $('.hideText').css({ 'opacity': '0', 'display': 'none' });

        } else if (popup2 == 0) {

            popup1 = 0;
            popup2 = 1;
            popup3 = 0;
            popup4 = 0;
            popup5 = 0;
            pop2 = 1;

            $('.hideText1').hide();

            $('.hideText').css({ 'opacity': '0', 'display': 'none' });
            $('#bullText0').css({ 'top': '0' });
            //$('#bullText0').hide();

            $('.popup2 .triangle-down').css({ "display": "block" });
            $('.popup1 .triangle-down').css({ "display": "none" });
            $('.popup3 .triangle-down').css({ "display": "none" });
            $('.popup4 .triangle-down').css({ "display": "none" });
            $('.popup5 .triangle-down').css({ "display": "none" });

            /* $("#bullText1").css({ "background-color": "#D1D1D1", "color": "#3A5569" });
            $("#bullText2").css({ "background-color": "#3A5569", "color": "#ffffff" });            
            $("#bullText3").css({ "background-color": "#D1D1D1", "color": "#3A5569" });
            $("#bullText4").css({ "background-color": "#D1D1D1", "color": "#3A5569" });
            $("#bullText5").css({ "background-color": "#D1D1D1", "color": "#3A5569" }); */
            
            $("#bullText1").removeClass("active");
            $("#bullText2").addClass("visited").addClass("active");
            $("#bullText3").removeClass("active");
            $("#bullText4").removeClass("active");
            $("#bullText5").removeClass("active");

            $(".popup1").animate({ height: "40px", top: "35px", easing: 'swing', duration: 500 });
            $(".popup2").animate({ height: "315px", top: "80px", easing: 'swing', duration: 500 });
            $(".popup3").animate({ height: "40px", top: "395px", easing: 'swing', duration: 500 });
            $(".popup4").animate({ height: "40px", top: "440px", easing: 'swing', duration: 500 });
            $(".popup5").animate({ height: "40px", top: "485px", easing: 'swing', duration: 500 });

            $('.popup1 .leftContent').fadeOut();
            $('.popup1 .rightContent').fadeOut();

            $('.popup3 .leftContent').fadeOut();
            $('.popup3 .rightContent').fadeOut();

            $('.popup4 .leftContent').fadeOut();
            $('.popup4 .rightContent').fadeOut();

            $('.popup5 .leftContent').fadeOut();
            $('.popup5 .rightContent').fadeOut();

            $('.popup2 .leftContent').fadeIn();
            $('.popup2 .rightContent').fadeIn();

            fnPlaySectionAudio(1);
        }

        enabledNextBtn();

    });



    $("#bullText3").on("click", function() {
        clearToNormal();
        enableAudioPlayAndSlider();
        $('.bottomText').hide();
        $(".popUp").css({ "display": "block", "opacity": "1" });
        
        if (popup3 == 1) {
            fnPauseAudio();
            popup3 = 0;

            $('.popup3 .triangle-down').css({ "display": "none" });
            $("#bullText0").css({ "top": "45px","display": "block"});
            //$("#bullText3").css({ "background-color": "#D1D1D1", "color": "#3A5569" });
            $("#bullText3").removeClass("active");

            $(".popup1").animate({ top: "110px", easing: 'swing', duration: 500 });
            $(".popup2").animate({ top: "180px", easing: 'swing', duration: 500 });
            $(".popup3").animate({ top: "250px", easing: 'swing', duration: 500 });
            $(".popup4").animate({ top: "320px", easing: 'swing', duration: 500 });
            $(".popup5").animate({ top: "390px", easing: 'swing', duration: 500 });

            $('.popup3 .leftContent').fadeOut();

            $('.popup3 .rightContent').fadeOut();

            $('.hideText1').hide();

            $('.hideText').css({ 'opacity': '0', 'display': 'none' });

        } else if (popup3 == 0) {

            popup1 = 0;
            popup2 = 0;
            popup3 = 1;
            popup4 = 0;
            popup5 = 0;
            pop3 = 1;

            $('.hideText1').hide();

            $('.hideText').css({ 'opacity': '0', 'display': 'none' });
            $('#bullText0').css({ 'top': '0' });
            //$('#bullText0').hide();

            $('.popup3 .triangle-down').css({ "display": "block" });
            $('.popup1 .triangle-down').css({ "display": "none" });
            $('.popup2 .triangle-down').css({ "display": "none" });
            $('.popup4 .triangle-down').css({ "display": "none" });
            $('.popup5 .triangle-down').css({ "display": "none" });

            /* $("#bullText1").css({ "background-color": "#D1D1D1", "color": "#3A5569" });
            $("#bullText2").css({ "background-color": "#D1D1D1", "color": "#3A5569" });            
            $("#bullText3").css({ "background-color": "#3A5569", "color": "#ffffff" });
            $("#bullText4").css({ "background-color": "#D1D1D1", "color": "#3A5569" });
            $("#bullText5").css({ "background-color": "#D1D1D1", "color": "#3A5569" }); */


            $("#bullText1").removeClass("active");
            $("#bullText2").removeClass("active");
            $("#bullText3").addClass("visited").addClass("active");
            $("#bullText4").removeClass("active");
            $("#bullText5").removeClass("active");

            $(".popup1").animate({ height: "40px", top: "35px", easing: 'swing', duration: 500 });
            $(".popup2").animate({ height: "40px", top: "80px", easing: 'swing', duration: 500 });
            $(".popup3").animate({ height: "315px", top: "125px", easing: 'swing', duration: 500 });
            $(".popup4").animate({ height: "40px", top: "440px", easing: 'swing', duration: 500 });
            $(".popup5").animate({ height: "40px", top: "485px", easing: 'swing', duration: 500 });

            $('.popup1 .leftContent').fadeOut();
            $('.popup1 .rightContent').fadeOut();

            $('.popup2 .leftContent').fadeOut();
            $('.popup2 .rightContent').fadeOut();

            $('.popup4 .leftContent').fadeOut();
            $('.popup4 .rightContent').fadeOut();

            $('.popup5 .leftContent').fadeOut();
            $('.popup5 .rightContent').fadeOut();

            $('.popup3 .leftContent').fadeIn();
            $('.popup3 .rightContent').fadeIn();

            fnPlaySectionAudio(2);

        }


        enabledNextBtn();
    });


    $("#bullText4").on("click", function() {
        clearToNormal();
        enableAudioPlayAndSlider();
        $('.bottomText').hide();
        $(".popUp").css({ "display": "block", "opacity": "1" });
        $(".popup4 .firstSet .fLeftSet .small_expand, .popup4 .firstSet .fRightSet .small_expand").css({ "display": "block", "opacity": "1" });
        if (popup4 == 1){
            fnPauseAudio();
            popup4 = 0;
            $('.popup4 .triangle-down').css({ "display": "none" });
            $("#bullText0").css({ "top": "45px","display": "block"});
            //$("#bullText4").css({ "background-color": "#D1D1D1", "color": "#3A5569" });
            $("#bullText4").removeClass("active");

            $(".popup1").animate({ top: "110px", easing: 'swing', duration: 500 });
            $(".popup2").animate({ top: "180px", easing: 'swing', duration: 500 });
            $(".popup3").animate({ top: "250px", easing: 'swing', duration: 500 });
            $(".popup4").animate({ top: "320px", easing: 'swing', duration: 500 });
            $(".popup5").animate({ top: "390px", easing: 'swing', duration: 500 });

            $('.popup4 .leftContent').fadeOut();
            $('.popup4 .rightContent').fadeOut();

            $('.hideText1').hide();
            $('.hideText').css({ 'opacity': '0', 'display': 'none' });

        } else if (popup4 == 0) {

            popup1 = 0;
            popup2 = 0;
            popup3 = 0;
            popup4 = 1;
            popup5 = 0;
            pop4 = 1;

            $('.hideText1').hide();

            $('.hideText').css({ 'opacity': '0', 'display': 'none' });
            $('#bullText0').css({ 'top': '0' });
            //$('#bullText0').hide();
            $('.popup1 .triangle-down').css({ "display": "none" });
            $('.popup2 .triangle-down').css({ "display": "none" });
            $('.popup3 .triangle-down').css({ "display": "none" });
            $('.popup4 .triangle-down').css({ "display": "block" });
            $('.popup5 .triangle-down').css({ "display": "none" });

           /*  $("#bullText1").css({ "background-color": "#D1D1D1", "color": "#3A5569" });
            $("#bullText2").css({ "background-color": "#D1D1D1", "color": "#3A5569" });            
            $("#bullText3").css({ "background-color": "#D1D1D1", "color": "#3A5569" });
            $("#bullText4").css({ "background-color": "#3A5569", "color": "#ffffff" });            
            $("#bullText5").css({ "background-color": "#D1D1D1", "color": "#3A5569" }); */

            $("#bullText1").removeClass("active");
            $("#bullText2").removeClass("active");
            $("#bullText3").removeClass("active");
            $("#bullText4").addClass("visited").addClass("active");
            $("#bullText5").removeClass("active");

            $(".popup1").animate({ height: "40px", top: "35px", easing: 'swing', duration: 500 });
            $(".popup2").animate({ height: "40px", top: "80px", easing: 'swing', duration: 500 });
            $(".popup3").animate({ height: "40px", top: "125px", easing: 'swing', duration: 500 });
            $(".popup4").animate({ height: "315px", top: "170px", easing: 'swing', duration: 500 });
            $(".popup5").animate({ height: "40px", top: "485px", easing: 'swing', duration: 500 });

            $('.popup1 .leftContent').fadeOut();
            $('.popup1 .rightContent').fadeOut();

            $('.popup2 .leftContent').fadeOut();
            $('.popup2 .rightContent').fadeOut();

            $('.popup3 .leftContent').fadeOut();
            $('.popup3 .rightContent').fadeOut();

            $('.popup4 .leftContent').fadeIn();
            $('.popup4 .rightContent').fadeIn();

            $('.popup5 .leftContent').fadeOut();
            $('.popup5 .rightContent').fadeOut();

            fnPlaySectionAudio(3);

        }


        enabledNextBtn();
    });

    $("#bullText5").on("click", function() {
        clearToNormal();
        enableAudioPlayAndSlider();
        $('.bottomText').hide();
        $(".popUp").css({ "display": "block", "opacity": "1" });
        if (popup5 == 1) {
            fnPauseAudio();
            popup5 = 0;
            $('.popup5 .triangle-down').css({ "display": "none" });
            $("#bullText0").css({ "top": "45px","display": "block"});
            $("#bullText5").removeClass("active");
            //$("#bullText5").css({ "background-color": "#D1D1D1", "color": "#3A5569" });

            $(".popup1").animate({ top: "110px", easing: 'swing', duration: 500 });
            $(".popup2").animate({ top: "180px", easing: 'swing', duration: 500 });
            $(".popup3").animate({ top: "250px", easing: 'swing', duration: 500 });
            $(".popup4").animate({ top: "320px", easing: 'swing', duration: 500 });
            $(".popup5").animate({ top: "390px", easing: 'swing', duration: 500 });

            $('.popup5 .leftContent').fadeOut();

            $('.popup5 .rightContent').fadeOut();

            $('.hideText1').hide();

            $('.hideText').css({ 'opacity': '0', 'display': 'none' });

        } else if (popup5 == 0) {

            popup1 = 0;
            popup2 = 0;
            popup3 = 0;
            popup4 = 0;
            popup5 = 1;
            pop5 = 1;

            $('.hideText1').hide();

            $('.hideText').css({ 'opacity': '0', 'display': 'none' });
            $('#bullText0').css({ 'top': '0' });
            //$('#bullText0').hide();
    
            $('.popup1 .triangle-down').css({ "display": "none" });
            $('.popup2 .triangle-down').css({ "display": "none" });
            $('.popup3 .triangle-down').css({ "display": "none" });
            $('.popup4 .triangle-down').css({ "display": "none" });
            $('.popup5 .triangle-down').css({ "display": "block" });

           /*  $("#bullText1").css({ "background-color": "#D1D1D1", "color": "#3A5569" });
            $("#bullText2").css({ "background-color": "#D1D1D1", "color": "#3A5569" });            
            $("#bullText3").css({ "background-color": "#D1D1D1", "color": "#3A5569" });
            $("#bullText4").css({ "background-color": "#D1D1D1", "color": "#3A5569" });            
            $("#bullText5").css({ "background-color": "#3A5569", "color": "#ffffff" }); */


            $("#bullText1").removeClass("active");
            $("#bullText2").removeClass("active");
            $("#bullText3").removeClass("active");
            $("#bullText4").removeClass("active");
            $("#bullText5").addClass("visited").addClass("active");

            $(".popup1").animate({ height: "40px", top: "35px", easing: 'swing', duration: 500 });
            $(".popup2").animate({ height: "40px", top: "80px", easing: 'swing', duration: 500 });
            $(".popup3").animate({ height: "40px", top: "125px", easing: 'swing', duration: 500 });
            $(".popup4").animate({ height: "40px", top: "170px", easing: 'swing', duration: 500 });
            $(".popup5").animate({ height: "315px", top: "215px", easing: 'swing', duration: 500 });

            $('.popup1 .leftContent').fadeOut();
            $('.popup1 .rightContent').fadeOut();

            $('.popup2 .leftContent').fadeOut();
            $('.popup2 .rightContent').fadeOut();

            $('.popup3 .leftContent').fadeOut();
            $('.popup3 .rightContent').fadeOut();

            $('.popup4 .leftContent').fadeOut();
            $('.popup4 .rightContent').fadeOut();

            $('.popup5 .leftContent').fadeIn();
            $('.popup5 .rightContent').fadeIn();

            fnPlaySectionAudio(4);

        }
        enabledNextBtn();
    });

    function enabledNextBtn(){
        if (pop3 == 1 && pop2 == 1 && pop3 == 1 && pop4 == 1 && pop5 == 1) {
            enableNextBtn();
            fnDesiableNext(false);
            gCompPageArr.push("M1L0T1P11");
        }
    }


    var ele = document.getElementsByTagName('div');


    for (var i = 0; i < ele.length; i++) {


        ele[i].setAttribute("unselectable", "on");


    }



    if (_getPreviousBookMarkPage != ""){
        if(_getPreviousBookMarkPage=="M1L0T1P58"){
            popup1 = 0;
            popup2 = 0;
            popup3 = 0;
            popup4 = 1;
            popup5 = 0;
            pop4 = 1;

            $('.hideText1').hide();
            $(".popUp").css({ 'opacity': '1', 'display': 'block' });

            $('.hideText').css({ 'opacity': '0', 'display': 'none' });
            $('#bullText0').css({ 'top': '0' });
            //$('#bullText0').hide();
            $('.popup1 .triangle-down').css({ "display": "none" });
            $('.popup2 .triangle-down').css({ "display": "none" });
            $('.popup3 .triangle-down').css({ "display": "none" });
            $('.popup4 .triangle-down').css({ "display": "block" });
            $('.popup5 .triangle-down').css({ "display": "none" });

            $("#bullText1").removeClass("active");
            $("#bullText2").removeClass("active");
            $("#bullText3").removeClass("active");
            $("#bullText4").addClass("visited").addClass("active");
            $("#bullText5").removeClass("active");

            $(".popup1").animate({ height: "40px", top: "35px", easing: 'swing', duration: 500 });
            $(".popup2").animate({ height: "40px", top: "80px", easing: 'swing', duration: 500 });
            $(".popup3").animate({ height: "40px", top: "125px", easing: 'swing', duration: 500 });
            $(".popup4").animate({ height: "315px", top: "170px", easing: 'swing', duration: 500 });
            $(".popup5").animate({ height: "40px", top: "485px", easing: 'swing', duration: 500 });

            $('.popup1 .leftContent').fadeOut();
            $('.popup1 .rightContent').fadeOut();

            $('.popup2 .leftContent').fadeOut();
            $('.popup2 .rightContent').fadeOut();

            $('.popup3 .leftContent').fadeOut();
            $('.popup3 .rightContent').fadeOut();

            $('.popup4 .leftContent').fadeIn();
            $('.popup4 .rightContent').fadeIn();

            $('.popup5 .leftContent').fadeOut();
            $('.popup5 .rightContent').fadeOut();

        }
    }



    var n = isInArray("M1L0T1P11", gCompPageArr);


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


    initAudioPlayer(gItemAudioPath[gCurrentIndex]);


}





function fnCompletion() {


    console.log("end");


    gCompPageArr.push("M1L0T1P11");


    enableNextBtn();


    $(".boxInst").show();


    fnAudioFinishItemComp();


}





function fnOnAudioComplete() {




    //console.log("Start " +gAudioId);
    if (gAudioId == "startAudio") {
        $('.bullet_Text').css({ "pointer-events": "all" });
        audplayer.pause();
        audplayer.currentTime = 0;

    } else {
        if(gAudioId=="audio_0"){
            $(".popup1 .clickToEnlarge, .popup1 .small_expand").css({ "display": "block","opacity":"1" });
        }else if(gAudioId=="audio_1"){
            $(".popup2 .small_expand").css({ "display": "block","opacity":"1" });
        }else if(gAudioId=="audio_2"){
            $(".popup3 .small_expand").css({ "display": "block","opacity":"1" });
        }else if(gAudioId=="audio_3"){
            $(".popup4 .small_expand").css({ "display": "block","opacity":"1" });
        }else if(gAudioId=="audio_4"){
            $(".popup5 .leftContent .small_expand").css({ "display": "block","opacity":"1" });
        }
        
        if (pop3 == 1 && pop2 == 1 && pop1 == 1 && pop4 == 1 && pop5 == 1) {
            // fnGlowNextBtn();
            enableNextBtn();
            fnAudioFinishItemComp();
            $('.boxInst').show();
            gCompPageArr.push("M1L0T1P11");
        }
        audplayer.pause();
        audplayer.currentTime = 0;
    }
}

$(".small_expand").on("click", function() {
    pauseAudio();
    $(".modalTxtImg").hide();
    $(".modalTxtImg").attr("id", "imgPopup" + $(this).attr("ccid"));
    $(".modalContent").attr("id", "imgPopupCnt" + $(this).attr("ccid"));
    $("#imgPopup"+$(this).attr("ccid")).show();
    $("#case_study_popup").show();
    $(".mainContainer").addClass("blur");
});

$(".closepopup").on("click", function() {
    playAudio();
    $(".modal").removeAttr("style");
    $(".mainContainer").removeClass("blur");

});

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

function disableAudioPlayAndSlider() {
    $('#clsPlayPauseBtn, #id_sliderContainer').css({
        "pointer-events": "none"
    });
}

function enableAudioPlayAndSlider() {
    $('#clsPlayPauseBtn, #id_sliderContainer').css({
        "pointer-events": "auto"
    });
}
