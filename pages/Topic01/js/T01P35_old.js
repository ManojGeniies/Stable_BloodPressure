manifest = [
    {
        src: 'pages/images/Topic01/T01P35/image_01_01.png',
        id: '1'
    },
    {
        src: 'pages/images/Topic01/T01P35/image_01_01_large.png',
        id: '2'
    },
    {
        src: 'pages/images/Topic01/T01P35/image_01_02.png',
        id: '3'
    },
    {
        src: 'pages/images/Topic01/T01P35/image_01_02_large.png',
        id: '4'
    },
    {
        src: 'pages/images/Topic01/T01P35/image_01_03.png',
        id: '5'
    },
    {
        src: 'pages/images/Topic01/T01P35/image_01_03_large.png',
        id: '6'
    },
    {
        src: 'pages/images/Topic01/T01P35/image_01_04.png',
        id: '7'
    },
    {
        src: 'pages/images/Topic01/T01P35/image_01_04_large.png',
        id: '8'
    },
    {
        src: 'pages/images/Topic01/T01P35/image_01_05.png',
        id: '9'
    },
    {
        src: 'pages/images/Topic01/T01P35/image_01_05_large.png',
        id: '10'
    },
    {
        src: 'pages/images/Topic01/T01P35/image_02_01.png',
        id: '11'
    },
    {
        src: 'pages/images/Topic01/T01P35/image_02_01_large.png',
        id: '12'
    },
    {
        src: 'pages/images/Topic01/T01P35/image_02_02.png',
        id: '13'
    },
    {
        src: 'pages/images/Topic01/T01P35/image_03_01.png',
        id: '14'
    },
    {
        src: 'pages/images/Topic01/T01P35/image_03_01_large.png',
        id: '15'
    },
    {
        src: 'pages/images/Topic01/T01P35/image_03_02.png',
        id: '16'
    },
    {
        src: 'pages/images/Topic01/T01P35/image_03_02_large.png',
        id: '17'
    },
    {
        src: 'pages/images/Topic01/T01P35/image_04_01.png',
        id: '18'
    },
    {
        src: 'pages/images/Topic01/T01P35/image_04_02.png',
        id: '19'
    },
];

glossaryFuncPageLevel();


var gItemAudioPath = [
    "pages/audio/Topic01/T01P35/T01P35_0",
    "pages/audio/Topic01/T01P35/T01P35_1",
    "pages/audio/Topic01/T01P35/T01P35_2",
    "pages/audio/Topic01/T01P35/T01P35_3"
];

