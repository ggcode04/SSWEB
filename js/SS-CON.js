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

$("#tabContents").tabs();

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
    $("#t_tab1_1").hide();
    $("#t_tab1_2").hide();
    $("#t_tab1_3").hide();
    $("#t_tab1_4").hide();
    $("#t_tab1_5").hide();
    $("#t_tab1_6").hide();
    $("#t_tab1_7").hide();
    $("#t_tab1_8").hide();

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
    })

    $("#c1_1").click(function(){
        $("#t_tab1_1").hide();
    })


    $("#op1_2").click(function(){
        $("#t_tab1_2").show();
    })

    $("#c1_2").click(function(){
        $("#t_tab1_2").hide();
    })


    $("#op1_3").click(function(){
        $("#t_tab1_3").show();
    })

    $("#c1_3").click(function(){
        $("#t_tab1_3").hide();
    })


    $("#op1_4").click(function(){
        $("#t_tab1_4").show();
    })

    $("#c1_4").click(function(){
        $("#t_tab1_4").hide();
    })


    $("#op1_5").click(function(){
        $("#t_tab1_5").show();
    })

    $("#c1_5").click(function(){
        $("#t_tab1_5").hide();
    })


    $("#op1_6").click(function(){
        $("#t_tab1_6").show();
    })

    $("#c1_6").click(function(){
        $("#t_tab1_6").hide();
    })


    $("#op1_7").click(function(){
        $("#t_tab1_7").show();
    })

    $("#c1_7").click(function(){
        $("#t_tab1_7").hide();
    })


    $("#op1_8").click(function(){
        $("#t_tab1_8").show();
    })

    $("#c1_8").click(function(){
        $("#t_tab1_8").hide();
    })

    /*FUNCIONES MOVIMIENTOS*/

    $("#op2_1").click(function(){
        $("#t_tab2_1").show();
    })

    $("#c2_1").click(function(){
        $("#t_tab2_1").hide();
    })


    $("#op2_2").click(function(){
        $("#t_tab2_2").show();
    })

    $("#c2_2").click(function(){
        $("#t_tab2_2").hide();
    })


    $("#op2_3").click(function(){
        $("#t_tab2_3").show();
    })

    $("#c2_3").click(function(){
        $("#t_tab2_3").hide();
    })


    $("#op2_4").click(function(){
        $("#t_tab2_4").show();
    })

    $("#c2_4").click(function(){
        $("#t_tab2_4").hide();
    })


    $("#op2_5").click(function(){
        $("#t_tab2_5").show();
    })

    $("#c2_5").click(function(){
        $("#t_tab2_5").hide();
    })


    $("#op2_6").click(function(){
        $("#t_tab2_6").show();
    })

    $("#c2_6").click(function(){
        $("#t_tab2_6").hide();
    })

    /*FUNCIONES CIERRES*/

    $("#op3_1").click(function(){
        $("#t_tab3_1").show();
    })

    $("#c3_1").click(function(){
        $("#t_tab3_1").hide();
    })


    $("#op3_2").click(function(){
        $("#t_tab3_2").show();
    })

    $("#c3_2").click(function(){
        $("#t_tab3_2").hide();
    })


    $("#op3_3").click(function(){
        $("#t_tab3_3").show();
    })

    $("#c3_3").click(function(){
        $("#t_tab3_3").hide();
    })


    /*FUNCIONES BALANCES*/

    $("#op4_1").click(function(){
        $("#t_tab4_1").show();
    })

    $("#c4_1").click(function(){
        $("#t_tab4_1").hide();
    })


    $("#op4_2").click(function(){
        $("#t_tab4_2").show();
    })

    $("#c4_2").click(function(){
        $("#t_tab4_2").hide();
    })


    $("#op4_3").click(function(){
        $("#t_tab4_3").show();
    })

    $("#c4_3").click(function(){
        $("#t_tab4_3").hide();
    })


    $("#op4_4").click(function(){
        $("#t_tab4_4").show();
    })

    $("#c4_4").click(function(){
        $("#t_tab4_4").hide();
    })


    $("#op4_5").click(function(){
        $("#t_tab4_5").show();
    })

    $("#c4_5").click(function(){
        $("#t_tab4_5").hide();
    })


    $("#op4_6").click(function(){
        $("#t_tab4_6").show();
    })

    $("#c4_6").click(function(){
        $("#t_tab4_6").hide();
    })


    /*FUNCIONES CONSULTAS*/

    $("#op5_1").click(function(){
        $("#t_tab5_1").show();
    })

    $("#c5_1").click(function(){
        $("#t_tab5_1").hide();
    })


    $("#op5_2").click(function(){
        $("#t_tab5_2").show();
    })

    $("#c5_2").click(function(){
        $("#t_tab5_2").hide();
    })


    $("#op5_3").click(function(){
        $("#t_tab5_3").show();
    })

    $("#c5_3").click(function(){
        $("#t_tab5_3").hide();
    })


    $("#op5_4").click(function(){
        $("#t_tab5_4").show();
    })

    $("#c5_4").click(function(){
        $("#t_tab5_4").hide();
    })

    /*FUNCIONES REPORTES*/
    $("#op6_1").click(function(){
        $("#t_tab6_1").show();
    })

    $("#c6_1").click(function(){
        $("#t_tab6_1").hide();
    })


    $("#op6_2").click(function(){
        $("#t_tab6_2").show();
    })

    $("#c6_2").click(function(){
        $("#t_tab6_2").hide();
    })


    $("#op6_3").click(function(){
        $("#t_tab6_3").show();
    })

    $("#c6_3").click(function(){
        $("#t_tab6_3").hide();
    })


    $("#op6_4").click(function(){
        $("#t_tab6_4").show();
    })

    $("#c6_4").click(function(){
        $("#t_tab6_4").hide();
    })


    $("#op6_5").click(function(){
        $("#t_tab6_5").show();
    })

    $("#c6_5").click(function(){
        $("#t_tab6_5").hide();
    })


    $("#op6_6").click(function(){
        $("#t_tab6_6").show();
    })

    $("#c6_6").click(function(){
        $("#t_tab6_6").hide();
    })


    $("#op6_7").click(function(){
        $("#t_tab6_7").show();
    })

    $("#c6_7").click(function(){
        $("#t_tab6_7").hide();
    })

    /*FUNCIONES CONFIGURACION*/
    $("#op7_1").click(function(){
        $("#t_tab7_1").show();
    })

    $("#c7_1").click(function(){
        $("#t_tab7_1").hide();
    })


    $("#op7_2").click(function(){
        $("#t_tab7_2").show();
    })

    $("#c7_2").click(function(){
        $("#t_tab7_2").hide();
    })


    $("#op7_3").click(function(){
        $("#t_tab7_3").show();
    })

    $("#c7_3").click(function(){
        $("#t_tab7_3").hide();
    })


    $("#op7_4").click(function(){
        $("#t_tab7_4").show();
    })

    $("#c7_4").click(function(){
        $("#t_tab7_4").hide();
    })


    $("#op7_5").click(function(){
        $("#t_tab7_5").show();
    })

    $("#c7_5").click(function(){
        $("#t_tab7_5").hide();
    })


    /*ORDENAR TABLA*/

    $(function(){
        $("#cuadro_cuenta").tablesorter();
    })