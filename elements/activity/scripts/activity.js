$(document).ready(function() {
    $('.tabLoadContent').empty();
    $('.tabLoadContent').append("<iframe id='phyicalActivity' class='phyicalActivity' src='elements/activity/physical_activity/story.html' width='970' height='500'></iframe>");
    /* $('.tab').click(function() {

        $('.tab').removeClass("active");
        $(this).addClass("active");
        var _getId = $(this).attr("id");
        $(".gwrapper").show();
        setTimeout(function() { __$cWrapper.hide(); }, 1000);
        //	$('.tabLoadContent').html();
        if (_getId == "tab1") {
            //$('.tabLoadContent').load('pages/Topic01/T01P92.html');
            $('.tabLoadContent').empty();
            $('.tabLoadContent').append("<div id='pdfshell_8' class='display-none'><embed scrolling='true' class='_link_shell' src='pages/Topic01/pdf/blood_gas_practice.pdf' type='application/pdf' /></div>");

        } else if (_getId == "tab2") {
            $('.tabLoadContent').empty();
            $('.tabLoadContent').append("<iframe id='phyicalActivity' class='phyicalActivity' src='elements/activity/physical_activity/story.html' width='970' height='500'></iframe>");
            console.log("iframe appeand ")
        }
    }); */

    $('._linkActivity').click(function() {
        $("#pageClsResourcesPopupActivity").show();
    });
    $('.closeAct').click(function() {
        //console.log("close");
        $("#pageClsResourcesPopupActivity").hide();
    });
});
  