var _getPreviousBookMarkPage = assessmentObj.getBookmarkPage();
var _getCurrentScreenId = assessmentObj.getRedirectPage();
if (_getPreviousBookMarkPage != "") {
    console.log(_getCurrentScreenId,_getPreviousBookMarkPage);
//var _getCurrentScreenId = assessmentObj.getRedirectPage();
    if(_getPreviousBookMarkPage=="M1L0T1P54" || _getPreviousBookMarkPage=="M1L0T1P57"){
        $(".onBoard").hide();
        $(".section").hide();
        $(".small_expand").hide();
        $("#section1").show();
        $(".clsPatch").hide();
        $(".screenInstructions").show();
        $("#idPatchMain, .list_1 li, .clsSubImage, #idPatch3, .titleHeading1, span.borderLines, #idPatchMain1, .clsBox").removeAttr("style");
        //fnPlaySectionAudio(1);
        var audioPath = "pages/audio/Topic01/T01P35/T01P35_1";

        var updateContentArray = [

            {
                time: "0",
                carry: "",
                event: "",
                show: "",
                hide: "",
                transcript: 'Obstructive shock is the term used to describe conditions that interrupt blood flow returning to or leaving the heart. Conditions that affect the infant at the time of birth include umbilical cord compression and cord prolapse, a knot in the cord, and a tight nuchal cord. Postnatal causes of obstructive shock include tension pneumothorax and pericardial tamponade from air, blood, or fluid. Heart defects that impede cardiac output include coarctation of the aorta, interrupted aortic arch, hypoplastic left heart syndrome, and critical aortic valve stenosis or atresia. When the ductus arteriosus closes, which is usually within 1 day to 2 weeks of age, the heart is unable to pump blood to the body. This left outflow tract obstruction leads to a severe state of shock. A prostaglandin E1infusion is required to reopen and maintain open, the ductus arteriosus.'
            },
            {
                time: "0.5",
                carry: "",
                event: "",
                show: "",
                hide: "",
                transcript: "",
                animation: [{
                    target: ".clsSubImage, .hideFirst .small_expand",
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
                    target: ".showlist11",
                    duration: "0.5",
                    activity: {
                        'display': 'list-item',
                        'opacity':'1'
                    }
                }]
            },
            {
                time: "7.5",
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
                time: "11",
                carry: "",
                event: "",
                show: "",
                hide: "",
                transcript: "",
                animation: [{
                    target: ".showlist13",
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
                    target: ".showlist14",
                    duration: "0.5",
                    activity: {
                        'display': 'list-item',
                        'opacity':'1'
                    }
                }]
            },
            {
                time: "15",
                carry: "",
                event: "",
                show: "",
                hide: "",
                transcript: "",
                animation: [{
                    target: ".showlist15",
                    duration: "0.5",
                    activity: {
                        'display': 'list-item',
                        'opacity':'1'
                    }
                }]
            },
            {
                time: "16",
                carry: "",
                event: "",
                show: "",
                hide: "",
                transcript: "",
                animation: [{
                    target: ".showlist16",
                    duration: "0.5",
                    activity: {
                        'display': 'list-item',
                        'opacity':'1'
                    }
                }]
            },
            
        
            {
                time: "18",
                carry: "",
                event: "",
                show: "",
                hide: "",
                transcript: "",
                animation: [{
                    target: ".showlist17",
                    duration: "0.5",
                    activity: {
                        'display': 'list-item',
                        'opacity':'1'
                    }
                }]
            },
            {
                time: "21",
                carry: "",
                event: "",
                show: "",
                hide: "",
                transcript: "",
                animation: [{
                    target: ".showlist18",
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
                    target: ".showlist19",
                    duration: "0.5",
                    activity: {
                        'display': 'list-item',
                        'opacity':'1'
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
                    target: ".hideFirst",
                    duration: "0.5",
                    activity: {
                        'display': 'none',
                        'opacity':'0'
                    }
                }]
            },
            {
                time: "29",
                carry: "",
                event: "",
                show: "",
                hide: "",
                transcript: "",
                animation: [{
                    target: "#clsSubImage9",
                    duration: "0.5",
                    activity: {
                        'display': 'block',
                        'opacity':'1'
                    }
                }]
            },
            {
                time: "30.5",
                carry: "",
                event: "",
                show: "",
                hide: "",
                transcript: "",
                animation: [{
                    target: "#clsSubImage10",
                    duration: "0.5",
                    activity: {
                        'display': 'block',
                        'opacity':'1'
                    }
                }]
            },
            {
                time: "33.5",
                carry: "",
                event: "",
                show: "",
                hide: "",
                transcript: "",
                animation: [{
                    target: "#clsSubImage11",
                    duration: "0.5",
                    activity: {
                        'display': 'block',
                        'opacity':'1'
                    }
                }]
            },
            {
                time: "36.5",
                carry: "",
                event: "",
                show: "",
                hide: "",
                transcript: "",
                animation: [{
                    target: "#clsSubImage12",
                    duration: "0.5",
                    activity: {
                        'display': 'block',
                        'opacity':'1'
                    }
                }]
            },
            {
                time: "39.5",
                carry: "",
                event: "",
                show: "",
                hide: "",
                transcript: "",
                animation: [{
                    target: ".heading",
                    duration: "0.5",
                    activity: {
                        'display': 'block',
                        'opacity':'1'
                    }
                }]
            },
            
            
            {
                time: "53.5",
                carry: "",
                event: "",
                show: "",
                hide: "",
                transcript: "",
                animation: [{
                    target: "#clsSubImage13",
                    duration: "0.5",
                    activity: {
                        'display': 'block',
                        'opacity':'1'
                    }
                }]
            },
            {
                time: "53.5",
                carry: "",
                event: "",
                show: "",
                hide: "",
                transcript: "",
                animation: [{
                    target: ".alertIconBox",
                    duration: "0.5",
                    activity: {
                        'display': 'block',
                        'opacity':'1'
                    }
                }]
            }
            
        ];
    }else if(_getPreviousBookMarkPage=="M1L0T1P55" || _getPreviousBookMarkPage=="M1L0T1P56"){
        $(".onBoard").hide();
        $(".section").hide();
        $(".small_expand").hide();
        $("#section0").show();
        $("#idPatchMain, .list_1 li, .clsSubImage, #idPatch3, .titleHeading1, span.borderLines, #idPatchMain1, .clsBox").removeAttr("style");
        //fnPlaySectionAudio(1);
        var audioPath = "pages/audio/Topic01/T01P35/T01P35_0";

        var updateContentArray = [

            {
                time: "0",
                carry: "",
                event: "",
                show: "",
                hide: "",
                transcript: "Hypovolemic shock results from a low circulating blood volume. Causes include acute blood loss during the intrapartum period secondary to placental hemorrhage, umbilical cord injury including velamentous cord insertion and/or vasa previa, fetal-to-maternal hemorrhage, twin-to-twin transfusion syndrome, and rarely, liver or spleen laceration following a difficult delivery. In the postnatal period, hypovolemic shock may be secondary to hemorrhage in the brain, lung, adrenal gland, or subgaleal space.   Non-hemorrhagic causes of hypovolemic shock include dehydration and third spacing secondary to overwhelming sepsis. Click on the links below to learn more about scalp swellings and subgaleal hemorrhage."
            },
            {
                time: "0.5",
                carry: "",
                event: "",
                show: "",
                hide: "",
                transcript: "",
                animation: [{
                    target: ".clsSubImage",
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
                    target: ".showlist0",
                    duration: "0.5",
                    activity: {
                        'display': 'block',
                        'opacity':'1'
                    }
                }]
            },
            {
                time: "4.5",
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
                time: "5.5",
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
                time: "10",
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
                time: "17.5",
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
                time: "21.5",
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
                time: "25.5",
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
                time: "34.5",
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
                time: "38",
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
                time: "39.5",
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
                time: "40",
                carry: "",
                event: "",
                show: "#_clickImg0pdf",
                hide: "",
                transcript: "",
                animation: [{
                    target: "#_clickImg0pdf, .videolink",
                    duration: "0.5",
                    activity: {
                        'opacity': '1',
                        'display': 'block'
                    }
                }]
            },
        ];
    }
       
}else{
    var audioPath = "pages/audio/Topic01/T01P35/T01P35";
    var updateContentArray = [

        {
            time: "0",
            carry: "",
            event: "",
            show: "",
            hide: "",
            transcript: "Now that we reviewed concepts related to cardiac output and the physical exam for shock, let’s review the four main causes of shock: hypovolemic, obstructive, cardiogenic, and septic shock. <br/> Click each tab to learn more."
        },
        
    ];
}





var currCue = 0;

var idd = 0;

var popupContentArray0 = [];




var popupSectionArray0 = [

    {
        time: "0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "Hypovolemic shock results from a low circulating blood volume. Causes include acute blood loss during the intrapartum period secondary to placental hemorrhage, umbilical cord injury including velamentous cord insertion and/or vasa previa, fetal-to-maternal hemorrhage, twin-to-twin transfusion syndrome, and rarely, liver or spleen laceration following a difficult delivery. In the postnatal period, hypovolemic shock may be secondary to hemorrhage in the brain, lung, adrenal gland, or subgaleal space.   Non-hemorrhagic causes of hypovolemic shock include dehydration and third spacing secondary to overwhelming sepsis. Click on the links below to learn more about scalp swellings and subgaleal hemorrhage."
    },
    {
        time: "0.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".clsSubImage",
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
            target: ".showlist0",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "4.5",
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
        time: "5.5",
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
        time: "10",
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
        time: "17.5",
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
        time: "21.5",
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
        time: "25.5",
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
        time: "34.5",
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
        time: "38",
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
        time: "39.5",
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
        time: "40",
        carry: "",
        event: "",
        show: "#_clickImg0pdf",
        hide: "",
        transcript: "",
        animation: [{
            target: "#_clickImg0pdf, .videolink",
            duration: "0.5",
            activity: {
                'opacity': '1',
                'display': 'block'
            }
        }]
    },
];

var popupSectionArray1 = [

    {
        time: "0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: 'Obstructive shock is the term used to describe conditions that interrupt blood flow returning to or leaving the heart. Conditions that affect the infant at the time of birth include umbilical cord compression and cord prolapse, a knot in the cord, and a tight nuchal cord. Postnatal causes of obstructive shock include tension pneumothorax and pericardial tamponade from air, blood, or fluid. Heart defects that impede cardiac output include coarctation of the aorta, interrupted aortic arch, hypoplastic left heart syndrome, and critical aortic valve stenosis or atresia. When the ductus arteriosus closes, which is usually within 1 day to 2 weeks of age, the heart is unable to pump blood to the body. This left outflow tract obstruction leads to a severe state of shock. A prostaglandin E1infusion is required to reopen and maintain open, the ductus arteriosus.'
    },
    {
        time: "0.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".clsSubImage, .hideFirst .small_expand",
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
            target: ".showlist11",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "7.5",
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
        time: "11",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist13",
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
            target: ".showlist14",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "15",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist15",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "16",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist16",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    

    {
        time: "18",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist17",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "21",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist18",
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
            target: ".showlist19",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
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
            target: ".hideFirst",
            duration: "0.5",
            activity: {
                'display': 'none',
                'opacity':'0'
            }
        }]
    },
    {
        time: "29",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#clsSubImage9",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "30.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#clsSubImage10",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "33.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#clsSubImage11",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "36.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#clsSubImage12",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "39.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".heading",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    
    
    {
        time: "53.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: "#clsSubImage13",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    },
    {
        time: "53.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".alertIconBox",
            duration: "0.5",
            activity: {
                'display': 'block',
                'opacity':'1'
            }
        }]
    }
    
];

