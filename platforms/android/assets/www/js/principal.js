//$( window ).load(function() {  ini(); });

document.addEventListener('deviceready', ini, false);

function ini()
{
	//$("#pag_1").load(greet();); 
	//localStorage.clear();
	
	var NumNoticiasNoVistas = localStorage.getItem('ultimoIdNoticias') || 0;//Extráe ultimo id guardado
	var NumAvisosNoVistos = localStorage.getItem('ultimoIdAvisos') || 0;//Extráe ultimo id guardado
	var NumEventosNoVistos = localStorage.getItem('ultimoIdEventos') || 0;//Extráe ultimo id guardado
	var NumConvNoVistos = localStorage.getItem('ultimoIdConv') || 0;//Extráe ultimo id guardado
	traerItemsNoVistos(NumNoticiasNoVistas, NumAvisosNoVistos, NumEventosNoVistos, NumConvNoVistos);			
}

//------------variables globales---------
var urlDominio = "http://www.agendasonidocaracol.mx/apputchetumal"; // http://www.agendasonidocaracol.mx/apputchetumal //http://sergiosolis.com/bacalar 
var nombreMes = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
var idDudasGlobal = ""; var idNotaGlobal = ""; var idEventoaGlobal = "";  var idConvGlobal = "";  var idAvisoGlobal = ""; 
var ConnectionDelay; var pagCargada;

//------------------Identidad------------
$('#PageIdentidad').on('pageshow', function() {
	traerIdentidad();
});
//------------------lista dudas------------
$('#PageListaDudas').on('pageshow', function() {
	traerListaDudas();
});
//------------------lista Cuentas------------
$('#PageListaCuentas').on('pageshow', function() {
	traerListaCuentas();
});
//------------------lista Directorio------------
$('#PageListaDirectorio').on('pageshow', function() {
	traerListaDirectorio();
});
//------------------lista noticias------------
$('#PageListaNoticias').on('pageshow', function() {
	traerListaNoticias();
});
//------------------lista Eventos------------
$('#PageListaEventos').on('pageshow', function() {
	traerListaEventos();
});
//------------------lista Convocatorias------------
$('#PageListaConvocatorias').on('pageshow', function() {
	traerListaConvocatorias();
});
//------------------lista Avisos------------
$('#PageListaAvisos').on('pageshow', function() {
	traerListaAvisos();
});
//------------------Inicio------------
/*$('#pag_1').on('pageshow', function() {
});*/
//------------------Info Oferta (informacion de la carrera)------------

$('#PageInfoOferta').on('pageshow', function() {
		var idOferta = localStorage.getItem('IdOferta') || '<empty>';
    	traerInfoOferta(idOferta);
});

function guardaIdOferta(id) {//se ejecuta al seleccionar alguna carrera
	var idOferta = id;
	localStorage.setItem("IdOferta", idOferta);
	document.getElementById("DivInfoOferta").innerHTML="";//borra la info dentre del elemento
	document.getElementById("DivBtnRec_InfoOfertAcadem").innerHTML="";
	document.getElementById('subtitulo').style.display = 'none';
	//document.getElementById('cargadorInfoOferta').style.display = 'block';
	//document.getElementById('DivContentInfoOferta').style.display = 'none';
	
	
	//document.getElementById('todo').style.display = 'block';
	document.getElementById("DivBtnRec_PlanEstudio").innerHTML="";
	//document.getElementById('cargadorPlanEstudio').style.display = 'block';
	//u
	document.getElementById('subtituloPlanEst').style.display = 'none';
	document.getElementById('collapsibleset').style.display = 'none';
	
	//traerInfoEvento(id);
}
//------------------Info plan estudio (lista de materias)------------
$('#PagePlanEstudio').on('pageshow', function() {
		var idPlan = localStorage.getItem('IdPlan') || '<empty>';
    	traerPlanEstudio(idPlan);		
});

function guardaIdPlanEstudio(id) {//Se ejecuta al seleccionar Plan de Estudio
	var idPlan = id;
	localStorage.setItem("IdPlan", idPlan);
	document.getElementById("DivPlanEstudio").innerHTML="";
	//document.getElementById('DivContentInfoOferta').style.display = 'none';
	//document.getElementById('todo').style.display = 'block';
	
	//traerInfoEvento(id);
}
//------------------Info Dudas------------

$('#PageInfoDudas').on('pageshow', function() {
	var idDudas = localStorage.getItem('IdDudas') || '<empty>';//Obtengo id guardado de localStorage
	if(idDudasGlobal != idDudas || $('#DivInfoDudas').is(':empty')){//Si id es diferenta a id guardado o esta vacio entra
		idDudasGlobal = idDudas;	
		traerInfoDudas(idDudas);
	}
});

function guardaIdDudas(id) {
	var idDudas = id;
	localStorage.setItem("IdDudas", idDudas);//Guardo id en localStorage
	if(idDudasGlobal != idDudas || $('#DivInfoDudas').is(':empty')){
		//$("#DivBtnRec_InfoDudas").empty();//vacía div de boton cargar internet
		document.getElementById("DivBtnRec_InfoDudas").innerHTML="";//limpia div de boton cargar internet
		document.getElementById("DivInfoDudas").innerHTML="";//limpia info para nueva info
		//document.getElementById('cargadorInfoDudas').style.display = 'block';//**
	}
	//traerInfoEvento(id);
}
//------------------Info noticias------------

$('#PagaInfoNoticia').on('pageshow', function() {
	var idNota = localStorage.getItem('IdNota') || '<empty>';
	if(idNotaGlobal != idNota || $('#DivInfoNoticias').is(':empty')){//Si id es diferenta a id guardado o esta vacio entra
		traerInfoNoticias(idNota);
		idNotaGlobal = idNota;
	}
});

function guardaIdNota(id) {
	var idNota = id;
	localStorage.setItem("IdNota", idNota);
	if(idNotaGlobal != idNota || $('#DivInfoNoticias').is(':empty')){
		document.getElementById("DivBtnRec_InfoNoticias").innerHTML="";//limpia div de boton cargar internet
		document.getElementById("DivInfoNoticias").innerHTML="";
		//document.getElementById('cargadorInfoNoticia').style.display = 'block';
	}
	//traerInfoEvento(id);
}
//------------------Info Eventos------------

