function showContents (activeTab, contentsId) {
    var tabs = document.querySelectorAll('.btn');
    var contents = document.querySelectorAll('.contents');
    var i = 0;
    while (i < tabs.length){
        tabs[i].classList.remove('show');
        contents[i].classList.remove('show')
        i++;
    }
    activeTab.classList.add('show');
    document.getElementById(contentsId).classList.add('show')
}

function showTabs (activeBtn, contentsId2) {
    var btn = document.querySelectorAll('.btnContainer');
    var btnContents = document.querySelectorAll('.contents2');
    var i = 0;
    while (i < btn.length) {
        btn[i].classList.remove('show2');
        btnContents[i].classList.remove('show2');
        i++
    }
    activeBtn.classList.add('show2');
    document.getElementById(contentsId2).classList.add('show2');
}


$( function() {
    var tabs = $("#tabContents").tabs();
    var previouslyFocused = false;
 
    tabs.find( ".ui-tabs-nav" ).sortable({
      axis: "x",
 
      // Sortable removes focus, so we need to restore it if the tab was focused
      // prior to sorting
      start: function(event, ui) {
        previouslyFocused = document.activeElement === ui.item[ 0 ];
      },
      stop: function(event, ui) {
        tabs.tabs( "refresh" );
        if (previouslyFocused) {
          ui.item.trigger( "focus" );
        }
      }
    });
} );

    /*MENUS DE NAVEGACION*/
    $("#menu_Movi").hide();
    $("#menu_Cierre").hide();
    $("#menu_Balances").hide();
    $("#menu_Consultas").hide();
    $("#menu_Reportes").hide();
    $("#menu_Confi").hide();

    /*Activación de los menus*/
    $("#Opcion_Cata").click(function(){
        $("#menu_Cata").show();

        $("#menu_Movi").hide();
        $("#menu_Cierre").hide();
        $("#menu_Balances").hide();
        $("#menu_Consutlas").hide();
        $("#menu_Reportes").hide();
        $("#menu_Confi").hide();
    });

    $("#Opcion_Movi").click(function(){
        $("#menu_Cata").hide();
        $("#menu_Movi").show();
        $("#menu_Cierre").hide();
        $("#menu_Balances").hide();
        $("#menu_Consultas").hide();
        $("#menu_Reportes").hide();
        $("#menu_Confi").hide();
    });

    $("#Opcion_Cierres").click(function(){
        $("#menu_Cata").hide();
        $("#menu_Movi").hide();
        $("#menu_Cierre").show();

        $("#menu_Balances").hide();
        $("#menu_Consultas").hide();
        $("#menu_Reportes").hide();
        $("#menu_Confi").hide();
    });

    $("#Opcion_Consu").click(function(){
        $("#menu_Cata").hide();
        $("#menu_Movi").hide();
        $("#menu_Cierre").hide();
        $("#menu_Balances").hide();

        $("#menu_Consultas").show();
        $("#menu_Reportes").hide();
        $("#menu_Confi").hide();
    });

    $("#Opcion_Bala").click(function(){
        $("#menu_Cata").hide();
        $("#menu_Movi").hide();
        $("#menu_Cierre").hide();
        $("#menu_Balances").show();
        $("#menu_Consultas").hide();

        $("#menu_Reportes").hide();
        $("#menu_Confi").hide();
    });

    $("#Opcion_Repo").click(function(){
        $("#menu_Cata").hide();
        $("#menu_Movi").hide();
        $("#menu_Cierre").hide();
        $("#menu_Balances").hide();
        $("#menu_Consutlas").hide();
        $("#menu_Reportes").show();

        $("#menu_Confi").hide();
    });

    $("#Opcion_Confi").click(function(){
        $("#menu_Cata").hide();
        $("#menu_Movi").hide();
        $("#menu_Cierre").hide();
        $("#menu_Balances").hide();
        $("#menu_Consultas").hide();
        $("#menu_Reportes").hide();
        $("#menu_Confi").show();
    });


    /*TITULOS TABS*/
    $("#t_tab1_2").hide();
    $("#t_tab1_3").hide();
    $("#t_tab1_4").hide();

    $("#t_tab2_1").hide();
    $("#t_tab2_2").hide();
    $("#t_tab2_3").hide();
    $("#t_tab2_4").hide();
    $("#t_tab2_5").hide();
    $("#t_tab2_6").hide();

    $("#t_tab3_1").hide();
    $("#t_tab3_2").hide();
    $("#t_tab3_3").hide();

    $("#t_tab4_1").hide();
    $("#t_tab4_2").hide();
    $("#t_tab4_3").hide();
    $("#t_tab4_4").hide();
    $("#t_tab4_5").hide();
    $("#t_tab4_6").hide();

    $("#t_tab5_1").hide();
    $("#t_tab5_2").hide();
    $("#t_tab5_3").hide();
    $("#t_tab5_4").hide();

    $("#t_tab6_1").hide();
    $("#t_tab6_2").hide();
    $("#t_tab6_3").hide();
    $("#t_tab6_4").hide();
    $("#t_tab6_5").hide();
    $("#t_tab6_6").hide();
    $("#t_tab6_7").hide();

    $("#t_tab7_1").hide();
    $("#t_tab7_2").hide();
    $("#t_tab7_3").hide();
    $("#t_tab7_4").hide();
    $("#t_tab7_5").hide();

    

    /*FUNCIONES CATALOGO*/
    $("#op1_1").click(function(){
        $("#t_tab1_1").show();
        $("#tabContents").tabs({active: 0});
    })

    $("#c1_1").click(function(){
        $("#t_tab1_1").hide();
    })


    $("#op1_2").click(function(){
        $("#t_tab1_2").show();
        $("#tabContents").tabs({active: 1});
    })

    $("#c1_2").click(function(){
        $("#t_tab1_2").hide();
    })


    $("#op1_3").click(function(){
        $("#t_tab1_3").show();
        $("#tabContents").tabs({active: 2});
    })

    $("#c1_3").click(function(){
        $("#t_tab1_3").hide();
    })


    $("#op1_4").click(function(){
        $("#t_tab1_4").show();
        $("#tabContents").tabs({active: 3});
    })

    $("#c1_4").click(function(){
        $("#t_tab1_4").hide();
    })

    /*FUNCIONES MOVIMIENTOS*/

    $("#op2_1").click(function(){
        $("#t_tab2_1").show();
        $("#tabContents").tabs({active: 4});
    })

    $("#c2_1").click(function(){
        $("#t_tab2_1").hide();
    })


    $("#op2_2").click(function(){
        $("#t_tab2_2").show();
        $("#tabContents").tabs({active: 5});
    })

    $("#c2_2").click(function(){
        $("#t_tab2_2").hide();
    })


    $("#op2_3").click(function(){
        $("#t_tab2_3").show();
        $("#tabContents").tabs({active: 6});
    })

    $("#c2_3").click(function(){
        $("#t_tab2_3").hide();
    })


    $("#op2_4").click(function(){
        $("#t_tab2_4").show();
        $("#tabContents").tabs({active: 7});
    })

    $("#c2_4").click(function(){
        $("#t_tab2_4").hide();
    })


    $("#op2_5").click(function(){
        $("#t_tab2_5").show();
        $("#tabContents").tabs({active: 8});
    })

    $("#c2_5").click(function(){
        $("#t_tab2_5").hide();
    })


    $("#op2_6").click(function(){
        $("#t_tab2_6").show();
        $("#tabContents").tabs({active: 9});
    })

    $("#c2_6").click(function(){
        $("#t_tab2_6").hide();
    })

    /*FUNCIONES CIERRES*/

    $("#op3_1").click(function(){
        $("#t_tab3_1").show();
        $("#tabContents").tabs({active: 10});
    })

    $("#c3_1").click(function(){
        $("#t_tab3_1").hide();
    })


    $("#op3_2").click(function(){
        $("#t_tab3_2").show();
        $("#tabContents").tabs({active: 11});
    })

    $("#c3_2").click(function(){
        $("#t_tab3_2").hide();
    })


    $("#op3_3").click(function(){
        $("#t_tab3_3").show();
        $("#tabContents").tabs({active: 12});
    })

    $("#c3_3").click(function(){
        $("#t_tab3_3").hide();
    })


    /*FUNCIONES BALANCES*/

    $("#op4_1").click(function(){
        $("#t_tab4_1").show();
        $("#tabContents").tabs({active: 13});
    })

    $("#c4_1").click(function(){
        $("#t_tab4_1").hide();
    })


    $("#op4_2").click(function(){
        $("#t_tab4_2").show();
        $("#tabContents").tabs({active: 14});
    })

    $("#c4_2").click(function(){
        $("#t_tab4_2").hide();
    })


    $("#op4_3").click(function(){
        $("#t_tab4_3").show();
        $("#tabContents").tabs({active: 15});
    })

    $("#c4_3").click(function(){
        $("#t_tab4_3").hide();
    })


    $("#op4_4").click(function(){
        $("#t_tab4_4").show();
        $("#tabContents").tabs({active: 16});
    })

    $("#c4_4").click(function(){
        $("#t_tab4_4").hide();
    })


    $("#op4_5").click(function(){
        $("#t_tab4_5").show();
        $("#tabContents").tabs({active: 17});
    })

    $("#c4_5").click(function(){
        $("#t_tab4_5").hide();
    })


    $("#op4_6").click(function(){
        $("#t_tab4_6").show();
        $("#tabContents").tabs({active: 18});
    })

    $("#c4_6").click(function(){
        $("#t_tab4_6").hide();
    })


    /*FUNCIONES CONSULTAS*/

    $("#op5_1").click(function(){
        $("#t_tab5_1").show();
        $("#tabContents").tabs({active: 19});
    })

    $("#c5_1").click(function(){
        $("#t_tab5_1").hide();
    })


    $("#op5_2").click(function(){
        $("#t_tab5_2").show();
        $("#tabContents").tabs({active: 20});
    })

    $("#c5_2").click(function(){
        $("#t_tab5_2").hide();
    })


    $("#op5_3").click(function(){
        $("#t_tab5_3").show();
        $("#tabContents").tabs({active: 21});
    })

    $("#c5_3").click(function(){
        $("#t_tab5_3").hide();
    })


    $("#op5_4").click(function(){
        $("#t_tab5_4").show();
        $("#tabContents").tabs({active: 22});
    })

    $("#c5_4").click(function(){
        $("#t_tab5_4").hide();
    })

    /*FUNCIONES REPORTES*/
    $("#op6_1").click(function(){
        $("#t_tab6_1").show();
        $("#tabContents").tabs({active: 23});
    })

    $("#c6_1").click(function(){
        $("#t_tab6_1").hide();
    })


    $("#op6_2").click(function(){
        $("#t_tab6_2").show();
        $("#tabContents").tabs({active: 24});
    })

    $("#c6_2").click(function(){
        $("#t_tab6_2").hide();
    })


    $("#op6_3").click(function(){
        $("#t_tab6_3").show();
        $("#tabContents").tabs({active: 25});
    })

    $("#c6_3").click(function(){
        $("#t_tab6_3").hide();
    })


    $("#op6_4").click(function(){
        $("#t_tab6_4").show();
        $("#tabContents").tabs({active: 26});
    })

    $("#c6_4").click(function(){
        $("#t_tab6_4").hide();
    })


    $("#op6_5").click(function(){
        $("#t_tab6_5").show();
        $("#tabContents").tabs({active: 27});
    })

    $("#c6_5").click(function(){
        $("#t_tab6_5").hide();
    })


    $("#op6_6").click(function(){
        $("#t_tab6_6").show();
        $("#tabContents").tabs({active: 28});
    })

    $("#c6_6").click(function(){
        $("#t_tab6_6").hide();
    })


    $("#op6_7").click(function(){
        $("#t_tab6_7").show();
        $("#tabContents").tabs({active: 29});
    })

    $("#c6_7").click(function(){
        $("#t_tab6_7").hide();
    })

    /*FUNCIONES CONFIGURACION*/
    $("#op7_1").click(function(){
        $("#t_tab7_1").show();
        $("#tabContents").tabs({active: 30});
    })

    $("#c7_1").click(function(){
        $("#t_tab7_1").hide();
    })


    $("#op7_2").click(function(){
        $("#t_tab7_2").show();
        $("#tabContents").tabs({active: 31});
    })

    $("#c7_2").click(function(){
        $("#t_tab7_2").hide();
    })


    $("#op7_3").click(function(){
        $("#t_tab7_3").show();
        $("#tabContents").tabs({active: 32});
    })

    $("#c7_3").click(function(){
        $("#t_tab7_3").hide();
    })


    $("#op7_4").click(function(){
        $("#t_tab7_4").show();
        $("#tabContents").tabs({active: 33});
    })

    $("#c7_4").click(function(){
        $("#t_tab7_4").hide();
    })


    $("#op7_5").click(function(){
        $("#t_tab7_5").show();
        $("#tabContents").tabs({active: 34});
    })

    $("#c7_5").click(function(){
        $("#t_tab7_5").hide();
    })


    /*ORDENAR TABLA*/

    $(function(){
        $("#cuadro_cuenta").tablesorter();
    })