var popupSectionArray2 = [

    {
        time: "0.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "Cardiogenic or heart failure shock results when the heart muscle functions poorly.  Cardiogenic shock may occur in infants with a history of:  Intrapartum or postpartum asphyxia Hypoxia and/or metabolic acidosis Bacterial or viral infections Severe respiratory distress that requires assisted ventilation Severe hypoglycemia Severe metabolic and/or electrolyte disturbances Arrhythmias"
    },
    {
        time: "0.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".clsSubImageThrd",
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
            target: ".showlist20",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "5.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist21",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
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
        animation: [{
            target: ".showlist22",
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
            target: ".showlist23",
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
            target: ".showlist24",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "18.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist25",
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
            target: ".showlist26",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "24.8",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist27",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "28.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist28",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
];

var popupSectionArray3 = [

    {
        time: "0.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "Severe infection may lead to a type of shock known as septic or distributive shock. In the presence of bacterial infection, a host of complicated systemic reactions occur that result in circulatory insufficiency.  A hallmark of this type of shock is hypotension that responds very poorly to fluid resuscitation.   Loss of vascular integrity allows fluid to leak out of the blood vessels and into the tissue spaces, which is also a cause of concurrent hypovolemic shock.   Poor heart contractility leads to poor tissue perfusion and oxygenation, and the risk for organ injury and death is very high. Often, these infants require blood pressure medication to treat the severe hypotension."
    },
    {
        time: "0.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".clsSubImageFour",
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
            target: ".showlist29",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "5.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist30",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "14.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist31",
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
            target: ".showlist32",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    },
    {
        time: "30.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist33",
            duration: "0.5",
            activity: {
                'display': 'list-item',
                'opacity':'1'
            }
        }]
    }
];

function fnAudioFinishItemComp() {

    console.log("end")

    fnAudioFinishPageComp();

    fnUpdatePageCompletionCounter(0);

    //fnUpdatePageCompletionCounter(7);

}

var __dataXml;

var __clickCount = 0;

var __aIndex = 0;

var vid;

var __player;

var referencesURL;

var referenceArr = []



$(document).ready(function() {

    disableNextBtn();
    var ele = document.getElementsByTagName('div');
    for (var i = 0; i < ele.length; i++) {
        ele[i].setAttribute("unselectable", "on");
    }
    $("section").hide();
    //$("#section0").show();
    $("#section0").show();
    //$(".ClsTabItem").removeClass("clsActive");
    //$("#TabItem0").addClass("clsActive");

    $('.boxInst').hide();
    fnClick();
    $("#pageid_RefCloseBtn").click(function() {
        $("#pageClsResourcesPopup").hide();
    });

    if (_getPreviousBookMarkPage != "") {
    //var _getCurrentScreenId = assessmentObj.getRedirectPage();
        if(_getPreviousBookMarkPage=="M1L0T1P54" || _getPreviousBookMarkPage=="M1L0T1P57"){
            //$(".onBoard").hide();
            $(".section").hide();
            $("#section1").show();
            $("#TabItem1").addClass("clsActive").addClass("viewed");
        }else if(_getPreviousBookMarkPage=="M1L0T1P55" || _getPreviousBookMarkPage=="M1L0T1P56"){
            //$(".onBoard").hide();
            $(".section").hide();
            $("#section0").show();
            $("#TabItem0").addClass("clsActive").addClass("viewed");
        }
    }

    var n = isInArray("M1L0T1P35", gCompPageArr);

    if (n == true) {

        enableNextBtn();

        // fnGlowNextBtn();;

        fnDesiableNext(false);

    }



    $(".videolink").on("click", function() {

        if (!fnPauseAudio()) {

            fnPauseAudio()

        } else {

            playPauseAudio();

        }
        //console.log();
        if ($(this).attr("id") == "clickImg3") {
            $("#myVideo source").attr("src", "pages/video/Subgaleal_hemorrhage.mp4");

            // console.log(videoTranscript[0].trans +"-----------------------------------------")
            //$("#transcripttext").html(videoTranscript[0].trans);
            $(".popover").addClass("videoClose1");
        } 

        vid = document.getElementById("myVideo");
        vid.load()
        vid.play();
        $("#case_study_popup1").show();


    });


    $(document).on("click", '._clickLink', function() {

        var num = $(this).attr('id').slice(10)

        //console.log(referenceArr);

        $(this).addClass("_viewed");

        //$('.pdflink').attr('src', referenceArr[num])

        $("#pageid_RefTitleBar").hide();

        $("#pageRefTitleBar_id").show();

    });



    $("#id_glosCloseBtn").click(function() {
        enabledAllButtons();
        //$("#pageClsResourcesPopup").hide();
        $("#pageClsResourcesPopup").hide();

        //$("#pageid_RefTitleBar").show()

    });

    $("#_clickImg0pdf").on("click", function() {

        fnPauseAudio();


        disabledAllButtons();
        $(".pdflink").hide();
        $("#p82_1").show();
        //  $('#pageClsResourcesPopup .pdflink').attr('src', 'pages/Topic01/pdf/uvc_uac.pdf');

        $('#pageReftitleText_id').html('Scalp swellings: Caput succedaneum, Cephalohematoma, Subgaleal hemorrhage');

        $("#pageClsResourcesPopup").show();
        $("#p82_1").show();


    });


    // $("#RefTitleBar_id").click(function(){

    // 	$("#pageid_RefTitleBar").hide();

    // });



});



$('#pageClsResourcesPopup').hide();

// });

//function for call page by ID

function fnJumpToPage(url) {

    disableHelpPopup();

    fnJumpToPageByID(url);

}

function audioReset() {

    gAudioId = "";

    onTimelineEnd();

}



function fnPlaySectionAudio(gCurrentIndex) {

    indexAudio = (gCurrentIndex);

    audioId = "audio_" + gCurrentIndex;

    fnHideShowAudioPlayer(false);

    updateContentArray = eval("popupSectionArray" + (gCurrentIndex));

    initAudioPlayer(gItemAudioPath[gCurrentIndex])

}

function fnClick() {

    $(".ClsTabItem").off("click").on("click", function() {
        $(".ClsTabItem").removeClass("clsActive");
        $(".onBoard").hide();
        $(".clsPatch").hide();
        $(".screenInstructions").show();
        __aIndex = $(this).attr('id').slice(7);
        //console.log(__aIndex);

        $(this).addClass("clsActive");
        $(this).addClass("viewed");
        $("section").hide();
        $(".small_expand").hide();
        $("#section" + __aIndex).show();
        $(".tabLeftContent .tabHeading, .tabRightContent .tabHeading").removeClass("active");
        $(".tabLeftContent .redLine, .tabRightContent .redLine").removeClass("active");
        $("#idPatchMain, .list_1 li, .bullet li, .clsSubImage, #idPatch3, .titleHeading1, span.borderLines, #idPatchMain1, .clsBox").removeAttr("style");
        $("#section1 .hideFirst, #section1 .heading, #section1 .clsSubImageSecd, #section1 .alertIconBox").removeAttr("style");
        $("#section0 #_clickImg0pdf, #section0 .videolink").removeAttr("style");
        if(__aIndex == 0){
            $(".tabLeftContent .tabHeading, .tabLeftContent .redLine").addClass("active");
        }else if( __aIndex == 1) {
            $(".tabLeftContent .tabHeading, .tabLeftContent .redLine").addClass("active");
            $("#section1 #clsSubImage6, #section1 #clsSubImage7").css("display","block").css("opacity","1");
        }else if (__aIndex == 2){
            $(".tabRightContent .tabHeading, .tabRightContent .redLine").addClass("active");
            $("#section2 #clsSubImage8, #section2 #clsSubImage9").css("display","block").css("opacity","1");
        }else if(__aIndex == 3) {
            $(".tabRightContent .tabHeading, .tabRightContent .redLine").addClass("active");
        }
        audioReset();

        fnPlaySectionAudio(__aIndex);

        if ($(".viewed").length == $(".ClsTabItem").length) {
            enableNextBtn();
            fnDesiableNext(false);
            gCompPageArr.push("M1L0T1P35");
        }
    });
}

$(".small_expand").on("click", function() {
    $(".modalTxtImg").hide();
    $(".modalTxtImg").attr("id", "imgPopup" + $(this).attr("ccid"));
    $(".modalContent").attr("id", "imgPopupCnt" + $(this).attr("ccid"));
    $("#imgPopup"+$(this).attr("ccid")).show();
    $("#case_study_popup").show();
    $(".mainContainer").addClass("blur");

    
});


$("#id_glosCloseBtn").click(function() {
    console.log("clicked close");

    fnPlayAudio()
    enabledAllButtons();
    //$("#pageClsResourcesPopup").hide();
    // $("#pageClsResourcesPopup").hide();
    $("#pageid_RefTitleBar").show()
});


$(".closepopup").on("click", function() {


    $(".modal").removeAttr("style");
    $(".mainContainer").removeClass("blur");

});

$(".closebutton").on("click", function() {

    $(".popover").removeClass("videoClose1");
    $(".popover").removeClass("videoClose2");

    if (!fnPauseAudio()) {

        console.log(true);

        playPauseAudio();

    }


    $("#section" + __aIndex + " .modal").removeAttr("style");

    $("#section" + __aIndex + " .sectionTop").removeClass("blur");

    $("#section" + __aIndex + " .sectionContent").removeClass("blur");

    $('#id_sliderContainer').show()

    // $('#clsAudioOffBtn').show()

    $('#clsAudioOnBtn').show()

    $("#clsPlayPauseBtn").show()

});





function fnCompletion() {

    console.log($(".viewed").length + ":::" + $(".ClsTabItem").length);

    if ($(".viewed").length == $(".ClsTabItem").length) {

        $('.boxInst').show();

        enableNextBtn();

        fnAudioFinishItemComp();

        gCompPageArr.push("M1L0T1P35");
    }

    // }

}


function audioStop() {
    var audio = document.getElementById("audioplayer");
    audio.pause();
    audio.currentTime = 0;
}

function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {
        audioStop();
        console.log("start audio");
        console.log($("a.tabSection").hasClass("active"));
        $(".small_expand").show();
        fnCompletion();
    } else {

        //console.log("start end");

        //console.log($(".viewed").length+":::"+$(".ClsTabItem").length);
        audioStop();
        fnCompletion();
        console.log("end");
        //$("#clsTir0 > .small_expand").show();
        $(".small_expand").show();
        $("#idTick0" + selectedIndex).css({
            "opacity": "1"
        });

        $("#clsTabTxt" + selectedIndex).css({
            'color': '#80848b'
        });

        $(".ClsTab").removeClass("clsDisable");

        $("#TabImage" + selectedIndex).addClass("clsDisable");
        $(".small_expand").show();

        //fnCompletion();

        //if($(".clsVisited").length === 2){

        //$('.boxInst').css('opacity','1');

        //}

    }

}

// function endModule(){

// 	var _getCount = clickTabCount;

// 	if(_getCount>=4){

// 		$('.boxInst').show();

// 		audioReset();

// 		fnPlayItemAudio(7);

// 	}

// }





function seek(e) {

    var percent = e.offsetX / this.offsetWidth;

    __player.currentTime = percent * __player.duration;

    __progressBar.value = percent / 100;

}





function seektimeupdate() {



    cursecs = Math.floor(vid.currentTime)

    try {

        UpdateTheVideoTime(vid.currentTime)

        //added for slider progress

        var value = (100 / vid.duration) * vid.currentTime;

        $("#slider, #slider .ui-slider-handle ui-state-default").slider("value", value);

    } catch (e) {}

}



$(".clickToPrev").on("click", function() {

    endModule();

    audioReset();

    vid.load();

    vid.pause();

    __player.currentTime = 0;

});