$('#PagaInfoEvento').on('pageshow', function() {
	var idEvento = localStorage.getItem('IdEvento') || '<empty>';
	if(idEventoaGlobal != idEvento || $('#DivInfoEventos').is(':empty')){//Si id es dif a id guardado o esta vacio entra
		traerInfoEventos(idEvento);
		idEventoaGlobal = idEvento
	}
});

function guardaIdEvento(id) {
	var idEvento = id;
	localStorage.setItem("IdEvento", idEvento);
	if(idEventoaGlobal != idEvento || $('#DivInfoEventos').is(':empty')){
		document.getElementById("DivBtnRec_InfoEventos").innerHTML="";//limpia div de boton cargar internet
		document.getElementById("DivInfoEventos").innerHTML="";
		//document.getElementById('cargadorInfoEvento').style.display = 'block';
	}
}
//------------------Info Convocatorias------------

$('#PagaInfoConvocatoria').on('pageshow', function() {
	var idConvocatoria = localStorage.getItem('IdConvocatoria') || '<empty>';
	if(idConvGlobal != idConvocatoria || $('#DivInfoConvocatoria').is(':empty')){//Si id es dif a id guardado o esta vacio entra
		traerInfoConvocatorias(idConvocatoria);
		idConvGlobal = idConvocatoria;
	}
});

function guardaIdConvocatoria(id) {		
	var idConvocatoria = id;
	localStorage.setItem("IdConvocatoria", idConvocatoria);
	if(idConvGlobal != idConvocatoria || $('#DivInfoConvocatoria').is(':empty')){
		document.getElementById("DivBtnRec_InfoConvocatoria").innerHTML="";//limpia div de boton cargar internet
		document.getElementById("DivInfoConvocatoria").innerHTML="";
		//document.getElementById('cargadorInfoConvocatoria').style.display = 'block';
	}
}
//------------------Info Avisos------------

$('#PagaInfoAvisos').on('pageshow', function() {
	var idAviso = localStorage.getItem('IdAviso') || '<empty>';
	if(idAvisoGlobal != idAviso || $('#DivListaAvisos').is(':empty')){//Si id es dif a id guardado o esta vacio entra
		traerInfoAvisos(idAviso);
		idAvisoGlobal = idAviso;
	}
});

function guardaIdAviso(id) {
	var idAviso = id;
	localStorage.setItem("IdAviso", idAviso);
	if(idAvisoGlobal != idAviso || $('#DivListaAvisos').is(':empty')){
		document.getElementById("DivBtnRec_InfoAvisos").innerHTML="";//limpia div de boton cargar internet
		document.getElementById("DivInfoAvisos").innerHTML="";
		//document.getElementById('cargadorInfoAvisos').style.display = 'block';
	}
}

