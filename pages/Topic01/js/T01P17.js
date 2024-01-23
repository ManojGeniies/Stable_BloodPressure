

  manifest = [{
    src: 'pages/images/Topic01/T01P17/small_expand.png',
    id: '1'
}

];

glossaryFuncPageLevel();
var audioPath = "pages/audio/Topic01/T01P17/T01P17";

//var gItemAudioPath=["pages/audio/Topic01/T01P17/T01P17"

//];
function openPage(pageName,elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }


var currCue = 0;

var idd = 0;



var updateContentArray = [

{
    time: "0",
    carry: "",
    event: "",
    show: "",
    hide: "",
    transcript: "Let’s now review the key items related to physical examination for shock. Click each button below to learn more."
},


];



function fnAudioFinishItemComp() {

fnAudioFinishPageComp();

fnUpdatePageCompletionCounter(0);

//fnUpdatePageCompletionCounter(7);

}

function audioStop() {
var audio = document.getElementById("audioplayer");
audio.pause();
audio.currentTime = 0;
}

var __dataXml;

var __clickCount = 0;



$(document).ready(function() {

disableNextBtn();

var ele = document.getElementsByTagName('div');

for (var i = 0; i < ele.length; i++) {

    ele[i].setAttribute("unselectable", "on");

}
console.log(gCompPageArr);
var n = isInArray("M1L0T1P17", gCompPageArr);

console.log(n);

if (n == true) {

    enableNextBtn();

    // fnGlowNextBtn();

    fnDesiableNext(false);

}




$(document).on("click", '._clickLink', function() {



    var num = $(this).attr('id').slice(10)



    //console.log(referenceArr);



    $(this).addClass("_viewed");



    //$('.pdflink').attr('src', referenceArr[num])



  


});


$(".tablink").click(function() {
    var _getId = $(this).attr("cid");
    $(".tabcontent").hide();
    $("#"+_getId).show();
    $(".tablink").removeClass("active");
    /* if($(this).hasClass("visited")){
        $(this).removeClass("visited").addClass("active");       
    } */
    $(this).addClass("visited").addClass("active");    
    enableNextBtnFuncClick();   
});

});

function enableNextBtnFuncClick(){
    console.log($(".tablink").length,$(".visited").length);
    if($(".tablink").length == $(".visited").length){
        enableNextBtn();
        gCompPageArr.push("M1L0T1P17");
        fnDesiableNext(false);
        $('.boxInst').css('display', 'block');
    }else{
        console.log("not completed")
    }
}



function isInArray(value, array) {

return array.indexOf(value) > -1;

}


function audioReset() {

gAudioId = "";

onTimelineEnd();

}




function fnCompletion() {



}



function fnOnAudioComplete() {

if (gAudioId == "startAudio") {
    //enableNextBtn();
    //fnAudioFinishItemComp();
    
    $('.small_expand').css('display', 'block').css('opacity', '1');
    $('.clickToEnlarge').css('display', 'block').css('opacity', '1');
    //gCompPageArr.push("M1L0T1P17");
    audioStop();

} else {

    $("#idTick0" + selectedIndex).css({
        "opacity": "1"
    });

    $("#clsTabTxt" + selectedIndex).css({
        'color': '#80848b'
    });

    $(".ClsTab").removeClass("clsDisable");

    $("#TabImage" + selectedIndex).addClass("clsDisable");

    fnCompletion();

    if ($(".clsVisited").length === 2) {

       

    }

}

}