/*var t=0; 
function contar() 
{ 
	t++; 
} 
var i = setInterval(" contar() ",1);*/
//-----------------------------------------------items no vistos ----------------------------------
function traerItemsNoVistos(NumNoticiasNoVistas, NumAvisosNoVistos, NumEventosNoVistos, NumConvNoVistos)
{
    try
    {
        var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: true,
                type: "GET",
                url: urlDominio + "/apputchetumal/php/contRegistrosNuevos.php", 
                data : { idNota : NumNoticiasNoVistas, idAviso : NumAvisosNoVistos, idEvento : NumEventosNoVistos, idConv : NumConvNoVistos },
				error:  function(){					
					var a = localStorage.getItem('NumNoticiasNoVistas') || '<empty>';//Extráe
					var b = localStorage.getItem('NumAvisosNoVistos') || '<empty>';//Extráe
					var c = localStorage.getItem('NumEventosNoVistos') || '<empty>';//Extráe
					var d = localStorage.getItem('NumConvNoVistos') || '<empty>';//Extráe
					fijarNumItemsNoVistos(a, b, c, d);
					
					navigator.notification.alert('Hay problemas de conexión', null,	'Sin conexión', 'OK');			
				},
				timeout: 15000,
            }).done(function (resultado) {						
            	
				var datosRecibidos = JSON.parse(resultado);	
				//alert(datosRecibidos);
				var a = datosRecibidos[0];
				var b = datosRecibidos[1];
				var c = datosRecibidos[2];
				var d = datosRecibidos[3];
				
				fijarNumItemsNoVistos(a, b, c, d);
       		});
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
	
};
//----------------------fijar numero items no vistos a la etiqueta SPAN (a la derecha del titulo del boton)----------------
function fijarNumItemsNoVistos(a, b, c, d){
		if(a > 0){
			if(a > 9){
				$("#NumNoticiasNoVistas").append("(+9)");//Coloca numero items no vistos en span
			}else{
				$("#NumNoticiasNoVistas").append("(" + a + ")");//Coloca numero items no vistos en span
			}
			localStorage.setItem("NumNoticiasNoVistas", a);//Guarda el numero
		}
		if(b > 0){
			if(b > 9){
				$("#NumAvisosNoVistos").append("(+9)");//Coloca numero items no vistos en span
			}else{
				$("#NumAvisosNoVistos").append("(" + b + ")");//Coloca numero items no vistos en span					
			}
			localStorage.setItem("NumAvisosNoVistos", b);//Guarda el numero
		}   
		if(c > 0){
			if(c > 9){
				$("#NumEventosNoVistos").append("(+9)");//Coloca numero items no vistos en span
			}else{
				$("#NumEventosNoVistos").append("(" + c + ")");//Coloca numero items no vistos en span					
			}
			localStorage.setItem("NumEventosNoVistos", c);//Guarda el numero
		} 
		if(d > 0){
			if(d > 9){
				$("#NumConvNoVistas").append("(+9)");//Coloca numero items no vistos en span
			}else{
				$("#NumConvNoVistas").append("(" + d + ")");//Coloca numero items no vistos en span					
			}
			localStorage.setItem("NumConvNoVistos", d);//Guarda el numero
		}    
	
}
//-------------------------------------------Oferta Academica (Info de la carrera)----------------------------------
function traerInfoOferta(clicked_id)
{
	//checkConnection('DivInfoOferta', 'cargadorInfoOferta', 'DivBtnRec_InfoOfertAcadem');
    try
    {
        var strHtml = "";
		$.ajax({
				beforeSend: function() {$.mobile.loading( 'show'); }, //Show spinner
	            complete: function() {  $.mobile.loading( 'hide'); }, //Hide spinner
				global: false,
				dataType: "html",
				async: true,
                type: "GET",
                url: urlDominio + "/apputchetumal/php/Consultar_pagina.php",
                data : { identificador : clicked_id },
				error:  function(){
					checkConnectionDelay('DivInfoOferta', 'DivBtnRec_InfoOfertAcadem')
				},
				timeout: 15000,
            }).done(function (resultado) {		
			document.getElementById('subtitulo').style.display = 'block';	
			//document.getElementById('DivContentInfoOferta').style.display = 'block';	
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
				var listaTit = "";
                $.each( datosRecibidos, function( key, value ) {
						listaTit += value.nombrefull;
						lista += "<div role='main' class='ui-content'>";					
						lista += "" + value.contenido + "";							
						lista += "</div>";
                });
					$("#subtitulo").html(listaTit);
	                $("#subtitulo").listview().listview('refresh'); 
					$("#DivInfoOferta").html(lista);
	                $("#DivInfoOferta").listview().listview('refresh');  
					//document.getElementById('cargadorInfoOferta').style.display = 'none';
					/*if ($('#DivIdentidad').is(':empty')){ 	
					alert("vacio");		
					} else{
						alert(t);
					}*/  
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//---------------------------------------Info Plan de estudio (lista de las materias)----------------------------------
function traerPlanEstudio(clicked_id)
{
	//alert(t);
	//checkConnection('subtituloPlanEst', 'cargadorPlanEstudio', 'DivBtnRec_PlanEstudio');
	
	if(clicked_id == "plan_ing_dns" || clicked_id == "plan_ing_tics" || clicked_id == "plan_ing_meca" || clicked_id == "plan_ing_gastro"){
		var esIng = true;
		document.getElementById('divSextoCuat').style.display = 'none';
		var col1 ="Séptimo cuatrimestre"; var col2 ="Octavo cuatrimestre"; var col3 ="Noveno cuatrimestre"; var col4 ="Décimo cuatrimestre"; var col5 ="Undécimo cuatrimestre";
	}else{
		var esIng = false;
		document.getElementById('divSextoCuat').style.display = 'block';
		var col1 ="Primer cuatrimestre"; var col2 ="Segundo cuatrimestre"; var col3 ="Tercer cuatrimestre"; var col4 ="Cuarto cuatrimestre"; var col5 ="Quinto cuatrimestre"; var col6 ="Sexto cuatrimestre";
	}
	
	try
	{
		var strHtml = "";
		$.ajax({
				beforeSend: function() {$.mobile.loading( 'show'); }, //Show spinner
	            complete: function() {  $.mobile.loading( 'hide'); }, //Hide spinner
				global: false,
				dataType: "html",
				async: true,
				type: "GET",
				url: urlDominio + "/apputchetumal/php/consultar_plan_estudio.php",
				data : { identificador : clicked_id },
				error:  function(){
					checkConnectionDelay('subtituloPlanEst', 'DivBtnRec_PlanEstudio')
				},
				timeout: 15000,
			}).done(function (resultado) {	
				document.getElementById("DivBtnRec_PlanEstudio").innerHTML="";
				document.getElementById('subtituloPlanEst').style.display = 'block';	
				document.getElementById('collapsibleset').style.display = 'block';	
						
				var datosRecibidos = JSON.parse(resultado);				
				var lista1 = ""; var lista2 = ""; var lista3 = ""; var lista4 = ""; var lista5 = ""; var lista6 = "";
				var listaTit = "";
				$.each( datosRecibidos, function( key, value ) {
						listaTit += value.nombrefull;
						lista1 += "" + value.cuat1 + "";
						lista2 += "" + value.cuat2 + "";
						lista3 += "" + value.cuat3 + "";
						lista4 += "" + value.cuat4 + "";
						lista5 += "" + value.cuat5 + "";
						if(esIng == false){
							lista6 += "" + value.cuat6 + "";	
						}						
				});
				
					//Titulo 
					$("#subtituloPlanEst").html(listaTit);
					$("#subtituloPlanEst").listview().listview('refresh'); 
					
					//titulos colapsables
					$("#h3_1").html(col1);
					$("#h3_2").html(col2);
					$("#h3_3").html(col3);
					$("#h3_4").html(col4);
					$("#h3_5").html(col5);
					$("#h3_1").listview().listview('refresh');
					$("#h3_2").listview().listview('refresh');
					$("#h3_3").listview().listview('refresh');
					$("#h3_4").listview().listview('refresh');
					$("#h3_5").listview().listview('refresh');
					if(esIng == false){
						$("#h3_6").html(col6);
						$("#h3_6").listview().listview('refresh'); 
					}
		

					//Contenido listas
					$("#DivCuat_1").html(lista1);
					$("#DivCuat_2").html(lista2);
					$("#DivCuat_3").html(lista3);
					$("#DivCuat_4").html(lista4);
					$("#DivCuat_5").html(lista5);
					
					$("#DivCuat_1").listview().listview('refresh');
					$("#DivCuat_2").listview().listview('refresh');
					$("#DivCuat_3").listview().listview('refresh');
					$("#DivCuat_4").listview().listview('refresh');
					$("#DivCuat_5").listview().listview('refresh');
					
					if(esIng == false){
						$("#DivCuat_6").html(lista6);
						$("#DivCuat_6").listview().listview('refresh'); 
					}
					
					//document.getElementById('cargadorPlanEstudio').style.display = 'none';
					
					/*if ($('#DivIdentidad').is(':empty')){ 	
					alert("vacio");		
					} else{
						alert(t);
					}*/  
		});
	}
	catch(ex)
	{
		alert("Error de datos!!");
	}
		
};
$( "#popupPanel" ).on({
    popupbeforeposition: function() {
        var h = $( window ).height();
 
        $( "#popupPanel" ).css( "height", h );
    }
});

//-----------------------------------------------Cuentas Bancarias----------------------------------
function traerListaCuentas()
{
	//checkConnection('DivInfoCuentas', 'cargadorInfoCuentas', 'DivBtnRec_Cuentas');
    try
    {
        var strHtml = "";
		$.ajax({
				beforeSend: function() {$.mobile.loading( 'show'); }, //Show spinner
	            complete: function() {  $.mobile.loading( 'hide'); }, //Hide spinner
				global: false,
				dataType: "html",
				cache: true,
				async: true,				
                url: urlDominio + "/apputchetumal/php/consultar_cuentas.php",
				type : 'GET',
				error:  function(){
					checkConnectionDelay('DivInfoCuentas', 'DivBtnRec_Cuentas')
				},
				timeout: 15000,
                //data: $("#form").serialize(),
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {		
						lista += "<li>";
                        lista += "<h2>" + value.nombreBanco + "</h2>";						
						lista += "" + value.numero  + "";
                        lista += "</li>";
                });
                $("#DivInfoCuentas").html(lista);
                $("#DivInfoCuentas").listview().listview('refresh');
				$("#DivBtnRec_Cuentas").empty();//vacía div de boton cargar internet
				//document.getElementById('cargadorInfoCuentas').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//-----------------------------------------------Directorio----------------------------------
function traerListaDirectorio()
{
	//checkConnection('DivInfoDirectorio', 'cargadorInfoDirectorio', 'DivBtnRec_Directorio');
    try
    {
        var strHtml = "";
		$.ajax({
				beforeSend: function() {$.mobile.loading( 'show'); }, //Show spinner
	            complete: function() {  $.mobile.loading( 'hide'); }, //Hide spinner
				global: false,
				dataType: "html",
				async: true,
                type : 'GET',
                url: urlDominio + "/apputchetumal/php/consultar_directorio.php",
                //data: $("#form").serialize(),
				error:  function(){
					checkConnectionDelay('DivInfoDirectorio', 'DivBtnRec_Directorio')
				},
				timeout: 15000,
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {		
						lista += "<li><label>";
                        lista += "<b>" + value.cargo + "</b><br>";						
						lista += "" + value.nombre  + "<br>";
						lista += "<a href='mailto:" + value.correo  + "'>" + value.correo  + "</a><br>";
						lista += "<a href='tel:" + value.telefono  + "'>" + value.telefono_mostrar  + "</a><br>";
                        lista += "</label></li>";
                });
                $("#DivInfoDirectorio").html(lista);
                $("#DivInfoDirectorio").listview().listview('refresh');
				$("#DivBtnRec_Directorio").empty();//vacía div de boton cargar internet
				//document.getElementById('cargadorInfoDirectorio').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//-----------------------------------------------Lista Dudas----------------------------------
function traerListaDudas()
{
	//checkConnection('DivListaDudas', 'cargadorListaDudas', 'DivBtnRec_ListaDudas');
    try
    {
        var strHtml = "";
		$.ajax({
				beforeSend: function() {$.mobile.loading( 'show'); }, //Show spinner
	            complete: function() {  $.mobile.loading( 'hide'); }, //Hide spinner
				global: false,
				dataType: "html",
				async: true,
                type : 'GET',
                url: urlDominio + "/apputchetumal/php/consultar_dudas.php",
                //data: $("#form").serialize(),
				error:  function(){
					checkConnectionDelay('DivListaDudas', 'DivBtnRec_ListaDudas')
				},
				timeout: 15000,
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {		
						lista += "<li><a class='show-page-loading-msg' rel='external' data-textonly='false' data-textvisible='false' data-msgtext='' id='" + value.id + "' onClick='guardaIdDudas(this.id)' href='#PageInfoDudas'>";
						lista += "<h2 style='font-size:.9em'>" + value.pregunta + "</h2>";
                        lista += "</li>";
                });
                $("#DivListaDudas").html(lista);
                $("#DivListaDudas").listview().listview('refresh');
				$("#DivBtnRec_ListaDudas").empty();//vacía div de boton cargar internet
				//document.getElementById('cargadorListaDudas').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//--------------------------------------------------------Info Dudas--------------------------------
function traerInfoDudas(clicked_id)
{
	//checkConnection('DivInfoDudas', 'cargadorInfoDudas', 'DivBtnRec_InfoDudas');	
    try
    {
        var strHtml = "";
		$.ajax({
				beforeSend: function() {$.mobile.loading( 'show'); }, //Show spinner
	            complete: function() {  $.mobile.loading( 'hide'); }, //Hide spinner
				global: false,
				dataType: "html",
				async: true,
                type : 'GET',
                url: urlDominio + "/apputchetumal/php/consultar_dudas_info.php",
				data : { Id : clicked_id },
                //data: $("#form").serialize(),
				error:  function(){
					checkConnectionDelay('DivInfoDudas', 'DivBtnRec_InfoDudas')
				},
				timeout: 15000,
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {
						lista += "<div role='main' class='ui-content'>";							
						lista += "<h2>" + value.pregunta + "</h2>"//borrar					
						lista += "" + value.respuesta + "";	
						lista += "</div>";
                });
                $("#DivInfoDudas").html(lista);
                $("#DivInfoDudas").listview().listview('refresh');
				$("#DivBtnRec_InfoDudas").empty();//vacía div de boton cargar internet
				//document.getElementById('cargadorInfoDudas').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//-----------------------------------------------Lista Noticias----------------------------------
function traerListaNoticias()
{
	//checkConnection('DivListaNoticias', 'cargadorListaNoticia', 'DivBtnRec_ListaNoticias');
    try
    {
        var strHtml = "";
		$.ajax({
				beforeSend: function() {$.mobile.loading( 'show'); }, //Show spinner
	            complete: function() {  $.mobile.loading( 'hide'); }, //Hide spinner
				global: false,
				dataType: "html",
				async: true,
                type: "GET",
                url: urlDominio + "/apputchetumal/php/consultar_noticias.php",
                //data: $("#form").serialize(),
				error:  function(){
					checkConnectionDelay('DivListaNoticias', 'DivBtnRec_ListaNoticias')
				},
				timeout: 15000,
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
				var fechaMayuscula;
				var ultimoId = 0; // = datosRecibidos[0].IdNota;//Guarda el id mayor 
				var cont = 0;
                $.each( datosRecibidos, function( key, value ) {	
					if(ultimoId < value.IdNota){
						ultimoId = value.IdNota;//Guarda el id mayor 
					}	
					lista += "<li><a class='show-page-loading-msg' rel='external' data-textonly='false' data-textvisible='false' data-msgtext='' id='" + value.IdNota + "' onClick='guardaIdNota(this.id)' href='#PagaInfoNoticia'>";
					
					lista += "<img style='position:absolute;top:0;bottom:0;margin:auto;' src='" + urlDominio + "/noticias/img/" + value.IdNota + "/full.jpg'  onerror=\" this.src='img/nofoto.jpg' \">";
					
					lista += "<h2 style='font-size:.8em'>" + value.Titulo + "</h2>";	
					fechaMayuscula = value.fecha_publicacion;
					fechaMayuscula = fechaMayuscula[0].toUpperCase() + fechaMayuscula.slice(1);				
					lista += "<p style='color:#999;'>" + fechaMayuscula  + "</p>";
					lista += "</li>";
					cont ++;
                });
				
				checkForItems(cont, "DivMensajeNoticia");//Checa si hay Noticias y si no, manda un mensaje "no hay"
				
                $("#DivListaNoticias").html(lista);
                $("#DivListaNoticias").listview().listview('refresh');
				$("#DivBtnRec_ListaNoticias").empty();//vacía div de boton cargar internet
				
				var NumNoticiasNoVistas = localStorage.getItem('ultimoIdNoticias') || 0;//Extráe ultimo id guardado
				if(NumNoticiasNoVistas < ultimoId){
					localStorage.setItem("ultimoIdNoticias", ultimoId);//Guarda ultimo id
				}
				localStorage.setItem("NumNoticiasNoVistas", 0);//Items no vistos ahora es 0
				$("#NumNoticiasNoVistas").remove();//Vacía Span
				//document.getElementById('cargadorListaNoticia').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//--------------------------------------------------------Info Noticias--------------------------------
function traerInfoNoticias(clicked_id)
{
	//checkConnection('DivInfoNoticias', 'cargadorInfoNoticia', 'DivBtnRec_InfoNoticias');	
    try
    {
        var strHtml = "";
		$.ajax({
				beforeSend: function() {$.mobile.loading( 'show'); }, //Show spinner
	            complete: function() {  $.mobile.loading( 'hide'); }, //Hide spinner
				global: false,
				dataType: "html",
				async: true,
                type: "GET",
				//url: urlDominio + "/apputchetumal/php/consultar_noticias_info.php?Id=" + clicked_id + "",
                url: urlDominio + "/apputchetumal/php/consultar_noticias_info.php",
				data : { Id : clicked_id },
				error:  function(){
					checkConnectionDelay('DivInfoNoticias', 'DivBtnRec_InfoNoticias')
				},
				timeout: 15000,
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
				var cont = 0;
				var arrayImg = new Array()
                $.each( datosRecibidos, function( key, value ) {
					if(typeof(value.archivo) != "undefined"){
						arrayImg[cont] = value.archivo;	
					}
						
					if(typeof(value.Titulo) != "undefined" || typeof(value.Contenido) != "undefined"){
						lista += "<div role='main' class='ui-content' style='padding:0 1em'>";
						lista += "<h2>" + value.Titulo + "</h2>";
						var fechaMayuscula = value.FechaPublicacion;
						fechaMayuscula = fechaMayuscula[0].toUpperCase() + fechaMayuscula.slice(1);	
						lista += "<p style='font-size: .8em;color:#666'>" + fechaMayuscula  + " </p>";	
						lista += "</div>";
						
						var idNota = value.IdNota;
						if (arrayImg.length > 0) {//si hay imagenes entro aponerlas
							lista+="<div class='scroll'><table><tr>";
							/*for (x=0;x<arrayImg.length;x++){
							lista += "<td><img class='imgNoticias' src='" + urlDominio + "/noticias/img/" + idNota + "/orig/" +arrayImg[x] + "'></td>";
							}*/							
							for (x=0;x<arrayImg.length;x++){								
								var origen = urlDominio + "/noticias/img/" + idNota + "/full/" +arrayImg[x];	
								putDimencionesImg(origen, x, arrayImg.length);
								var imagen=new Image();
								imagen.src=origen												
								//var ancho1 = imagen.width;
								//var alto1 = imagen.height;
								//alert("Alto: " + alto1 + " Ancho: " + ancho1);								
								lista += "<td><div class='picture'><figure style='float:left;'><a id='imgNota_"+x+"' href='" + urlDominio + "/noticias/img/" + idNota + "/full/" +arrayImg[x] + "' itemprop='contentUrl' data-size='0x0'><img  src='" + urlDominio + "/noticias/img/" + idNota + "/orig/" +arrayImg[x] + "'  height='200' width='auto' alt='no hay img'  onerror=\" this.src='img/nofoto.jpg' \"></a></figure></div></td>";								
							}
							lista+="</div></td></tr></table></div>";
						}
						
						lista += "<div class='ui-content' style='padding:0 1em'>";			
						lista += "" + value.Contenido + "";													
						lista += "</div>";
						
					}
					cont ++;
               });
                $("#DivInfoNoticias").html(lista);
                $("#DivInfoNoticias").listview().listview('refresh');
				$("#DivBtnRec_InfoNoticias").empty();//vacía div de boton cargar internet
				//document.getElementById('cargadorInfoNoticia').style.display = 'none';
				
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
	
};
function putDimencionesImg(url, id, totImgs) {
    var img=new Image();
    img.src=url;
    img.onload= function(){
		//ancho alto
		var dimenciones = img.width + "x" + img.height;
		//return dimenciones;
		$('#imgNota_'+id).attr("data-size", dimenciones);
		if(id+1 == totImgs){
			photoSwipe();}
		
    };
};

//-----------------------------------------------lista Eventos------------------------------------
function traerListaEventos()
{
    try
    {
        var strHtml = "";
		$.ajax({
				beforeSend: function() {$.mobile.loading( 'show'); }, //Show spinner
	            complete: function() {  $.mobile.loading( 'hide'); }, //Hide spinner
				global: false,
				dataType: "html",
				async: true,
                //type: "POST",
                url: urlDominio + "/apputchetumal/php/consultar_eventos.php",
                //data: $("#form").serialize(),
				error:  function(){
					checkConnectionDelay('DivListaEventos', 'DivBtnRec_ListaEventos')
				},
				timeout: 15000,
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
				var DiaInicio;
				var	ultimoId = 0;
				var cont = 0;
                $.each( datosRecibidos, function( key, value ) {	
						if(ultimoId < value.IdEvento){
							ultimoId = value.IdEvento;//Guarda el id mayor 
						}
						lista += "<li><a class='show-page-loading-msg' rel='external' data-textonly='false' data-textvisible='false' data-msgtext='' id='" + value.IdEvento + "' onClick='guardaIdEvento(this.id)' href='#PagaInfoEvento'>";
                        lista += "<h2 style='font-size:.9em'>" + value.Denominacion + "</h2>";						
						
						DiaInicio = value.DiaInicio;
						DiaInicio = DiaInicio[0].toUpperCase() + DiaInicio.slice(1);		
						DiaInicio = "<p class='EventoDia'>" + DiaInicio;
						
						if(value.DiaFin != "")
						{
							if(value.MesInicio == value.MesFin)//si los meses son iguales
							{
								if(value.DiaInicio == value.DiaFin)//si los dias son iguales se cancela uno
								{
									lista += DiaInicio + value.MesInicio + "";
								}else{
									lista += DiaInicio + " a " + value.DiaFin + value.MesInicio + "";
								}
							} else {
								lista += DiaInicio + value.MesInicio + " a " + value.DiaFin + value.MesFin + "";
							}
						} else {
							lista += DiaInicio + value.MesInicio + "";
						}
						//lista += "<p>" 
						
						
						if(value.fecha_hora != 0)//si hay HORA la muestro
                        {
                             lista += "&nbsp;&nbsp;-&nbsp;" + value.fecha_hora  + "";
                        }
						lista +="</p>";
						if(value.lugar != "")// si hay LUGAR lo muestro
                        {
                             lista += "<p class='EventoLugar'>Lugar: " + value.lugar + "</p>";
                        }
			
                        lista += "</li>";
						cont ++;
                });
				
				checkForItems(cont, "DivMensajeEventos");//Checa si hay eventos y si no, manda un mensaje "no hay"
				
                $("#DivListaEventos").html(lista);
                $("#DivListaEventos").listview().listview('refresh');
				$("#DivBtnRec_ListaEventos").empty();//vacía div de boton cargar internet
				
				var NumEventosNoVistos = localStorage.getItem('ultimoIdEventos') || 0;//Extráe ultimo id guardado
				if(NumEventosNoVistos < ultimoId){
					localStorage.setItem("ultimoIdEventos", ultimoId);//Guarda ultimo id
				}
				localStorage.setItem("NumEventosNoVistos", 0);//Items no vistos ahora es 0
				$("#NumEventosNoVistos").remove();//Vacía Span
				//document.getElementById('cargadorListaEventos').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//--------------------------------------------------------Info Evento--------------------------------
function traerInfoEventos(clicked_id)
{
	//checkConnection('DivInfoEventos', 'cargadorInfoEvento', 'DivBtnRec_InfoEventos');	
    try
    {
        var strHtml = "";
		$.ajax({
				beforeSend: function() {$.mobile.loading( 'show'); }, //Show spinner
	            complete: function() {  $.mobile.loading( 'hide'); }, //Hide spinner
				global: false,
				dataType: "html",
				async: true,
                type: "GET",
                url: urlDominio + "/apputchetumal/php/consultar_eventos_info.php",
				data : { Id : clicked_id },
                //data: $("#form").serialize(),
				error:  function(){
					checkConnectionDelay('DivInfoEventos', 'DivBtnRec_InfoEventos')
				},
				timeout: 15000,
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {
						lista += "<div role='main' class='ui-content'>";							
						lista += "<h2>" + value.Denominacion + "</h2>"	
						/*lista += "<p><b>Fecha: </b>" + value.FechaInicio + "";
                        
						if(value.FechaFin != "00-00-0000"){
							lista += "&nbsp;&nbsp;al&nbsp;&nbsp;" + value.FechaFin + "";
						}
						lista += "<br>";
                        lista += "<b>Lugar:</b> " + value.lugar + "</p>";*/
									
						lista += "" + value.Contenido + "";
						//lista += "<p style='font-size: .8em;color:#999'>Publicado el: " + value.FechaPublicacion  + " </p>";						
						lista += "</div>";
                });
                $("#DivInfoEventos").html(lista);
                $("#DivInfoEventos").listview().listview('refresh');
				$("#DivBtnRec_InfoEventos").empty();//vacía div de boton cargar internet
				//document.getElementById('cargadorInfoEvento').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//-----------------------------------------------Lista Convocatoria----------------------------------
function traerListaConvocatorias()
{
	//checkConnection('DivListaConvocatoria', 'cargadorListaConvocatoria', 'DivBtnRec_ListaConvocatoria');
    try
    {
        var strHtml = "";
		$.ajax({
				beforeSend: function() {$.mobile.loading( 'show'); }, //Show spinner
	            complete: function() {  $.mobile.loading( 'hide'); }, //Hide spinner
				global: false,
				dataType: "html",
				async: true,
                //type: "POST",
                url: urlDominio + "/apputchetumal/php/consultar_convocatorias.php",
                //data: $("#form").serialize(),
				error:  function(){
					checkConnectionDelay('DivListaConvocatoria', 'DivBtnRec_ListaConvocatoria')
				},
				timeout: 15000,
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);	
				var lista = "";	
				var	ultimoId = 0; 
				var cont = 0;
                $.each( datosRecibidos, function( key, value ) {
					if(ultimoId < value.IdPublicacion){
						ultimoId = value.IdPublicacion;//Guarda el id mayor 
					}		
					lista += "<li><a class='show-page-loading-msg' rel='external' data-textonly='false' data-textvisible='false' data-msgtext='' id='" + value.IdPublicacion + "' onClick='guardaIdConvocatoria(this.id)' href='#PagaInfoConvocatoria'>";	
					lista += "<h2>" + value.Encabezado + "</h2>";						
					lista += "<p style='color:#999'>Publicado el " + value.FechaPublicacion + "";
					lista += "</li>";
					cont ++;
                });
				
				checkForItems(cont, "DivMensajeConv");//Checa si hay Covocatorias y si no, manda un mensaje "no hay"
				
                $("#DivListaConvocatoria").html(lista);
                $("#DivListaConvocatoria").listview().listview('refresh');
				$("#DivBtnRec_ListaConvocatoria").empty();//vacía div de boton cargar internet
				
				var NumConvNoVistos = localStorage.getItem('ultimoIdConv') || 0;//Extráe ultimo id guardado
				if(NumConvNoVistos < ultimoId){
					localStorage.setItem("ultimoIdConv", ultimoId);//Guarda ultimo id
				}
				localStorage.setItem("NumConvNoVistos", 0);//Items no vistos ahora es 0
				$("#NumConvNoVistas").remove();//Vacía Span
				//document.getElementById('cargadorListaConvocatoria').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//--------------------------------------------------------Info Convocatoria--------------------------------
function traerInfoConvocatorias(clicked_id)
{
	//checkConnection('DivInfoConvocatoria', 'cargadorInfoConvocatoria', 'DivBtnRec_InfoConvocatoria');	
    try
    {
        var strHtml = "";
		$.ajax({
				beforeSend: function() {$.mobile.loading( 'show'); }, //Show spinner
	            complete: function() {  $.mobile.loading( 'hide'); }, //Hide spinner
				global: false,
				dataType: "html",
				async: true,
                type: "GET",
                url: urlDominio + "/apputchetumal/php/consultar_convocatoria_info.php",
				data : { Id : clicked_id },
				error:  function(){
					checkConnectionDelay('DivInfoConvocatoria', 'DivBtnRec_InfoConvocatoria')
				},
				timeout: 15000,
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {
						lista += "<div role='main' class='ui-content'>";							
						lista += "<h2>" + value.Encabezado + "</h2>"					
						lista += "" + value.Contenido + "";	
						//lista += "<p style='font-size: .8em;color:#999'>Publicado el: " + value.FechaPublicacion  + " </p>";						
						lista += "</div>";
                });
                $("#DivInfoConvocatoria").html(lista);
                $("#DivInfoConvocatoria").listview().listview('refresh');
				$("#DivBtnRec_InfoConvocatoria").empty();//vacía div de boton cargar internet
				//document.getElementById('cargadorInfoConvocatoria').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//-----------------------------------------------Lista Avisos----------------------------------
function traerListaAvisos()
{
    try
    {
        var strHtml = "";
		$.ajax({
				beforeSend: function() {$.mobile.loading( 'show'); }, //Show spinner
	            complete: function() {  $.mobile.loading( 'hide'); }, //Hide spinner
				global: false,
				dataType: "html",
				async: true,				
                //type: "POST",
                url: urlDominio + "/apputchetumal/php/consultar_avisos.php",
                error:  function(){
					checkConnectionDelay('DivListaAvisos', 'DivBtnRec_ListaAvisos')
				},
				timeout: 15000,
				success: function(){
					//alert("todo bien");
				},
            }).done(function (resultado) {	
				//stopConnectionDelay();				
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
				var	ultimoId = 0;
				var cont = 0;
                $.each( datosRecibidos, function( key, value ) {
						if(ultimoId < value.IdPublicacion){
							ultimoId = value.IdPublicacion;//Guarda el id mayor 
						}
						lista += "<li><a class='show-page-loading-msg' rel='external' data-textonly='false' data-textvisible='false' data-msgtext='' id='" + value.IdPublicacion + "' onClick='guardaIdAviso(this.id)' href='#PagaInfoAvisos'>";						
                        lista += "<h2>" + value.Encabezado + "</h2>";						
						lista += "<p style='color:#999'>Publicado el " + value.FechaPublicacion + "";
                        lista += "</li>";
						cont ++;
						
                });
				
				checkForItems(cont, "DivMensajeAvisos");//Checa si hay Avisos y si no, manda un mensaje "no hay"
				
                $("#DivListaAvisos").html(lista);
                $("#DivListaAvisos").listview().listview('refresh');
				$("#DivBtnRec_ListaAvisos").empty();//vacía div de boton cargar internet
				
				//código para trbajar los items no vistos
				var NumAvisosNoVistos = localStorage.getItem('ultimoIdAvisos') || 0;//Extráe ultimo id guardado
				if(NumAvisosNoVistos < ultimoId){
					localStorage.setItem("ultimoIdAvisos", ultimoId);//Guarda ultimo id
				}	
				localStorage.setItem("NumAvisosNoVistos", 0);//Items no vistos ahora es 0
				$("#NumAvisosNoVistos").remove();//Vacía Span
				//document.getElementById('cargadorListaAvisos').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
	//return true;
};


function saludo(){
alert("Saludos");
};
//--------------------------------------------------------Info Aviso--------------------------------
function traerInfoAvisos(clicked_id)
{
	//checkConnection('DivListaAvisos', 'cargadorInfoAvisos', 'DivBtnRec_InfoAvisos');	
    try
    {
        var strHtml = "";
		$.ajax({
				beforeSend: function() {$.mobile.loading( 'show'); }, //Show spinner
	            complete: function() {  $.mobile.loading( 'hide'); }, //Hide spinner
				global: false,
				dataType: "html",
				async: true,
                type: "GET",
                url: urlDominio + "/apputchetumal/php/consultar_avisos_info.php",
                data : { Id : clicked_id },
				error:  function(){							
					checkConnectionDelay('DivInfoAvisos', 'DivBtnRec_InfoAvisos')
				},
				timeout: 15000,
            }).done(function (resultado) {						
            	var datosRecibidos = JSON.parse(resultado);				
				var lista = "";
                $.each( datosRecibidos, function( key, value ) {
						lista += "<div role='main' class='ui-content'>";							
						lista += "<h2>" + value.Encabezado + "</h2>"//borrar					
						lista += "" + value.Contenido + "";	
						//lista += "<p style='font-size: .8em;color:#999'>Publicado el: " + value.FechaPublicacion  + " </p>";						
						lista += "</div>";
                });
                $("#DivInfoAvisos").html(lista);
                $("#DivInfoAvisos").listview().listview('refresh');
				$("#DivBtnRec_InfoAvisos").empty();//vacía div de boton cargar internet
				//document.getElementById('cargadorInfoAvisos').style.display = 'none';
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
};
//------------------------------Función para comprobar internet--------------------------------
function checkConnection(idDivElemeto, idCargador, DivBotonRecargar) {
	//alert("idDivElemeto: "+ idDivElemeto + " idCargador: " + idCargador + " DivBotonRecargar: " + DivBotonRecargar);
	var networkState = navigator.connection.type;
//	navigator.network.connection.type
	var online = "";
    var states = {};
	/*states[Connection.UNKNOWN]  = '1'; //'Unknown connection';
	states[Connection.ETHERNET] = '1'; //'Ethernet connection';
	states[Connection.WIFI]     = '1'; //'WiFi connection';
	states[Connection.CELL_2G]  = '1'; //'Cell 2G connection';
	states[Connection.CELL_3G]  = '1'; //'Cell 3G connection';
	states[Connection.CELL_4G]  = '1'; //'Cell 4G connection';
	states[Connection.NONE]     = '0'; //'No network connection';*/
	//online = states[networkState];
	//alert("el estado es: " + networkState);
	//alert("idDivElemeto: " + idDivElemeto + " IdCargador: " + idCargador);
	if (networkState == Connection.NONE)//si no hay internet
	{
		//alert('No hay conexión a internet');
		if ($('#'+idDivElemeto).is(':empty')){ 	//si el div esta vacio o no tiene info, mostramos boton de recargar
			//--->alert("vacio");	
			var mensaje = "";
			mensaje += "No hay conexión a internet";
			mensaje += "<br><a onClick='refreshPage(this.id)'  id='"+DivBotonRecargar+"' class='ui-btn ui-btn-b ui-btn-inline ui-icon-refresh ui-btn-icon-left'>Recargar</a>";
			$("#"+DivBotonRecargar).html(mensaje);
		} else{
			//--->alert("no vacio");
		}

		//document.getElementById(idCargador).style.display = 'none';
	} 	
};

//--------------------------------Funcion para mandar mensaje de fallo en conexion-----------------

							//DivListaAvisos', 'cargadorListaAvisos', 'DivBtnRec_ListaAvisos
function checkConnectionDelay(idDivElemeto, DivBotonRecargar){
	//alert("Hay problemas de conexión");
	navigator.notification.alert(
		'Hay problemas de conexión', // message
		 onConfirm,            // callback to invoke with index of button pressed
		'Sin conexión'       // title
		      // buttonLabels
	);
	function onConfirm(buttonIndex) {}
	
	if ($('#'+idDivElemeto).is(':empty')){ 	//si el div esta vacio o no tiene info, mostramos boton de recargar
			//--->alert("vacio");	
			var mensaje = "";
			mensaje += "Hay problemas de conexión";
			mensaje += "<br><a onClick='refreshPage(this.id)'  id='"+DivBotonRecargar+"' class='ui-btn ui-btn-c ui-btn-inline ui-icon-refresh ui-btn-icon-left'>Recargar</a>";
			$("#"+DivBotonRecargar).html(mensaje);//interpolamos el mensaje en el div DivBtnRec_x
		} else{
			//alert("no vacio");
		}

		//document.getElementById(idCargador).style.display = 'none';
	//ConnectionDelay = setTimeout(function(){ alert("Esto está tardando mucho, posiblemente hay un problema de conexión."); }, 15000);
};
/*function stopConnectionDelay() {
    clearTimeout(ConnectionDelay);
}*/


//-------------------------------Funcion para llamar funcion al cargar paguina------
function refreshPage(DivBotonRecargar)  
	{
	//$("#talleres").load(pagina);
	//window.location ="index.html";i
   //location.reload();
    //window.location.assign("index.html");
	if(DivBotonRecargar == "DivBtnRec_Cuentas")
	{
		traerListaCuentas();
	} 
	else if(DivBotonRecargar== "DivBtnRec_Directorio")
	{
		traerListaDirectorio();
	}
	else if(DivBotonRecargar== "DivBtnRec_InfoOfertAcadem")//Oferta
	{
		var idOferta = localStorage.getItem('IdOferta') || '<empty>';
    	traerInfoOferta(idOferta);
	}
	else if(DivBotonRecargar== "DivBtnRec_PlanEstudio")
	{	
		var idPlan = localStorage.getItem('IdPlan') || '<empty>';
		traerPlanEstudio(idPlan);	
	}
	else if(DivBotonRecargar== "DivBtnRec_ListaDudas")//Dudas
	{
		traerListaDudas();
	}
	else if(DivBotonRecargar== "DivBtnRec_InfoDudas")
	{
		var idDudas = localStorage.getItem('IdDudas') || '<empty>';
    	traerInfoDudas(idDudas);
	}
	else if(DivBotonRecargar== "DivBtnRec_ListaNoticias")//Noticias
	{
		traerListaNoticias();
	}
	else if(DivBotonRecargar== "DivBtnRec_InfoNoticias")
	{
		var idNota = localStorage.getItem('IdNota') || '<empty>';
    	traerInfoNoticias(idNota);
	}
	else if(DivBotonRecargar== "DivBtnRec_ListaEventos")//Eventos
	{
		traerListaEventos();
	}
	else if(DivBotonRecargar== "DivBtnRec_InfoEventos")
	{
		var idEvento = localStorage.getItem('IdEvento') || '<empty>';
    	traerInfoEventos(idEvento);
	}
	else if(DivBotonRecargar== "DivBtnRec_ListaConvocatoria")//Convocatorias
	{
		traerListaConvocatorias();
	}									
	else if(DivBotonRecargar== "DivBtnRec_InfoConvocatoria")
	{
		var idConvocatoria = localStorage.getItem('IdConvocatoria') || '<empty>';
		traerInfoConvocatorias(idConvocatoria);
	}							
	else if(DivBotonRecargar== "DivBtnRec_ListaAvisos")//Avisos
	{
		traerListaAvisos();
	}							
	else if(DivBotonRecargar== "DivBtnRec_InfoAvisos")
	{
		var idAviso = localStorage.getItem('IdAviso') || '<empty>';
		traerInfoAvisos(idAviso);
	}
		
}
//--------------------------------Función para reposicionar Popup
/*function repositionPopup(DivPopup){
	$('#' + DivPopup).popup({
		afteropen: function (event, ui){
			$('#' + DivPopup).popup('reposition', 'positionTo: window');
		}
	});
};*/
//---------------------------------Función para mostrar mensaje si no hay publicaciones
function checkForItems(cont, idDiv){
	
	if(cont == 0){
	switch(idDiv) {
    case "DivMensajeNoticia":
        n = "noticias";
        break;
    case "DivMensajeEventos":
        n = "eventos";
        break;
	case "DivMensajeConv":
        n = "convocatorias ";
        break;
	case "DivMensajeAvisos":
        n = "avisos ";
        break;
}
	var mensaje = "<p>No hay " + n + " registradas por el momento.</p>";
	$("#" + idDiv).html(mensaje);	
	$("#" + idDiv).show();
	
	}else{
		if ($("#" + idDiv).is(':visible')){
			$("#" + idDiv).hide();
		}
	}
};